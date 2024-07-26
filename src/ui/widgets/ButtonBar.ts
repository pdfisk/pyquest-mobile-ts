import { ColorConstants } from '../../constants/ColorConstants';
import { SizeConstants } from '../../constants/SizeConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxHBoxLayout } from '../../qx/ui/layout/QxHBoxLayout';
import { AbstractWindow } from '../windows/abstract/AbstractWindow';
import { Panel } from './Panel';

export class ButtonBar extends Panel {
  parentWindow: AbstractWindow

  constructor(parentWindow: AbstractWindow) {
    super();
    this.parentWindow = parentWindow;
  }

  initialize() {
    super.initialize();
    this.setHeight(SizeConstants.DefaultWindowButtonBarHeight);
    this.setBackgroundColor(ColorConstants.ButtonBarBackground);
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

  defaultLayout(): QxAbstractLayout {
    const layout: QxAbstractLayout = new QxHBoxLayout();
    layout.setSpacing(SizeConstants.DefaultWindowButtonBarSpacing);
    return layout;
  }

  defaultPadding(): number[] {
    return SizeConstants.DefaultWindowButtonBarPadding;
  }

}
