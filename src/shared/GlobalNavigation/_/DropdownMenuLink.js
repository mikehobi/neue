import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { View } from 'constelation-view'
import Event_ from 'constelation-event_'
import Style_ from 'constelation-style_'

import COLOR from '@instrument/nike/COLOR'

const style = {
  cursor: 'pointer',
}

class DropdownMenuLink extends React.Component {
  handleHover = (isHovered) => {
    if (isHovered) {
      this.context.showMenuWithId(this.props.id)
    }
  }

  handleClick = () => {
    this.context.hideMenu()
  }

  render() {
    return (
      <Event_ onHover={this.handleHover}>
        <View
          paddingHorizontal={20}
          paddingVertical={24}
          style={style}
        >
          <Link
            to={this.props.path}
            onClick={this.handleClick}
            style={{color: '#111', textDecoration: 'none'}}
          >
            {this.props.label}
          </Link>

          <Style_
            backgroundColor={COLOR.DARK}
            opacity={(this.context.selectedMenuId === this.props.id && this.context.isMenuVisible) ? 1 : 0}
            transition='opacity 100ms ease'
          >
            <View
              position='absolute'
              left={0}
              right={0}
              bottom={-1}
              height={2}
            />
          </Style_>
        </View>
      </Event_>
    )
  }
}

// From GlobalNavigation
DropdownMenuLink.contextTypes = {
  isMenuVisible: PropTypes.bool,
  hideMenu: PropTypes.func,
  showMenuWithId: PropTypes.func,
  selectedMenuId: PropTypes.string,
  setSelectedMenuId: PropTypes.func,
};

export default DropdownMenuLink
