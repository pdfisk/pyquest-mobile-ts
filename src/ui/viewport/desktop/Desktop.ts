import { StyleConstants } from "../../../constants";
import { ImageConstants } from "../../../constants/ImageConstants";
import { QxBasicImage } from "../../../qx";
import { DeferredCall } from "../../../util";
import { GrowPanel } from "../../widgets";

export class Desktop extends GrowPanel {
    image: QxBasicImage;
    static instance: Desktop;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Desktop();
        return this.instance;
    }

    constructor() {
        super();
        this.setStyle(StyleConstants.Border, StyleConstants.BorderSlateGray2);
        this.image = new QxBasicImage(ImageConstants.DesktopClouds);
        this.add(this.image);
    }

    setImageSize(width: number, height: number) {
        DeferredCall.schedule(() => {
            this.image.setWidth(width);
            this.image.setHeight(height);
        });
    }

}
