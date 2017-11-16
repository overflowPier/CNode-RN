import React from 'react';
import {
	View, 
	Text, 
	Image, 
	TouchableHighlight, 
	StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {
	ALL, 
	GOOD, 
	ASK, 
	SHARE, 
	JOB, 
	DEV
} from './ArticleTypes.js';
import {formateTimeString} from '../assets/js/util.js';

export default class extends React.Component {
	static propTypes = {
		articleId: PropTypes.string.isRequired,
		avatarUrl: PropTypes.string.isRequired,
		authorName: PropTypes.string.isRequired,
		updateTime: PropTypes.string.isRequired,
		articleTitle: PropTypes.string.isRequired,
		articleType: PropTypes.string.isRequired,
		visitCount: PropTypes.number.isRequired,
		replyCount: PropTypes.number.isRequired,
		clickArticle: PropTypes.func.isRequired
	}

	getArticleTypeTxt (type) {
		switch (type.toUpperCase()) {
			case SHARE:
				return '分享'
			case GOOD:
				return '精华'
			case ASK:
				return '问答'
			case JOB:
				return '招聘'
			case DEV:
				return '客户端测试'
		}
	}

	render() {
		const {articleId, avatarUrl, authorName, updateTime, articleTitle, articleType, visitCount, replyCount, clickArticle} = this.props;

		return (
			<TouchableHighlight underlayColor='#eee' activeOpacity={0.9} onPress={() => {clickArticle(articleId)}}>
				<View style={styles.item}>
					<View style={styles.itemTop}>
						
						<View style={styles.itemTopL}>
							
							<View style={styles.itemThumb}>
								<Image source={{uri: avatarUrl}} style={styles.img} />
							</View>

							<View style={styles.infos}>
								<Text style={styles.nickName}>{authorName}</Text>

								<View style={styles.simpleInfo}>
									<Text style={styles.time}>{formateTimeString(updateTime)}</Text>
									<Text style={styles.tag}>{this.getArticleTypeTxt(articleType)}</Text>
								</View>
							</View>
						</View>
						
						<View style={styles.itemTopR}>
							<Text style={styles.commentNums}>{replyCount}/{visitCount}</Text>
						</View>
					</View>	

					<View style={styles.itemBtm}>
						<Text>{articleTitle}</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	item: {		
		flex: 1,
		borderBottomColor: '#e9e8f0',
		borderBottomWidth: 1,
		paddingBottom: 10,
		paddingTop: 10,
		marginLeft: 12,
		marginRight: 12
	},
	itemTop: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 5,
		marginRight: 5	
	},
	itemTopL: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row'
	},
	infos: {
		display: 'flex',
		marginLeft: 10,
		flex: 1
		
	},
	simpleInfo: {
		flex: 1,
		display: 'flex',
		marginTop: 5,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	itemThumb: {
		width: 60,
		height: 60,
		borderRadius: 4,
		backgroundColor: '#eee'
	},
	time: {
		paddingTop: 3
	},
	tag: {
		marginLeft: 10,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 3,
		paddingBottom: 3,
		borderRadius: 10,
		backgroundColor: '#ddd',
		color: '#666'
	},
	itemTopR: {
	},
	commentNums: {
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 4
	},
	itemBtm: {
		marginTop: 5,
		marginLeft: 5
	}
})