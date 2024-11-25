import { FontConstants, LabelConstants, SizeConstants } from "../../constants";
import { CategoryConstants } from "../../constants/CategoryConstants";
import { QxLabel } from "../../qx/ui/mobile/basic/QxLabel";
import { QxHBox } from "../../qx/ui/mobile/container/QxHBox";
import { QxVBox } from "../../qx/ui/mobile/container/QxVBox";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxSelectBox } from "../../qx/ui/mobile/form/QxSelectBox";
import { QxTextArea } from "../../qx/ui/mobile/form/QxTextArea";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { CategoryUtil } from "../../util/CategoryUtil";

export class DetailsPanel extends QxVBox {
    category: QxTextField = new QxTextField;
    description: QxTextArea = new QxTextArea;
    name: QxTextField = new QxTextField;
    selectBox: QxSelectBox = new QxSelectBox;

    constructor() {
        super();
        this.name.setFontWeight(FontConstants.FontWeightBold);
        this.name.setReadOnly(true);
        this.name.setActivatable(false);
        this.category.setFontWeight(FontConstants.FontWeightBold);
        this.category.setReadOnly(true);
        this.category.setActivatable(false);
        this.addRow(LabelConstants.FieldLabelCategory, this.category);
        this.showCurrentCategory(CategoryConstants.CategoryLabelAll);
        const fn = (evt: any) => { this.onChangeSelectBoxSelection(evt) };
        this.selectBox.setChangeFunction(fn);
        this.selectBox.setModel(CategoryUtil.getCategories());
        this.selectBox.setPlaceholder(CategoryConstants.CategoryPlaceholder);
        this.addRow(LabelConstants.FieldLabelCategories, this.selectBox, false, SizeConstants.DetailsSelectionLeftMargin);
        this.addRow(LabelConstants.FieldLabelDescription, this.description, true);
    }

    addRow(name: string, item: QxWidget, fullWidth: boolean = false, leftMargin: number = SizeConstants.DetailsLeftMargin): QxHBox {
        const row = new QxHBox;
        row.setHeightAuto();
        row.setMarginBottomPx(SizeConstants.DetailsMarginBottom);
        const label = new QxLabel(name);
        item.setMarginLeftPx(leftMargin);
        label.setWidthPx(SizeConstants.DetailsLabelWidth);
        row.add(label);
        row.add(item, { flex: 1 });
        if (fullWidth)
            this.add(row, { flex: 1 });
        else
            this.add(row);
        return row;
    }

    clear() {
        this.description.clear();
    }

    onChangeSelectBoxSelection(evt: any) {
        const data = evt.getData();
        const index: number = data.index;
        this.setCategory(CategoryUtil.getCategoryTag(index));
    }

    setCategory(category: string) {
        this.category.setValue(category);
    }

    setDescription(description: string) {
        this.description.setValue(description);
    }

    setName(name: string) {
        this.name.setValue(name);
    }

    showCurrentCategory(value: string) {
        this.category.setValue(value);
    }

}
