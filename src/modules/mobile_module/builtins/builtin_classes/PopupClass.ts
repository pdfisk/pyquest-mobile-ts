import { NotificationPopup } from '../../../../ui/dialog/NotificationPopup';
import { BaseType } from '../../../../vm/modules/abstract/base/BaseType';
import { DebugUtil } from '../../../../vm/util/DebugUtil';
import { PopupType } from '../buitlin_types/PopupType';

export class PopupClass {
    notification: NotificationPopup;

    constructor ( title: string, message: string ) {
        this.notification = NotificationPopup.open( title, message );
        DebugUtil.log( 'PopupClass constructor', this.notification );
    }

    getType (): BaseType {
        return PopupType.getInstance();
    }

    toString (): string {
        return 'a Popup';
    }

}
