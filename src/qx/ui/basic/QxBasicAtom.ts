import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicAtom extends QxWidget {

    constructor() {
        super(QxFactory.basicAtom());
    }

    clear() {
        this.setIcon('');
        this.setLabel('');
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
        this.widget.setIcon(icon);
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

    setShow(show: string) {
        this.widget.setShow(show);
    }

}
