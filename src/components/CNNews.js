import React from 'react';
import {Image, Text, ScrollView, StyleSheet, AppRegistry} from 'react-native';
import axios from 'axios';
import CNItem from './CNItem';

export default class CNNews extends React.Component {

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
			<ScrollView
				style={styles.items}
				keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='never'
                contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
				scrollEnabled={true}                
                horizontal={false}
			>
				{
					this.state.ItemsData.map((item, index) => <CNItem key={index} />)
				}
			</ScrollView>
		)
	}
}

// CNNews.propTypes = {
// 	title: React.PropTypes.string
// }

const styles = StyleSheet.create({
	items: {
		flex: 1
	}
})

AppRegistry.registerComponent('CNNews', () => CNNews);