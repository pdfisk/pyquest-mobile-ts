import { UrlConstants } from "../../constants";

export class InfoDataReader {

    static readData(fn: Function) {
        fetch(UrlConstants.infoData)
            .then(response => response.json())
            .then(data => fn(data));
    }

}
