export abstract class QxObject {
    widget: any;

    constructor(widget: any) {
        this.widget = widget;
        this.initialize();
    }

    initialize() {
    }

}
