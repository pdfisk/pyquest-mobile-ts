import { SizeConstants } from "../../../constants";
import { QxFactory } from "../../factory";
import { QxLabel } from "../basic/QxLabel";
import { QxCard } from "../layout/QxCard";
import { QxComposite } from "./QxComposite";

export class QxDrawer extends QxComposite {

    constructor(message: string, orientation: string) {
        super(QxFactory.mobileDrawer());
        this.setLayout(new QxCard);
        this.setOrientation(orientation);
        this.setTapOffset(SizeConstants.DrawerTapOffset);
        this.addLabel(message);
    }

    addLabel(message: string) {
        const label = new QxLabel(message);
        this.add(label);
    }

    setOrientation(orientation: string) {
        this.widget.setOrientation(orientation);
    }

    setTapOffset(offset: number) {
        this.widget.setTapOffser(offset);
    }

}
