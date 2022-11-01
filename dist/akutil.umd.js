(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.akutil = factory());
})(this, (function () { 'use strict';

    /**
     * 函数防抖
     * @param fn
     * @param ms
     * @returns
     */
    var debounce = function (fn, ms) {
        if (ms === void 0) { ms = 300; }
        var timeoutId;
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () { return fn.apply(_this, args); }, ms);
        };
    };

    /**
     * 节流函数
     * @param {Function} fn
     * @param {number} wait
     * @returns Function
     */
    var throttle = function (fn, wait) {
        if (wait === void 0) { wait = 300; }
        var inThrottle, lastFn, lastTime;
        return function () {
            var context = this, args = arguments;
            if (!inThrottle) {
                fn.apply(context, args);
                lastTime = Date.now();
                inThrottle = true;
            }
            else {
                clearTimeout(lastFn);
                lastFn = setTimeout(function () {
                    if (Date.now() - lastTime > wait) {
                        fn.apply(context, args);
                        lastTime = Date.now();
                    }
                }, Math.max(wait - (Date.now() - lastTime), 0));
            }
        };
    };

    function downloadFileBlob(downloadAjax, params, filename) {
        return downloadAjax(params, {
            responseType: 'blob',
        })
            .then(function (data) {
            // 响应头不是文件流，直接返回
            if (!data.headers['content-disposition']) {
                return Promise.reject(data.data.text());
            }
            var tmp = data.headers['content-disposition'].match(/.*filename=(.*\.(.*))$/);
            var suffix = tmp[2] || 'xls';
            // MIME 类型参考https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
            // xlsx  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
            // xls application/vnd.ms-excel
            var BlobType = suffix === 'xlsx'
                ? {
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;chartset=utf-8',
                }
                : { type: 'application/vnd.ms-excel;charset=utf-8' };
            var blob = new Blob([data.data], BlobType);
            var objectUrl = URL.createObjectURL(blob); // 创建URL
            var link = document.createElement('a');
            link.href = objectUrl;
            link.download =
                filename && tmp[1]
                    ? decodeURIComponent(tmp[1])
                    : "".concat(new Date().getTime(), ".").concat(suffix); // 自定义文件名
            link.click(); // 下载文件
            URL.revokeObjectURL(objectUrl); // 释放内存
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    }
    var downloadFileWithBlob = downloadFileBlob;
    /**
     * @desc 通过打开新窗口下载文件内容
     * @param {string} url
     * @param {function} callback
     */
    function downloadFile(url) {
        window.open(url);
    }
    /**
     * 下载图片
     * @param {string} imgsrc 图片url
     * @param {string} name 图片名称
     * @returns {Promise}
     */
    function downloadImage(imgsrc, name) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute('crossOrigin', 'anonymous');
            image.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                var context = canvas.getContext('2d');
                context === null || context === void 0 ? void 0 : context.drawImage(image, 0, 0, image.width, image.height);
                var url = canvas.toDataURL('image/png');
                var a = document.createElement('a');
                var event = new MouseEvent('click');
                a.download = name || Date.now().toString();
                a.href = url;
                a.dispatchEvent(event);
                resolve();
            };
            image.onerror = reject;
            image.src = imgsrc;
        });
    }

    var Stack = /** @class */ (function () {
        function Stack() {
            this.items = [];
        }
        Stack.prototype.isEmpty = function () {
            return this.items.length === 0;
        };
        Stack.prototype.size = function () {
            return this.items.length;
        };
        Stack.prototype.push = function (data) {
            this.items.push(data);
        };
        Stack.prototype.pop = function () {
            return this.items.pop();
        };
        Stack.prototype.peek = function () {
            if (this.isEmpty())
                return;
            return this.items[this.items.length - 1];
        };
        Stack.prototype.print = function () {
            console.log(this.items);
        };
        return Stack;
    }());

    // 防抖与节流
    var akutil = {
        debounce: debounce,
        throttle: throttle,
        downloadFile: downloadFile,
        downloadFileWithBlob: downloadFileWithBlob,
        downloadImage: downloadImage,
        Stack: Stack,
    };

    return akutil;

}));
//# sourceMappingURL=akutil.umd.js.map
