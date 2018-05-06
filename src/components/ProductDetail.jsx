import * as React from 'react'
import PropTypes from "prop-types";

import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { GetProductDetail } from '../actions'
import { CircularProgress, Snackbar, Paper } from 'material-ui'

import ImageGalleryBox from './product/imageGalleryBox';
import ContentBox from './product/contentBox';

function mapStateToProps(state) {
    return {
        productDetail: state.product.detail
    };
}

class ProductDetailComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedVariant: null
        }
    }

    componentWillMount() {
        this.props.dispatch(new GetProductDetail())
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.productDetail !== nextProps.productDetail && !!nextProps.productDetail) {
            this.setState({
                selectedVariant: nextProps.productDetail.productVariants[0]
            })
        }
    }

    render() {
        let { productDetail } = this.props
        let { selectedVariant } = this.state

        return (
            <Paper style={{ display: "flex", padding: 50 }}>
                <ImageGalleryBox imageList={selectedVariant ? selectedVariant.images : []} />
                <ContentBox productDetail={productDetail} />
            </Paper>
        )
    }
}

ProductDetailComponent.propTypes = {
    productDetail: PropTypes.object
};

export const ProductDetail = connect(mapStateToProps)(ProductDetailComponent)