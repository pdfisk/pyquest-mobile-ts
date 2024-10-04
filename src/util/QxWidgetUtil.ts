import { QxConstants } from "../constants";
import { QxWidget } from "../qx/mobile/core/QxWidget";

export class QxWidgetUtil {

    static getAllStyles(widget: any): any {
        return widget.getContentElement().getAllStyles();
    }

    static getBoundingRect(widget: any): any {
        return widget.getContentElement().getBoundingClientRect();
    }

    static getTypeScriptWidget(widget: any): QxWidget {
        return widget.getUserData(QxConstants.TsObject);
    }

}
