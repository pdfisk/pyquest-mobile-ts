import { SizeConstants } from "../../../../constants";
import { QxFactory } from "../../../factory";
import { QxButton } from "../form/QxButton";
import { QxCard } from "../layout/QxCard";
import { QxComposite } from "./QxComposite";

export class QxDrawer extends QxComposite {

    constructor(message: string, orientation: string) {
        super(QxFactory.mobileDrawer());
        this.setLayout(new QxCard);
        this.setOrientation(orientation);
        this.setTapOffset(SizeConstants.DrawerTapOffset);
        this.setHideOnBack();
        this.setHideOnParentTap();
        this.setSize(SizeConstants.DrawerSize);
        this.addButton(message);
        this.show();
    }

    addButton(message: string) {
        const button = new QxButton(message);
        this.add(button);
        button.show();
    }

    setHideOnBack(value:boolean = true) {
        this.widget.setHideOnBack(value);
    }

    setHideOnParentTap(value:boolean = true) {
        this.widget.setHideOnParentTap(value);
    }

    setOrientation(orientation: string) {
        this.widget.setOrientation(orientation);
    }

    setTapOffset(offset: number) {
        this.widget.setTapOffset(offset);
    }

    setSize(value:number) {
        this.widget.setSize(value);
    }

}
