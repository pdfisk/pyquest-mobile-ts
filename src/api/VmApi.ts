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

    static run(src: string, inputId: number, outputId: number) {
        this.getInstance().run(src, inputId, outputId);
    }

    constructor() {
        const setActionHandlerFn: Function = this.getVmApiSetActionHandlerFn();
        const setResultHandlerFn: Function = this.getVmApiSetResultHandlerFn();
        this.callVmApiFn(setActionHandlerFn, this.handleAction);
        this.callVmApiFn(setResultHandlerFn, this.handleResult);
    }

    callVmApiFn(fn: Function, ...args: any[]) {
        fn.call(this.getOpalVmApi(), ...args);
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

    handleAction(...args: any[]) {
        ActionHandler.handleAction(...args);
    }

    handleResult(...args: any[]) {
        ResultHandler.handleResult(...args);
    }

    run(src: string, inputId: number, outputId: number) {
        const runFn: Function = this.getVmApiRunFn();
        if (runFn)
            this.callVmApiFn(runFn, src, inputId, outputId);
    }

    setAction(src: string, inputId: number, outputId: number) {
        const runFn: Function = this.getVmApiSetActionHandlerFn();
        if (runFn)
            this.callVmApiFn(runFn, src, inputId, outputId);
    }

}
