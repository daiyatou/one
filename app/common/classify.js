'use strict';
import React, { Component } from 'react';
import {Text, StyleSheet, Navigator, Image, View, ListView, Alert, TouchableHighlight, InteractionManager, TouchableOpacity, Platform, AsyncStorage } from 'react-native';
import ViewPager from 'react-native-viewpager';
import HttpView from '../pages/httpView';
import styles from './style'

var THUMB_URLS = [
  require('../static/images/classify/classifyImg1.png'),
  require('../static/images/classify/classifyImg2.png'),
  require('../static/images/classify/classifyImg3.png'),
  require('../static/images/classify/classifyImg4.png'),
  require('../static/images/classify/classifyImg5.png'),
  require('../static/images/classify/classifyImg6.png'),
  require('../static/images/classify/classifyImg7.png'),
  require('../static/images/classify/classifyImg8.png'),
  require('../static/images/classify/classifyImg9.png'),
  require('../static/images/classify/classifyImg10.png'),
  require('../static/images/classify/classifyImg11.png'),
  require('../static/images/classify/classifyImg12.png'),
  require('../static/images/classify/classifyImg13.png'),
  require('../static/images/classify/classifyImg14.png'),
];

class Classify extends Component {
  constructor(props) {
      super(props);
      // 用于构建DataSource对象
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // 实际的DataSources存放在state中
      this.state = {
          selectedTab: 'blueTab',
          notifCount: 0,
          presses: 0,
          dataSource2:ds.cloneWithRows(this._genRows({})),
          name:null,
      };
  }
  _renderPage(data, pageID) {
     return (
         <Image source={data} style={styles.page}/>
     );
 }


 render() {
    return (
        <View>
            <ListView
               initialListSize={13*2}
               contentContainerStyle={styles.list}
               dataSource={this.state.dataSource2}
               renderRow={this._renderRow}
             />
        </View>
    );
  }
  showDetails(){
   //let _this=this;
   //  const {navigator} = this.props;
   //   this.props.navigator.push({
   //    name: 'HttpView',
   //    component: HttpView,
   //    passProps: {
   //      id: this.state.id,
   //    }
   //  })
   this.props.navigator.push({
       name: "HttpView",
       component: HttpView,
   });
  }
  _renderRow(rowData,sectionID,rowID)
    {
      var imgSource = THUMB_URLS[rowID];
      return (
        <View style={styles.row}>
          <Image style={styles.thumb} source={imgSource} />
          <Text style={styles.text}>
            {rowData}
          </Text>
        </View>
      );
    }

  _genRows(pressData: {[key: number]:boolean}): Array<string>
    {
      var dataBlob = [];
      for (var ii = 0; ii < THUMB_URLS.length;ii++) {
        dataBlob.push('单元格 ' + ii);
      }
      console.log('第'+ii+'个');
      return dataBlob;
    }

}

module.exports = Classify;
