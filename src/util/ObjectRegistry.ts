import { QxWidget } from "../qx/ui/mobile/core/QxWidget";

export class ObjectRegistry {
    objectMap: Map<number, any>;
    static instance: ObjectRegistry;

    static getId(id: number): any {
        return this.getInstance().getId(id);
    }

    static getInstance(): ObjectRegistry {
        if (!this.instance)
            this.instance = new ObjectRegistry;
        return this.instance;
    }

    static registerObject(obj: QxWidget): number {
        return this.getInstance().registerObject(obj);
    }

    static removeId(id: number) {
        this.getInstance().removeId(id);
    }

    constructor() {
        this.objectMap = new Map<number, any>;
    }

    getId(id: number): any {
        return this.objectMap.get(id);
    }

    registerObject(obj: QxWidget): number {
        const index = obj.getId();
        this.objectMap.set(index, obj);
        return index;
    }

    removeId(id: number) {
        this.objectMap.delete(id);
    }

}
