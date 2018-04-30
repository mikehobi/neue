import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'constelation-view';
// import Text from 'constelation-text';
// import Space from 'constelation-space';
// import Style_ from 'constelation-style_';
// import Event_ from 'constelation-event_';

const productFetch = (productString) => {
  console.log(productString)
  return {
    name: productString,
    price: "hundred bucks",
    category: "shoe"
  }
}

class ProductDetail extends React.Component {

  static childContextTypes = {
    product: PropTypes.object,
  }

  getChildContext() {
    return {
      product: productFetch(this.props.match.params.product),
    };
  }

  render() {
    return (
      <React.Fragment>
        <ProductTopSection />
      </React.Fragment>
    )
  }
}

class ProductTopSection extends React.Component {

  static contextTypes = {
    product: PropTypes.object,
  }

  render() {
    return (
      <View className="hi">
        {this.context.product.name}<br />
        {this.context.product.price}<br />
        {this.context.product.category}
      </View>
    )
  }
}

export default ProductDetail;
