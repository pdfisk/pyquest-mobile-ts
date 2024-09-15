import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";
import { VisitorsWindow } from "../VisitorsWindow";

export class VisitorsDetailsPanel extends AbstractForm {
    ipAddressField: QxTextField;
    createdAtField: QxTextField;
    idField: QxTextField;
    updatedAtField: QxTextField;
    visitorsWindow: VisitorsWindow;

    constructor(visitorsWindow: VisitorsWindow) {
        super();
        this.ipAddressField = new QxTextField;
        this.createdAtField = new QxTextField;
        this.idField = new QxTextField;
        this.updatedAtField = new QxTextField;
        this.visitorsWindow = visitorsWindow;
    }

    clear() {
        this.ipAddressField.clear();
        this.createdAtField.clear();
        this.idField.clear();
        this.updatedAtField.clear();
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
            this.form.add(this.idField, LabelConstants.FieldLabelId);
            this.form.add(this.updatedAtField, LabelConstants.FieldLabelUpdatedAt);
            this.form.add(this.createdAtField, LabelConstants.FieldLabelCreatedAt);
        }
    }

    setValue(data: any) {
        if (typeof (data.ip_address) !== 'string')
            data.ip_address = '';
        this.ipAddressField.setValue(data.ip_address);
        this.idField.setValue(data.id);
        this.updatedAtField.setValue(data.updated_at);
        this.createdAtField.setValue(data.created_at);
    }

}
