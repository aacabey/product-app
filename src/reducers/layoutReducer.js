import { ReducerBuilder } from 'redux-ts'
import * as Action from '../actions'

export const layoutReducer = new ReducerBuilder()

    .init({
        asyncCount: 0,
        message:null
    })

    .handle(Action.ShowLoading, (state) => {
        return {
            ...state,
            asyncCount: state.asyncCount + 1
        }
    })

    .handle(Action.HideLoading, (state) => {
        return {
            ...state,
            asyncCount: state.asyncCount - 1
        }
    })

    .handle(Action.ShowMessage, (state, action) => {
        return {
            ...state,
            message: action.message
        }
    })
    
    .handle(Action.HideMessage, (state, action) => {
        return {
            ...state,
            message: ''
        }
    })

    .build();