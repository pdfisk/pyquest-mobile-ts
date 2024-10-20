import { VmApiConstants } from "../constants/VmApiConstants";
import { ActionHandler } from "../handlers/ActionHandler";
import { ResultHandler } from "../handlers/ResultHandler";
import { Toast } from "../ui/widgets/Toast";

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
        return this.getInstance().run_with_toast(src, inputId, outputId);
    }

    static runCompiled(compiledCodeObjectJson: string, inputId: number = 0, outputId: number = 0): any {
        return this.getInstance().run_compiled(compiledCodeObjectJson, inputId, outputId);
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

    compile_to_json(src: string): string | null {
        const compileFn: Function = this.getVmApiCompileToJsonFn();
        if (compileFn)
            return this.callVmApiFn(compileFn, src);
        return null;
    }

    getOpalVmApi(): any {
        return (window as any).Opal['VmApi'];
    }

    getVmApiCompileToJsonFn(): Function {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.COMPILE_TO_JSON] : null;
    }

    getVmApiRunFn(): Function {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.RUN] : null;
    }

    getVmApiRunCompiledFn(): Function {
        const vmApi: any = this.getOpalVmApi();
        return vmApi ? vmApi[VmApiConstants.RUN_COMPILED] : null;
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

    run_compiled(compiledObjectJson: string, inputId: number, outputId: any) {
        const runCompiledFn: Function = this.getVmApiRunCompiledFn();
        if (runCompiledFn) {
            const resultJsonStr = this.callVmApiFn(runCompiledFn, compiledObjectJson);
            return JSON.parse(resultJsonStr);
        }
        return null;
    }

    run_with_toast(src: string, inputId: number, outputId: number): any {
        const userFn_1 = (toast: Toast) => {
            return this.compile_to_json(src);
        };
        const userFn_2 = (toast: Toast) => {
            const compiledObjectJson = toast.userResult_1;
            if (!compiledObjectJson) return null;
            const runCompiledFn: Function = this.getVmApiRunCompiledFn();
            console.log('run_with_toast');
            (window as any).X = [runCompiledFn, compiledObjectJson];
            if (runCompiledFn) {
                const resultJsonStr = this.callVmApiFn(runCompiledFn, compiledObjectJson);
                return JSON.parse(resultJsonStr);
            }
            return null;
        };
        Toast.showNoClose('Compiling...', userFn_1, userFn_2);
        return -1;
    }

    setAction(src: string, inputId: number, outputId: number) {
        const runFn: Function = this.getVmApiSetActionHandlerFn();
        if (runFn)
            this.callVmApiFn(runFn, src, inputId, outputId);
    }

}
