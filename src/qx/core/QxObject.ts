import { QxConstants } from "../../constants";
import { QxWidgetUtil } from '../../util/QxWidgetUtil';
import { QxWidget } from "../ui/mobile/core/QxWidget";

export abstract class QxObject {
    id: number;
    widget: any;
    static idCounter: number = 0;

    constructor(widget: any) {
        this.widget = widget;
        this.id = QxObject.idCounter++;
        if (typeof (this.widget.setUserData) === 'function')
            this.widget.setUserData(QxConstants.TsObject, this);
        this.initialize();
    }

    getId(): number {
        return this.id;
    }

    getTypeScriptWidget(): QxWidget {
        return QxWidgetUtil.getTypeScriptWidget(this.widget);
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
