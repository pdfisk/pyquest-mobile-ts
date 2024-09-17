import { ActionConstants } from "../../constants/ActionConstants";
import { ObjectRegistry } from "../../util/ObjectRegistry";

export class HandlerBase {

    getOwner(ownerId: number): any {
        return ObjectRegistry.getId(ownerId);
    }

    // getBoardPanel(ownerId: number): BoardPanel | null {
    //     const owner = this.getOwner(ownerId);
    //     if (owner && ActionConstants.FunctionGetBoardPanel in owner)
    //         return owner[ActionConstants.FunctionGetBoardPanel]();
    //     return null;
    // }

    // getEditorPanel(ownerId: number): EditorPanel | null {
    //     const owner = this.getOwner(ownerId);
    //     if (owner && ActionConstants.FunctionGetEditorPanel in owner)
    //         return owner[ActionConstants.FunctionGetEditorPanel]();
    //     return null;
    // }

    // getTranscriptPanel(ownerId: number): TranscriptPanel | null {
    //     const owner = this.getOwner(ownerId);
    //     if (owner && ActionConstants.FunctionGetTranscriptPanel in owner)
    //         return owner[ActionConstants.FunctionGetTranscriptPanel]();
    //     return null;
    // }

}
