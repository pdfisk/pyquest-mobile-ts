import { TranscriptPage } from "../ui/pages/TranscriptPage";

export class ResultHandler {

    static handleResult(...args: any[]) {
        if (args.length === 0) return;
        const text = args[0];
        if (text.length > 0)
            TranscriptPage.prn(text);
    }

}
