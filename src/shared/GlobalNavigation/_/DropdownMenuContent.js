import React from 'react';
import PropTypes from 'prop-types';

import { Row, View } from 'constelation-view'
import Event_ from 'constelation-event_'
import Style_ from 'constelation-style_'
import Space from 'constelation-space'

import COLOR from '@instrument/nike/COLOR'
import { Link } from 'react-router-dom'
import ContentLink from './ContentLink'

import Fade from '../../Fade'

import { css } from 'emotion';

const myStyle = css`
  color: hotpink;
  background-color: #f7f7f7;
`;

export default class DropdownMenuContent extends React.Component {

  static contextTypes = {
    isMenuVisible: PropTypes.bool,
    showMenu: PropTypes.func,
    hideMenu: PropTypes.func,
    showMenuWithId: PropTypes.func,
  }

  handleHover = (isHovered) => {
    if ( isHovered ) {
      this.context.showMenu()
    }
    else {
      this.context.hideMenu()
    }
  }

  render() {
    return (
      <Fade
        position='absolute'
        top='calc(100% + 1px)'
        left={0}
        right={0}
        zIndex={3}
      >
        {
          this.context.isMenuVisible && (
            <Event_
              onHover={this.handleHover}
            >
              <Row
                className={myStyle}
                width='100%'
                paddingVertical={44}
                justify='center'
              >
                {
                  this.props.sections && this.props.sections.map((section, index) => (
                    <View
                      key={index}
                      paddingHorizontal={40}
                    >
                      {section.path ? (
                        <Link
                          to={section.path}
                          onClick={this.props.onLinkClick}
                        >
                          <span>
                            {section.label}
                          </span>
                        </Link>
                      ) : (
                        <span>
                          {section.label}
                        </span>
                      )}

                      <Space size={16} />

                      {
                        section.links.map((link, linkIndex) => (
                          <React.Fragment key={linkIndex}>
                            <ContentLink {...link} />
                            <Space size={4} />
                          </React.Fragment>
                        ))
                      }
                    </View>
                  ))
                }
              </Row>
            </Event_>
          )
        }
      </Fade>
    )
  }
}
