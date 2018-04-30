import React from 'react'
import PropTypes from 'prop-types';

import { Row } from 'constelation-view'
import Event_ from 'constelation-event_'

import DropdownMenuLink from './DropdownMenuLink'

const links = [
  {
    id: 'men',
    label: 'Men',
    path: '/shop/men',
  },
  {
    id: 'women',
    label: 'Women',
    path: '/shop/women',
  },
  {
    id: 'boys',
    label: 'Boys',
    path: '/shop/boys',
  },
  {
    id: 'girls',
    label: 'Girls',
    path: '/shop/girls',
  },
]

export default class DropdownMenuLinks extends React.Component {

  static contextTypes = {
    hideMenu: PropTypes.func,
  }

  handleHover = (isHovered) => {
    if (!isHovered) {
      this.context.hideMenu()
    }
  }

  render() {
    return (
      <Event_
        onHover={this.handleHover}
      >
        <Row alignHorizontal='center'>
          {
            links.map((link, index) => (
              <DropdownMenuLink
                key={index}
                {...link}
              />
            ))
          }
        </Row>

      </Event_>
    )
  }
}
