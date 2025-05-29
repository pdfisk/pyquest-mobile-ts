import {DebugUtil} from "../util/DebugUtil";

export class VmApi {

    static getVmApi(): any {
        return (window as any).VmApi;
    }

    static postEvent(eventName: string, args: any) {
    }

    static run(src: string) {
        DebugUtil.log('VmApi.run', src);
        DebugUtil.setX([this.getVmApi(), this.getVmApi()['$eval_python']]);
        this.getVmApi()['$eval_python'](src, 123);
    }

    static setStdOut(fn: Function) {
        this.getVmApi()['$set_result_handler'](fn);
    }

    static timestamp(): string {
        return this.getVmApi()['$timestamp']();
    }

    static version(): string {
        return this.getVmApi()['$version']();
    }

}
