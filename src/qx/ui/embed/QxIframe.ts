import { IHandleMessage } from "../../../interfaces/IHandleMessage";
import { BrowserUtil } from "../../../util";
import { IframeManager } from "../../../util/IframeManager";
import { QxFactory } from "../../factory";
import { QxWidget } from "../mobile/core/QxWidget";

export class QxIframe extends QxWidget {
    iframeDocument: any;
    iframeWindow: any;
    messageHandler: IHandleMessage;
    static counter: number = 0;

    constructor(messageHandler: IHandleMessage) {
        super(QxFactory.htmlIframe());
        this.widget.addListenerOnce('load', this.onLoad, this);
        this.setName(`iframe-${QxIframe.counter++}`);
        this.messageHandler = messageHandler;
        IframeManager.subscribe(this);
        (window as any).X = this;
    }

    getHtml(): string {
        return 'HTML';
    }

    getName() {
        return this.widget.getName();
    }

    onLoad() {
        this.iframeWindow = this.widget.getWindow();
        this.iframeDocument = this.widget.getDocument();
        this.iframeDocument.title = this.getName();
        this.readIndexHtml();
    }

    readIndexHtml() {
        const fn = (text:string) => {this.setHtml(text);};
        BrowserUtil.readTextFile('./iframe/index.html', fn);
    }

    recieveMessage(message: any) {
        this.messageHandler.handleMessage(message);
    }

    sendMessage(message: any) {
        if (!this.iframeWindow) return;
        const data = { name: this.getName(), message: message };
        this.iframeWindow.postMessage(data);
    }

    setHtml(html: string) {
        this.iframeDocument.write(html);
    }

    setName(name: string) {
        this.widget.setName(name);
    }

    setSource(url: string) {
        this.widget.setSource(url);
    }

}
