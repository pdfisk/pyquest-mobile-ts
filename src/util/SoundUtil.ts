import { SoundConstants } from "../constants/SoundConstants";

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

    playChickSound() {
        this.chickSound.play();
    }


}
