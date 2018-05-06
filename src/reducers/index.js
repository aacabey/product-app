import { ReducersMapObject } from 'redux';
import { layoutReducer } from "./layoutReducer";
import { productReducer } from './productReducer';


export const reducers = {
    layout: layoutReducer,
    product: productReducer
}