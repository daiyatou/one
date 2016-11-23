/**
 * 个人中心封装的Item布局
 */
'use strict';
import React, {PropTypes} from 'react';
import{ View, Text, TouchableOpacity, Image, StyleSheet,} from 'react-native';
import styles from '../common/style2';

const CenterItem = ({ onPress, title, right10, right30, icon, moreView}) => (
  <TouchableOpacity style={styles.person_row} onPress={onPress}>
     <View style={{flexDirection:'row'}}>
        <View style={styles.person_row_left}><Image style={styles.person_row_icon} source={icon}/></View>
        <View style={styles.person_row_left}><Text style={styles.person_row_text}>{title}</Text></View>
        <View style={styles.person_right10}><Text style={styles.person_row_cont}>{right10}</Text></View>
        <View style={styles.person_right30}><Text style={styles.person_row_cont}>{right30}</Text></View>
        <View style={styles.person_row_right}><Image style={styles.person_row_more} source={moreView}/></View>
     </View>
  </TouchableOpacity>
);
export default CenterItem;
