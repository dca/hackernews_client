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

import { Provider } from 'react-redux'

import TopStories from './containers/TopStories'
import configureStore from './redux/configureStore'

const store = configureStore({ initialState: {}, history: null })


export default function native(platform: string) {

  const wrapper = () => {
    return (
      <Provider store={store}>
        <TopStories />
      </Provider>
    )
  }

  AppRegistry.registerComponent('hackernews_client', () => wrapper);
}
