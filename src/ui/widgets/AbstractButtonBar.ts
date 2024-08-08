import { LayoutConstants } from '../../constants/LayoutConstants';
import { SizeConstants } from '../../constants/SizeConstants';
import { TextConstants } from '../../constants/TextConstants';
import { QxFactory } from '../../qx/factory/QxFactory';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { QxSplitButton } from '../../qx/ui/form/QxSplitButton';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxHBoxLayout } from '../../qx/ui/layout/QxHBoxLayout';
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

    addButtonListener(btn:any, label:string) {
        const selector = this.createTagName(label);
        btn.addListener('execute', () => {
            this.parentWindow.onButtonClick(selector);
        });
    }

    addSplitButton(label: string, items: string[]): any[] {
        const btns: any = {};
        const menu = QxFactory.menuMenu();
        for (let i = 0; i < items.length; i++) {
            const menuLabel: string = items[i];
            let menuItem;
            if (menuLabel == TextConstants.UNDERSCORE)
                menuItem = QxFactory.menuSeparator();
            else {
                menuItem = QxFactory.menuButton(menuLabel);
                this.addButtonListener(menuItem, menuLabel);
                btns[menuLabel] = menuItem;
            }
            menu.add(menuItem);
        }
        const button = QxFactory.menuSplitButton(label);
        this.addButtonListener(button, label);
        button.setMenu(menu);
        this.widget.add(button);
        return [button, btns];
    }

    createTagName(name: string): string {
        return (name as any).replaceAll(TextConstants.SPACE, TextConstants.UNDERSCORE).toLowerCase();
    }

    abstract defaultAlignment(): string;

    defaultLayout(): QxAbstractLayout {
        const layout: QxAbstractLayout = new QxHBoxLayout();
        layout.setAlignX(this.defaultAlignment());
        layout.setSpacing(LayoutConstants.DefaultWindowButtonBarSpacing);
        return layout;
    }

    defaultPadding(): number[] {
        return SizeConstants.DefaultWindowButtonBarPadding;
    }

}
