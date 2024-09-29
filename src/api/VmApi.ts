import { VmApiConstants } from "../constants/VmApiConstants";
import { ActionHandler } from "../handlers/ActionHandler";
import { ResultHandler } from "../handlers/ResultHandler";

export class VmApi {

    static instance: VmApi;

    static getInstance(): VmApi {
        if (!this.instance)
            this.instance = new VmApi;
        return this.instance;
    }

    static getTimestamp(): string {
        return this.getInstance().getVmApiGetTimestamp();
    }

    static getVersion(): string {
        return this.getInstance().getVmApiGetVersion();
    }

    static postEvent(eventName: string, args: any) {
        this.getInstance().postEvent(eventName, args);
    }

    static run(src: string, inputId: number = 0, outputId: number = 0): number {
        return this.getInstance().run(src, inputId, outputId);
    }

    private constructor() {
        const setActionHandlerFn: Function = this.getVmApiSetActionHandlerFn();
        const setResultHandlerFn: Function = this.getVmApiSetResultHandlerFn();
        this.callVmApiFn(setActionHandlerFn, this.handleAction);
        this.callVmApiFn(setResultHandlerFn, this.handleResult);
    }

    callVmApiFn(fn: Function, ...args: any[]): any {
        return fn.call(this.getOpalVmApi(), ...args);
    }

    getOpalVmApi(): any {
        return (window as any).Opal['VmApi'];
    }

    getVmApiRunFn(): Function {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.RUN] : null;
    }

    getVmApiSetActionHandlerFn(): Function {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.SET_ACTION_HANDLER_FN] : null;
    }

    getVmApiSetResultHandlerFn(): Function {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.SET_RESULT_HANDLER_FN] : null;
    }

    getVmApiGetTimestamp(): string {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.GET_TIMESTAMP]() : '---';
    }

    getVmApiGetVersion(): string {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.GET_VERSION]() : '---';
    }

    handleAction(jsonStr: string) {
        if (typeof (jsonStr) === 'string') {
            const data = (window as any).JSON.parse(jsonStr);
            const service = data.service;
            const args = data.args;
            ActionHandler.handleAction(service, args);
        }
    }

    handleResult(...args: any[]) {
        ResultHandler.handleResult(...args);
    }

    postEvent(eventName: string, args: any) {
        const data = { event_name: eventName, args: args };
        const jsonStr = JSON.stringify(data);
        this.getOpalVmApi()[VmApiConstants.POST_EVENT](jsonStr);
    }

    run(src: string, inputId: number, outputId: number): number {
        const runFn: Function = this.getVmApiRunFn();
        if (runFn) {
            const jsonStr: string = this.callVmApiFn(runFn, src, inputId, outputId);
            const data: any = JSON.parse(jsonStr);
            return data.id;
        }
        else
            return -1;
    }

    setAction(src: string, inputId: number, outputId: number) {
        const runFn: Function = this.getVmApiSetActionHandlerFn();
        if (runFn)
            this.callVmApiFn(runFn, src, inputId, outputId);
    }

}
