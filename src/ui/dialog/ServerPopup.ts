import { QxConstants } from '../../constants/QxConstants';
import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";

export class ServerPopup extends QxPopup {

    static open(title: string, message: string, centered: boolean = true, delay: number = QxConstants.PopupDelay): ServerPopup {
        return new ServerPopup(title, message, centered, delay);
    }

    constructor(title: string, message: string = '', centered: boolean = false, delay: number = 0) {
        super(title, message, centered, delay);
        this.setModal();
        this.show();
    }

}
