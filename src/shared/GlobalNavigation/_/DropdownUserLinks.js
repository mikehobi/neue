// @flow
import { Row, View } from 'constelation-view'
import { observer } from 'mobx-react'
import Event_ from 'constelation-event_'
import React from 'react'
import Style_ from 'constelation-style_'

import COLOR from '@instrument/nike/COLOR'
import FadeIn from 'shared/FadeIn'
import Text from 'shared/Text'

const userMenuLinks = [
  { label: 'Inbox', hasNotification: true },
  { label: 'My Orders', hasNotification: true },
  { label: 'Wish List' },
  { label: 'My Activity', hasNotification: true },
  { label: 'My Nike+ Pass' },
  { label: 'My Events' },
  { label: 'Profile' },
  { label: 'Account Settings' },
  { label: 'Log Out' },
]

@observer
export default class DropdownUserLinks extends React.Component {
  render() {
    return (
      <View
        position='absolute'
        top='100%'
        right={0}
        zIndex={3}
      >
        <FadeIn>
          {
            this.props.isActive && (
              <Event_
                onHover={this.props.onHover}
              >
                <Style_
                  backgroundColor='white'
                  borderBottom={`1px solid ${COLOR.E5}`}
                  borderLeft={`1px solid ${COLOR.E5}`}
                  borderRight={`1px solid ${COLOR.E5}`}
                >
                  <View
                    paddingTop={28}
                    paddingHorizontal={32}
                    width={205}
                    height={342}
                  >
                    {
                      userMenuLinks.map((link, index) => (
                        <Row
                          key={index}
                          align='center'
                          justify='space-between'
                        >
                          <Text
                            size='BODY'
                            height={32}
                          >
                            {link.label}
                          </Text>
                          {
                            link.hasNotification && (
                              <Style_
                                borderRadius='50%'
                                backgroundColor={COLOR.ORANGE}
                              >
                                <View
                                  width={4}
                                  height={4}
                                />
                              </Style_>
                            )
                          }
                        </Row>
                      ))
                    }
                  </View>
                </Style_>
              </Event_>
            )
          }
        </FadeIn>
      </View>
    )
  }
}
