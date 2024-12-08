import { SizeConstants, UrlConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxIframe } from "../../qx/ui/embed/QxIframe";
import { QxComposite } from "../../qx/ui/mobile/container/QxComposite";
import { MarkdownUtil } from "../../util/MarkdownUtil";
import { AbstractPage } from "./abstract/AbstractPage";

export class HelpPage extends AbstractPage {
    holder: QxComposite;
    iframe: QxIframe;
    static instance: HelpPage;

    static getInstance(): HelpPage {
        if (!this.instance)
            this.instance = new HelpPage();
        return this.instance;
    }

    static setHtml(html: string) {
        this.getInstance().setHtml(html);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageHelpMenu);
        this.holder = new QxComposite;
        this.iframe = new QxIframe;
        (window as any).app.helpPageBack = this.onBack;
        (window as any).app.helpPageDisplay = this.displayPage;
        (window as any).X = this;
    }

    addContent() {
        this.addContentWidget(this.holder);
        this.displayPage(UrlConstants.helpIndex);
    }

    displayPage(page: string) {
        const fn = (html: string) => { HelpPage.setHtml(html) };
        const path = `${UrlConstants.helpFolder}/${page}.md`;
        MarkdownUtil.readMarkdownPage(path, fn);
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
        this.resizeIframe()
        // this.iframe.widget.setSource('./');
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

    setHtml(html: string) {
        this.iframe.setHtml(html);
    }

}
