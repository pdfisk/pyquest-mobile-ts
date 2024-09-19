import { ObjectRegistry } from "../../util/ObjectRegistry";

export class HandlerBase {

    getOwner(ownerId: number): any {
        return ObjectRegistry.getId(ownerId);
    }

}
