import { downloadFile, downloadImage } from './file/file';
declare const _default: {
    debounce: (fn: Function, ms?: number) => (this: any, ...args: any[]) => void;
    throttle: (fn: Function, wait?: number) => (this: any) => void;
    downloadFile: typeof downloadFile;
    downloadFileWithBlob: {
        (downloadAjax: any): Promise<any>;
        (downloadAjax: any, params: any): Promise<any>;
        (downloadAjax: any, params: any, filename: string): Promise<any>;
    };
    downloadImage: typeof downloadImage;
};
export default _default;
