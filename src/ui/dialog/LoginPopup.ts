import { QxLabel } from "../../qx/ui/mobile/basic/QxLabel";
import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";

export class LoginPopup extends QxPopup {

    static open(title: string, message: string) {
        console.log('LoginPopup open', title, message);
        const popup = new (window as any).qx.ui.mobile.dialog.Popup;
        popup.setTitle(title);
        const button = new (window as any).qx.ui.mobile.form.Button(message);
        popup.add(button);
        popup._positionToCenter();
        popup.setModal(true);
        popup.setHideOnBlockerTap(true);
        popup.hideWithDelay(3000);
        popup.show();
        // const label = new QxLabel(title);
        // const button = new QxButton(message);
        // const popup: LoginPopup = new LoginPopup(label, button);
        // popup.show();
    }

}
