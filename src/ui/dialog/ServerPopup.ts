import { QxConstants } from "../../constants";
import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";

export class ServerPopup extends QxPopup {

    static open(title: string, message: string, centered: boolean = true, delay: number = QxConstants.PopupDelay): ServerPopup {
        return new ServerPopup(title, message, centered, delay);
    }

}
