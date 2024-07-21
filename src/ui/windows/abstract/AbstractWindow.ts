import { QxWindowWindow } from '../../../qx/ui/window/QxWindowWindow';
import { ButtonBar } from '../../widgets/ButtonBar';

export class AbstractWindow extends QxWindowWindow {
    buttonBar?: ButtonBar;

    initialize() {
        super.initialize();
        this.buttonBar = new ButtonBar();
        this.addSouth(this.buttonBar);
        this.addButtons();
    }

    addButton(label: string) {
        this.buttonBar?.addButton(label);
    }

    addButtons() {
    }

}
