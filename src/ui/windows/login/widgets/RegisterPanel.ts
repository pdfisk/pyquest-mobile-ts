import { SizeConstants } from "../../../../constants/SizeConstants";
import { QxBasicLabel } from "../../../../qx/ui/basic/QxBasicLabel";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { QxAbstractLayout } from "../../../../qx/ui/layout/QxAbstractLayout";
import { QxGridLayout } from "../../../../qx/ui/layout/QxGridLayout";
import { AbstractPanel } from "../../../widgets/AbstractPanel";

export class RegisterPanel extends AbstractPanel {
    passwordField: QxTextField;
    userField: QxTextField;

    constructor() {
        super();
        this.passwordField = new QxTextField();
        this.userField = new QxTextField();
    }

    initialize() {
        super.initialize();
        this.setPadding([15]);
    }

    clear() {
        this.passwordField.clear();
        this.userField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    defaultLayout(): QxAbstractLayout {
        const layout = new QxGridLayout();
        layout.setColumnWidth(0, SizeConstants.LoginPanelColZeroWidth);
        layout.setColumnWidth(1, SizeConstants.LoginPanelColOneWidth);
        layout.setSpacingX(SizeConstants.LoginPanelSpacingX);
        layout.setSpacingY(SizeConstants.LoginPanelSpacingY);
        return layout;
    }

    onAppear() {
        const nameLabel = new QxBasicLabel('Name');
        const passwordLabel = new QxBasicLabel('Password');
        this.addRowColumn(nameLabel, 0, 0);
        this.addRowColumn(this.userField, 0, 1);
        this.addRowColumn(passwordLabel, 1, 0);
        this.addRowColumn(this.passwordField, 1, 1);
    }

}
