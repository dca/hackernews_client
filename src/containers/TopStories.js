
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  StatusBar,
  Navigator
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/EvilIcons'

import Loading from '../components/Loading'
import Toolbar from '../components/Toolbar'
import { actions as topStories } from '../redux/modules/topStories'


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    topStories: bindActionCreators(topStories, dispatch)
  }
}

export class TopStories extends React.Component {

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
    let randomData = [
      {name: 'Hello', value: Math.random()},
      {name: 'World', value: Math.random()},
      {name: 'paps', value: Math.random()},
    ];

    this.setState({
      ...this.state,
      loading: false,
      dataSource: ds.cloneWithRows(randomData)
    });

    this.props.topStories.fetchTopStories();
  }

  _onFetchData () {
    this.setState({
      ...this.state,
      loading: true
    });
    setTimeout( () => this._onFetchDataSuccess(), 400);
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
            renderRow={(rowData) =>
              <View style={styles.listViewItem}>
                <Text>{rowData.value}</Text>
              </View>
            }
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
  },
  listViewItem: {
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopStories);
