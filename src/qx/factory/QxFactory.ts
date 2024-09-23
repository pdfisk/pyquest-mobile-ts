export class QxFactory {

    static mobileAtom(): any {
        return new (window as any).qx.ui.mobile.basic.Atom;
    }

    static mobileButton(): any {
        return new (window as any).qx.ui.mobile.form.Button;
    }

    static mobileComposite(): any {
        return new (window as any).qx.ui.mobile.container.Composite;
    }

    static mobileList(config: any): any {
        return new (window as any).qx.ui.mobile.list.List(config);
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

    static mobileRoot(): any {
        return new (window as any).qx.ui.mobile.core.Root;
    }

    static mobileScroll(): any {
        return new (window as any).qx.ui.mobile.container.Scroll;
    }

    static mobileWidget(): any {
        return new (window as any).qx.ui.mobile.core.Widget;
    }

}
