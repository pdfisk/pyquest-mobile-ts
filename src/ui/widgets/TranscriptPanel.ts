import { TextConstants } from "../../constants/TextConstants";
import { IStdOut } from "../../interfaces/IStdOut";
import { TextPanel } from "./TextPanel";

export class TranscriptPanel extends TextPanel implements IStdOut {

    append(text: string): void {
        this.setValue(this.getValue() + text);
    }

    newline(): void {
        this.append(TextConstants.NEWLINE);
    }

    pr(text: string): void {
        this.append(text);
    }

    prn(text: string): void {
        this.pr(text);
        this.newline();
    }

    space(): void {
        this.append(TextConstants.SPACE);
    }

}
