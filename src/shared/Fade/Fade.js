import React from 'react'
import TransitionGroupView from 'constelation-transition-group-view'

const fadeStyles = {
  willEnter: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: 'opacity 100ms ease',
  },
  willLeave: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: 'opacity 100ms ease',
  },
}

export default class Fade extends React.Component {
  render() {
    return (
      <TransitionGroupView
        {...fadeStyles}
        enterDuration={100}
        leaveDuration={100}
        {...this.props}
      />
    )
  }
}