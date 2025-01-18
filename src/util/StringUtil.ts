import { StyleConstants, TextConstants } from "../constants";
import { ImageConstants } from "../constants/ImageConstants";

export class StringUtil {

    static adjustHrefValue(value: string): string {
        if (value.startsWith(StyleConstants.Http) || value.startsWith(StyleConstants.Https))
            return value;
        return `${StyleConstants.Https}${TextConstants.COLON}${TextConstants.DOUBLE_SLASH}${value}`;
    }

    static asImagePath(imageFileName: string): string {
        if (!imageFileName.includes('.'))
            imageFileName += '.png';
        return `${ImageConstants.ImagePath}/${imageFileName}`;
    }

    static asPixels(value: number) {
        return `${value}px`;
    }

    static asString(x: any): string {
        return `${x}`;
    }

    static asTag(text: string): string {
        return (text.toLowerCase() as any).replaceAll(' ', '_')
    }

    static format(template: string, ...args: any[]): string {
        return (window as any).qx.lang.String.format(template, args);
    }

    static fromEncodedPassword(encodedPassword: string): string {
        return atob(this.reverseString(encodedPassword));
    }

    static inDoubleQuotes(text: string) {
        return `${TextConstants.DOUBLE_QUOTE}${text}${TextConstants.DOUBLE_QUOTE}`;
    }

    static padSpace(text: string, len: number = 1): string {
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

    static reverseString(aString: string): string {
        return aString.split('').reverse().join('');
    }

    static space(len: number = 1): string {
        return this.padSpace('', len);
    }

    static tagClose(tag: string): string {
        return `</${tag}>`;
    }

    static tagOpen(tag: string, attributes: string[] = []): string {
        let result: string = `<${tag}`;
        if (attributes.length > 0 && attributes[0].startsWith(StyleConstants.AttributeHref))
            attributes.push(`${StyleConstants.AttributeTarget}${TextConstants.COLON}${StyleConstants.Blank}`);
        attributes.forEach((attribute) => {
            const parts = attribute.split(TextConstants.EQUAL);
            if (parts.length == 2) {
                const name = parts[0];
                let value = parts[1];
                if (name == StyleConstants.AttributeHref)
                    value = this.adjustHrefValue(value);
                result += this.space();
                result += name;
                result += TextConstants.EQUAL;
                result += this.inDoubleQuotes(value);
            }
        });
        return `${result}>`;
    }

    static tileMapKey(row: number, column: number): string {
        return `tile-${row}-${column}`;
    }

    static toEncodedPassword(unencodedPassword: string): string {
        return this.reverseString(btoa(unencodedPassword));
    }

}
