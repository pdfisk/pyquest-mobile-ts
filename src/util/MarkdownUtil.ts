export class MarkdownUtil {
    converter: any;
    static instance: MarkdownUtil;

    static convertMarkdown(markdown: string): string {
        return this.getInstance().convertMarkdown(markdown);
    }

    static getInstance(): MarkdownUtil {
        if (!this.instance)
            this.instance = new MarkdownUtil;
        return this.instance;
    }

    private constructor() {
        this.converter = new (window as any).showdown.Converter;
    }

    convertMarkdown(markdown: string): string {
        return this.converter.makeHtml(markdown);
    }

}
