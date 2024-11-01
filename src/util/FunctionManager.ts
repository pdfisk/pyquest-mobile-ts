import { EventConstants } from "../constants";
import { MessageBus } from "../messages";

export class FunctionManager {

    static init() {
        MessageBus.subscribe(EventConstants.FunctionCall, this.callFunction, this);
    }

    static callFunction(args: any) {
        const data: any[] = args.getData();
        const fn: Function = data[0];
        fn.call(null);
    }

}
