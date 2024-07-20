import { SizeConstants } from '../../../constants/SizeConstants';
import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxWindowWindow extends QxWidget {

    constructor() {
        super(QxFactory.windowWindow());
        this.setCaption(this.defaultCaption());
        this.setWidth(this.defaultWidth());
        this.setHeight(this.defaultHeight());
        if (this.defaultShow())
            this.show();
        else
            this.hide();
    }

    defaultCaption(): string {
        return 'a Window';
    }

    defaultHeight(): number {
        return SizeConstants.DefaultWindowHeight;
    }

    defaultShow(): boolean {
        return true;
    }

    defaultWidth(): number {
        return SizeConstants.DefaultWindowWidth;
    }

    setCaption(caption: string) {
        this.widget.setCaption(caption);
    }

}
