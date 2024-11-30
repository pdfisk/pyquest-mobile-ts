import { SizeConstants } from "../../../../constants";
import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";
import { QxButton } from "../form/QxButton";

export class QxPopup extends QxWidget {

    constructor(title: string, message: string = '', centered: boolean = false, delay: number = 0) {
        super(QxFactory.mobilePopup());
        this.setTitle(title);
        this.setHeightPx(SizeConstants.PopupWidgetHeight);
        this.add(this.getLabelOrButton(message));
        if (centered)
            this.positionToCenter();
        if (delay > 0)
            this.hideWithDelay(delay);
        this.setHideOnBlockerTap();
    }

    add(child: QxWidget) {
        this.widget.add(child.widget);
    }

    getLabelOrButton(message: string): QxWidget {
        return new QxButton(message);
    }

    hideWithDelay(time: number) {
        this.widget.hideWithDelay(time);
    }

    placeTo(left: number, top: number) {
        this.widget.placeTo(left, top);
    }

    positionToCenter() {
        this.widget._positionToCenter();
    }

    setAnchor(anchor: QxWidget) {
        this.widget.setAnchor(anchor.widget);
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
