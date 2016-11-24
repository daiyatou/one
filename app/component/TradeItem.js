/**
 * 交易的Item布局
 */
'use strict';
import React, {PropTypes} from 'react';
import{ View, Text, StyleSheet,} from 'react-native';
import styles from '../common/style2';

const TradeItem = ({ name, datatime, balance, blueNum, greenNum}) => (
  <View style={styles.trade_item}>
    <View style={styles.trade_item_row}>
      <Text style={styles.trade_name}>{name}</Text>
      <Text style={styles.trade_datatime}>{datatime}</Text>
    </View>
    <View style={styles.trade_item_row}>
      <Text style={styles.trade_balance}>{balance}</Text>
      <Text style={[styles.trade_num, styles.color_blue]}>{blueNum}</Text>
      <Text style={[styles.trade_num, styles.color_green]}>{greenNum}</Text>
    </View>
  </View>
);
export default TradeItem;
