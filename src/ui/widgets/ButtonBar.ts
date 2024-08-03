import { LayoutConstants } from '../../constants/LayoutConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { AbstractButtonBar } from './AbstractButtonBar';

export class ButtonBar extends AbstractButtonBar {

  addButtonLeft(name: string): QxFormButton {
    return this.addButton(name);
  }

  defaultAlignment(): string {
    return LayoutConstants.AlignLeft;
  }

}
