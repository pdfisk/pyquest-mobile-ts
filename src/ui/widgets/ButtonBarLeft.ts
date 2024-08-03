import { LayoutConstants } from '../../constants/LayoutConstants';
import { AbstractWindow } from '../windows/abstract/AbstractWindow';
import { AbstractButtonBar } from './AbstractButtonBar';

export class ButtonBarLeft extends AbstractButtonBar {

    constructor(parentWindow: AbstractWindow) {
        super(parentWindow);
    }

    defaultAlignment(): string {
        return LayoutConstants.AlignLeft;
    }

}
