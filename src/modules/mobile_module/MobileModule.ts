import { Interpreter } from '../../vm/Interpreter';
import { AbstractModule } from '../../vm/modules/core/abstract/AbstractModule';
import { DictClass } from '../../vm/modules/main_module/builtins/builtin_classes/DictClass';
import { MainModule } from '../../vm/modules/main_module/MainModule';
import { Scheduler } from '../../vm/scheduler/Scheduler';
import { BuiltinSelectTab } from './builtins/builtin_functions/BuiltinSelectTab';
import { PopupType } from './builtins/builtin_types/PopupType';
import { MobileModuleAttributes } from './constants/MobileModuleAttributes';

export class MobileModule extends AbstractModule {

    static instance: MobileModule;

    static getInstance(interpreter?: Interpreter): MobileModule {
        if (!this.instance) {
            if (!interpreter)
                interpreter = Scheduler.get_dummy_interpreter();
            this.instance = new MobileModule( interpreter );
        }
        return this.instance;
    }

    getName(): string {
        return MobileModuleAttributes.__NAME__;
    }

    getNameSpace(): DictClass {
        return MainModule.getInstance(this.interpreter).getNameSpace();
    }

    initializeBuiltins () {
        // functions
        this.installBuiltin( BuiltinSelectTab.getInstance() );
       // types
        this.installBuiltin( PopupType.getInstance() );
    }

}
