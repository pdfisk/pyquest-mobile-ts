import { SizeConstants } from '../../constants/SizeConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { ButtonBarLeft } from './ButtonBarLeft';

export class ButtonBar extends ButtonBarLeft {

  initialize() {
    super.initialize();
    this.setHeight(SizeConstants.DefaultWindowButtonBarHeight);
  }

  addButtonLeft(name: string): QxFormButton {
    return this.addButton(name);
  }

}
