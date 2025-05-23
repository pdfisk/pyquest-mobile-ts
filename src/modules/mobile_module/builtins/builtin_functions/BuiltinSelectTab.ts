import { Interpreter } from '../../../../vm/Interpreter';
import { AbstractFunction } from '../../../../vm/modules/core/abstract/AbstractFunction';
import { VmProcess } from '../../../../vm/scheduler/core/VmProcess';
import { Scheduler } from '../../../../vm/scheduler/Scheduler';
import { DebugUtil } from '../../../../vm/util/DebugUtil';
import { MobileModuleFunctions } from '../../constants/MobileModuleFunctions';

export class BuiltinSelectTab extends AbstractFunction {
    static instance: BuiltinSelectTab;

    static getInstance (): BuiltinSelectTab {
        if ( !this.instance ) {
            const process = Scheduler.create_dummy_process();
            this.instance = new BuiltinSelectTab(process.interpreter);
        }
        return this.instance;
    }

    call ( interpreter: Interpreter, args: any[] = [] ) {
        DebugUtil.log( 'BuiltinSelectTab' );
    }

    getName (): string {
        return MobileModuleFunctions.SELECT_TAB;
    }

}
