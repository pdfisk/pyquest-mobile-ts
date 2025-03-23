import { QxFactory } from '../../../factory/QxFactory';
import { QxComposite } from "../container/QxComposite";

export class QxPage extends QxComposite {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobilePage());
    }

    handlesOnAppear(): boolean {
        return true;
    }

}
