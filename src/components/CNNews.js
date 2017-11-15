import React from 'react';
import {
	Image, 
	Text, 
	ScrollView, 
	StyleSheet, 
	AppRegistry
} from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import CNItem from './CNItem';
import {
	SHARE
} from './ArticleTypes.js';

export default class CNNews extends React.Component {
	static propTypes = {
		ItemsData: PropTypes.array.isRequired,
		navigateObj: PropTypes.func.isRequired
		// clickArticle: PropTypes.func.isRequired
	}

	constructor (props) {
		super(props);
		this.clickArticle = this.clickArticle.bind(this)
	}

	/**
	  *	点击获取文章详情内容
	*/
	getArticleCon (articleId) {
		
	}

	/**
	  * 点击每条文章
	*/
	clickArticle (articleId) {
		let that = this
		let url = 'https://cnodejs.org/api/v1/topic/' + articleId;
		console.log('==============url', url);
		axios.get(url)
			.then(res => res.data)
			.then(res => {
				if (res.success) {
					that.props.navigateObj('Article', res.data)		
				}
			})
		
	}

	render() {
		const {ItemsData} = this.props;

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
				{ItemsData.map((item, index) => <CNItem
					articleId={item.id}					
					avatarUrl={item.author.avatar_url}
					authorName={item.author.loginname}
					updateTime={item.last_reply_at}
					articleTitle={item.title}
					articleType={!item.tab ? SHARE : item.tab}
					visitCount={item.visit_count}
					replyCount={item.reply_count}
					clickArticle={this.clickArticle}
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