import { QxConstants } from "../../constants";
import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";

export class LoginPopup extends QxPopup {

    static open(title: string, message: string, centered: boolean = true, delay: number = QxConstants.PopupDelay): LoginPopup {
        return new LoginPopup(title, message, centered, delay);
    }

}
