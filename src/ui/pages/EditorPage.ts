import { ActionConstants, EventConstants, SessionConstants } from "../../constants";
import { EditorConstants } from "../../constants/EditorConstants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { SessionStatus } from "../../session";
import { HtmlStrUtil } from '../../util/HtmlStrUtil';
import { VmApi } from '../../vm/api/VmApi';
import { DebugUtil } from '../../vm/util/DebugUtil';
import { AbstractPage } from "./abstract/AbstractPage";
import { BoardPage } from "./BoardPage";
import { DetailsPage } from "./DetailsPage";
import { ProjectsPage } from "./ProjectsPage";

export class EditorPage extends AbstractPage {
    ace: any;
    codeObject: string | null;
    editor: any = undefined;
    initValue: string = '';
    name: string = '';
    saveButton: QxButton | null = null;
    storedCode: string = '';
    static instance: EditorPage;

    static getCode (): string {
        return this.getInstance().getCode();
    }

    static getCodeObject (): string | null {
        return this.getInstance().getCodeObject();
    }

    static getInstance (): EditorPage {
        if ( !this.instance )
            this.instance = new EditorPage();
        return this.instance;
    }

    static setCode ( code: string ) {
        this.getInstance().setCode( code );
    }

    static setCodeObject ( codeObject: string | null ) {
        this.getInstance().setCodeObject( codeObject );
    }

    static setName ( name: string ) {
        this.getInstance().setName( name );
    }

    private constructor () {
        super();
        this.ace = ( window as any ).ace;
        this.codeObject = null;
        this.setTitle( LabelConstants.PageEditor );
        MessageBus.subscribe( EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this );
    }

    defaultButtons (): string[] {
        return [
            LabelConstants.ButtonLabelRun,
            LabelConstants.ButtonLabelEval,
            LabelConstants.ButtonLabelClear,
            LabelConstants.ButtonLabelDetails,
            LabelConstants.ButtonLabelSave
        ];
    }

    disableSave () {
        this.saveButton?.setEnabled( false );
    }

    enableSave () {
        this.saveButton?.setEnabled( true );
    }

    getCode (): string {
        if ( this.editor )
            return this.editor.getValue();
        return '';
    }

    getCodeObject (): string | null {
        if ( this.storedCode != this.getCode() ) {
            this.codeObject = null;
            this.storedCode = this.getCode();
        }
        return this.codeObject;
    }

    isContentReady (): boolean {
        return this.editor !== undefined;
    }

    onAppear () {
        if ( this.hasAppeared )
            return;
        super.onAppear();
        this.saveButton = this.buttonbar.getButtonFromLabel( LabelConstants.ButtonLabelSave );
        if ( !SessionStatus.isLoggedIn() )
            this.disableSave();
        const cfg: any = { mode: EditorConstants.ModePython };
        this.editor = this.ace.edit( this.getContentElement(), cfg );
        this.setCode( this.initValue );
        if ( this.deferredHeight > 0 )
            this.setEditorHeight( this.deferredHeight );;
    }

    onClear () {
        this.setName( '' );
        this.setCode( '' );
        this.setCodeObject( null );
    }

    onDetails () {
        this.showDetails();
    }

    onEval () {
        const src = this.getCode();
        VmApi.run( src );
    }

    onRun () {
        const src = this.getCode();
        VmApi.run( src );
        this.showTranscript();
    }

    onSave () {
        const category = DetailsPage.getCategory();
        const description = DetailsPage.getDescription();
        const code = this.getCode();
        const codeObject = this.getCodeObject();
        ProjectsPage.save( category, description, code, codeObject );
    }

    onSessionStatusChanged ( message: any ) {
        const data: any = message.getData();
        const statusObj: any = data[0];
        const status: string = statusObj.status;
        switch ( status ) {
        case SessionConstants.SessionLoggedInAsAdmin:
            this.enableSave();
            break;
        default:
            this.disableSave();
            break;
        }
    }

    onTap ( action: string ) {
        switch ( action ) {
        case ActionConstants.ActionClear:
            this.onClear();
            break;
        case ActionConstants.ActionDetails:
            this.onDetails();
            break;
        case ActionConstants.ActionEval:
            this.onEval();
            break;
        case ActionConstants.ActionRun:
            this.onRun();
            break;
        case ActionConstants.ActionSave:
            this.onSave();
            break;
        default:
            DebugUtil.log( 'EditorPage onTap', action );
            break;
        }
    }

    setAdjustedHeight ( adjustedHeight: number ): void {
        this.setEditorHeight( adjustedHeight );
    }

    setAdjustedWidthAndHeight ( adjustedWidth: number, adjustedHeight: number ): void {
    }

    setAdjustedWidth ( adjustedHeight: number ): void {
    }

    setCode ( value: string ) {
        this.storedCode = value;
        if ( this.editor ) {
            this.editor.setValue( value );
            this.setLine( 0 );
        }
        else
            this.initValue = value;
        this.setRange( 0, 0, 0, 0 );
    }

    setCodeObject ( value: string | null ) {
        this.codeObject = value;
    }

    setEditorHeight ( height: number ) {
        this.editor.container.style.height = HtmlStrUtil.asPixels( height );
    }

    setLine ( line: number ) {
        if ( this.editor )
            this.editor.moveCursorTo( line - 1, 0 );
    }

    setName ( name: string ) {
        BoardPage.setName( name );
        this.name = name;
        if ( this.name.length > 0 )
            this.setTitle( `${ LabelConstants.PageEditor } (${ name })` );
        else
            this.setTitle( LabelConstants.PageEditor );
    }

    setRange ( startRow: number, startCol: number, endRow: number, endCol: number ) {
        if ( this.editor )
            this.editor.selection.setRange( new this.ace.Range( startRow, startCol, endRow, endCol ) );
    }

}
