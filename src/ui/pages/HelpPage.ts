import { SizeConstants, UrlConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { IHandleMessage } from "../../interfaces/IHandleMessage";
import { QxIframe } from "../../qx/ui/embed/QxIframe";
import { QxComposite } from "../../qx/ui/mobile/container/QxComposite";
import { MarkdownUtil } from "../../util/MarkdownUtil";
import { AbstractPage } from "./abstract/AbstractPage";

export class HelpPage extends AbstractPage implements IHandleMessage {
    holder: QxComposite;
    iframe: QxIframe;
    static instance: HelpPage;

    static getInstance(): HelpPage {
        if (!this.instance)
            this.instance = new HelpPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageHelpMenu);
        this.holder = new QxComposite;
        this.iframe = new QxIframe(this);
        (window as any).app.helpPageBack = this.onBack;
        (window as any).app.helpPageDisplay = (page: string) => { this.showPage(page); };
    }

    addContent() {
        this.addContentWidget(this.holder);
        this.showPage(UrlConstants.helpIndex);
    }

    handleMessage(page: string): void {
        this.showPage(page);
    }

    hasBackButton(): boolean {
        return false;
    }

    hasButtonBar(): boolean {
        return false;
    }

    initialize() {
        super.initialize();
    }

    isContentReady(): boolean {
        return true;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        const e1 = this.holder.getContentElement();
        const e2 = this.iframe.widget.getDomElement();
        e1.append(e2);
        this.resizeIframe();
    }

    resizeIframe() {
        const elem = this.iframe.widget.getDomElement();
        elem.height = this.holder.getBoundingHeight();
        elem.width = this.holder.getBoundingWidth();
    }

    resizeWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.setHolderHeight(adjustedHeight - SizeConstants.TextPanelHeightAdjust);
        this.setHolderWidth(adjustedWidth);
        this.resizeIframe();
    }

    setHolderHeight(adjustedHeight: number) {
        this.holder?.setHeightPx(adjustedHeight);
    }

    setHolderWidth(adjustedWidth: number) {
        this.holder?.setWidthPx(adjustedWidth);
    }

    setPageContent(html: string) {
        this.iframe.setBodyHtml(html);
    }

    showPage(page: string) {
        const fn = (html: string) => { this.setPageContent(html); };
        const path = `${UrlConstants.helpFolder}/${page}.md`;
        MarkdownUtil.readMarkdownPage(path, fn);
    }

}
