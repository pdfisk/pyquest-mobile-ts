export class QxWidgetUtil {

    static getAllStyles(widget: any): any {
        return widget.getContentElement().getAllStyles();
    }

    static getBoundingRect(widget: any): any {
        return widget.getContentElement().getBoundingClientRect();
    }

}
