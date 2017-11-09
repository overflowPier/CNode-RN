import React from 'react';
import {Image, Text, ScrollView, StyleSheet} from 'react-native';
import CNItem from './CNItem';

export default class CNNews extends React.Component {
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
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
				<CNItem />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	items: {
		flex: 1
	}
})