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

    static playSound(sound: string) {
        this.getInstance().playSound(sound);
    }

    private constructor() {
        const Howl = (window as any).Howl;
        this.chickSound = new Howl({ src: [SoundConstants.ChickSound] });
    }

    playSound(sound: string) {
        switch (sound) {
            case ActionConstants.SoundChick:
                this.playChickSound();
                break;
            default:
                console.log('SoundUtil playSound', sound);
                break;
        }
    }

    playChickSound() {
        this.chickSound.play();
    }

}
