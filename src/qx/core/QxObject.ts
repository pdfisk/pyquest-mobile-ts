export abstract class QxObject {
    id: number;
    widget: any;
    static idCounter: number = 0;

    constructor(widget: any) {
        this.widget = widget;
        this.id = QxObject.idCounter++;
        this.initialize();
    }

    getId(): number {
        return this.id;
    }

    initialize() {
    }

}
