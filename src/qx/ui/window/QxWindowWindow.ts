import { SizeConstants } from '../../../constants/SizeConstants';
import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxAbstractLayout } from '../layout/QxAbstractLayout';
import { QxDockLayout } from '../layout/QxDockLayout';
import { QxGrowLayout } from '../layout/QxGrowLayout';

export class QxWindowWindow extends QxWidget {

    constructor() {
        super(QxFactory.windowWindow());
    }

    initialize() {
        super.initialize();
        this.setCaption(this.defaultCaption());
        this.setContentPadding(this.defaultContentPadding());
        this.setHeight(this.defaultHeight());
        this.setLayout(this.defaultLayout());
        this.setWidth(this.defaultWidth());
        if (this.defaultShow())
            this.show();
        else
            this.hide();
    }

    add(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'center' });
    }

    addSouth(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'south' });
    }

    defaultCaption(): string {
        return 'a Window';
    }

    defaultContentPadding(): number {
        return SizeConstants.DefaultWindowContentPadding;
    }

    defaultHeight(): number {
        return SizeConstants.DefaultWindowHeight;
    }

    defaultLayout(): QxAbstractLayout {
        return new QxDockLayout();
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

    setContentPadding(padding: number) {
        this.widget.setContentPadding(padding);
    }

    setLayout(layout: QxAbstractLayout) {
        this.widget.setLayout(layout.widget);
    }

}
