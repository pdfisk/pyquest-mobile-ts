import { LabelConstants } from "../../constants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { RoutingPage } from "./RoutingPage";

export abstract class AbstractPage extends RoutingPage {

    onAppear() {
        super.onAppear();
        this.setBackButtonText(LabelConstants.ButtonLabelBack);
        this.setShowBackButton(true);
        this.widget._back = () => { this.onBack(); };
    }

    onBack() {
        QxMobileApplication.back();
    }

    setBackButtonText(text: string) {
        this.widget.setBackButtonText(text);
    }

    setShowBackButton(value: boolean) {
        this.widget.setShowBackButton(value);
    }

}
