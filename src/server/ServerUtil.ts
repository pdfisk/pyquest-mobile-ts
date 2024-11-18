import { UrlConstants } from "../constants/UrlConstants";

export class ServerUtil {

    static getHost() {
        if (window.location.host.startsWith(UrlConstants.local9080))
            return this.wrapHttpUrl(UrlConstants.local9080);
        else if (window.location.host.startsWith(UrlConstants.local9081))
            return this.wrapHttpUrl(UrlConstants.https);
        else
            return this.wrapHttpsUrl(UrlConstants.heroku);
    }

    static getUrl(service: string) {
        const host = this.getHost();
        return `${host}/${service}`;
    }

    static getUrlWithId(service: string, id: number) {
        return `${this.getUrl(service)}/${id}`;
    }

    static methodHasBody(method: string): boolean {
        return (window as any).qx.util.Request.methodAllowsRequestBody(method);
    }

    static serializeData(req: any, data: any): string {
        return req._serializeData(data);
    }

    static wrapHttpUrl(url: string): string {
        return this.wrapUrl(UrlConstants.http, url);
    }

    static wrapHttpsUrl(url: string): string {
        return this.wrapUrl(UrlConstants.https, url);
    }

    static wrapUrl(http: string, url: string): string {
        return `${http}://${url}/api`;
    }

}
