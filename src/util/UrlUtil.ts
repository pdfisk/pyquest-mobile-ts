import { UrlConstants } from '../constants/UrlConstants';

export class UrlUtil {

    static isLocalhost(): boolean {
        const hostname: string = (window as any).location.hostname;
        return hostname.startsWith(UrlConstants.local) || hostname.endsWith(UrlConstants.local);
    }

}
