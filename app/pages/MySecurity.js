import React, { Component} from 'react';
import { Text, Image, TouchableOpacity, View, ScrollView,} from 'react-native';

import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import SecurityDetail from './SecurityDetail';

export default class MySecurity extends Component {
    render() {
        return (
         <View style={styles.body_bg}>

            <View style={styles.body_head}>
             <HeaderView
                 titleView= '我的保障金'
                 leftIcon={'angle-left'}
                 leftIconAction={() => this.props.navigator.pop() }
                 />
            </View>

            <View style={styles.balance_head}>
              <View>
                <Image style={styles.balance_photo} source={require('../static/images/icon-mySecurity.png')}/>
              </View>
              <View style={styles.marginLR_8}>
                <Text style={styles.balance_head_title}>当前保障金</Text>
                <Text style={[styles.balance_head_num,styles.color_red]}>￥122633.00</Text>
              </View>
            </View>
            <View style={styles.personinfo_line}></View>
            <SecurityDetail />

         </View>

        );
    }
}
module.exports = MySecurity;
