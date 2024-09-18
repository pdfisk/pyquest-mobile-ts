export class QxFactory {

    static mobileComposite(): any {
        return new (window as any).qx.ui.mobile.container.Composite;
    }

    static mobileList(): any {
        return new (window as any).qx.ui.mobile.list.List({
            configureItem(item: any, data: any) {
                item.setTitle(data.title);
                item.setSubtitle(data.subtitle);
                item.setShowArrow(true);
            },
        });
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

    static mobileWidget(): any {
        return new (window as any).qx.ui.mobile.core.Widget;
    }

}
