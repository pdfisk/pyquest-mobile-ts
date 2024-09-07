import { ImageConstants } from "../../../constants/ImageConstants";
import { QxBasicImage } from "../../../qx";
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
        this.image = new QxBasicImage(ImageConstants.DesktopClouds);
        this.add(this.image);
    }

}
