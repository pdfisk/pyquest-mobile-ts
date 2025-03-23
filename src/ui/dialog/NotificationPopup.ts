import { QxConstants } from '../../constants/QxConstants';
import { QxPopup } from "../../qx/ui/mobile/dialog/QxPopup";

export class NotificationPopup extends QxPopup {
    message: string;
    title: string;

    static open ( title: string, message: string, centered: boolean = true, delay: number = QxConstants.PopupDelay ): NotificationPopup {
        return new NotificationPopup( title, message, centered, delay );
    }

    constructor ( title: string, message: string = '', centered: boolean = false, delay: number = 0 ) {
        super( title, message, centered, delay );
        this.title = title;
        this.message = message;
        this.setModal();
        this.show();
    }

    toString (): string {
        return `a NotificationPopup(${ this.title }, ${ this.message })`;
    }

}
