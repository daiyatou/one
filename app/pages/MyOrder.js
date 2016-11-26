import React, { Component} from 'react';
import { Text, Image, TouchableOpacity, View, ScrollView,} from 'react-native';
import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import Timers from '../component/Timer';
import CheckboxList from 'react-native-checkboxlist'

export default class MyOrder extends Component {

    render() {
        return (
         <View style={styles.body_bg}>

            <View style={styles.body_head}>
             <HeaderView
                 titleView= 'Demo组件'
                 leftIcon={'angle-left'}
                 leftIconAction={() => this.props.navigator.pop() }
                 />
            </View>

            <ScrollView>
              <View><Text>倒计时</Text></View>
              <Timers />
              <View><Text>复选框</Text></View>
              <CheckboxList
                  options={[
                  '复选框1',
                  '复选框2',
                  '复选框3',
                  ]}
                  selectedOptions={['Lorem ipsum']}
                  maxSelectedOptions={3}
                  onSelection={(option)=>alert(option + ' was selected!')}
              />
              <View><Text>单选框</Text></View>
              <CheckboxList
                  options={[
                  '单选框1',
                  '单选框2',
                  '复选框3',
                  ]}
                  selectedOptions={['Lorem ipsum']}
                  maxSelectedOptions={1}
                  onSelection={(option)=>alert(option + ' was selected!')}
              />
            </ScrollView>

         </View>

        );
    }
}
module.exports = MyOrder;
