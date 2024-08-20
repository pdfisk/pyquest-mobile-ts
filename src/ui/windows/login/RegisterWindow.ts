import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { ServerConstants } from '../../../constants/ServerConstants';
import { SessionConstants } from '../../../constants/SessionConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { ErrorHandler } from '../../../handlers/ErrorHandler';
import { EventBus } from '../../../messages/EventBus';
import { Server } from '../../../server/Server';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { RegisterPanel } from './widgets/RegisterPanel';

export class RegisterWindow extends AbstractWindow {

    registerPanel?: RegisterPanel;

    static getInstance(): RegisterWindow {
        if (!this.instance)
            this.instance = new RegisterWindow();
        return this.instance;
    }

    static instance: RegisterWindow;

    private constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setResizable(false);
        this.registerPanel = new RegisterPanel();
        this.add(this.registerPanel);
    }

    addButtonsLeft() {
        this.addButtonLeft(LabelConstants.ButtonLabelRegister);
        this.addButtonLeft(LabelConstants.ButtonLabelClear);
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelRegister;
    }

    defaultAutoDestroy(): boolean {
        return false;
    }

    defaultHeight(): number {
        return SizeConstants.RegisterWindowHeight;
    }

    defaultWidth(): number {
        return SizeConstants.RegisterWindowWidth;
    }

    defaultShowMaximize(): boolean {
        return false;
    }

    defaultShowMinimize(): boolean {
        return false;
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionRegister:
                this.onRegister();
                break;
            default:
                ErrorHandler.logError(ErrorConstants.RegisterWindowOnButtonClick, tag);
                break;
        }
    }

    onClear() {
        this.registerPanel?.clear();
    }

    onRegister() {
        const name: string = (this.registerPanel as RegisterPanel).getName();
        const passwd: string = (this.registerPanel as RegisterPanel).getPassword();
        const fn: Function = (reply: any) => {
            const response = reply.getResponse();
            const level = response[SessionConstants.ServerResponseLevel];
            switch (level) {
                case ServerConstants.LevelAdmin:
                    EventBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedInAsAdmin });
                    this.close();
                    break;
                case ServerConstants.LevelUser:
                    EventBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedInAsUser });
                    this.close();
                    break;
                default:
                    EventBus.dispatch(EventConstants.EventSessionStatusChanged, { status: SessionConstants.SessionLoggedOut });
                    break;
            };
        }
        Server.register(name, passwd, fn);
    }

}
