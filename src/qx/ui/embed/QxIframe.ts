import { IHandleMessage } from "../../../interfaces/IHandleMessage";
import { BrowserUtil } from "../../../util";
import { IframeManager } from "../../../util/IframeManager";
import { QxFactory } from "../../factory";
import { QxWidget } from "../mobile/core/QxWidget";

export class QxIframe extends QxWidget {
    deferredMessage: any = null;
    iframeDocument: any = null;
    iframeWindow: any = null;
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
        if (this.deferredMessage) {
            this.sendMessage(this.deferredMessage.action, this.deferredMessage.args);
            this.deferredMessage = null;
        }
    }

    readIndexHtml() {
        const fn = (text: string) => { this.setHtml(text); };
        BrowserUtil.readTextFile('./iframe/index.html', fn);
    }

    recieveMessage(message: any) {
        this.messageHandler.handleMessage(message);
    }

    sendMessage(action: string, args: any) {
        console.log('sendMessage', action, args, this.deferredMessage === null);
        if (!this.iframeWindow) {
            this.deferredMessage = { action: action, args: args };
            return;
        }
        const data = { name: this.getName(), action: action, args: args };
        this.iframeWindow.postMessage(data);
    }

    setHtml(html: string) {
        this.iframeDocument.write(html);
    }

    setName(name: string) {
        this.widget.setName(name);
    }

}
