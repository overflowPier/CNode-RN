import React from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {ALL, GOOD, SHARE, JOB} from './ArticleTypes.js'

export default class CNHeader extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      navs: [{
        text: '全部',
        label: ALL
      }, {
        text: '精华',
        label: GOOD
      }, {
        text: '分享',
        label: SHARE
      }, {
        text: '招聘',
        label: JOB
      }]
    }
  }

  static propTypes = {
    selectedType: PropTypes.string.isRequired,
    clickNav: PropTypes.func.isRequired
  }

  render() {
    const {selectedType, clickNav} = this.props;
    return (
      <View style={styles.header}>	
         {this.state.navs.map((item, index) => <Button 
         		style={{fontSize: 14 }}
         		title={item.text}
            color={selectedType == item.label.toUpperCase() ? '#222' : '#999'}
         		key={'nav' + index}
         		onPress={() => {clickNav(item.label)}}
         	/>)
         }
      </View>
    )
  }
}

const styles = StyleSheet.create({
	header: {	
		paddingLeft: 20,
		paddingRight: 20,
		height: 60,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		backgroundColor: '#F4F4F4',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
	},
	navItem: {
		color: '#666',
    fontSize: 14
	},
  navItemActive: {
    color: '#222'
  }
})