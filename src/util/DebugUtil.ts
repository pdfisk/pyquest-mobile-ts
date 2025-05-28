export class DebugUtil {

    static error(...args: any[]) {
        console.error.apply(null, args);
    }

    static log(...args: any[]) {
        console.log.apply(null, args);
    }

    static setX(...args: any[]) {
        (window as any).X = args;
    }

}
