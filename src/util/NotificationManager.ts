import { EventConstants } from '../constants/EventConstants';
import { MessageConstants } from "../constants/MessageConstants";
import { QxConstants } from '../constants/QxConstants';
import { MessageBus } from '../messages/MessageBus';
import { QxDrawer } from "../qx/ui/mobile/container/QxDrawer";
import { NotificationPopup } from "../ui/dialog/NotificationPopup";
import { ServerPopup } from "../ui/dialog/ServerPopup";
import { DebugUtil } from '../util/DebugUtil';

export class NotificationManager {
    static topDrawer: QxDrawer;
    static instance: NotificationManager | null = null;

    static getInstance(): NotificationManager {
        if (this.instance == null)
            this.instance = new NotificationManager();
        return this.instance;
    }

    static init() {
        this.initWidgets();
        MessageBus.subscribe(EventConstants.CatagoryChanged, this.onCategoryChanged, this);
        MessageBus.subscribe(EventConstants.DrawerCloseTop, this.onCloseTop, this);
        MessageBus.subscribe(EventConstants.DrawerOpenTop, this.onOpenTop, this);
        MessageBus.subscribe(EventConstants.ServerProjectSaved, this.onProjectSaved, this);
        MessageBus.subscribe(EventConstants.SessionLoggedInAsAdmin, this.onLoggedInAsAdmin, this);
        MessageBus.subscribe(EventConstants.SessionLoggedInAsUser, this.onLoggedInAsUser, this);
        MessageBus.subscribe(EventConstants.SessionLoggedOut, this.onLoggedOut, this);
    }

    static initWidgets() {
        this.topDrawer = new QxDrawer(MessageConstants.Empty, QxConstants.DrawerOrientionTop);
    }

    static onCategoryChanged() {
        DebugUtil.log('NotificationManager onCategoryChanged');
        // NotificationPopup.open(MessageConstants.CategoryChanged, MessageConstants.CategoryChangedMessage);
        NotificationPopup.open(MessageConstants.LoggedIn, MessageConstants.LoggedInAdmin);
    }

    static onCloseTop() {
        this.topDrawer.hide();
    }

    static onError(message:string) {
        DebugUtil.log('onError', message);
    }

    static onLoggedInAsAdmin() {
        NotificationPopup.open(MessageConstants.LoggedIn, MessageConstants.LoggedInAdmin);
    }

    static onLoggedInAsUser() {
        NotificationPopup.open(MessageConstants.LoggedIn, MessageConstants.LoggedInUser);
    }

    static onLoggedOut() {
        NotificationPopup.open(MessageConstants.LoggedOut, MessageConstants.LoggedOutAll);
    }

    static onOpenTop(args: any) {
        const data: any[] = args.getData();
        const message: string = data[0];
        const fn = data.length > 1 ? data[1] : null;
        this.topDrawer.setLabel(message);
        this.topDrawer.setFn(fn);
        this.topDrawer.show();
    }

    static onProjectSaved(args: any) {
        ServerPopup.open(MessageConstants.ProjectSaved, MessageConstants.ProjectSavedToDatabase);
    }

    // startCountDown(duration: number) {
    //     const fn = () => {
    //         this.close
    //     };
    //     TimerManager.start(fn, duration);
    // }

}
