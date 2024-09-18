import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractPage } from "./AbstractPage";

export class BoardPage extends AbstractPage {
    static instance: BoardPage;

    static getInstance(): BoardPage {
        if (!this.instance)
            this.instance = new BoardPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageBoard);
    }

}
