/**
 * Action constants define the names of
 * client actions requested by the Python vm.
 */
export class ActionConstants {
    static ActionApply: string = 'apply';
    static ActionAutotab: string = 'autotab';
    static ActionCancel: string = 'cancel';
    static ActionClear: string = 'clear';
    static ActionClearIn: string = 'clear_in';
    static ActionClearOut: string = 'clear_out';
    static ActionDelete: string = 'delete';
    static ActionLogin: string = 'login';
    static ActionLogout: string = 'logout';
    static ActionMoveTile: string = 'move_tile';
    static ActionNew: string = 'new';
    static ActionRefresh: string = 'refresh';
    static ActionRegister: string = 'register';
    static ActionRename: string = 'rename';
    static ActionRun: string = 'run';
    static ActionRunContinuously: string = 'run_continuously';
    static ActionRunSingleStep: string = 'run_single_step';
    static ActionRunStepping: string = 'run_stepping';
    static ActionSave: string = 'save';
    static ActionSelect: string = 'select';
    static ActionSetSize: string = 'set_size';
    static ActionSetTileImage: string = 'set_tile_image';
    static ActionSetTileText: string = 'set_tile_text';
    static ActionStatus: string = 'status';
    static ActionSync: string = 'sync';

    static FunctionGetBoardPanel: string = 'getBoardPanel';
    static FunctionGetEditorPanel: string = 'getEditorPanel';
    static FunctionGetTranscriptPanel: string = 'getTranscriptPanel';
    static FunctionSetActiveTab: string = 'setActiveTab';

    static MoveDirectionDown: string = 'down';
    static MoveDirectionLeft: string = 'left';
    static MoveDirectionRight: string = 'right';
    static MoveDirectionUp: string = 'up';

    static ServiceBoard: string = 'board';
    static ServiceWorkbench: string = 'workbench';

    static TabTranscript: string = 'transcript';
    static TabBoard: string = 'board';

}
