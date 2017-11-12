import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';


class PublishScreen extends React.Component {
	render () {
		return (
			<View>
				<Text>Publish</Text>
			</View>
		)
	}
}

const Publish = StackNavigator({
	PublishNav: {
		screen: PublishScreen
	}
});

export default Publish;