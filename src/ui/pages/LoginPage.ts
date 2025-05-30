import { Server } from 'http';
import { ActionConstants } from '../../constants/ActionConstants';
import { EventConstants } from '../../constants/EventConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { SessionConstants } from '../../constants/SessionConstants';
import { MessageBus } from '../../messages/MessageBus';
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxPasswordField } from "../../qx/ui/mobile/form/QxPasswordField";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { DebugUtil } from '../../util/DebugUtil';
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import {ServerConstants} from "../../constants/ServerConstants";

export class LoginPage extends AbstractFormPage {
    usernameField: QxTextField;
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
        this.usernameField = new QxTextField;
        this.passwordField = new QxPasswordField;
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(this.usernameField);
        items.push(this.passwordField);
        names.push(LabelConstants.FieldLabelUserName);
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

    getUserName(): string {
        return this.usernameField.getValue();
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
        this.usernameField.clear();
        this.passwordField.clear();
    }

    onLoginOrLogout() {
        const currentLabel = this.buttonbar.getButtonLabel(LabelConstants.ButtonLabelLogin);
        if (currentLabel === LabelConstants.ButtonLabelLogout) {
            MessageBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedOut });
            return;
        }
        const username: string = this.getUserName();
        const password: string = this.getPassword();
        const fn: Function = (reply: any) => {
            const response = reply.getResponse();
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
        // Server.login(username, password, fn);
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
                DebugUtil.log('LoginPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}
