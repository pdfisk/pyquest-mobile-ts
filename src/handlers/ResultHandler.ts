import { TranscriptPanel } from "../ui/widgets/TranscriptPanel";
import { TranscriptWindow } from "../ui/windows/transcript/TranscriptWindow";
import { ObjectRegistry } from "../util/ObjectRegistry";

export class ResultHandler {

    static handleResult(...args: any[]) {
        if (args.length !== 2) return;
        const result: string = args[0];
        const stdOutId: number = args[1];
        const stdOut: any = ObjectRegistry.getId(stdOutId);
        if (stdOut instanceof TranscriptPanel)
            stdOut.pr(result);
        else
            TranscriptWindow.pr(result);
    }

}
