export class QxFactory {

    static htmlIframe(): any {
        return new (window as any).qx.html.Iframe;
    }

    static mobileAbstract(): any {
        return new (window as any).qx.ui.mobile.layout.Absract;
    }

    static mobileAtom(): any {
        return new (window as any).qx.ui.mobile.basic.Atom;
    }

    static mobileBlocker(): any {
        return (window as any).qx.ui.mobile.core.Blocker.getInstance();
    }

    static mobileButton(label: string): any {
        return new (window as any).qx.ui.mobile.form.Button(label);
    }

    static mobileCard(): any {
        return new (window as any).qx.ui.mobile.layout.Card;
    }

    static mobileComposite(): any {
        return new (window as any).qx.ui.mobile.container.Composite;
    }

    static mobileDrawer(): any {
        return new (window as any).qx.ui.mobile.container.Drawer;
    }

    static mobileForm(): any {
        return new (window as any).qx.ui.mobile.form.Form;
    }

    static mobileHBox(): any {
        return new (window as any).qx.ui.mobile.layout.HBox;
    }

    static mobileHtml(): any {
        return new (window as any).qx.ui.mobile.embed.Html;
    }

    static mobileImage(path: string): any {
        return new (window as any).qx.ui.mobile.basic.Image(path);
    }

    static mobileInput(): any {
        return new (window as any).qx.ui.mobile.form.Input;
    }

    static mobileLabel(value: string): any {
        return new (window as any).qx.ui.mobile.basic.Label(value);
    }

    static mobileList(config: any): any {
        return new (window as any).qx.ui.mobile.list.List(config);
    }

    static mobileNavigationBarButton(): any {
        return new (window as any).qx.ui.mobile.navigationbar.Button;
    }

    static mobileNavigationPage(): any {
        return new (window as any).qx.ui.mobile.page.NavigationPage;
    }

    static mobilePage(): any {
        return new (window as any).qx.ui.mobile.page.Page;
    }

    static mobilePageManager(): any {
        return new (window as any).qx.ui.mobile.page.Manager(false);
    }

    static mobilePassowrdField(): any {
        return new (window as any).qx.ui.mobile.form.PasswordField;
    }

    static mobilePopup(): any {
        return new (window as any).qx.ui.mobile.dialog.Popup;
    }

    static mobileRoot(): any {
        return new (window as any).qx.ui.mobile.core.Root;
    }

    static mobileScroll(): any {
        return new (window as any).qx.ui.mobile.container.Scroll;
    }

    static mobileSelectBox(): any {
        return new (window as any).qx.ui.mobile.form.SelectBox;
    }

    static mobileSingle(form: any): any {
        return new (window as any).qx.ui.mobile.form.renderer.Single(form);
    }

    static mobileSinglePlaceholder(): any {
        return new (window as any).qx.ui.mobile.form.renderer.SinglePlaceholder;
    }

    static mobileTextArea(): any {
        return new (window as any).qx.ui.mobile.form.TextArea;
    }

    static mobileTextField(): any {
        return new (window as any).qx.ui.mobile.form.TextField;
    }

    static mobileVBox(): any {
        return new (window as any).qx.ui.mobile.layout.VBox;
    }

    static mobileWidget(): any {
        return new (window as any).qx.ui.mobile.core.Widget;
    }

    static timerManager(): any {
        return (window as any).qx.util.TimerManager.getInstance();
    }

}
