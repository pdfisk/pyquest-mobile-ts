import { UrlConstants } from "../constants";

export class BrowserUtil {

    static detectDesktopBrowser(): boolean {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return false;
        } else {
            return true;
        }
    }

    static getAppNameOrNull(): string | null {
        const map: any = (window as any).qx.util.Uri.parseUri(document.baseURI);
        if (!map.queryKey) return null;
        const app = map.queryKey.app;
        return app ? app : null;
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
