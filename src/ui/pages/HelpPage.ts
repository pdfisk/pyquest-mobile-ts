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

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageHelpMenu);
        this.htmlPanel = new QxHtml;
        this.scroll = new QxScroll();
    }

    addContent() {
        const fn = (html: string) => { this.htmlPanel.setHtml(html) };
        MarkdownUtil.readMarkdownPage(UrlConstants.helpIndex, fn);
        this.scroll.add(this.htmlPanel);
        this.addContentWidget(this.scroll);
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

}
