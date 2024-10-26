import { FontConstants, SizeConstants } from "../../../constants";
import { QxLabel } from "../../../qx/ui/mobile/basic/QxLabel";
import { QxScroll } from "../../../qx/ui/mobile/container/QxScroll";
import { QxVBox } from "../../../qx/ui/mobile/container/QxVBox";
import { QxWidget } from "../../../qx/ui/mobile/core/QxWidget";
import { QxButton } from "../../../qx/ui/mobile/form/QxButton";
import { FormPanel } from "../FormPanel";
import { InfoScrollPanel } from "./widgets/InfoScrollPanel";

export class InfoPanel extends QxVBox {

    constructor() {
        super();
    }

    addButton(label: string, fn: Function | null = null, withMargin: boolean = true): QxButton {
        const button = new QxButton(label, fn);
        if (withMargin)
            button.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        this.addReset(button);
        return button;
    }

    addFiller(size: number = -1): QxWidget {
        const widget = new QxWidget;
        if (size > 0) {
            widget.setHeightPx(size);
            return this.add(widget);
        }
        else return this.addFlexReset(widget);
    }

    addForm(items: QxWidget[], names: string[], title: string | null = null, withMargin: boolean = true): FormPanel {
        const formPanel = new FormPanel;
        if (withMargin)
            formPanel.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        formPanel.addItems(items, names);
        this.addReset(formPanel);
        return formPanel;
    }

    addLabel(text: string, withMargin: boolean = true): QxLabel {
        const label = new QxLabel(text);
        label.setMarginLeftAndRightPx(SizeConstants.InfoPanelLeftAndRightMargins);
        if (withMargin)
            label.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        label.setFontStyleItalic();
        label.setFontSize(FontConstants.FontSize1_2Em);
        this.addReset(label);
        return label;
    }

    addNews(size: number = -1, withMargin: boolean = true): InfoScrollPanel {
        const news = new InfoScrollPanel;
        if (size > 0) {
            news.setHeightPx(size);
            this.add(news);
        }
        else this.addFlexReset(news);
        if (withMargin)
            news.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        return news;
    }

    addScroll(size: number = -1, withMargin: boolean = true): QxWidget {
        const scroll = new QxScroll;
        if (size > 0) {
            scroll.setHeightPx(size);
            this.add(scroll);
        }
        else this.addFlexReset(scroll);
        if (withMargin)
            scroll.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        return scroll;
    }

    addSpacer(size: number = 5): QxWidget {
        return this.addFiller(size);
    }

}
