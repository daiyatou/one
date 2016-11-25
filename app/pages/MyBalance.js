import React, { Component} from 'react';
import { Text, Image, TouchableOpacity, View, ScrollView,} from 'react-native';
import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import Button from '../component/Button';
import BalanceDetail from './BalanceDetail';

export default class MyBalance extends Component {
  //余额提现按钮
  Withdraw() {
    //const { navigator } = this.props;
    this.props.navigator.push({
        component: Withdraw,
    })
  }
    render() {
        return (
         <View style={styles.body_bg}>

            <View style={styles.body_head}>
             <HeaderView
                 titleView= '我的余额'
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
            <BalanceDetail />

         </View>

        );
    }
}
module.exports = MyBalance;
