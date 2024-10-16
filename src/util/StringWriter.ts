import { StyleConstants, TextConstants } from "../constants";
import { StringUtil } from "./StringUtil";

export class StringWriter {
    buffer: string[];

    constructor() {
        this.buffer = [];
    }

    append(text: string) {
        this.buffer.push(text);
    }

    closeTag( tag:string) {
        this.append(StringUtil.tagClose(tag));
    }

    closeTagA() {
        this.closeTag(StyleConstants.TagA);
    }

    equal() {
        this.append(TextConstants.EQUAL);
    }

    newline() {
        this.append(TextConstants.NEWLINE);
    }

    openTag( tag:string,  attributes: string[] = []) {
        this.append(StringUtil.tagOpen(tag, attributes));
    }

    openTagA(attributes: string[] = []) {
        this.openTag(StyleConstants.TagA);
    }

    pr(text: string, tag: string | null = null, attributes: string[] = []) {
        if (tag)
            this.openTag(tag, attributes);
        this.append(text);
        if (tag)
            this.closeTag(tag);
    }

    pr_h5(text: string, attributes: string[] = []) {
        this.pr(text, StyleConstants.TagH5, attributes);
    }

    prn(text: string, tag: string | null = null, attributes: string[] = []) {
        this.pr(text, tag, attributes);
        this.newline();
    }

    prn_h5(text: string, attributes: string[] = []) {
        this.prn(text, StyleConstants.TagH5, attributes);
    }

    prn_p(text: string) {
        this.prn(text, StyleConstants.TagP);
    }

    space() {
        this.append(TextConstants.SPACE);
    }

    asString(): string {
        return this.buffer.join('');
    }

}
