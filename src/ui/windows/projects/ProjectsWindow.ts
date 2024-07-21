import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { QxWindowWindow } from '../../../qx/ui/window/QxWindowWindow';

export class ProjectsWindow extends QxWindowWindow {

    textArea?: QxTextArea;

    initialize() {
        super.initialize();
        this.textArea = new QxTextArea();
        this.add(this.textArea);
    }

    defaultCaption(): string {
        return 'Projects';
    }

}
