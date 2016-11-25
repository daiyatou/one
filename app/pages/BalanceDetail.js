import React, { Component} from 'react';
import { Text, TouchableOpacity, View, ScrollView,} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Common from '../common/common';
import styles from '../common/style2';
import TradeItem from '../component/TradeItem';

export default class BalanceDetail extends Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar />}
        tabBarUnderlineColor='#a5aab4'
        tabBarBackgroundColor='#ffffff'
        tabBarActiveTextColor='#0463de'
        tabBarInactiveTextColor='#a5aab4'
        tabBarUnderlineStyle = {{height:2,backgroundColor:'#0463de'}}
        tabBarTextStyle={{fontSize: 13}}
      >
        <ScrollView style={styles.scroll_body} tabLabel='余额使用明细' >
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' greenNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' greenNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='用户充值' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
        </ScrollView>
        <ScrollView style={styles.scroll_body} tabLabel='余额提现明细' >
          <TradeItem name='用户提现' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' greenNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' greenNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
          <View style={[styles.top_line,styles.center_line]}></View>
          <TradeItem name='提现明细' datatime ='2016-08-08' balance='余额：￥32536.00' blueNum='￥21022.00' />
        </ScrollView>
      </ScrollableTabView>
    )
  }

}
module.exports = BalanceDetail;
