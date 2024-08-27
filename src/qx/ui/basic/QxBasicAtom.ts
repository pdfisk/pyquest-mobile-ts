import { FontConstants } from "../../../constants/FontConstants";
import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";
import { QxBasicImage } from "./QxBasicImage";
import { QxBasicLabel } from "./QxBasicLabel";

export class QxBasicAtom extends QxWidget {
    basicLabel?: QxBasicLabel;
    basicImage?: QxBasicImage;

    constructor(widget?: any) {
        if (!widget) widget = QxFactory.basicAtom();
        super(widget);
        this.basicImage = undefined;
        this.basicLabel = undefined;
    }

    clear() {
        this.clearIcon();
        this.clearLabel();
    }

    clearIcon() {
        this.basicImage = undefined;
        this.widget.resetIcon();
    }

    clearLabel() {
        this.basicLabel = undefined;
        this.widget.resetLabel();
    }

    getIcon(): string {
        return this.widget.getIcon();
    }

    getLabel(): string {
        return this.widget.getLabel();
    }

    getShow(): string {
        return this.widget.getShow();
    }

    setIcon(icon: string) {
        this.clearLabel();
        this.widget.setIcon(icon);
    }

    setLabel(label: string) {
        console.log('setLabel', `[${label}]`);
        (window as any).X = this;
        if (!this.widget) return;
        this.clearIcon();
        this.widget.setLabel(label);
        if (!this.basicLabel) {
            if (this.widget._getChildren().length > 0) {
                const labelWidget = this.widget._getChildren()[0];
                this.basicLabel = new QxBasicLabel(labelWidget);
                this.basicLabel.setFontFamily(FontConstants.FontFamilyMonospace);
                this.basicLabel.setFontSize(FontConstants.FontSize24Px);
            }
        }
    }

    setShow(show: string) {
        this.widget.setShow(show);
    }

}
