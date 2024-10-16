import { ImageConstants } from "../constants/ImageConstants";

export class StringUtil {

    static asImagePath(imageFileName: string): string {
        if (!imageFileName.includes('.'))
            imageFileName += '.png';
        return `${ImageConstants.ImagePath}/${imageFileName}`;
    }

    static asPixels(value: number) {
        return `${value}px`;
    }

    static asTag(text: string): string {
        return (text.toLowerCase() as any).replaceAll(' ', '_')
    }

    static format(template: string, ...args: any[]): string {
        return (window as any).qx.lang.String.format(template, args);
    }

    static padSpace(text: string, len: number): string {
        let value: string = text.toString();
        while (value.length < len)
            value = ' ' + value;
        return value;
    }

    static padZero(text: string, len: number): string {
        let value: string = text.toString();
        while (value.length < len)
            value = '0' + value;
        return value;
    }

    static spaces(len: number): string {
        return this.padSpace('', len);
    }

    static tagClose(tag:string):string {
        return `</${tag}>`;
    }

    static tagOpen(tag:string):string {
        return `<${tag}>`;
    }

    static tileMapKey(row: number, column: number): string {
        return `tile-${row}-${column}`;
    }

}
