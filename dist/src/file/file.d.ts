/**
 * @desc 读取文件流，下载文件
 * @param {Promise} 下载接口ajax
 * @param {Object} 下载参数
 * @param {String} 文件名
 * @returns {Promise} 下载完文件的then
 */
declare function downloadFileBlob(downloadAjax: any): Promise<any>;
declare function downloadFileBlob(downloadAjax: any, params: any): Promise<any>;
declare function downloadFileBlob(downloadAjax: any, params: any, filename: string): Promise<any>;
export declare let downloadFileWithBlob: typeof downloadFileBlob;
/**
 * @desc 通过打开新窗口下载文件内容
 * @param {string} url
 * @param {function} callback
 */
export declare function downloadFile(url: string): void;
/**
 * 下载图片
 * @param {string} imgsrc 图片url
 * @param {string} name 图片名称
 * @returns {Promise}
 */
export declare function downloadImage(imgsrc: string, name?: string): Promise<void>;
export {};
