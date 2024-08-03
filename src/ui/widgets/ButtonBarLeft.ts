import { ColorConstants } from '../../constants/ColorConstants';
import { LayoutConstants } from '../../constants/LayoutConstants';
import { SizeConstants } from '../../constants/SizeConstants';
import { QxFormButton } from '../../qx/ui/form/QxFormButton';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxHBoxLayout } from '../../qx/ui/layout/QxHBoxLayout';
import { AbstractWindow } from '../windows/abstract/AbstractWindow';
import { AbstractButtonBar } from './AbstractButtonBar';

export class ButtonBarLeft extends AbstractButtonBar {

  constructor(parentWindow: AbstractWindow) {
    super(parentWindow);
  }

  defaultLayout(): QxAbstractLayout {
    const layout: QxAbstractLayout = new QxHBoxLayout();
    layout.setSpacing(LayoutConstants.DefaultWindowButtonBarSpacing);
    return layout;
  }

}
