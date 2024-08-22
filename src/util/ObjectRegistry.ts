export class ObjectRegistry {
    idCounter: number;
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

    static registerObject(obj: any): number {
        return this.getInstance().registerObject(obj);
    }

    static removeId(id: number) {
        this.getInstance().removeId(id);
    }

    constructor() {
        this.idCounter = 0;
        this.objectMap = new Map<number, any>;
    }

    getId(id: number): any {
        return this.objectMap.get(id);
    }

    registerObject(obj: any): number {
        const index = this.idCounter++;
        this.objectMap.set(index, obj);
        return index;
    }

    removeId(id: number) {
        this.objectMap.delete(id);
    }

}
