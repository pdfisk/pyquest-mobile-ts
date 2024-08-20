import { VmApiConstants } from "../constants/VmApiConstants";

export class VmApi {

    static instance: VmApi;

    static getInstance(): VmApi {
        if (!this.instance)
            this.instance = new VmApi;
        return this.instance;
    }

    static run(src: string, inputId: number, outputId: number) {
        this.getInstance().runSrc(src, inputId, outputId);
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

    runSrc(src: string, inputId: number, outputId: number) {
        const runFn: Function = this.getVmApiRunFn();
        if (runFn)
            this.callVmApiFn(runFn, src, inputId, outputId);
    }

}
