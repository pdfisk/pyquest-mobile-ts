import { VmApi } from "../../api";
import { ServerConstants, Version } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { Server } from "../../server/Server";
import { AbstractTextPage } from "./abstract/AbstractTextPage";

export class StatusPage extends AbstractTextPage {
    static instance: StatusPage;

    static getInstance(): StatusPage {
        if (!this.instance)
            this.instance = new StatusPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageStatus);
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.showStatus();
        const fn = (reply: any) => {
            const response = reply.getResponse();
            const version = response.version;
            const timestamp = response.updated;
            this.showServerStatus(version, timestamp);
        };
        Server.sendGetRequest(ServerConstants.ServerStatus, {}, fn);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    showStatus() {
        this.prn('Client:');
        this.space(3).prn(`  Version: ${Version.version}`);
        this.space(3).prn(`Timestamp: ${Version.timestamp}`);
        this.newline();
        this.prn('Vm:');
        this.space(3).prn(`  Version: ${VmApi.getVersion()}`);
        this.space(3).prn(`Timestamp: ${VmApi.getTimestamp()}`);
        this.newline();
    }

    showServerStatus(version: string, timestamp:string) {
        this.prn('Server:');
        this.space(3).prn(`  Version: ${version}`);
        this.space(3).prn(`Timestamp: ${timestamp}`);
        this.newline();
    }

}
