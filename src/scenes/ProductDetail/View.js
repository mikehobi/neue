import React from 'react';

import omit from 'lodash/omit'

var propsToOmit = [
  'align',
  'alignSelf',
  'alignContent',
  'alignHorizontal',
  'alignVertical',
  'justify',
  'bottom',
  'flex',
  'wrap',
  'grow',
  'shrink',
  'basis',
  'horizontal',
  'height',
  'left',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'order',
  'overflow',
  'overflowX',
  'overflowY',
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'pointerEvents',
  'position',
  'right',
  'top',
  'width',
  'zIndex',
  'marginHorizontal',
  'marginVertical',
  'paddingHorizontal',
  'paddingVertical',
  'style',
  'inlineStyle',
  'tag',
  'overflowScrolling',
  'hidden',
  'inline',
  'fit',
  'center',
  'absoluteFill',
  'hitSlop',
  'hitSlopVertical',
  'hitSlopHorizontal',
  'hitSlopTop',
  'hitSlopRight',
  'hitSlopBottom',
  'hitSlopLeft',
  'refNode',
];
var alignHorizontalAlias = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
var alignVerticalAlias = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
};

function getStyleFromProps(props, isHorizontal) {
  return {
      alignSelf: props.alignSelf,
      alignItems: getAlignItems(props, isHorizontal),
      alignContent: props.alignContent,
      bottom: checkAbsoluteFill(props.bottom, props),
      display: props.hidden ? 'none' : (props.inline ? 'inline-flex' : 'flex'),
      flex: props.flex,
      flexDirection: isHorizontal ? 'row' : 'column',
      flexWrap: props.wrap,
      flexGrow: props.grow === true ? 1 : props.grow,
      flexShrink: props.shrink,
      flexBasis: props.basis,
      height: props.fit ? '100%' : props.height,
      justifyContent: getJustifyContent(props, isHorizontal),
      left: checkAbsoluteFill(props.left, props),
      margin: props.margin,
      marginBottom: props.marginBottom || props.marginVertical,
      marginLeft: props.marginLeft || props.marginHorizontal,
      marginRight: props.marginRight || props.marginHorizontal,
      marginTop: props.marginTop || props.marginVertical,
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      minHeight: props.minHeight,
      minWidth: props.minWidth,
      order: props.order,
      overflow: props.overflow,
      overflowX: props.overflowX,
      overflowY: props.overflowY,
      padding: props.padding,
      paddingBottom: props.paddingBottom || props.paddingVertical,
      paddingLeft: props.paddingLeft || props.paddingHorizontal,
      paddingRight: props.paddingRight || props.paddingHorizontal,
      paddingTop: props.paddingTop || props.paddingVertical,
      pointerEvents: props.pointerEvents,
      position: props.absoluteFill === true ? 'absolute' : props.position,
      right: checkAbsoluteFill(props.right, props),
      top: checkAbsoluteFill(props.top, props),
      width: props.fit ? '100%' : props.width,
      WebkitOverflowScrolling: props.overflowScrolling,
      zIndex: props.zIndex,
  };
}

function getAlignItems(props, isHorizontal) {
  if (props.align) {
      return props.align;
  }
  else if (isHorizontal && props.alignVertical) {
      return alignVerticalAlias[props.alignVertical];
  }
  else if (props.alignHorizontal) {
      return alignHorizontalAlias[props.alignHorizontal];
  }
  else if (props.center === true) {
      return 'center';
  }
  else if (isHorizontal) {
      return 'flex-start';
  }
  else {
      return 'stretch';
  }
}
function getJustifyContent(props, isHorizontal) {
  if (props.justify) {
      return props.justify;
  }
  else if (isHorizontal && props.alignHorizontal) {
      return alignHorizontalAlias[props.alignHorizontal];
  }
  else if (props.alignVertical) {
      return alignVerticalAlias[props.alignVertical];
  }
  else if (props.center === true) {
      return 'center';
  }
}
function checkAbsoluteFill(value, props) {
  if (value != null) {
      return value;
  }
  return props.absoluteFill === true ? 0 : undefined;
}
class View extends React.Component {
  render() {
    var styleFromProps = getStyleFromProps(this.props, true);
    var propsToPass = omit(this.props, propsToOmit);
    propsToPass.style = Object.assign({}, styleFromProps, this.props.style)

    return React.createElement(
      this.props.tag,
      propsToPass,
      this.props.children
    )
  }
}

View.defaultProps = {
  tag: 'div',
  shrink: 0,
  position: 'relative',
  alignContent: 'flex-start',
  alignVertical: true,
};

export const Row = (props) => (
  <View {...props}>
    {props.children}
  </View>
)

Row.defaultProps = {
  tag: 'div',
  shrink: 0,
  position: 'relative',
  alignContent: 'flex-start',
  alignHorizontal: true,
};


export default View;
