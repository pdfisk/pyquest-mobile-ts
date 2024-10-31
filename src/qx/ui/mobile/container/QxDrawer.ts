import { QxConstants, SizeConstants } from "../../../../constants";
import { QxFactory } from "../../../factory";
import { QxButton } from "../form/QxButton";
import { QxComposite } from "./QxComposite";

export class QxDrawer extends QxComposite {
    button: QxButton;

    constructor(message: string = '', orientation: string = QxConstants.DrawerOrientionTop) {
        super(QxFactory.mobileDrawer());
        this.setOrientation(orientation);
        this.setTapOffset(SizeConstants.DrawerTapOffset);
        this.setHideOnBack();
        this.setHideOnParentTap();
        this.setSize(SizeConstants.DrawerSize);
        this.button = new QxButton(message);
        this.add(this.button);
    }

    forceHide() {
        this.widget.forceHide();
    }

    getLabel(): string {
        return this.button.getLabel();
    }

    hide() {
        this.forceHide();
    }

    isHidden(): boolean {
        return this.widget.isHidden();
    }

    setHideOnBack(value: boolean = true) {
        this.widget.setHideOnBack(value);
    }

    setHideOnParentTap(value: boolean = true) {
        this.widget.setHideOnParentTap(value);
    }

    setLabel(label: string) {
        this.button.setLabel(label);
    }

    setOrientation(orientation: string) {
        this.widget.setOrientation(orientation);
    }

    setTapOffset(offset: number) {
        this.widget.setTapOffset(offset);
    }

    setSize(value: number) {
        this.widget.setSize(value);
    }

    show() {
        if (this.isHidden())
            super.show();
    }

}
