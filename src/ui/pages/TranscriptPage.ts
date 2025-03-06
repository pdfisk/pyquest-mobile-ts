import { ActionConstants, EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { IStdOut } from '../../interfaces/IStdOut';
import { MessageBus } from "../../messages";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { VmApi } from '../../vm/api/VmApi';
import { DebugUtil } from '../../vm/util/DebugUtil';
import { AbstractTextPage } from "./abstract/AbstractTextPage";

export class TranscriptPage extends AbstractTextPage implements IStdOut {
    stopButton: QxButton | null = null;
    static instance: TranscriptPage;

    static getInstance (): TranscriptPage {
        if ( !this.instance )
            this.instance = new TranscriptPage();
        return this.instance;
    }

    static clear () {
        this.getInstance().clear();
    }

    static getValue (): string {
        return this.getInstance().getValue();
    }

    static prn ( text: string ) {
        this.getInstance().prn( text );
    }

    static setValue ( text: string ) {
        this.getInstance().setValue( text );
    }

    private constructor () {
        super();
        this.setTitle( LabelConstants.PageTranscript );
        MessageBus.subscribe( EventConstants.TranscriptClear, this.clear, this );
        VmApi.setStdOut( this );
    }

    defaultButtons (): string[] {
        return [
            LabelConstants.ButtonLabelClear,
            LabelConstants.ButtonLabelDetails,
            LabelConstants.ButtonLabelStop
        ];
    }

    onAppear () {
        if ( this.hasAppeared )
            return;
        super.onAppear();
        this.stopButton = this.buttonbar.getButtonFromLabel( LabelConstants.ButtonLabelStop );
    }

    onClear () {
        this.clear();
    }

    onDetails () {
        this.showDetails();
    }

    onStop () {
        DebugUtil.log( 'TranscriptPage onStop' );
    }

    onTap ( action: string ) {
        switch ( action ) {
        case ActionConstants.ActionClear:
            this.onClear();
            break;
        case ActionConstants.ActionDetails:
            this.onDetails();
            break;
        case ActionConstants.ActionStop:
            this.onStop();
            break;
        default:
            DebugUtil.log( 'TranscriptPage onTap', action );
            break;
        }
    }

    setAdjustedWidthAndHeight ( adjustedWidth: number, adjustedHeight: number ): void {
    }

}
