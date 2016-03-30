
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  StatusBar,
  Navigator
} from 'react-native';

var Icon = require('react-native-vector-icons/EvilIcons');
var Animatable = require('react-native-animatable');

var AnimatableIcon = Animatable.createAnimatableComponent(Icon);

export default class TopStories extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      loading: true,
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5']),
    };
  }

  fetchDataList() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let randomData = [ Math.random(), Math.random(), Math.random() ];
    this.setState({
      ...this.state,
      dataSource: ds.cloneWithRows(randomData)
    });
    this.refs.loading.transition(0, 180);
  }

  render() {
    console.log('this.state.dataSource', this.state);
    return (
      <View style={styles.container}>

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
              onPress={() => this.fetchDataList() }
            />
          </View>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.list}>{rowData}</Text>}
        />


        {this.state.loading &&
          <AnimatableIcon name="spinner-3" size={50}
            ref="loading"
            style={[{
              padding: 0,
            }]}
            duration={1000}
            transition="rotate"
          />
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#eaeaea',
  },
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'    //Step 1
  },
  toolbarButton:{
    width: 50,            //Step 2
    // color:'#fff',
    backgroundColor: '#81c04d',
    // textAlign:'center'
  },
  toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //Step 3
  }
});
