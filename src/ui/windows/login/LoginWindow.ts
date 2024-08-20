import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { ServerConstants } from '../../../constants/ServerConstants';
import { SessionConstants } from '../../../constants/SessionConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { ErrorHandler } from '../../../handlers/ErrorHandler';
import { EventBus } from '../../../messages/EventBus';
import { Server } from '../../../server/Server';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { LoginPanel } from './widgets/LoginPanel';

export class LoginWindow extends AbstractWindow {

    loginPanel?: LoginPanel;

    static getInstance(): LoginWindow {
        if (!this.instance)
            this.instance = new LoginWindow();
        return this.instance;
    }

    static instance: LoginWindow;

    private constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setResizable(false);
        this.loginPanel = new LoginPanel();
        this.add(this.loginPanel);
    }

    addButtonsLeft() {
        this.addButtonLeft(LabelConstants.ButtonLabelLogin);
        this.addButtonLeft(LabelConstants.ButtonLabelClear);
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelLogin;
    }

    defaultAutoDestroy(): boolean {
        return false;
    }

    defaultHeight(): number {
        return SizeConstants.LoginWindowHeight;
    }

    defaultWidth(): number {
        return SizeConstants.LoginWindowWidth;
    }

    defaultShowMaximize(): boolean {
        return false;
    }

    defaultShowMinimize(): boolean {
        return false;
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionLogin:
                this.onLogin();
                break;
            default:
                ErrorHandler.logError(ErrorConstants.LoginWindowOnButtonClick, tag);
                break;
        }
    }

    onClear() {
        this.loginPanel?.clear();
    }

    onLogin() {
        const name: string = (this.loginPanel as LoginPanel).getName();
        const passwd: string = (this.loginPanel as LoginPanel).getPassword();
        const fn: Function = (reply: any) => {
            const response = reply.getResponse();
            const level = response[SessionConstants.ServerResponseLevel];
            switch (level) {
                case ServerConstants.LevelAdmin:
                    EventBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedInAsAdmin });
                    this.close();
                    break;
                case ServerConstants.LevelUser:
                    EventBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedInAsUser });
                    this.close();
                    break;
                default:
                    EventBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedOut });
                    break;
            };
        }
        Server.login(name, passwd, fn);
    }

}
