import { TextConstants } from "../constants";

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

    pr(text: string) {
        this.append(text);
    }

    prn(text: string) {
        this.pr(text);
        this.newline();
    }

    space() {
        this.append(TextConstants.SPACE);
    }

    asString(): string {
        return this.buffer.join('');
    }

}
