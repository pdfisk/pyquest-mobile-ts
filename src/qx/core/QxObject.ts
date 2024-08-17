export abstract class QxObject {
    widget: any;
    static idCounter: number = 0;

    constructor(widget: any) {
        this.widget = widget;
        this.setId(this.generateId());
        this.initialize();
    }

    generateId(): string {
        return `${this.idClassName()}-${QxObject.idCounter++}`;
    }

    getId(): string {
        return this.widget.getQxObjectId();
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
