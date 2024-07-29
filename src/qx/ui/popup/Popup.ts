import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxPopup extends QxWidget {

    static alert(text: string, fn?: Function) {
        const message = text;
        const callback = fn;
        const context = this;
        const caption = 'Info';
        return QxFactory.dialog().alert(message, callback, context, caption);
    }

    static rename(oldName: string, callback: Function) {
        const message = 'Enter new name';
        const context = this;
        const value = oldName;
        const caption = 'Rename Item';
        return QxFactory.dialog().prompt(message, callback, context, value, caption);
    }

}
