export class QxFactory {

    static atomLayout(): any {
        return new (window as any).qx.ui.layout.Atom;
    }

    static basicAtom(): any {
        return new (window as any).qx.ui.basic.Atom;
    }

    static basicLayout(): any {
        return new (window as any).qx.ui.layout.Basic;
    }

    static canvasLayout(): any {
        return new (window as any).qx.ui.layout.Canvas;
    }

    static compositeContainer(): any {
        return new (window as any).qx.ui.container.Composite;
    }

    static dockLayout(): any {
        return new (window as any).qx.ui.layout.Dock;
    }

    static flowLayout(): any {
        return new (window as any).qx.ui.layout.Flow;
    }

    static formButton(): any {
        return new (window as any).qx.ui.form.Button;
    }

    static formMenuButton(): any {
        return new (window as any).qx.ui.form.MenuButton;
    }

    static gridLayout(): any {
        return new (window as any).qx.ui.layout.Grid;
    }

    static growLayout(): any {
        return new (window as any).qx.ui.layout.Grow;
    }

    static hboxLayout(): any {
        return new (window as any).qx.ui.layout.HBox;
    }

    static menuButton(): any {
        return new (window as any).qx.ui.menu.Button;
    }

    static menuMenu(): any {
        return new (window as any).qx.ui.menu.Menu;
    }

    static menuSeparator(): any {
        return new (window as any).qx.ui.menu.Separator;
    }

    static menubarButton(): any {
        return new (window as any).qx.ui.menubar.Button;
    }

    static menubarMenuBar(): any {
        return new (window as any).qx.ui.menubar.MenuBar;
    }

    static textArea(): any {
        return new (window as any).qx.ui.form.TextArea;
    }

    static textField(): any {
        return new (window as any).qx.ui.form.TextField;
    }

    static toolbarButton(): any {
        return new (window as any).qx.ui.toolbar.Button;
    }

    static toolbarMenuButton(): any {
        return new (window as any).qx.ui.toolbar.MenuButton;
    }

    static toolbarSeparator(): any {
        return new (window as any).qx.ui.toolbar.Separator;
    }

    static toolbarToolBar(): any {
        return new (window as any).qx.ui.toolbar.ToolBar;
    }

    static vboxLayout(): any {
        return new (window as any).qx.ui.layout.VBox;
    }

    static windowWindow(): any {
        return new (window as any).qx.ui.window.Window;
    }

}
