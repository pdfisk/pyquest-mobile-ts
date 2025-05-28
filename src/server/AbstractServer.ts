import { ServerConstants } from "../constants/ServerConstants";
import { DebugUtil } from '../util/DebugUtil';
import {ServerUtil} from "../util/ServerUtil";

export class AbstractServer {

    sendDeleteRequest ( url: string, data: any, fn: Function ) {
        this.sendServerRequest( url, ServerConstants.MethodDelete, data, fn );
    }

    sendGetRequest ( url: string, data: any, fn: Function ) {
        this.sendServerRequest( url, ServerConstants.MethodGet, data, fn );
    }

    sendPostRequest ( url: string, data: any, fn: Function ) {
        this.sendServerRequest( url, ServerConstants.MethodPost, data, fn );
    }

    sendPutRequest ( url: string, data: any, fn: Function ) {
        this.sendServerRequest( url, ServerConstants.MethodPut, data, fn );
    }

    sendServerRequest ( url: string, method: string, data: any, fn: Function ) {
        const req = new ( window as any ).qx.io.request.Xhr;
        if ( ServerUtil.methodHasBody( method ) )
            req.setRequestData( data );
        else
            url = `${ url }?${ ServerUtil.serializeData( req, data ) }`;
        req.setUrl( url );
        req.setMethod( method );
        req.setRequestHeader( 'Content-Type', 'application/json' );
        req.addListener( "success", ( e: any ) => {
            var req = e.getTarget();
            if ( fn )
                fn( req );
        }, this );
        req.addListener( 'failure', ( e: any ) => {
            DebugUtil.log( 'failure', e );
        }, this );
        req.send();
    }

}
