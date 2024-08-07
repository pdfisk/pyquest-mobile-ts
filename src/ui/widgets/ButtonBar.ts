import { SizeConstants } from '../../constants/SizeConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { QxSelectBox } from '../../qx/ui/form/QxSelectBox';
import { AbstractWindow } from '../windows/abstract/AbstractWindow';
import { ButtonBarLeft } from './ButtonBarLeft';
import { ButtonBarRight } from './ButtonBarRight';
import { DockPanel } from './DockPanel';

export class ButtonBar extends DockPanel {
  buttonBarLeft: ButtonBarLeft;
  buttonBarRight: ButtonBarRight;
  selectBox?: QxSelectBox;

  constructor(parentWindow: AbstractWindow) {
    super();
    this.buttonBarLeft = new ButtonBarLeft(parentWindow);
    this.buttonBarRight = new ButtonBarRight(parentWindow);
    this.addWest(this.buttonBarLeft);
    this.addEast(this.buttonBarRight);
    if (this.defaultHasSelectBox())
      this.addSelectBox();
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

  addSelectBox() {
    this.selectBox = new QxSelectBox;
    this.addCenter(this.selectBox);
  }

  addSplitButtonLeft(label: string, items: string[]) {
    return this.buttonBarLeft.addSplitButton(label, items);
  }

  addSplitButtonRight(label: string, items: string[]) {
    return this.buttonBarRight.addSplitButton(label, items);
  }

  defaultHasSelectBox(): boolean {
    return false;
  }

}
