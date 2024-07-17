export class QxFactory {

    static compositeContainer(): any {
        return new (window as any).qx.ui.container.Composite;
    }

    static dockLayout(): any {
        return new (window as any).qx.ui.layout.Dock;
    }

    static toolbar(): any {
        return new (window as any).qx.ui.toolbar.ToolBar;
    }

}
