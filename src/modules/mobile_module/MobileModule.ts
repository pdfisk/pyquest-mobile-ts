import { AbstractFunction } from '../../vm/modules/core/abstract/AbstractFunction';
import { AbstractType } from '../../vm/modules/core/abstract/AbstractType';
import { DictClass } from '../../vm/modules/main_module/builtins/builtin_classes/DictClass';
import { MainModule } from '../../vm/modules/main_module/MainModule';
import { BuiltinSelectTab } from './builtins/builtin_functions/BuiltinSelectTab';
import { PopupType } from './builtins/buitlin_types/PopupType';

export class MobileModule {
    globals: DictClass;
    static instance: MobileModule;

    static getInstance (): MobileModule {
        if ( !this.instance )
            this.instance = new MobileModule;
        return this.instance;
    }

    constructor () {
        this.globals = MainModule.getGlobalNameSpace();
        this.initializeBuiltins();
        this.initializeGlobals();
    }

    initializeBuiltins () {
        // functions
        this.install( BuiltinSelectTab.getInstance() );
       // types
        this.install( PopupType.getInstance() );
    }

    initializeGlobals () {
    }

    install ( builtin: AbstractFunction | AbstractType ) {
        builtin.install( this.globals );
    }

}
