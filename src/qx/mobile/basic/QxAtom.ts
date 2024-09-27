import { QxConstants } from "../../../constants";
import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxAtom extends QxWidget {
    imageName: string;
    savedValue: string;

    constructor(widget: any = null) {
        super(widget ? widget : QxFactory.mobileAtom());
        this.imageName = '';
        this.savedValue = '';
    }

    getIconWidget(): any {
        return this.widget.getIconWidget();
    }

    getLabelWidget(): any {
        return this.widget.getLabelWidget();
    }

    getShow(): string {
        return this.widget.getShow();
    }

    hideImage() {
        this.getIconWidget().hide();
    }

    hideText() {
        this.getLabelWidget().hide();
    }

    setIconStyle(key: string, value: string) {
        const widget = this.getIconWidget();
        if (widget)
            widget._setStyle(key, value);
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

    setLabelStyle(key: string, value: string) {
        const widget = this.getLabelWidget();
        if (widget)
            widget._setStyle(key, value);
    }

    setShow(show: string) {
        this.widget.setShow(show);
    }

    setText(text: string) {
        this.setShow(QxConstants.AtomShowText);
        this.setLabel(text);
        this.hideImage();
        this.showText();
    }

    showImage() {
        this.getIconWidget().show();
    }

    showText() {
        this.getLabelWidget().show();
    }

}
