import { ActionConstants } from "../constants";
import { SoundConstants } from "../constants/SoundConstants";

export class SoundManager {
    chickSound: any;
    static instance: SoundManager;

    static getInstance(): SoundManager {
        if (!this.instance)
            this.instance = new SoundManager;
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
                console.log('SoundManager playSound', sound);
                break;
        }
    }

    playChickSound() {
        this.chickSound.play();
    }

}
