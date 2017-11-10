import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class extends React.Component {
	render() {
		let pic = {
			url: 'http://pic2.ooopic.com/12/13/96/44bOOOPIC55_1024.jpg'
		}

		return (
			<View style={styles.item}>
				<View style={styles.itemTop}>
					
					<View style={styles.itemTopL}>
						
						<View style={styles.itemThumb}>
							<Image source={pic} style={styles.img} />
						</View>

						<View style={styles.infos}>
							<Text style={styles.nickName}>jelly Chow</Text>

							<View style={styles.simpleInfo}>
								<Text style={styles.time}>19小时前</Text>
								<Text style={styles.tag}>job</Text>
							</View>
						</View>
					</View>
					
					<View style={styles.itemTopR}>
						<Text style={styles.commentNums}>1/67</Text>
					</View>

				</View>	

				<View style={styles.itemBtm}>
					<Text>天猫前端招聘（含实习）</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	item: {		
		flex: 1,
		borderBottomColor: '#000',
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