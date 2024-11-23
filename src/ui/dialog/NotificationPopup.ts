import { QxConstants } from "../../constants";
import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";

export class NotificationPopup extends QxPopup {

    static open(title: string, message: string, centered: boolean = true, delay: number = QxConstants.PopupDelay): NotificationPopup {
        return new NotificationPopup(title, message, centered, delay);
    }

}
