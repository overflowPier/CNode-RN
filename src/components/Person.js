import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class Person extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		age: PropTypes.number
	};

	render () {
		const {name, age} = this.props;

		return (
			<View>
				<Text>姓名： {name}</Text>
				<Text>年龄： {age}</Text>
			</View>
		)
	}
}