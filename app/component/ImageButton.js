/**
 * 图片背景,加入文字按钮
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
const ImageButton = ({ onPress, title, icon}) => (
  <TouchableOpacity style={styles.image_button_style} onPress={onPress}>
      <Image style={styles.image_button_img} source={icon}>
         <Text style={{alignSelf:'center',fontSize:12}}>{title}</Text>
      </Image>
  </TouchableOpacity>
);
export default ImageButton;
