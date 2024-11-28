import { ActionConstants } from "../constants";
import { SoundConstants } from "../constants/SoundConstants";

export class SoundUtil {
    chickSound: any;
    static instance: SoundUtil;

    static getInstance(): SoundUtil {
        if (!this.instance)
            this.instance = new SoundUtil;
        return this.instance;
    }

    static handleAction(args: any[]) {
        this.getInstance().handleAction(args);
    }

    private constructor() {
        const Howl = (window as any).Howl;
        this.chickSound = new Howl({ src: [SoundConstants.ChickSound] });
    }

    handleAction(args: any[]) {
        const action: string = args.shift();
        switch (action) {
            case ActionConstants.ActionPlay:
                this.playSound(args);
                break;
            default:
                console.log('SoundUtil performSoundAction', action, args);
                break;
        }
    }

    playSound(args: any[]) {
        switch (args.shift()) {
            case ActionConstants.SoundChick:
                this.playChickSound();
                break;
            default:
                console.log('SoundUtil playSound', args);
                break;
        }
    }

    playChickSound() {
        this.chickSound.play();
    }

}
