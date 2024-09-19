import { QxNavigationPage } from "../../qx/mobile/page/QxNavigationPage";

export abstract class AbstractPage extends QxNavigationPage {

    onAppear() {
        super.onAppear();
        this.setBackButtonText('Back');
        this.setShowBackButton(true);
        this.widget._back = () => { this.onBack() };
        (window as any).X = this;
    }

    onBack() {
        (window as any).qx.core.Init.getApplication().getRouting().back();
    }

    setBackButtonText(text: string) {
        this.widget.setBackButtonText(text);
    }

    setShowBackButton(value: boolean) {
        this.widget.setShowBackButton(value);
    }

}
