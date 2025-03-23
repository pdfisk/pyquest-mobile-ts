import { QxObject } from '../../../core/QxObject';

export class QxDialogManager extends QxObject {

    static confirm(title: string, message: string) {
        const buttons = [];
        buttons.push((window as any).qx.locale.Manager.tr("OK"));
        buttons.push((window as any).qx.locale.Manager.tr("Cancel"));
        (window as any).qx.ui.mobile.dialog.Manager.getInstance().confirm(title, message, function (index: number) {
            if (index == 1) {

            }
        }, this, buttons);
    }

}
