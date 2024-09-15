export class StringUtil {

    static format(template: string, ...args: any[]): string {
        return (window as any).qx.lang.String.format(template, args);
    }

    static padZero(text: string, len: number): string {
        let value: string = text.toString();;
        while (value.length < len)
            value = '0' + value;
        return value;
    }

}
