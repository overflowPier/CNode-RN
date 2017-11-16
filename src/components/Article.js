import React from 'react';
import {
	View, 
	Text,
	ScrollView, 
	StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';
import CommentItem from './CommentItem.js';

export default class Article extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			articleHtml: '',
			replies: []
		}
	}

	static navigationOptions = ({navigation}) => {
		console.log('++++++navigation', navigation.state.params)

		return {
			headerTitle: navigation.state.params.title
		}
	}

	static propTypes = {

	}

	componentDidMount () {
		const {content, replies} = this.props.navigation.state.params;
		console.log('---------------replies', replies)
		this.setState({
			articleHtml: content,
			replies: replies
		})
	}

	stringReplaceAll (s1,s2) {
		return s1.replace(new RegExp(s1,"gm"),s2);
	}

	getFilterHtmlContent (htmlString) {
		return htmlString.replace(new RegExp('src="', 'gm'), 'src=\"http:').replace(new RegExp('\r', 'gm'), '')
	}

	render () {
		// const {navigation} = this.props;

		return (
			<ScrollView
				style={htmlStyles.viewBox}
				showsVerticalScrollIndicator={false}
			>
				<View style={htmlStyles.viewArticleCon}>
					<HTMLView
					  stylesheet={htmlStyles}				  
					  value={this.getFilterHtmlContent(this.state.articleHtml)}
					/>

					<CommentItem 
						replies={this.state.replies}
					/>
				</View>
			</ScrollView>
		)
	}
}

const htmlStyles = StyleSheet.create({
	markdownText: {
		padding: 10
	},
	div: {
		lineHeight: 22,
		fontSize: 16,
		color: '#666'
	},
	h1: {
		fontSize: 24,
		lineHeight: 40,
		fontWeight: 'bold',
		color: '#333'
	},
	h2: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#333'
	},
	h3: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333'
	},
	h4: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333'
	},
	h5: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#333'
	},
	h6: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#333'
	},
	viewBox: {
		margin: 10
	},
	viewArticleCon: {
		backgroundColor: '#FFF',
		padding: 10
	}
})