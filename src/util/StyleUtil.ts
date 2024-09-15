export class StyleUtil {

    static createStyleSpan(text: string, styles: Map<string, string>): string {
        let styleStr = '';
        styles.forEach((value, key) => {
            styleStr += key;
            styleStr += ':';
            styleStr += value;
            styleStr += ';'
        });
        return `<span style="${styleStr}">${text}</span>`;
    }

}
