export class QxInit {

    static getApplication(): any {
        return (window as any).qx.core.Init.getApplication();
    }

    static getRoot(): any {
        return this.getApplication().getRoot();
    }

}
