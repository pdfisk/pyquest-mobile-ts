import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";
import { VisitorsWindow } from "../VisitorsWindow";

export class VisitorsDetailsPanel extends AbstractForm {
    ipAddressField: QxTextField;
    visitorsWindow: VisitorsWindow;

    constructor(visitorsWindow: VisitorsWindow) {
        super();
        this.ipAddressField = new QxTextField;
        this.visitorsWindow = visitorsWindow;
    }

    clear() {
        this.ipAddressField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getIpAddress(): string {
        return this.ipAddressField.getValue();
    }


    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.ipAddressField, LabelConstants.FieldLabelIpAddress);
        }
    }

    setIpAddress(ipAddress: string) {
        this.ipAddressField.setValue(ipAddress);
    }

}
