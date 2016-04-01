
import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

export default class Toolbar extends Component {

  onPressReload () {
    this.props.onPressReload && this.props.onPressReload();
  }

  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.toolbarButton}>Add</Text>
        <Text style={styles.toolbarTitle}>This is the title</Text>
        {/*<Text style={styles.toolbarButton}>Reload</Text>*/}
        <View style={styles.toolbarButton}>
          <Icon.Button name="redo" size={20} color="#fafafa"
            style={[{
              padding: 0,
              backgroundColor: '#81c04d'
            }]}
            onPress={() => this.onPressReload() }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'    //Step 1
  },
  toolbarButton:{
    width: 50,            //Step 2
    backgroundColor: '#81c04d',
    // color:'#fff',
    // textAlign:'center'
  },
  toolbarTitle: {
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //Step 3
  }
});
