import React, { Component} from 'react';
import { Text, Image, TouchableOpacity, View, TextInput, ScrollView,} from 'react-native';

import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import TradeItem from '../component/TradeItem';
import Button from '../component/Button';
import MyBalance from './MyBalance';

export default class Withdraw extends Component {
  //我的余额按钮
  MyBalance() {
    //const { navigator } = this.props;
    this.props.navigator.push({
        component: MyBalance,
    })
  }
    render() {
        return (
         <View style={styles.body_bg}>

            <View style={styles.body_head}>
             <HeaderView
                 titleView= '提现明细'
                 leftIcon={'angle-left'}
                 leftIconAction={() => this.props.navigator.pop() }
                 />
            </View>

            <View style={styles.balance_head}>
              <View>
                <Image style={styles.balance_photo} source={require('../static/images/icon-myMoney.png')}/>
              </View>
              <View style={styles.marginLR_8}>
                <Text style={styles.balance_head_title}>当前余额</Text>
                <Text style={[styles.balance_head_num,styles.color_red]}>￥122633.00</Text>
              </View>
              <View style={styles.balance_head_right}>
                <Button containerStyle={styles.bottom_cont_botton} style={[styles.bottom_botton, styles.balance_btn]} text="提现" />
                <Button containerStyle={styles.bottom_cont_botton} style={[styles.bottom_botton, styles.balance_btn]} text="充值" />
              </View>
            </View>
            <View style={styles.personinfo_line}></View>

            <View style={styles.trade_tab}>
              <TouchableOpacity style={styles.trade_tab_unit} onPress={this.MyBalance.bind(this)}>
                <Text style={styles.trade_tab_gray}>当前余额</Text>
                <View style={styles.line_off}></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.trade_tab_unit}>
                <Text style={styles.color_blue}>余额提现明细</Text>
                <View style={styles.line_on}></View>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scroll_body} >
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

         </View>

        );
    }
}
module.exports = Withdraw;
