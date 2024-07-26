import { EventConstants } from '../../../constants/EventConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { EventBus } from '../../../messages/EventBus';
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

    addButtons() {
        this.addButton('Login');
        this.addButton('Clear');
    }

    defaultCaption(): string {
        return 'Login';
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
            case 'clear':
                this.onClear();
                break;
            case 'login':
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
        const passwd = this.loginPanel?.passwordField.getValue();
        if (passwd == 'doorstop') {
            EventBus.dispatch(EventConstants.LoginStatusChanged, { status: EventConstants.StatusLoggedInAsAdmin });
            this.close();
        }
    }

}
