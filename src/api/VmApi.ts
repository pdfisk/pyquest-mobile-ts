import { IStdOut } from '../interfaces/IStdOut';

export class VmApi {
    static instance: VmApi;

    static getInstance (): VmApi {
        if ( !this.instance )
            this.instance = new VmApi;
        return this.instance;
    }

    static run ( src: string, fn?: Function ) {
        this.getInstance().run( src, fn );
    }

    static setStdOut ( stdOut: IStdOut ) {
        this.getInstance().setStdOut( stdOut );
    }

    run ( src: string, fn?: Function ) {
        ( window as any ).VmApi.run( src, fn );
    }

    setStdOut ( stdOut: IStdOut ) {
        ( window as any ).VmApi.setStdOut( stdOut );
    }


}