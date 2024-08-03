import { SizeConstants } from '../../constants/SizeConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { AbstractWindow } from '../windows/abstract/AbstractWindow';
import { ButtonBarLeft } from './ButtonBarLeft';
import { ButtonBarRight } from './ButtonBarRight';
import { DockPanel } from './DockPanel';

export class ButtonBar extends DockPanel {
  buttonBarLeft: ButtonBarLeft;
  buttonBarRight: ButtonBarRight;

  constructor(parentWindow: AbstractWindow) {
    super();
    this.buttonBarLeft = new ButtonBarLeft(parentWindow);
    this.buttonBarRight = new ButtonBarRight(parentWindow);
    this.addWest(this.buttonBarLeft);
    this.addEast(this.buttonBarRight);
  }

  initialize() {
    super.initialize();
    this.setHeight(SizeConstants.DefaultWindowButtonBarHeight);
  }

  addButtonLeft(name: string): QxFormButton {
    return this.buttonBarLeft.addButton(name);
  }

  addButtonRight(name: string): QxFormButton {
    return this.buttonBarRight.addButton(name);
  }

}
