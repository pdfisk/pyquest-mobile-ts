import { UrlConstants } from "../constants/UrlConstants";

export class ServerUtil {

  static  getHost() {
        if (window.location.host.startsWith(UrlConstants.local8082))
            return UrlConstants.local9080;
        else if (window.location.host.startsWith(UrlConstants.local8083))
            return UrlConstants.local9081;
        else
            return UrlConstants.heroku;
    }

   static getUrl(service: string) {
        const host = this.getHost();
        return (window.qx as any).lang.String.format('%1/%2', [host, service]);
    }

   static getUrlWithId(service: string, id: number) {
        return (window.qx as any).lang.String.format('%1/%2', [this.getUrl(service), id]);
    }

}
