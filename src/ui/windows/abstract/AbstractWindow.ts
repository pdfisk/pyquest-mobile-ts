import { QxWindowWindow } from '../../../qx/ui/window/QxWindowWindow';
import { ButtonBar } from '../../widgets/ButtonBar';

export class AbstractWindow extends QxWindowWindow {
    buttonBar?: ButtonBar;
    hasAppeared: boolean = false;

    initialize() {
        super.initialize();
        this.buttonBar = new ButtonBar(this);
        this.addSouth(this.buttonBar);
        this.addButtons();
    }

    addButton(label: string) {
        this.buttonBar?.addButton(label);
    }

    addButtons() {
    }

    center() {
        this.widget.center();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    defaultInitialPosition(): number[] {
        return [];
    }

    moveTo(left: number, top: number) {
        this.widget.moveTo(left, top);
    }

    moveToInitialPosition() {
        const initialPosition = this.defaultInitialPosition();
        if (initialPosition.length > 1)
            this.moveTo(initialPosition[0], initialPosition[1]);
        else
            this.center();
    }

    onAppear() {
        super.onAppear();
        if (!this.hasAppeared) {
            this.hasAppeared = true;
            this.moveToInitialPosition();
        }
    }

    onButtonClick(tag: string) {
        console.log('onButtonClick', tag);
    }

}
