import { UrlConstants } from "../../../constants";
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
    name: string;
    static counter: number = 0;

    constructor(messageHandler: IHandleMessage) {
        super(QxFactory.htmlIframe());
        this.name = `iframe-${QxIframe.counter++}`;
        this.widget.addListenerOnce('load', this.onLoad, this);
        this.messageHandler = messageHandler;
        IframeManager.subscribe(this);
        (window as any).X = this;
    }

    getHtml(): string {
        return 'HTML';
    }

    onLoad() {
        console.log('QxIframe onLoad', `[${this.name}]`);
        this.iframeWindow = this.widget.getWindow();
        this.iframeDocument = this.widget.getDocument();
        this.iframeDocument.title = this.name;
        // this.iframeWindow.sendMessage = (x: any) => { parent.postMessage({ name: document.title, args: x }); };
        this.iframeWindow.sendMessage = function (x: any) { console.log(x) }
        // this.readIndexHtml();
        // if (this.deferredMessage) {
        //     this.sendMessage(this.deferredMessage.action, this.deferredMessage.args);
        //     this.deferredMessage = null;
        // }
    }

    readIndexHtml() {
        // const fn = (text: string) => {
        //      this.setHtml(text);
        //      console.log('readIndexHtml', this.iframeWindow.onmessage);
        //      };
        // BrowserUtil.readTextFile(UrlConstants.helpIndexUrl, fn);
    }

    recieveMessage(message: any) {
        this.messageHandler.handleMessage(message);
    }

    sendMessage(action: string, args: any) {
        // if (!this.iframeWindow || !this.iframeWindow.onmessage) {
        //     this.deferredMessage = { action: action, args: args };
        //     console.log('deferredMessage', action);
        //     return;
        // }
        // const data = { action: action, args: args };
        // this.iframeWindow.postMessage(data);
    }

    setBodyHtml(html: string) {
        this.iframeDocument.body.innerHTML = html;
    }

    setHtml(html: string) {
        // this.iframeDocument.write(html);
    }

}
