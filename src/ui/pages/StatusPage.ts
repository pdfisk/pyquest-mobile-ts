import { MobileVersion, ServerConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { Server } from "../../server/Server";
import { VmVersion } from '../../vm/shared/constants/VmVersion';
import { AbstractTextPage } from "./abstract/AbstractTextPage";

export class StatusPage extends AbstractTextPage {
    static instance: StatusPage;

    static getInstance (): StatusPage {
        if ( !this.instance )
            this.instance = new StatusPage();
        return this.instance;
    }

    private constructor () {
        super();
        this.setTitle( LabelConstants.PageStatus );
    }

    getClientTimestamp (): string {
        return `       Updated: ${ MobileVersion.timestamp }`;
    }

    getClientVersion (): string {
        return `Client Version: ${ MobileVersion.version }`;
    }

    getVmTimestamp (): string {
        return `       Updated: ${ VmVersion.timestamp }`;
    }

    getVmVersion (): string {
        return `    Vm Version: ${ VmVersion.version }`;
    }

    onAppear () {
        if ( this.hasAppeared )
            return;
        super.onAppear();
        this.showStatus();
        const fn = ( reply: any ) => {
            const response = reply.getResponse();
            const version = response.version;
            const timestamp = response.updated;
            this.showServerStatus( version, timestamp );
        };
        Server.sendGetRequest( ServerConstants.ServerStatus, {}, fn );
    }

    setAdjustedWidthAndHeight ( adjustedWidth: number, adjustedHeight: number ): void {
    }

    showStatus () {
        this.prn( this.getClientVersion() );
        this.prn( this.getClientTimestamp() );
        this.newline();
        this.prn( this.getVmVersion() );
        this.prn( this.getVmTimestamp() );
        this.newline();
    }

    showServerStatus ( version: string, timestamp: string ) {
        this.prn( `Server Version: ${ version }` );
        this.prn( `       Updated: ${ timestamp }` );
        this.newline();
    }

}
