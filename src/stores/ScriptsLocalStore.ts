import {AbstractStore} from "./abstract/AbstractStore";

export class ScriptsLocalStore extends AbstractStore {
    static instance: ScriptsLocalStore;

    constructor() {
        super();
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new ScriptsLocalStore();
        return this.instance;
    }
}
