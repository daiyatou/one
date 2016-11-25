import React, { Component} from 'react';
import {Text, Image, ListView, TouchableOpacity, View, InteractionManager, ScrollView,} from 'react-native';

import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import Icon from 'react-native-vector-icons/FontAwesome';
import CenterItem from '../component/CenterItem';
import ImageButton from '../component/ImageButton';
import PersonalSet from './PersonalSet';
import ScanHistory from './ScanHistory';
import PersonInfo from './PersonInfo';
import StoreGoods from './StoreGoods';
import AOGMess from './AOGMess';
import MyBalance from './MyBalance';
import MySecurity from './MySecurity';
import MyPoint from './MyPoint';

class PersonCenter extends Component {
    //设置按钮
    PersonalSet() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: PersonalSet,
      })
    }
    //登录按钮
    BuyerLogin() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: BuyerLogin,
      })
    }
    //个人资料
    PersonInfo() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: PersonInfo,
      })
    }
    //浏览记录按钮
    ScanHistory() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: ScanHistory,
      })
    }
    //我的收藏按钮
    StoreGoods() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: StoreGoods,
      })
    }
    //余额按钮
    MyBalance() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: MyBalance,
      })
    }
    //保证金按钮
    MySecurity() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: MySecurity,
      })
    }
    //积分按钮
    MyPoint() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: MyPoint,
      })
    }
    //我的订单按钮
    MyOrder() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: MyOrder,
      })
    }
    //收货地址按钮
    ReviceAddress() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: ReviceAddress,
      })
    }
    //红包优惠券按钮
    Couples() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: Couples,
      })
    }
    //发票管理按钮
    InvoiceManage() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: InvoiceManage,
      })
    }
    //到货通知按钮
    AOGMess() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: AOGMess,
      })
    }
    //意见反馈按钮
    Feedback() {
      //const { navigator } = this.props;
      this.props.navigator.push({
          component: Feedback,
      })
    }


    render() {
        return (
         <View style={styles.body_bg}>

            <View style={[styles.body_head, styles.person_header]}>
               <TouchableOpacity key={'rightIcon'} onPress={this.PersonalSet.bind(this)} >
                 <Image source = {require('../static/images/icon-set.png')} style = {styles.person_set_icon}  />
               </TouchableOpacity>
            </View>

            <View style={[styles.bg_blue, styles.person_main]}>
                <View style={styles.person_main_row}>
                   <TouchableOpacity style={styles.person_main_unit} onPress={this.ScanHistory.bind(this)} >
                     <Image  style={styles.person_main_icon} source={require('../static/images/icon-myscan.png')}/>
                     <Text style={[styles.color_white, styles.font_12]}>浏览记录</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.person_main_unit} onPress={this.PersonInfo.bind(this)} >
                       <Image  style={styles.person_main_photo} source={require('../static/images/icon-photoDefault.png')}/>
                       <Text style={[styles.color_white, styles.font_12]}>Jin Dai</Text>
                       <Text style={[styles.color_white, styles.font_12]}>G1 会员</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.person_main_unit} onPress={this.StoreGoods.bind(this)}>
                     <Image  style={styles.person_main_icon} source={require('../static/images/icon-mystore.png')}/>
                     <Text style={[styles.color_white, styles.font_12]}>我的收藏</Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.person_main_row}>
                  <TouchableOpacity style={styles.person_main_unit} onPress={this.MyBalance.bind(this)}>
                     <Text style={[styles.color_white, styles.font_14, styles.font_bold]}>12322.00</Text>
                     <Text style={[styles.color_white, styles.font_12]}>我的余额</Text>
                  </TouchableOpacity>
                  <View style={styles.person_line_ver}></View>
                  <TouchableOpacity style={styles.person_main_unit} onPress={this.MySecurity.bind(this)}>
                     <Text style={[styles.color_white, styles.font_14, styles.font_bold]}>12322.00</Text>
                     <Text style={[styles.color_white, styles.font_12]}>保证金</Text>
                  </TouchableOpacity>
                  <View style={styles.person_line_ver}></View>
                  <TouchableOpacity style={styles.person_main_unit} onPress={this.MyPoint.bind(this)}>
                     <Text style={[styles.color_white, styles.font_14, styles.font_bold]}>12322.00</Text>
                     <Text style={[styles.color_white, styles.font_12]}>积分查询</Text>
                  </TouchableOpacity>
                </View>
            </View>

            <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}>
              <View style={[styles.person_tab, styles.marginLR_8]}>
                <TouchableOpacity style={styles.person_main_unit} onPress={this.MyOrder.bind(this)}>
                  <Image  style={styles.person_tab_icon} source={require('../static/images/icon-noPay.png')}/>
                  <Text style={styles.person_tab_txt}>待付款</Text>
                  <Text style={styles.person_order_num}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_main_unit} onPress={this.MyOrder.bind(this)}>
                  <Image  style={styles.person_tab_icon} source={require('../static/images/icon-unfilled.png')}/>
                  <Text style={styles.person_tab_txt}>待发货</Text>
                  <Text style={styles.person_order_num}>14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_main_unit} onPress={this.MyOrder.bind(this)}>
                  <Image  style={styles.person_tab_icon} source={require('../static/images/icon-unReceived.png')}/>
                  <Text style={styles.person_tab_txt}>待收货</Text>
                  <Text style={styles.person_order_num}>11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_main_unit} onPress={this.MyOrder.bind(this)}>
                  <Image  style={styles.person_tab_icon} source={require('../static/images/icon-myOrder.png')}/>
                  <Text style={styles.person_tab_txt}>我的订单</Text>
                  <Text style={styles.person_order_num}>1</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.person_list, styles.marginLR_8]}>
                <TouchableOpacity style={[styles.person_list_row, styles.marginLR_8]} onPress={this.ReviceAddress.bind(this)}>
                  <Text style={styles.person_list_txt}>收货地址</Text>
                </TouchableOpacity>
                <View style={[styles.top_line,styles.center_line]}></View>
                <TouchableOpacity style={[styles.person_list_row, styles.marginLR_8]} onPress={this.Couples.bind(this)}>
                  <Text style={styles.person_list_txt}>红包/优惠券</Text>
                </TouchableOpacity>
                <View style={[styles.top_line,styles.center_line]}></View>
                <TouchableOpacity style={[styles.person_list_row, styles.marginLR_8]} onPress={this.InvoiceManage.bind(this)}>
                  <Text style={styles.person_list_txt}>发票管理</Text>
                </TouchableOpacity>
                <View style={[styles.top_line,styles.center_line]}></View>
                <TouchableOpacity style={[styles.person_list_row, styles.marginLR_8]} onPress={this.AOGMess.bind(this)}>
                   <Text style={styles.person_list_txt}>到货通知</Text>
                </TouchableOpacity>
                <View style={styles.top_line}></View>
                   <TouchableOpacity style={[styles.person_list_row, styles.marginLR_8]} onPress={this.Feedback.bind(this)}>
                   <Text style={styles.person_list_txt}>意见反馈</Text>
                </TouchableOpacity>
                <View style={styles.top_line}></View>
             </View>
           </ScrollView>

         </View>

        );
    }
}
module.exports = PersonCenter;
