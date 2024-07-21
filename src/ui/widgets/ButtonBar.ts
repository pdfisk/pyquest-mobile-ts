import { SizeConstants } from '../../constants/SizeConstants';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxHBoxLayout } from '../../qx/ui/layout/QxHBoxLayout';
import { Panel } from './Panel';

export class ButtonBar extends Panel {

  initialize() {
    super.initialize();
    this.setHeight(SizeConstants.DefaultWindowButtonBarHeight);
    this.setBackgroundColor('red');
  }

  addButton(name: string, fn?: Function) {
    console.log('addButton', name);
  }

  defaultLayout(): QxAbstractLayout {
    return new QxHBoxLayout();
  }

}
