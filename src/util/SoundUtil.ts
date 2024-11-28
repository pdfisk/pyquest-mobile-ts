import { ActionConstants } from "../constants";
import { SoundConstants } from "../constants/SoundConstants";
import { ActionRec } from "../handlers";

export class SoundUtil {
    chickSound: any;
    static instance: SoundUtil;

    static getInstance(): SoundUtil {
        if (!this.instance)
            this.instance = new SoundUtil;
        return this.instance;
    }

    static playChickSound() {
        this.getInstance().playChickSound();
    }

    private constructor() {
        const Howl = (window as any).Howl;
        this.chickSound = new Howl({ src: [SoundConstants.ChickSound] });
    }

    performAction(actionRec: ActionRec) {
        switch (actionRec.action) {
            case ActionConstants.ActionSound:
                this.performSoundAction(actionRec.args);
                break;
            default:
                console.log('performAction action not found', actionRec.action);
                break;
        }
    }

    performSoundAction(args: any) {
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

    playSound(args: any) {
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
