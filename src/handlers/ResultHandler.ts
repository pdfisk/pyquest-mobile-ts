import { TranscriptWindow } from "../ui/windows/transcript/TranscriptWindow";

export class ResultHandler {

    static handleResult(...args: any[]) {
        if (args.length !== 2) return;
        const result: string = args[0];
        const id: number = args[1];
        TranscriptWindow.pr(result);
    }

}
