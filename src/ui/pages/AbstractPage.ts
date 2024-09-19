import { QxNavigationPage } from "../../qx/mobile/page/QxNavigationPage";

export abstract class AbstractPage extends QxNavigationPage {

    onAppear() {
        super.onAppear();
        this.setBackButtonText('Back');
        this.setShowBackButton(true);
    }

    setBackButtonText(text: string) {
        this.widget.setBackButtonText(text);
    }

    setShowBackButton(value: boolean) {
        this.widget.setShowBackButton(value);
    }

}
