import { GlobalDictionary } from '../../vm/core/GlobalDictionary';
import { BaseFunction } from '../../vm/modules/abstract/base/BaseFunction';
import { BaseType } from '../../vm/modules/abstract/base/BaseType';
import { BuiltinSelectTab } from './builtins/builtin_functions/BuiltinSelectTab';
import { PopupType } from './builtins/buitlin_types/PopupType';

export class MobileModule {
    globals: GlobalDictionary;
    static instance: MobileModule;

    static getInstance (): MobileModule {
        if ( !this.instance )
            this.instance = new MobileModule;
        return this.instance;
    }

    constructor () {
        this.globals = GlobalDictionary.getInstance();
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

    install ( builtin: BaseFunction | BaseType ) {
        builtin.install( this.globals );
    }

}
