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
        this.registerPanel = new RegisterPanel();
        this.add(this.registerPanel);
    }

    addButtons() {
        this.addButton('Register');
        this.addButton('Clear');
    }

    defaultCaption(): string {
        return 'Register';
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case 'clear':
                this.onClear();
                break;
            case 'register':
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
    }

}
