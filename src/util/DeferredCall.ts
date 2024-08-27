export class DeferredCall {

    static schedule(fn:Function, context:any=null) {
        (new (window as any).qx.util.DeferredCall(fn, context)).schedule();
    }

}
