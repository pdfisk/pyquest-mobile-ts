export abstract class QxObject {
    widget: any;
    static idCounter: number = 0;

    constructor(widget: any) {
        this.widget = widget;
        this.setId(this.generateId());
        this.initialize();
    }

    generateId(): string {
        return `${this.getClassName()}-${QxObject.idCounter++}`;
    }

    getId(): string {
        return this.widget.getQxObjectId();
    }

    getClassName(): string {
        return this.widget ? this.widget.classname : this.idClassName();
    }

    idClassName(): string {
        return 'QxObject';
    }

    initialize() {
    }

    setId(id: string) {
        this.widget.setQxObjectId(id);
    }

}
