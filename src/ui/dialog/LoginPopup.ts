import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";

export class LoginPopup extends QxPopup {

    static show() {
        const popup = new this;
        popup.show();
    }

    initialize() {
        super.initialize();
        this.setTitle('Login');
    }

}
