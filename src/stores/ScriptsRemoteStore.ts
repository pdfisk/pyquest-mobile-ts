import {AbstractStore} from "./abstract/AbstractStore";

export class ScriptsRemoteStore extends AbstractStore {
    static instance: ScriptsRemoteStore;

    constructor() {
        super();
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new ScriptsRemoteStore();
        return this.instance;
    }
}
