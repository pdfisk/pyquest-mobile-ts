import { SizeConstants } from "../../../../constants";
import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";
import { QxButton } from "../form/QxButton";

export class QxPopup extends QxWidget {

    constructor(title: string, message: string, centered: boolean, delay: number) {
        super(QxFactory.mobilePopup());
        this.setTitle(title);
        this.setHeightPx(SizeConstants.PopupWidgetHeight);
        const button = new QxButton(message);
        this.addWidget(button);
        if (centered)
            this.positionToCenter();
        if (delay > 0)
            this.hideWithDelay(delay);
        this.setModal();
        this.setHideOnBlockerTap();
        this.show();
    }

    addWidget(widget: QxWidget) {
        this.widget.add(widget.widget);
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
