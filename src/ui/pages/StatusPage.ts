import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractPage } from "./AbstractPage";

export class StatusPage extends AbstractPage {
    static instance: StatusPage;

    static getInstance(): StatusPage {
        if (!this.instance)
            this.instance = new StatusPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageStatus);
    }

}
