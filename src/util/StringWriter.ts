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

    newline() {
        this.append(TextConstants.NEWLINE);
    }

    pr(text: string, tag: string | null = null) {
        if (tag)
            this.append(StringUtil.tagOpen(tag));
        this.append(text);
        if (tag)
            this.append(StringUtil.tagClose(tag));
    }

    pr_h5(text: string) {
        this.pr(text, StyleConstants.TagH5);
    }

    prn(text: string, tag: string | null = null) {
        this.pr(text, tag);
        this.newline();
    }

    prn_h5(text: string) {
        this.prn(text, StyleConstants.TagH5);
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
