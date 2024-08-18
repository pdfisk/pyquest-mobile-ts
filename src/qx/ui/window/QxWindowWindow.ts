import { EventConstants } from '../../../constants/EventConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxAbstractLayout } from '../layout/QxAbstractLayout';
import { QxDockLayout } from '../layout/QxDockLayout';

export class QxWindowWindow extends QxWidget {

    constructor() {
        super(QxFactory.windowWindow());
    }

    initialize() {
        super.initialize();
        this.hide();
        this.setCaption(this.defaultCaption());
        this.setContentPadding(this.defaultContentPadding());
        this.setHeight(this.defaultHeight());
        this.setLayout(this.defaultLayout());
        this.setWidth(this.defaultWidth());
        this.setShowMaximize(this.defaultShowMaximize());
        this.setShowMinimize(this.defaultShowMinimize());
        this.addWindowHandlers();
        if (this.defaultShow())
            setTimeout(() => { this.show(); }, 100);
    }

    add(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'center' });
    }

    addSouth(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'south' });
    }

    addWindowHandlers() {
        this.widget.addListener(EventConstants.WindowEventClose, this.onClose, this);
        this.widget.addListener(EventConstants.WindowEventMaximize, this.onMaximize, this);
        this.widget.addListener(EventConstants.WindowEventMinimize, this.onMinimize, this);
        this.widget.addListener(EventConstants.WindowEventRestore, this.onRestore, this);
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

    defaultShowMaximize(): boolean {
        return true;
    }

    defaultShowMinimize(): boolean {
        return true;
    }

    defaultWidth(): number {
        return SizeConstants.DefaultWindowWidth;
    }

    onClose() {
    }

    onMaximize() {
    }

    onMinimize() {
    }

    onRestore() {
    }

    setAutoDestroy(value: boolean) {
        this.widget.setAutoDestroy(value);
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

    setShowMaximize(showMaximize: boolean) {
        this.widget.setShowMaximize(showMaximize);
    }

    setShowMinimize(showMinimize: boolean) {
        this.widget.setShowMinimize(showMinimize);
    }

    setResizable(resizable: boolean) {
        this.widget.setResizable(resizable);
    }

}
