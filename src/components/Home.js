import React from 'react';
import {
	View, 
	Text, 
	Button, 
	Image, 
	StyleSheet, 
	AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import axios from 'axios';
import CNHeader from './CNHeader.js';
import CNNews from './CNNews.js';
import Person from './Person.js';
import {ALL, GOOD} from './ArticleTypes.js'

class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
        super(props);
        this.state = {
        	ItemsData: [],
        	selectedType: ALL
        }

        this.selectNav = this.selectNav.bind(this)
    }
    /**
      * 切换主页文章的类型
    */
    selectNav (type) {
	   this.getArticles(type, 1, 10, true)
	}
	
	/**
	  * 获取信息列表
	*/
	getArticles (type = ALL, page = 1, limit = 10, isChangeType = false) {
		let that = this

		axios.get('https://cnodejs.org/api/v1/topics', {
				params: {
					page, limit,
					tab: type.toLowerCase()
				}
			})
			.then(res => res.data)
			.then(res => {
				if (res.success) {
					that.setState({
					   ItemsData: res.data
					})

					if (isChangeType) {
					  that.setState({
				        selectedType: type.toUpperCase()
				      })
					}
				}
			})
	}


	componentWillMount () {
		this.getArticles()
	}

	render() {
		return (
			<View style={styles.page}>
				<CNHeader 
					clickNav={this.selectNav} 
					selectedType={this.state.selectedType} 
					style={styles.header} />
				<CNNews
					navigateObj={this.props.navigation.navigate}
					ItemsData={this.state.ItemsData}
					style={styles.news} />
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