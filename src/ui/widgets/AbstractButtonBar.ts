import { SizeConstants } from '../../constants/SizeConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { AbstractWindow } from '../windows/abstract/AbstractWindow';
import { HPanel } from './HPanel';

export abstract class AbstractButtonBar extends HPanel {
    parentWindow: AbstractWindow

    constructor(parentWindow: AbstractWindow) {
        super();
        this.parentWindow = parentWindow;
    }

    addButton(name: string): QxFormButton {
        const tag: string = this.createTagName(name);
        const fn: Function = () => {
            this.parentWindow.onButtonClick(tag);
        };
        const btn: QxFormButton = QxFormButton.create(name, fn);
        this.widget.add(btn.widget);
        return btn;
    }

    createTagName(name: string): string {
        return (name as any).replaceAll(' ', '_').toLowerCase();
    }

    abstract defaultLayout(): QxAbstractLayout;

    defaultPadding(): number[] {
        return SizeConstants.DefaultWindowButtonBarPadding;
    }

}
