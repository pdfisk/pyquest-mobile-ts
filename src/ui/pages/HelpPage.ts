import { SizeConstants, UrlConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxIframe } from "../../qx/ui/embed/QxIframe";
import { QxComposite } from "../../qx/ui/mobile/container/QxComposite";
import { MarkdownUtil } from "../../util/MarkdownUtil";
import { AbstractPage } from "./abstract/AbstractPage";
import { QxTextArea } from "../../qx/ui/mobile/form/QxTextArea";

export class HelpPage extends AbstractPage {
    textArea: QxTextArea;
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
        this.textArea = new QxTextArea;
        this.holder = new QxComposite;
        this.iframe = new QxIframe;
        (window as any).app.helpPageBack = this.onBack;
        (window as any).app.helpPageDisplay = this.displayPage;
        (window as any).X = this;
    }

    addContent() {
        this.addContentWidget(this.textArea);
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
 
    resizeWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.setTextAreaHeight(adjustedHeight - SizeConstants.TextPanelHeightAdjust);
    }

    setTextAreaHeight(adjustedHeight: number) {
        this.textArea?.setHeightPx(adjustedHeight);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
        console.log('setAdjustedWidthAndHeight', adjustedWidth, adjustedHeight);
    }

    setHtml(html: string) {
        this.iframe.setHtml(html);
    }

}
