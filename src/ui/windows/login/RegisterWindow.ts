import { ActionConstants } from '../../../constants/ActionConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { Server } from '../../../server/Server';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { RegisterPanel } from './widgets/RegisterPanel';

export class RegisterWindow extends AbstractWindow {

    registerPanel?: RegisterPanel;

    static getInstance(): RegisterWindow {
        if (!this.instance)
            this.instance = new RegisterWindow();
        return this.instance;
    }

    static instance: RegisterWindow;

    private constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setResizable(false);
        this.registerPanel = new RegisterPanel();
        this.add(this.registerPanel);
    }

    addButtonsLeft() {
        this.addButtonLeft(LabelConstants.ButtonLabelRegister);
        this.addButtonLeft(LabelConstants.ButtonLabelClear);
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelRegister;
    }

    defaultHeight(): number {
        return SizeConstants.RegisterWindowHeight;
    }

    defaultWidth(): number {
        return SizeConstants.RegisterWindowWidth;
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
            case ActionConstants.ActionRegister:
                this.onRegister();
                break;
            default:
                console.log('onButtonClick', tag);
                break;
        }
    }

    onClear() {
        this.registerPanel?.clear();
    }

    onRegister() {
        const name: string = (this.registerPanel as RegisterPanel).getName();
        const passwd: string = (this.registerPanel as RegisterPanel).getPassword();
        const fn: Function = (data: any) => {
            console.log('REGISTER', data);
            this.close();
        };
        Server.register(name, passwd, fn);
    }

}
