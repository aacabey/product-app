import { SyncAction, AsyncAction } from 'redux-ts';
import { ShowLoading, HideLoading, ShowMessage } from './layoutActions'
import ProductService from '../services/mockProductService';

export class GetProductDetail extends AsyncAction {
    constructor() {
        super();
        this.then(dispatch => {
            dispatch(new ShowLoading())
            ProductService.getProductDetail()
                .then(response => {
                    dispatch(new SetProductDetail(response))
                    console.log(response)
                })
                .catch(() => {
                    dispatch(new ShowMessage("Connection problem"))
                    dispatch(new SetProductDetail(null))
                    setTimeout(function () {
                        dispatch(new GetProductDetail())
                    }, 10000);
                })
                .finally(() => {
                    dispatch(new HideLoading())
                })
        })
    }
}

export class SetProductDetail extends SyncAction {
    constructor(detail) {
        super();
        this.detail = detail;
    }
}