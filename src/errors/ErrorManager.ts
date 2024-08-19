export class ErrorManager {

    static logError(...msgs: string[]) {
        msgs.unshift('*** error ***');
        console.log.apply(null, msgs);
    }

}
