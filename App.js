import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Drawer from './src/components/Drawer.js'


// class RecentChatsScreen extends React.Component {
//   render () {
//     return (
//       <View>
//         <Text>List of recent chats</Text>
//         <Button
//           onPress = {() => this.props.navigation.navigate('All')}
//           title="to List of All Chats Screen"
//          />
//          <Button
//           onPress={() => this.props.navigation.navigate('DrawerToggle');}
//           title="Open Drawer"
//         />
//       </View>
//     )
//   }
// }

// class AllChatsScreen extends React.Component {
//   render () {
//     return (
//       <View>
//         <Text>List of all Chats</Text>
//         <Button 
//             onPress={() => navigate('Chat', {user: 'Tom'})}
//             title='跳转到聊天页面'
//           />
//       </View>
//     )
//   }
// }

// const MainTabNavigation = TabNavigator({
//   Recent: {screen: RecentChatsScreen},
//   All: {screen: AllChatsScreen}
// })

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome'
//   };
//   render () {
//     const { navigate } = this.props.navigation;

//     return (
//       <View>
//         <Text>Home Screen!</Text>
//         <Button 
//             onPress={() => navigate('Chat', {user: 'Tom'})}
//             title='跳转到聊天页面'
//           />
//       </View>
//     )
//   }
// }

// class ChatScreen extends React.Component {
//   static navigationOptions = ({navigation}) => ({
//     title: `Chat with ${navigation.state.params.user}`
//   });
//   render () {
//     const { navigate } = this.props.navigation;
//     const { params } = this.props.navigation.state;

//     return (
//       <View>
//         <Text>Chat width {params.user}!</Text>
//         <Button 
//             onPress={() => navigate('Home')}
//             title='跳转到首页'
//           />
//       </View>
//     )
//   }
// }


// const RootDrawer = new DrawerNavigator({
//    Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       drawerLabel: 'Home',
//       drawerIcon: ({ tintColor, focused }) => (
//         <Ionicons
//           name={focused ? 'ios-home' : 'ios-home-outline'}
//           size={20}
//           style={{ color: tintColor }}
//         />
//       ),
//     },
//   }
// })

class MyHomeNavScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'MyHomeNav',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons 
            name="move-to-inbox"
            size={24}
            style={{ color: tintColor }}
        />
    )
  };

  render () {
    return (
      <View>
        <Button 
          title="open drawer"
          onPress = {() => this.props.navigation.navigate('DrawerOpen')}
        />
      </View>
    )
  }
}


class DraftsNavScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'DraftsNav',
    drawerIcon: ({tintColor}) => (
        <MaterialIcons 
            name="drafts"
            size={24}
            style={{ color: tintColor }}
        />
    )
  };

  render () {
    return (
      <View>
        <Button 
          title="open drawer"
          onPress = {() => this.props.navigation.navigate('DrawerOpen')}
        />
      </View>
    )
  }
}

const Drawer = DrawerNavigator({
  MyHome: {
    screen: MyHomeNavScreen
  },
  Drafts: {
    screen: DraftsNavScreen
  }
})


const SimpleApp = StackNavigator({
  Home: {
    screen: Drawer,
    navigationOptions: {
      title: 'MyChats',
      headerRight: <Button title="Info" />,
      headerLeft: <Button title='打开' onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
      headerStyle: {
        paddingLeft: 10
      }
    }
  }
  // Chat: {
  //   screen: ChatScreen
  // }
});

export default class App extends React.Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
