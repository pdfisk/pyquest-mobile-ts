import { QxConstants } from '../constants/QxConstants';
import { QxWidget } from "../qx/ui/mobile/core/QxWidget";

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
