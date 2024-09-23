import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { QxButton } from "../../qx/mobile/form/QxButton";

export class ButtonBar extends QxHBox {

    addButton(label: string) {
        const button: QxButton = new QxButton(label);
        this.add(button);
    }

}
