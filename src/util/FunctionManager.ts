import { EventConstants } from "../constants";
import { MessageBus } from "../messages";

export class FunctionManager {

    static init() {
        MessageBus.subscribe(EventConstants.FunctionCall, this.callFunction, this);
    }

    static callFunction(args: any, delay: number = 0) {
        const fn: Function = () => {
            const data: any[] = args.getData();
            const fn: Function = data.shift();
            fn.call(null, ...data);
        }
        setTimeout(fn, delay);
    }

}
