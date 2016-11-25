import React, { Component} from 'react';
import { Text, Image, TouchableOpacity, View, ScrollView,} from 'react-native';
import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import PointDetail from './PointDetail';

export default class MyPoint extends Component {
  render() {
      return (
       <View style={styles.body_bg}>

          <View style={styles.body_head}>
           <HeaderView
               titleView= '我的积分'
               leftIcon={'angle-left'}
               leftIconAction={() => this.props.navigator.pop() }
               />
          </View>

          <View style={styles.balance_head}>
            <View>
              <Image style={styles.balance_photo} source={require('../static/images/icon-myPoint.png')}/>
            </View>
            <View style={styles.marginLR_8}>
              <Text style={styles.balance_head_title}>当前积分</Text>
              <Text style={[styles.balance_head_num,styles.color_red]}>122633.00</Text>
            </View>
          </View>
          <View style={styles.personinfo_line}></View>
          <PointDetail />
       </View>

      );
  }

}
module.exports = MyPoint;
