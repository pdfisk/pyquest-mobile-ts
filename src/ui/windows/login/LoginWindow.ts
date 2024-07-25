import { TextPanel } from '../../widgets/TextPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class LoginWindow extends AbstractWindow {

    textPanel?: TextPanel;

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
        this.textPanel = new TextPanel();
        this.add(this.textPanel);
    }

    addButtons() {
        this.addButton('Clear');
    }

    defaultCaption(): string {
        return 'Login';
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
