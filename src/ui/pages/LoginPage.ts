import { ActionConstants, EventConstants, ServerConstants, SessionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxPasswordField } from "../../qx/ui/mobile/form/QxPasswordField";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { Server } from "../../server/Server";
import { AbstractFormPage } from "./abstract/AbstractFormPage";

export class LoginPage extends AbstractFormPage {
    nameField: QxTextField;
    passwordField: QxPasswordField;
    static instance: LoginPage;

    static getInstance(): LoginPage {
        if (!this.instance)
            this.instance = new LoginPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageLogin);
        this.nameField = new QxTextField;
        this.passwordField = new QxPasswordField;
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(this.nameField);
        items.push(this.passwordField);
        names.push(LabelConstants.FieldLabelName);
        names.push(LabelConstants.FieldLabelPassword);
        this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelLogin,
            LabelConstants.ButtonLabelClear,
            LabelConstants.ButtonLabelRegister
        ];
    }

    getName(): string {
        return this.nameField.getValue();
    }

    getPassword(): string {
        return this.passwordField.getValue();
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
    }

    onClear() {
        this.nameField.clear();
        this.passwordField.clear();
    }

    onLoginOrLogout() {
        const currentLabel = this.buttonbar.getButtonLabel(LabelConstants.ButtonLabelLogin);
        if (currentLabel === LabelConstants.ButtonLabelLogout) {
            MessageBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedOut });
            return;
        }
        const name: string = this.getName();
        const password: string = this.getPassword();
        const fn: Function = (reply: any) => {
            const response = reply.getResponse();
            console.log('Login response', name, password);
            (window as any).X = response;
            const level = response[SessionConstants.ServerResponseLevel];
            switch (level) {
                case ServerConstants.LevelAdmin:
                    MessageBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedInAsAdmin });
                    break;
                case ServerConstants.LevelUser:
                    MessageBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedInAsUser });
                    break;
                default:
                    MessageBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedOut });
                    break;
            };
        }
        Server.login(name, password, fn);
    }

    onSessionLoggedInAsAdmin() {
        this.buttonbar.setButtonLabel(LabelConstants.ButtonLabelLogin, LabelConstants.ButtonLabelLogout);
        this.showTopMenu();
        MessageBus.dispatch(EventConstants.SessionLoggedInAsAdmin);
    }

    onSessionLoggedInAsUser() {
        this.buttonbar.setButtonLabel(LabelConstants.ButtonLabelLogin, LabelConstants.ButtonLabelLogout);
        this.showTopMenu();
        MessageBus.dispatch(EventConstants.SessionLoggedInAsUser);
    }

    onSessionLoggedOut() {
        this.buttonbar.setButtonLabel(LabelConstants.ButtonLabelLogin, LabelConstants.ButtonLabelLogin);
        this.showTopMenu();
        MessageBus.dispatch(EventConstants.SessionLoggedOut);
    }

    onSessionStatusChanged(message: any) {
        const data: any = message.getData();
        const statusObj: any = data[0];
        const status: string = statusObj.status;
        switch (status) {
            case SessionConstants.SessionLoggedInAsAdmin:
                this.onSessionLoggedInAsAdmin();
                break;
            case SessionConstants.SessionLoggedInAsUser:
                this.onSessionLoggedInAsUser();
                break;
            default:
                this.onSessionLoggedOut();
                break;
        }
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionLogin:
                this.onLoginOrLogout();
                break;
            case ActionConstants.ActionRegister:
                this.showRegister();
                break;
            default:
                console.log('LoginPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}
