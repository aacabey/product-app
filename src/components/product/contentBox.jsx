import * as React from 'react';
import PropTypes from "prop-types";

import ReactStars from 'react-stars';
import { Tab, Tabs } from 'material-ui';

const ContentBox = ({ productDetail }) => {
    if (!productDetail) return null;

    return (
        <div>
            <h2>{productDetail.productTitle}</h2>
            <ReactStars name="star" count={5}></ReactStars>
            <div>
                <strong>
                    <span>{productDetail.baremList[0].price} TL</span>
                </strong>
                <span> /Adet</span>
            </div>
            <span>{productDetail.baremList[0].minimumQuantity} Adet (Minimum Sipariş Adedi)</span>
            <div style={{ marginBottom: 25, marginTop: 25 }}>
                {
                    productDetail.selectableAttributes.map((attribute, index) => {
                        return <div key={attribute.name} style={{ display: "flex", alignItems: "flex-end", padding: 5 }}>
                            <span style={{ width: 55 }}>{attribute.name}: </span>
                            <Tabs key={attribute.name + index} value={attribute.values[0]} style={{ flexBasis: "100%" }}>
                                {
                                    attribute.values.map((value, index) => {
                                        return <Tab
                                            key={value + index}
                                            label={value}
                                            value={value}
                                            onClick={() => { }}
                                            style={{ textTransform: "none" }} />
                                    })
                                }
                            </Tabs>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

ContentBox.propTypes = {
    productDetail: PropTypes.object
};

export default ContentBox;