import { SizeConstants } from "../../constants";
import { QxForm } from "../../qx/ui/mobile/form/QxForm";
import { QxSingle } from "../../qx/ui/mobile/form/renderer/QxSingle";
import { AbstractPage } from "./AbstractPage";

export abstract class AbstractFormPage extends AbstractPage {
    form: QxForm;
    single: QxSingle;

    protected constructor() {
        super();
        this.form = new QxForm;
        this.single = new QxSingle;
    }

    addContent() {
        this.addContentWidget(this.single);
    }

    isContentReady(): boolean {
        return this.form instanceof QxForm;
    }

    resizeWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.setFormHeight(adjustedHeight - SizeConstants.TextPanelHeightAdjust);
    }

    setFormHeight(adjustedHeight: number) {
        this.single?.setHeightPx(adjustedHeight);
    }

}
