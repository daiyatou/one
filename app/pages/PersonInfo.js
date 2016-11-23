import React, { Component} from 'react';
import { Text, Image, TouchableOpacity, View, TextInput, ScrollView,} from 'react-native';

import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import CenterItem from '../component/CenterItem';

export default class PersonInfo extends Component {
    render() {
        return (
         <View style={styles.body_bg}>

            <View style={styles.body_head}>
             <HeaderView
                 titleView= '个人资料'
                 leftIcon={'angle-left'}
                 leftIconAction={() => this.props.navigator.pop() }
                 />
            </View>

            <ScrollView style={styles.scroll_body} >
              <TouchableOpacity style={styles.personinfo_head}>
                <Text style={[styles.person_row_text, styles.personinfo_txt]}>头像</Text>
                <Image style={styles.personinfo_photo} source={require('../static/images/icon-photoDefault.png')}/>
              </TouchableOpacity>
              <View style={styles.personinfo_line}></View>
              <CenterItem title='用户名' right30="萌萌哒小公举" />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='真实姓名' right30="周小伦" />
              <View style={[styles.top_line,styles.center_line]}></View>
              <CenterItem title='联系电话' right30="13918485632" />
              <View style={styles.top_line}></View>
              <CenterItem title='性别' right30="男" />
              <View style={styles.top_line}></View>
              <CenterItem title='生日' right30="1990-01-01" />
              <View style={styles.top_line}></View>
              <CenterItem title='买家级别' right30="G1" />
              <View style={styles.top_line}></View>
           </ScrollView>

         </View>

        );
    }
}
module.exports = PersonInfo;
