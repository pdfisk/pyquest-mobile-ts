import { StyleConstants } from "../../../constants";
import { QxObject } from "../../core";
import { QxFactory } from "../../factory";

export class QxMobileWidget extends QxObject {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
    }

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setHeight(height: string) {
        this.setStyle(StyleConstants.Height, height);
    }

    setStyle(key: string, value: any) {
        if (this.widget._setStyle) {
            this.widget._setStyle(key, value);
        }
    }

    setWidth(width: string) {
        this.setStyle(StyleConstants.Width, width);
    }

}
