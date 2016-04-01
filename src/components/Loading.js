
import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

import Progress from 'react-native-progress';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.circles}>
        <Progress.CircleSnail
          animating={true}
          size={50}
          style={styles.progress}
          colors={['blue']} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circles: {
    // backgroundColor: '#333333', //debug
    // flexDirection: 'column', //debug
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },
  progress: {
    margin: 10,
  }
});
