import { UrlConstants } from "../constants";

export class BrowserUtil {

    static detectDesktopBrowser(): boolean {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            return false;
        else
            return true;
    }

    static getAppNameOrNull(): string | null {
        const map: any = (window as any).qx.util.Uri.parseUri(document.baseURI);
        if (!map.queryKey) return null;
        const app = map.queryKey.app;
        return app ? app : null;
    }

    static getPWADisplayMode() {
        if (document.referrer.startsWith('android-app://')) return 'twa';
        if (window.matchMedia('(display-mode: browser)').matches) return 'browser';
        if (window.matchMedia('(display-mode: standalone)').matches) return 'standalone';
        if (window.matchMedia('(display-mode: minimal-ui)').matches) return 'minimal-ui';
        if (window.matchMedia('(display-mode: fullscreen)').matches) return 'fullscreen';
        if (window.matchMedia('(display-mode: window-controls-overlay)').matches) return 'window-controls-overlay';
        return 'unknown';
    }

    static getRelatedApps() {
        if ('getInstalledRelatedApps' in navigator) {
            (navigator as any).getInstalledRelatedApps().then((relatedApps: any) => {
                if (relatedApps.length > 0)
                    return relatedApps;
            });
        }
        return [];
    }

    static openNewTab(url: string) {
        window.open(url, '_blank');
    }

    static readInfoIndex(fn: Function) {
        fetch(UrlConstants.infoIndex)
            .then(response => response.json())
            .then(data => fn(data));
    }

}
