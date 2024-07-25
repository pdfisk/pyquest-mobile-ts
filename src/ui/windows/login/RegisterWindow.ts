import { TextPanel } from '../../widgets/TextPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class RegisterWindow extends AbstractWindow {

    textPanel?: TextPanel;

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
        this.textPanel = new TextPanel();
        this.add(this.textPanel);
    }

    addButtons() {
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
            default:
                console.log('onButtonClick', tag);
                break;
        }
    }

    onClear() {
        this.textPanel?.clear();
    }

}
