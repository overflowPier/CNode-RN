import React from 'react';
import {
  View, 
  TouchableHighlight, 
  Text, 
  Image, 
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {
  ALL, 
  GOOD, 
  SHARE, 
  JOB
} from './ArticleTypes.js';

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
         {this.state.navs.map((item, index) => <TouchableHighlight
         		key={'nav' + index}
            style={styles.navItem}
            underlayColor={'#CCC'}
         		onPress={() => {clickNav(item.label)}}
         	>
            <Text style={styles.navItemText} color={selectedType == item.label.toUpperCase() ? '#222' : '#999'}>{item.text}</Text>
          </TouchableHighlight>)
         }
      </View>
    )
  }
}

const styles = StyleSheet.create({
	header: {
		height: 60,
    paddingTop: 23,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',		
		backgroundColor: '#F4F4F4',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
	},
	navItem: {
    flex: 1
	},
  navItemText: {
    flex: 1,
    lineHeight: 27,
    textAlign: 'center',
    paddingBottom: 10,
    color: '#999'
  },
  navItemActive: {
    color: '#222'
  }
})