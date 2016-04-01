
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

var Progress = require('react-native-progress');
var Icon = require('react-native-vector-icons/EvilIcons');

import Loading from '../components/Loading'
import Toolbar from '../components/Toolbar'

export default class TopStories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    this._onFetchData();
  }

  _onFetchDataSuccess () {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let randomData = [ Math.random(), Math.random(), Math.random() ];

    this.setState({
      ...this.state,
      loading: false,
      dataSource: ds.cloneWithRows(randomData)
    });
  }

  _onFetchData () {
    this.setState({
      ...this.state,
      loading: true
    });
    setTimeout( () => this._onFetchDataSuccess(), 1000);
  }

  fetchDataList() {
    this._onFetchData()
  }

  render() {
    console.log('this.state.dataSource', this.state);
    return (
      <View style={styles.container}>
        <Toolbar onPressReload={this.fetchDataList.bind(this)} />

        {!this.state.loading &&
          this.state.dataSource &&
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={styles.list}>{rowData}</Text>}
          />
        }
        {this.state.loading &&
          <Loading/>
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
  }
});
