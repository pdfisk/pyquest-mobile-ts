import { QxFactory } from "../../../factory";
import { QxLabel } from "../basic/QxLabel";
import { QxWidget } from "../core/QxWidget";
import { QxButton } from "../form/QxButton";

export class QxPopup extends QxWidget {

    constructor(label: QxLabel, button: QxButton, delay: number = 3000) {
        super(QxFactory.mobilePopup(button, label));
        this.setHeightPx(75);
        this.widget._positionToCenter();
        this.widget.show();
        // this.setHideOnBlockerTap();
        // this.setModal();
        (window as any).X = this;
        // this.hideWithDelay(delay);
    }

    addWidget(widget: QxWidget) {
        this.widget.add(widget.widget);
    }

    handlesOnAppear(): boolean {
        return true;
    }

    hideWithDelay(time: number) {
        this.widget.hideWithDelay(time);
    }

    onAppear() {
        console.log('QxPopup onAppear');
        super.onAppear();
        this.positionToCenter();
    }

    placeTo(left:number, top:number) {
        this.widget.placeTo(left, top);
    }

    positionToCenter() {
        const boundingRect = this.getBoundingRect();
        const width = boundingRect.width;
        const height = boundingRect.height;
        const windowWidth = (window as any).innerWidth;
        const windowHeight = (window as any).innerHeight;
        const posTop = (windowHeight - height) / 2;
        const posLeft = (windowWidth - width)/2;
        this.placeTo(posLeft, posTop);
    }

    setHideOnBlockerTap(value: boolean = true) {
        this.widget.setHideOnBlockerTap(value);
    }

    setModal(value: boolean = true) {
        this.widget.setModal(value);
    }

    setTitle(label: string) {
        return this.widget.setTitle(label);
    }

}
