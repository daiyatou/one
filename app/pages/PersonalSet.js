import React, { Component} from 'react';
import { Text, Image, TouchableOpacity, View, TextInput, ScrollView,} from 'react-native';

import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import CenterItem from '../component/CenterItem';
import Button from '../component/Button';

export default class PersonalSet extends Component {
    //登录按钮
    testButton() {
      const { navigator } = this.props;
      this.props.navigator.push({
          component: Button,
      })
    }
    render() {
        return (
         <View style={styles.body_bg}>

            <View style={styles.body_head}>
             <HeaderView
                 titleView= '设置'
                 leftIcon={'angle-left'}
                 leftIconAction={() => this.props.navigator.pop() }
                 />
            </View>

            <ScrollView style={styles.scroll_body} >
              <View style={styles.top_line}></View>
              <CenterItem title='修改登录密码' onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='设置支付密码' onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='修改支付密码' onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='更换手机号' right10="13918485632" onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='关于我们' onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='检测新版本' onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='配货说明' onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='验货与赔偿说明' onPress={this.testButton.bind(this)} moreView={require('../static/images/icon-rightGray.png')} />
              <View style={styles.top_line}></View>
           </ScrollView>

           <Button containerStyle={styles.bottom_cont_botton} style={styles.bottom_botton} text="退出登录" />

         </View>

        );
    }
}
module.exports = PersonalSet;
