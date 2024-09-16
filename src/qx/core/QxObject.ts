import { QxConstants } from "../../constants";

export abstract class QxObject {
    id: number;
    widget: any;
    static idCounter: number = 0;

    constructor(widget: any) {
        this.widget = widget;
        this.id = QxObject.idCounter++;
        // this.setQxId(this.generateQxId());
        // this.widget.setUserData(QxConstants.TsObject, this);
        this.initialize();
    }

    // generateQxId(): string {
    //     return `${this.getClassName()}-${this.id}`;
    // }

    getId(): number {
        return this.id;
    }

    // getQxId(): string {
    //     return this.widget.getQxObjectId();
    // }

    // getClassName(): string {
    //     return this.widget ? this.widget.classname : this.idClassName();
    // }

    // idClassName(): string {
    //     return QxConstants.QxObjectName;
    // }

    initialize() {
    }

    // setQxId(id: string) {
    //     this.widget.setQxObjectId(id);
    // }

}
