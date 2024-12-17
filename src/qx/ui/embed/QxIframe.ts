import { ActionConstants, EventConstants, QxConstants } from "../../../constants";
import { IHandleMessage } from "../../../interfaces/IHandleMessage";
import { IframeManager } from "../../../util/IframeManager";
import { QxFactory } from "../../factory";
import { QxWidget } from "../mobile/core/QxWidget";

export class QxIframe extends QxWidget {
    deferredMessage: any = null;
    hasLoaded: boolean = false;
    iframeDocument: any = null;
    iframeWindow: any = null;
    messageHandler: IHandleMessage;
    name: string;
    static counter: number = 0;

    constructor(messageHandler: IHandleMessage) {
        super(QxFactory.htmlIframe());
        this.name = `${QxConstants.IframeName}-${QxIframe.counter++}`;
        this.widget.addListenerOnce(EventConstants.QxEventLoad, this.onLoad, this);
        this.messageHandler = messageHandler;
        IframeManager.subscribe(this);
    }

    addFunction(fnName:string, action:string) {
        const data = { name: this.name, action: action, args: null };
        this.iframeWindow[fnName] = function (args: any) {
            data.args = args;
            parent.postMessage(data);
        };
    }

    addJavascript(name: string) {
        const script = this.iframeDocument.createElement('script');
        script.type = 'text/javascript';
        this.iframeDocument.head.appendChild(script);
        script.src = `./iframe/js/${name}.min.js`;
    }

    addStylesheet(name: string) {
        const link = this.iframeDocument.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        this.iframeDocument.head.appendChild(link);
        link.href = `./iframe/css/${name}.min.css`;
    }

    onLoad() {
        (window as any).X = this;
        if (this.hasLoaded)
            return;
        this.hasLoaded = true;
        this.iframeWindow = this.widget.getWindow();
        this.iframeDocument = this.widget.getDocument();
        this.iframeDocument.title = this.name;
        this.addFunction('showPage', ActionConstants.ActionShowPage);
    }

    recieveMessage(message: any) {
        this.messageHandler.handleMessage(message);
    }

    setBodyHtml(html: string) {
        this.iframeDocument.body.innerHTML = html;
    }

}
