import React from 'react';
import {View, Text, Button, Image, StyleSheet, AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import axios from 'axios';
import CNHeader from './CNHeader.js';
import CNNews from './CNNews.js';

class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
        super(props);
        this.state = {
        	ItemsData: []
        }
    }

	componentWillMount () {
		let that = this
		axios.get('https://cnodejs.org/api/v1/topics')
			.then(res => res.data)
			.then(res => {
				if (res.success) {
					that.setState({
						ItemsData: res.data
					})
				}	
			})
	}

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

AppRegistry.registerComponent('Home', () => Home);


export default Home;