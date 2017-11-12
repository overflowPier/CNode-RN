import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';


class CollectionScreen extends React.Component {
	render () {
		return (
			<View>
				<Text>asdfasfasfasf</Text>
			</View>
		)
	}
}

const Collection = StackNavigator({
	coolectionNav: {
		screen: CollectionScreen
	}
});

export default Collection;