import { EventConstants } from "../constants/EventConstants";
import { SessionConstants } from "../constants/SessionConstants";
import { MessageBus } from "../messages/MessageBus";

export class SessionStatus {
    loginStatus: string = SessionConstants.SessionLoggedOut;
    static instance: SessionStatus;

    static getInstance(): SessionStatus {
        if (!this.instance)
            this.instance = new SessionStatus;
        return this.instance;
    }

    static isLoggedIn(): boolean {
        return this.getInstance().isLoggedIn();
    }

    static isLoggedInAsAdmin(): boolean {
        return this.getInstance().isLoggedInAsAdmin();
    }

    static isLoggedInAsUser(): boolean {
        return this.getInstance().isLoggedInAsUser();
    }

    constructor() {
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
    }

    isLoggedIn() {
        return this.isLoggedInAsAdmin() || this.isLoggedInAsUser();
    }

    isLoggedInAsAdmin() {
        return this.loginStatus == SessionConstants.SessionLoggedInAsAdmin;
    }

    isLoggedInAsUser() {
        return this.loginStatus == SessionConstants.SessionLoggedInAsUser;
    }

    onEventStatusChanged(message: any) {
        const status = message.getData().status;
        switch (status) {
            case SessionConstants.SessionLoggedInAsAdmin:
                this.setIsLoggedInAsAdmin();
                break;
            case SessionConstants.SessionLoggedInAsUser:
                this.setIsLoggedInAsUser();
                break;
            default:
                this.setIsLoggedOut();
        }
    }

    setIsLoggedInAsAdmin() {
        this.loginStatus = SessionConstants.SessionLoggedInAsAdmin;
    }

    setIsLoggedInAsUser() {
        this.loginStatus = SessionConstants.SessionLoggedInAsUser;
    }

    setIsLoggedOut() {
        this.loginStatus = SessionConstants.SessionLoggedOut;
    }

}
