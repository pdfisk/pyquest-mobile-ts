import { UrlConstants } from "../constants/UrlConstants";

export class ServerUtil {

    static getHost() {
        if (window.location.host.startsWith(UrlConstants.local8082))
            return UrlConstants.local9080;
        else if (window.location.host.startsWith(UrlConstants.local8083))
            return UrlConstants.local9081;
        else
            return UrlConstants.heroku;
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

}
