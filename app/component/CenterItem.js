/**
 * 个人中心封装的Item布局
 */
'use strict';
import React, {PropTypes} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import styles from '../common/style2';
const CenterItem = ({ onPress, title, icon}) => (
  <TouchableOpacity style={styles.center_row} onPress={onPress}>
     <View style={{flexDirection:'row'}}>
        <View style={styles.center_row_left}><Image style={styles.center_row_icon} source={icon}/></View>
        <View style={styles.center_row_left}><Text style={styles.center_row_text}>{title}</Text></View>
        <View style={styles.center_row_right}><Image source={require('../static/images/icon-rightGray.png')} style={styles.center_row_more}/></View>
     </View>
  </TouchableOpacity>
);
export default CenterItem;
