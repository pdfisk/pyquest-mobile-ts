import { NotificationPopup } from '../../../../ui/dialog/NotificationPopup';
import { Interpreter } from '../../../../vm/Interpreter';
import { AbstractType } from '../../../../vm/modules/core/abstract/AbstractType';
import { StringUtil } from '../../../../vm/util/StringUtil';

export class PopupType extends AbstractType {
    static instance: PopupType;

    static getInstance (): PopupType {
        if ( !this.instance )
            this.instance = new PopupType;
        return this.instance;
    }

    call ( interpreter: Interpreter, args: any[] = [] ) {
        const message = args.length > 0 ? StringUtil.asString( args[0] ) : '<a message>';
        const title = args.length > 1 ? StringUtil.asString( args[1] ) : 'Notification';
        const notification = new NotificationPopup( title, message );
        interpreter.push( notification );
    }

    getName (): string {
        return 'popup';
    }

}
