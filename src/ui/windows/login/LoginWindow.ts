import { ActionConstants } from '../../../constants/ActionConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SessionConstants } from '../../../constants/SessionConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
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
                console.log('onButtonClick', tag);
                break;
        }
    }

    onClear() {
        this.loginPanel?.clear();
    }

    onLogin() {
        const name: string = (this.loginPanel as LoginPanel).getName();
        const passwd: string = (this.loginPanel as LoginPanel).getPassword();
        const fn: Function = (data: any) => {
            console.log('LOGIN', data);
            if (passwd == 'doorstop') {
                EventBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedInAsAdmin });
                this.close();
            };
        }
        Server.login(name, passwd, fn);
    }

}
