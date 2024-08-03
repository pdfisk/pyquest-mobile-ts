import { SizeConstants } from '../../constants/SizeConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { AbstractWindow } from '../windows/abstract/AbstractWindow';
import { ButtonBarLeft } from './ButtonBarLeft';
import { DockPanel } from './DockPanel';

export class ButtonBar extends DockPanel {
  buttonBarLeft: ButtonBarLeft;

  constructor(parentWindow: AbstractWindow) {
    super();
    this.buttonBarLeft = new ButtonBarLeft(parentWindow);
    this.addWest(this.buttonBarLeft);
  }

  initialize() {
    super.initialize();
    this.setHeight(SizeConstants.DefaultWindowButtonBarHeight);
  }

  addButtonLeft(name: string): QxFormButton {
    return this.buttonBarLeft.addButton(name);
  }

}
