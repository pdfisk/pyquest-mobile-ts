import { Interpreter } from '../../../../vm/Interpreter';
import { BaseType } from '../../../../vm/modules/abstract/base/BaseType';
import { StringUtil } from '../../../../vm/shared/util/StringUtil';

export class PopupType extends BaseType {
    static instance: PopupType;

    static getInstance (): PopupType {
        if ( !this.instance )
            this.instance = new PopupType;
        return this.instance;
    }

    call ( interpreter: Interpreter, args: any[] = [] ) {
        const title = args.length > 0 ? StringUtil.asString( args[0] ) : 'Popup';
        interpreter.push( title );
    }

    getName (): string {
        return 'popup';
    }

}
