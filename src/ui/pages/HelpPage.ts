import { UrlConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxScroll } from "../../qx/ui/mobile/container/QxScroll";
import { QxHtml } from "../../qx/ui/mobile/embed/QxHtml";
import { MarkdownUtil } from "../../util/MarkdownUtil";
import { AbstractPage } from "./abstract/AbstractPage";

export class HelpPage extends AbstractPage {
    htmlPanel: QxHtml;
    scroll: QxScroll;
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
        this.htmlPanel = new QxHtml;
        this.scroll = new QxScroll();
        (window as any).app.displayPage = this.displayPage;
    }

    addContent() {
        this.scroll.add(this.htmlPanel);
        this.addContentWidget(this.scroll);
        this.displayPage(UrlConstants.helpIndex);
    }

    displayPage(page: string) {
        const fn = (html: string) => { HelpPage.setHtml(html) };
        const path = `${UrlConstants.helpFolder}/${page}.md`;
        MarkdownUtil.readMarkdownPage(path, fn);
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

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    setHtml(html: string) {
        this.htmlPanel.setHtml(html);
    }

}
