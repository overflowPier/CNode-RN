import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CNHeader from './CNHeader.js';
import CNNews from './CNNews.js';

class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<View style={styles.page}>
				<CNHeader style={styles.header} />
				<CNNews style={styles.news} />
			</View>
	    );
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	header: {
		flex: 1
	},
	news: {
		flex: 1
	},
	navs: { display: 'flex', justifyContent: 'space-between' }
})

const Home = StackNavigator({
	Home: {screen: HomeScreen}
})



export default Home;