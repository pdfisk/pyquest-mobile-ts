import { SizeConstants } from '../../../constants/SizeConstants';
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
        this.loginPanel = new LoginPanel();
        this.add(this.loginPanel);
    }

    addButtons() {
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

    onButtonClick(tag: string) {
        switch (tag) {
            case 'clear':
                this.onClear();
                break;
            default:
                console.log('onButtonClick', tag);
                break;
        }
    }

    onClear() {
        this.loginPanel?.clear();
    }

}
