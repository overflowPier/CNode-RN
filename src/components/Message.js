import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';


class MessageScreen extends React.Component {
	render () {
		return (
			<View>
				<Text>Message</Text>
			</View>
		)
	}
}

const Message = StackNavigator({
	MessageNav: {
		screen: MessageScreen
	}
});

export default Message;