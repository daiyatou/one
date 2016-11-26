'use strict';
import React, { Component } from 'react';
import {Text, StyleSheet, Navigator, Image, View, ListView, ScrollView,} from 'react-native';
import Common from '../common/common';
import HeaderView from '../common/HeaderView';
import HttpView from './httpView';
import styles from '../common/style2';

var AOGMessUrl = 'http://10.10.20.40:8087/mall-app-buyers-manage/home/getHomeInfo';
class AOGMess extends Component {
  constructor(props) {
     super(props);
     // 用于构建DataSource对象
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     // 实际的DataSources存放在state中
     this.state = {
         selectedTab: 'blueTab',
         notifCount: 0,
         presses: 0,
         loaded: false,
         dataSource:ds,
     };
 }
  componentDidMount() {
    this.getDate();
  }
  getDate() {              // 获取数据的方法，并在取得数据之后更新数据源
    fetch(AOGMessUrl)
      .then((response) => response.json())
      .then((success) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(success.data.cityPortList)  //为了设置dataSourece的实际内容， 在constructor 返回 clonewithRows 方法
        })
      })
  }

 render() {
    return (
      <View style={styles.body_bg}>
         <View style={styles.body_head}>
          <HeaderView
              titleView= '到货通知'
              leftIcon={'angle-left'}
              leftIconAction={() => this.props.navigator.pop() }
              titleRight='清空'
              />
         </View>
         <ScrollView style={styles.scrllViewHeight}>
          <View>
              <ListView                             // 通过渲染返回数据
              contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              removeClippedSubviews={false}
               />
          </View>
        </ScrollView>
    </View>
    );
  }
  showDetails(){
   this.props.navigator.push({
       name: "HttpView",
       component: HttpView,
   });
  }
  _renderRow(rowData,sectionID,rowID)
    {
      return (
        <ScrollView>
          <View style={styles.scan_list}>
            <View style={styles.scan_list_left}>
              <Image style={styles.scan_list_img} source={require('../static/images/product/productImg.png')}/>
            </View>
            <View style={styles.scan_list_center}>
              <Text style={styles.scan_list_name}>{rowData.port} 养殖南美白虾</Text>
              <Text style={styles.scan_list_price}>￥1896.00 × {rowData.portID}</Text>
              <Text style={styles.scan_list_size}>{rowData.cityName} 1~1.25lbs</Text>
              <Text style={styles.scan_list_size}>33磅/泡沫箱 7-20</Text>
            </View>
            <View style={styles.scan_list_right}>
              <Text style={[styles.scan_list_date, styles.goods_on]}>08-18</Text>
            </View>
          </View>
        </ScrollView>
      );
    }

}

module.exports = AOGMess;
