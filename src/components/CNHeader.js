import React from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';

export default class CNHeader extends React.Component {
  render() {
  	let navs = [{
  		text: '全部'
  	}, {
  		text: '精华'
  	}, {
  		text: '分享'
  	}, {
  		text: '招聘'
  	}]

    return (
      <View style={styles.header}>	
         {navs.map((item, index) => <Button 
         		style={styles.navItem}
         		title={item.text}
         		color="#CCC"
         		key={'nav' + index}
         		onPress={() => {console.log('--------ssss')}}
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
		paddingBottom: 5,
		height: 80,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		backgroundColor: '#444'
	},
	navItem: {
		color: '#999'
	}
})