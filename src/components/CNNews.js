import React from 'react';
import {Image, Text, ScrollView, StyleSheet, AppRegistry} from 'react-native';
import PropTypes from 'prop-types';
import CNItem from './CNItem';

export default class CNNews extends React.Component {
	static propTypes = {
		ItemsData: PropTypes.array.isRequired
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
				{this.props.ItemsData.map((item, index) => <CNItem 
					avatarUrl={item.author.avatar_url}
					authorName={item.author.loginname}
					updateTime={item.last_reply_at}
					articleTitle={item.title}
					articleType={item.tab}
					visitCount={item.visit_count}
					replyCount={item.reply_count}
					key={item.id} />) }
			</ScrollView>
		)
	}
}

// CNNews.propTypes = {
// 	title: React.PropTypes.string
// }

const styles = StyleSheet.create({
	items: {
		flex: 1,
		backgroundColor: '#FFF'
	}
})

AppRegistry.registerComponent('CNNews', () => CNNews);