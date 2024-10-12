import { LabelConstants } from "../../constants/LabelConstants";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./AbstractFormPage";

export class HomePage extends AbstractFormPage {
    static instance: HomePage;

    static getInstance(): HomePage {
        if (!this.instance)
            this.instance = new HomePage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageHome);
    }

    createItems(): QxWidget[] {
        const items: QxWidget[] = [];
        items.push(new QxTextField);
        return items;
    }

    createNames(): string[] {
        const names: string[] = [];
        names.push('Text');
        return names;
    }

    onAppear() {
        super.onAppear();
        const items = this.createItems();
        const names = this.createNames();
        this.addItems(items, names);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}
