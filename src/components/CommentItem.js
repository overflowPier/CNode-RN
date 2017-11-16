import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {formateTimeString} from '../assets/js/util.js';


	
export default class CommentItem extends React.Component {
	static propTypes = {
		replies: PropTypes.array.isRequired
	}

	getFilterHtmlContent (htmlString) {
		return htmlString.replace(new RegExp('src="', 'gm'), 'src=\"http:').replace(new RegExp('\r', 'gm'), '')
	}

	render () {
		return this.props.replies.map((item, index) => {
			const {id, author, content, ups, create_at, is_uped} = item

			return (
				<View style={styles.comItem} key={id}>
					<View style={styles.comItemTop}>
						<View color='#333' style={styles.comNickName}>
							<Text>{author.loginname}</Text>
						</View>
						<View color='#666' style={styles.comBaseInfo}>
							<View style={styles.thumbsUp}>
								<Ionicons
									name="md-thumbs-up"
									color="#900"
									size={15}
								/>
								<Text>{ups.length}</Text>
							</View>
							<View style={styles.dateTime}>
								<Text>
									{formateTimeString(create_at)}
								</Text>
							</View>
						</View>
					</View>

					<View style={styles.comCon}>
						<HTMLView 
							value={this.getFilterHtmlContent(content)}
						/>
					</View>
				</View>	
			)
		})
	}
}

const styles = StyleSheet.create({
	comItem: {
		borderTopColor: '#e9e8f0',
		borderTopWidth: 1,
		paddingBottom: 10,
		paddingTop: 10,
		marginLeft: 12,
		marginRight: 12
	},
	comItemTop: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'		
	},
	comNickName: {
		flex: 1
	},
	comItemBtm: {

	},
	comBaseInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	thumbsUp: {
		marginRight: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	dateTime: {

	},
	comCon: {

	}
})