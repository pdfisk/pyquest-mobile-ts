import { IStdOut } from '../../../interfaces/IStdOut';
import { QxWidget } from '../../../qx/ui/core/QxWidget';
import { QxFormButton } from '../../../qx/ui/form/QxFormButton';
import { QxWindowWindow } from '../../../qx/ui/window/QxWindowWindow';
import { ObjectRegistry } from '../../../util/ObjectRegistry';
import { ButtonBar } from '../../widgets/ButtonBar';

export class AbstractWindow extends QxWindowWindow {
    buttonBar: any;
    hasAppeared: boolean = false;
    stdOut?: IStdOut;
    stdOutId: number = -1;

    initialize() {
        super.initialize();
        this.buttonBar = this.defaultButtonBar();
        this.addSouth(this.buttonBar);
        this.addButtonsLeft();
        this.addButtonsRight();
        if (this.defaultAutoDestroy())
            this.setAutoDestroy(true);
    }

    addButtonLeft(label: string): QxFormButton {
        return this.buttonBar.addButtonLeft(label);
    }

    addButtonRight(label: string): QxFormButton {
        return this.buttonBar.addButtonRight(label);
    }

    addButtonsLeft() {
    }

    addButtonsRight() {
    }

    addComboBox() {
    }

    addSplitButtonLeft(label: string, items: string[] = []): any[] {
        return this.buttonBar.addSplitButtonLeft(label, items);
    }

    addSplitButtonRight(label: string, items: string[]): any[] {
        return this.buttonBar.addSplitButtonRight(label, items);
    }

    center() {
        this.widget.center();
    }

    close() {
        this.widget.close();
    }

    defaultAutoDestroy(): boolean {
        return true;
    }

    defaultButtonBar(): ButtonBar {
        return new ButtonBar(this);
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    defaultEnableOnResize(): boolean {
        return true;
    }

    defaultInitialPosition(): number[] {
        return [];
    }

    getStdOut(): IStdOut | undefined {
        return this.stdOut;
    }

    getStdOutId(): number {
        return this.stdOutId;
    }

    initStdOut() {
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
        if (!this.hasAppeared) {
            super.onAppear();
            this.initStdOut();
            this.registerObjects();
            this.moveToInitialPosition();
        }
    }

    onButtonClick(tag: string) {
        console.log('onButtonClick', tag);
    }

    onClose() {
        super.onClose();
        this.unregisterObjects();
    }

    onResize() {
    }

    registerObjects() {
        ObjectRegistry.registerObject(this);
        if (this.stdOut)
            this.registerStdOut();
    }

    registerStdOut() {
        if (this.stdOut instanceof QxWidget)
            this.stdOutId = ObjectRegistry.registerObject(this.stdOut);
    }

    setStdOut(stdOut: IStdOut) {
        this.stdOut = stdOut;
    }

    unregisterObjects() {
        ObjectRegistry.removeId(this.getId());
        if (this.stdOut)
            this.unregisterStdOut();
    }

    unregisterStdOut() {
        ObjectRegistry.removeId(this.stdOutId);
    }

}
