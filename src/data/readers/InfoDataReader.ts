import { InfoData } from "../static/InfoData";

export class InfoDataReader {

    static readData(fn: Function) {
        fn(InfoData.allInfoData);
    }

}
