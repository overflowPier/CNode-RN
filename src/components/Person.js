import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';


class PersonScreen extends React.Component {
	render () {
		return (
			<View>
				<Text>Person</Text>
			</View>
		)
	}
}

const Person = StackNavigator({
	PersonNav: {
		screen: PersonScreen
	}
});

export default Person;