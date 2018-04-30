import React from 'react'
import { withRouter } from 'react-router'
import View from 'constelation-view'
import Event_ from 'constelation-event_'
// import Text from 'shared/Text'

// import UIState from 'stores/UIState'
// import prefixLink from 'utils/prefixLink'

const BACKGROUND_IMAGE = 'linear-gradient(rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 86%, rgba(0, 0, 0, 0) 14%)'
const BACKGROUND_REPEAT = 'repeat-x'


class ContentLink extends React.Component {

  static defaultProps = {
    routePushDelay: 300,
  }

  state = {
    isHovered: false,
  }

  handleHover = (isHovered: boolean) => {
    this.setState({isHovered: isHovered})
  }

  handleClick = () => {
    // this.props.onLinkClick()
  }

  render() {
    const propsToPass = {}

    if (this.props.path) {
      if (this.state.isHovered === true) {
        if (propsToPass.style) {
          propsToPass.style.backgroundRepeat = BACKGROUND_REPEAT
          if (!propsToPass.style.backgroundImage) {
            propsToPass.style.backgroundImage = BACKGROUND_IMAGE
          }
        } else {
          propsToPass.style = {backgroundImage: BACKGROUND_IMAGE, backgroundRepeat: BACKGROUND_REPEAT, cursor: 'pointer'}
        }
      } else {
        propsToPass.style = {backgroundImage: null}
      }
    }

    const Content = (
      <span
        key={this.props.linkIndex}
        size='BODY'
        height={24}
        {...propsToPass}
      >
        {this.props.text}
      </span>
    )

    return this.props.path ? (
      <Event_
        onHover={this.handleHover}
        onClick={this.handleClick}
      >
        <View align='flex-start' >
          {Content}
        </View>
      </Event_>
    ) : Content
  }
}

export default withRouter(ContentLink)
