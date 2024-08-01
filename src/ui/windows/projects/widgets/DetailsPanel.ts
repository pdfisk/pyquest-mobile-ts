import { LabelConstants } from "../../../../constants/LabelConstants";
import { SizeConstants } from "../../../../constants/SizeConstants";
import { QxBasicLabel } from "../../../../qx/ui/basic/QxBasicLabel";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { QxAbstractLayout } from "../../../../qx/ui/layout/QxAbstractLayout";
import { QxGridLayout } from "../../../../qx/ui/layout/QxGridLayout";
import { Panel } from "../../../widgets/Panel";

export class DetailsPanel extends Panel {
    categoryField: QxTextField;

    constructor() {
        super();
        this.categoryField = new QxTextField();
    }

    initialize() {
        super.initialize();
        this.setPadding([15]);
    }

    clear() {
        this.categoryField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    defaultLayout(): QxAbstractLayout {
        const layout = new QxGridLayout();
        layout.setColumnWidth(0, SizeConstants.LoginPanelColZeroWidth);
        layout.setColumnWidth(1, SizeConstants.LoginPanelColOneWidth);
        layout.setSpacingX(SizeConstants.LoginPanelSpacingX);
        layout.setSpacingY(SizeConstants.LoginPanelSpacingY);
        return layout;
    }

    getValue(): string {
        const data: any = {};
        data.category = this.categoryField.getValue();
        return JSON.stringify(data);
    }

    onAppear() {
        const categoryLabel = new QxBasicLabel(LabelConstants.FieldLabelCategory);
        this.addRowColumn(categoryLabel, 0, 0);
        this.addRowColumn(this.categoryField, 0, 1);
    }

    setValue(jsonStr: string) {
        if (typeof (jsonStr) !== 'string')
            return;
        const data = JSON.parse(jsonStr);
        this.categoryField.setValue(data.category);
    }

}
