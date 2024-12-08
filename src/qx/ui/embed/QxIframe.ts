import { IHandleMessage } from "../../../interfaces/IHandleMessage";
import { IframeManager } from "../../../util/IframeManager";
import { QxFactory } from "../../factory";
import { QxWidget } from "../mobile/core/QxWidget";

export class QxIframe extends QxWidget {
    iframeWindow: any;
    messageHandler: IHandleMessage;
    name: string;
    static counter: number = 0;

    constructor(messageHandler: IHandleMessage) {
        super(QxFactory.htmlIframe());
        this.name = `iframe-${QxIframe.counter++}`;
        this.messageHandler = messageHandler;
        IframeManager.subscribe(this);
        this.iframeWindow = this.widget.getWindow();
        console.log('iframeWindow 1', this.iframeWindow);
        (window as any).X = this;
    }

    getHtml(): string {
        return 'HTML';
    }

    handlesOnAppear(): boolean {
        return false;
    }

    onAppear() {
        console.log('ON APPEAR');
        this.widget.getDomElement().onload = () => { this.onLoad(); };
    }

    onLoad() {
        console.log('onLoad');
        this.iframeWindow = this.widget.getWindow();
        this.iframeWindow.name = this.name;
    }

    recieveMessage(message: any) {
        this.messageHandler.handleMessage(message);
    }

    sendMessage(message: any) {
        const data = { name: this.name, message: message };
        this.iframeWindow.postMessage(data);
    }

    setHtml(html: string) {
        this.widget.getDocument().body.innerHTML = html;
    }

}
