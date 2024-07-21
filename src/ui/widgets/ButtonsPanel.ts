import { SizeConstants } from '../../constants/SizeConstants';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxHBoxLayout } from '../../qx/ui/layout/QxHBoxLayout';
import { Panel } from './Panel';

export class ButtonsPanel extends Panel {

  initialize() {
    super.initialize();
    this.setHeight(SizeConstants.DefaultWindowButtonBarHeight);
  }

  addButton(name: string, fn?: Function) {
    console.log('addButton', name);
  }

  defaultLayout(): QxAbstractLayout {
    return new QxHBoxLayout();
  }

}
