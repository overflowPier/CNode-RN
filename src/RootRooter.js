import React from 'react';
import {StackNavigator} from 'react-navigation';
import Tabs from './components/TabNavigation.js';
import Article from './components/Article.js';


const RootRouters = StackNavigator({
	Home: {
		screen: Tabs
	},
	Article: {
		screen: Article
	}
})

export default class RootRouter extends React.Component {
	render () {
		return (
			<RootRouters />
		)
	}
}