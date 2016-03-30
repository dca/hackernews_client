/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TopStories from './containers/TopStories'

export default function native(platform: string) {

  let hackernews_client = React.createClass( {
    render() {
      return (
        <TopStories />
      );
    }
  });

  AppRegistry.registerComponent('hackernews_client', () => hackernews_client);
}
