import { ReducerBuilder } from 'redux-ts'
import * as Action from '../actions'

export const productReducer = new ReducerBuilder()

    .init({
        detail: null
    })

    .handle(Action.SetProductDetail, (state, action) => {
        return {
            ...state,
            detail: action.detail
        }
    })

    .build();