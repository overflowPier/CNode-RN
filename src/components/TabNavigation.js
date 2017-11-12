import React from 'react';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNavigator} from 'react-navigation';
import Home from './Home.js';
import Collection from './Collection.js';
import Publish from './Publish.js';
import Message from './Message.js';
import Person from './Person.js';

const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: '主题',
			tabBarIcon: ({tintColor}) => (
					<Ionicons 
						 name="ios-cafe"   
				         size={30}   //图片大小
				         color={tintColor}  //图片颜色
					/>
				)
		}
	},
	collection: {
		screen: Collection,
		navigationOptions: {
			tabBarLabel: '收藏',
			tabBarIcon: ({tintColor}) => (
					<Ionicons 
						 name="ios-bookmark"   
				         size={30}   //图片大小
				         color={tintColor}  //图片颜色
					/>
				)
		}
	},
	publish: {
		screen: Publish,
		navigationOptions: {
			tabBarLabel: ' ',
			tabBarIcon: ({tintColor}) => (
					<Ionicons 
						 name="ios-create"   
				         size={45}   //图片大小
				         color={tintColor}  //图片颜色
					/>
				)
		},
		tabBarOptions: {
			showLabel: false
		}
	},
	message: {
		screen: Message,
		navigationOptions: {
			tabBarLabel: '消息',
			tabBarIcon: ({tintColor}) => (
					<Ionicons 
						 name="ios-mail"   
				         size={30}   //图片大小
				         color={tintColor}  //图片颜色
					/>
				)
		}
	},
	person: {
		screen: Person,
		navigationOptions: {
			tabBarLabel: '消息',
			tabBarIcon: ({tintColor}) => (
					<Ionicons 
						 name="md-person"   
				         size={30}   //图片大小
				         color={tintColor}  //图片颜色
					/>
				)
		}
	}
})

export default Tabs