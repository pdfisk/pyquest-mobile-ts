import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxNavigationPage } from "../../qx/mobile/page/QxNavigationPage";

export abstract class AbstractPage extends QxNavigationPage {

    onAppear() {
        super.onAppear();
        this.setBackButtonText('Back');
        this.setShowBackButton(true);
        this.widget._back = () => { this.onBack() };
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
