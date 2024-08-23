import { ObjectRegistry } from "../../util/ObjectRegistry";

export class HandlerBase {

    getOwner(ownerId: number) {
        return ObjectRegistry.getId(ownerId);
    }

}
