import { QxComposite } from '../../qx/ui/container/QxComposite';

export class Panel extends QxComposite {

    initialize() {
        super.initialize();
        this.widget.addListener('appear', this.onAppear, this);
    }

    onAppear() {
    }
 
}
