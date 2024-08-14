import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractPanel } from "../../../widgets/AbstractPanel";
import { UsersWindow } from "../UsersWindow";

export class DetailsPanel extends AbstractPanel {
    passwordField: QxTextField;
    userField: QxTextField;
    usersWindow: UsersWindow;

    constructor(usersWindow: UsersWindow) {
        super();
        this.passwordField = new QxTextField();
        this.userField = new QxTextField();
        this.usersWindow = usersWindow;
    }

    clear() {
        this.passwordField.clear();
        this.userField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getName(): string {
        return this.userField.getValue();
    }

    getPassword(): string {
        return this.passwordField.getValue();
    }

    // onAppear() {
    //     super.onAppear();
    //     this.add(this.userField, LabelConstants.FieldLabelName);
    //     this.add(this.passwordField, LabelConstants.FieldLabelPassword);
    // }

    setName(value: string) {
        this.userField.setValue(value);
    }

    setPassword(value: string) {
        this.passwordField.setValue(value);
    }

}
