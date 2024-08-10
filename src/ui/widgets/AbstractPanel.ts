import { QxComposite } from '../../qx/ui/container/QxComposite';

export abstract class AbstractPanel extends QxComposite {

    defaultEnableOnAppear(): boolean {
        return true;
    }

    defaultEnableOnResize(): boolean {
        return true;
    }


}
