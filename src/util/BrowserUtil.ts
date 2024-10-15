import { UrlConstants } from "../constants";

export class BrowserUtil {

    static detectDesktopBrowser(): boolean {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return false;
        } else {
            return true;
        }
    }

    static openNewTab(url: string) {
        window.open(url, '_blank');
    }

    static readInfoData(fn: Function) {
        fetch(UrlConstants.infoData)
            .then(response => response.json())
            .then(data => fn(data));
    }

}
