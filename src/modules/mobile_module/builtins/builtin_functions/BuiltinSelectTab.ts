import { Interpreter } from '../../../../vm/Interpreter';
import { BaseFunction } from '../../../../vm/modules/abstract/base/BaseFunction';
import { DebugUtil } from '../../../../vm/util/DebugUtil';
import { MobileModuleFunctions } from '../../constants/MobileModuleFunctions';

export class BuiltinSelectTab extends BaseFunction {
    static instance: BuiltinSelectTab;

    static getInstance (): BuiltinSelectTab {
        if ( !this.instance )
            this.instance = new BuiltinSelectTab;
        return this.instance;
    }

    call ( interpreter: Interpreter, args: any[] = [] ) {
        DebugUtil.log( 'BuiltinSelectTab' );
    }

    getName (): string {
        return MobileModuleFunctions.SELECT_TAB;
    }

}
