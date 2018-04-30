import React from 'react';
import PropTypes from 'prop-types';
var _omit = require('lodash/omit');

var textProps = [
  'fontFamily',
  'color',
  'size',
  'height',
  'spacing',
  'bold',
  'underline',
  'decoration',
  'uppercase',
  'center'
]

function getStyleFromProps(props) {
  const style = {
    fontFamily: props.fontFamily,
    color: props.color,
    fontSize: props.size,
    letterSpacing: props.spacing,
    textDecoration: props.decoration,
  }

  // Bold font-weight
  if (props.bold) {
    style.fontWeight = 'bold'
  }

  // Underline font-weight
  if (props.underline) {
    if (style.textDecoration) {
      style.textDecoration += ' underline'
    }
    else {
      style.textDecoration = 'underline'
    }
  }

  // Uppercase text-transform
  if (props.uppercase) {
    style.textTransform = 'uppercase'
  }

  // Center text-align
  if (props.center) {
    style.textAlign = 'center'
  }

  var height = props.height

  // sanitize lineHeight when it is a number
  if (typeof height === 'number') {
    style.lineHeight = height + 'px'
  }
  else if (typeof height === 'string') {
    style.lineHeight = height
  }

  return style
}

function getNonStyleProps(props) {
  return _omit(props, textProps)
}

class Text extends React.PureComponent {
  static propTypes = {
    bold: PropTypes.bool,
    underline: PropTypes.bool,
    center: PropTypes.bool,
    color: PropTypes.string,
    decoration: PropTypes.string,
    fontFamily: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    refNode: PropTypes.func,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tag: PropTypes.string,
    uppercase: PropTypes.bool,
  }

  static defaultProps = {
    tag: 'span',
  }

  render() {
    var styleFromProps = getStyleFromProps(this.props)
    var propsToPass = getNonStyleProps(this.props)

    var style = Object.assign({}, styleFromProps, this.props.style)
    propsToPass.style = style

    // No need to pass the tag prop down
    delete propsToPass.tag

    // Use refNode pattern to pass back the DOM's node
    if (propsToPass.refNode) {
      propsToPass.ref = propsToPass.refNode
      delete propsToPass.refNode
    }

    return React.createElement(this.props.tag, propsToPass)
  }
}

export default Text;
