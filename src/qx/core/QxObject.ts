import { QxConstants } from "../../constants";
import { QxWidget } from "../mobile/core/QxWidget";

export abstract class QxObject {
    id: number;
    widget: any;
    static idCounter: number = 0;

    constructor(widget: any) {
        this.widget = widget;
        this.id = QxObject.idCounter++;
        // this.widget.setUserData(QxConstants.TsObject, this);
        if (typeof(this.widget.setUserData) !== 'function')
            console.log(this.widget.classname);
        this.initialize();
    }

    getId(): number {
        return this.id;
    }

    getTypeScriptWidget():QxWidget {
        return this.widget.getUserData(QxConstants.TsObject);
    }

    hide() {
        this.widget.hide();
    }

    initialize() {
    }

    show(data: any = null) {
        this.widget.show(data);
    }

}
