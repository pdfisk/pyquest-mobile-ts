import { QxLabel } from "../../qx/ui/mobile/basic/QxLabel";
import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";

export class LoginPopup extends QxPopup {

    static open(title: string, message: string) {
        const label = new QxLabel(title);
        const button = new QxButton(message);
        const popup: LoginPopup = new LoginPopup(label, button);
        popup.show();
    }

}
