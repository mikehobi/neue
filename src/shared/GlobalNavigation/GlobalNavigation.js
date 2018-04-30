import React from 'react';
import PropTypes from 'prop-types';

import DropdownMenuLinks from './_/DropdownMenuLinks';
import DropdownMenuContent from './_/DropdownMenuContent';

import { View, Row } from 'constelation-view';
import { Space } from 'constelation-space';

import { Text } from '../../styles'

const mensLinks = [ { label: 'Featured', links: [ { text: 'New Releases', }, { text: 'SNKRS', }, { text: 'Launch Calendar', }, { text: 'Nike+', }, { text: 'Customize with NIKEiD', }, { text: 'Summer Essentials', }, { text: 'Fan Gear', }, { text: 'Clearance', }, ], }, { label: 'Shoes', links: [ { text: 'Lifestyle', }, { text: 'Running', }, { text: 'Training & Gym', }, { text: 'Basketball', }, { text: 'Football', }, { text: 'Soccer', }, { text: 'Baseball', }, { text: 'Golf', }, { text: 'Skateboarding', }, { text: 'Tennis', }, { text: 'Sandals & Flip Flops', }, ], }, { label: 'Clothing', links: [ { text: 'Base Layer', }, { text: 'Tops & T-Shirts', }, { text: 'Polos', }, { text: 'Hoodies & Pullovers', }, { text: 'Jackets & Vests', }, { text: 'Pants & Tights', }, { text: 'Shorts', }, { text: 'Surf & Swimwear', }, { text: 'Bags & Backpacks', }, { text: 'Socks', }, { text: 'Accessories', }, ], }, { label: 'Shop by Sport', links: [ { text: 'Running', }, { text: 'Training & Gym', }, { text: 'Basketball', }, { text: 'Football', }, { text: 'Soccer', }, { text: 'Golf', }, { text: 'Skateboarding', }, { text: 'Softball', }, { text: 'Tennis', }, { text: 'Lacrosse', }, { text: 'Track & Field', }, { text: 'Surfing', }, ], }, { label: 'Shop By Brand', links: [ { text: 'Jordan', }, { text: 'Hurley', }, { text: 'Converse', }, { text: 'Nike Sportwear', }, { text: 'NikeLab', }, ], }, ]
const womensLinks = [ { label: 'Featured', links: [ { text: 'New Releases', }, { text: 'SNKRS', }, { text: 'Launch Calendar', }, { text: 'Nike+', }, { text: 'Customize with NIKEiD', }, { text: 'Summer Essentials', }, { text: 'Fan Gear', }, { text: 'Clearance', }, ], }, { label: 'Shoes', links: [ { text: 'Lifestyle', }, { text: 'Running', }, { text: 'Soccer', }, { text: 'Golf', }, { text: 'Training & Gym', }, { text: 'Basketball', }, { text: 'Softball', }, { text: 'Skateboarding', }, { text: 'Tennis', }, { text: 'Sandals & Flip Flops', }, ], }, { label: 'Clothing', links: [ { text: 'Sports Bras', }, { text: 'Tops & T-Shirts', }, { text: 'Polos', }, { text: 'Hoodies & Pullovers', }, { text: 'Jackets & Vests', }, { text: 'Pants & Tights', }, { text: 'Shorts', }, { text: 'Skirts & Dresses', }, { text: 'Surf & Swimwear', }, { text: 'Bags & Backpacks', }, { text: 'Socks', }, { text: 'Accessories', }, ], }, { label: 'Shop by Sport', links: [ { text: 'Running', }, { text: 'Training & Gym', }, { text: 'Basketball', }, { text: 'Soccer', }, { text: 'Golf', }, { text: 'Skateboarding', }, { text: 'Softball', }, { text: 'Tennis', }, { text: 'Lacrosse', }, { text: 'Track & Field', }, { text: 'Surfing', }, { text: 'Yoga', }, ], }, { label: 'Shop By Brand', links: [ { text: 'Jordan', }, { text: 'Hurley', }, { text: 'Converse', }, { text: 'Nike Sportwear', }, { text: 'NikeLab', }, ], }, ]

export const menuSections = {
  men: mensLinks,
  women: womensLinks,
  boys: mensLinks,
  girls: womensLinks,
}

class GlobalNavigation extends React.Component {

  static childContextTypes = {
    isMenuVisible: PropTypes.bool,
    showMenu: PropTypes.func,
    hideMenu: PropTypes.func,
    showMenuWithId: PropTypes.func,
    selectedMenuId: PropTypes.string,
    setSelectedMenuId: PropTypes.func,
  }

  state = {
    isMenuVisible: false,
    selectedMenuId: null,
  }

  menuHideDelay = null

  getChildContext() {
    return {
      isMenuVisible: this.state.isMenuVisible,
      showMenu: this.showMenu,
      showMenuWithId: this.showMenuWithId,
      hideMenu: this.hideMainMenu,
      selectedMenuId: this.state.selectedMenuId,
      setSelectedMenuId: this.setSelectedMenuId,
    };
  }

  showMenu = () => {
    clearTimeout(this.menuHideDelay)
    this.setState({ isMenuVisible: true })
  }

  showMenuWithId = (id) => {
    clearTimeout(this.menuHideDelay)
    this.setState({ isMenuVisible: true, selectedMenuId: id })
  }

  hideMainMenu = () => {
    this.menuHideDelay = setTimeout(() => {
      this.setState({ isMenuVisible: false })
    }, 100)
  }

  setSelectedMenuId = (id) => {
    this.setState({ selectedMenuId: id })
  }

  render() {
    return (
      <View position="relative">
        <Row alignVertical="center">
          <Space size={20} />
          <View flex={1}>
            <Text fontFamily={"trade"} color={['black', 'red', 'blue', 'yellow', 'palevioletred']} lineHeight={1.5}>nike logo</Text>
          </View>
          <DropdownMenuLinks />
          <View flex={1} alignHorizontal="right">user avatar</View>
          <Space size={20} />
        </Row>
        <DropdownMenuContent sections={menuSections[this.state.selectedMenuId]} />
      </View>
    );
  }
}

export default GlobalNavigation;
