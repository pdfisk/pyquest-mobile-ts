import { DebugUtil } from '../util/DebugUtil';

export class ErrorHandler {

    static logError(...msgs: string[]) {
        msgs.unshift('*** error ***');
        DebugUtil.log(null, msgs);
    }

}
