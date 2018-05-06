import { SyncAction, AsyncAction } from 'redux-ts'

export class ShowLoading extends SyncAction { }

export class HideLoading extends SyncAction { }

export class ShowMessage extends SyncAction {
    constructor(message) {
        super();
    }
}

export class HideMessage extends SyncAction {
    constructor() {
        super();
    }
}