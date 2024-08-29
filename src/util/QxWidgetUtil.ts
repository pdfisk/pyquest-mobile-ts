import { QxBasicAtom } from "../qx/ui/basic/QxBasicAtom";;

export class QxWidgetUtil {

    static getAllStyles(widget: any): any {
        return widget.getContentElement().getAllStyles();
    }

}
