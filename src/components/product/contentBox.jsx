import * as React from 'react';
import PropTypes from "prop-types";

import ReactStars from 'react-stars';
import { Tab, Tabs, RaisedButton } from 'material-ui';
import { Form, TextField } from 'form-ts'

const ContentBox = ({ productDetail, selectedVariant }) => {
    if (!productDetail) return null;

    return (
        <div>
            <h2>{productDetail.productTitle}</h2>
            <ReactStars name="star" count={5}></ReactStars>
            <div>
                <strong>
                    <span>{productDetail.baremList[productDetail.baremList.length - 1].price} TL - {productDetail.baremList[0].price} TL</span>
                </strong>
                <span> /Adet</span>
            </div>
            <span>{productDetail.baremList[0].minimumQuantity} Adet (Minimum Sipariş Adedi)</span>
            <div style={{ marginBottom: 25, marginTop: 25 }}>
                {
                    productDetail.selectableAttributes.map((attribute, index) => {
                        let value = selectedVariant.attributes.find(x => x.name == attribute.name).value;
                        return <div key={attribute.name} style={{ display: "flex", alignItems: "flex-end", padding: 5 }}>
                            <span style={{ width: 55 }}>{attribute.name}: </span>
                            <Tabs key={attribute.name + index} value={value} style={{ flexBasis: "100%" }}>
                                {
                                    attribute.values.map((value, index) => {
                                        return <Tab
                                            key={value + index}
                                            label={value}
                                            value={value}
                                            onClick={() => this.props.changeSelectedVariant()}
                                            style={{ textTransform: "none" }} />
                                    })
                                }
                            </Tabs>
                        </div>
                    })
                }
            </div>
            <div>
                <Form
                    errorMessages={{
                        Required: "Lütfen adet giriniz.",
                        LessThanMinValue: "{0} adetten daha az alamazsınız.",
                        MoreThanMaxValue: "{0} adetten daha fazla alamazsınız.",
                        InvalidNumber: "Lütfen geçerli bir sayı giriniz."
                    }}
                    style={{ padding: "unset" }}>
                    <TextField
                        name="quantity"
                        floatingLabelText="Adet"
                        defaultValue={productDetail.baremList[0].minimumQuantity}
                        validator={["required", "integer", { min: productDetail.baremList[0].minimumQuantity, max: productDetail.baremList[productDetail.baremList.length - 1].maximumQuantity }]}
                    />
                    <RaisedButton
                        className="add-item"
                        primary={true}
                        label="Sepete Ekle"
                        key="submit" />
                </Form>
            </div>
        </div>
    );
}

ContentBox.propTypes = {
    productDetail: PropTypes.object,
    selectedVariant: PropTypes.object,
    changeSelectedVariant: PropTypes.func
};

export default ContentBox;