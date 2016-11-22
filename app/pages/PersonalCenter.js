import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    View,
    InteractionManager,
    Dimensions,
    TextInput,
    Linking,
} from 'react-native';

import Common from '../common/common';
import styles from '../common/style2';
import HeaderView from '../common/HeaderView';
import Icon from 'react-native-vector-icons/FontAwesome';
import CenterItem from '../component/CenterItem';
import ImageButton from '../component/ImageButton';

var {height,width} =  Dimensions.get('window');

class PersonCenter extends Component {
    constructor(props) {
        super(props);
        this.settingButtonAction=this.settingButtonAction.bind(this);
        this.itemActionIndex=this.itemActionIndex.bind(this);
        this.itemModifyAction=this.itemModifyAction.bind(this);
        this.loginButtonActiom=this.loginButtonActiom.bind(this);
    }
    //设置按钮
    settingButtonAction(){
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
        navigator.push({
          component: Setting,
          name: 'Setting'
        });
      });
    }
    //登录
    loginButtonActiom(){
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Login,
              name: 'Login'
            });
          });
    }
    //判断当前点击了那个按钮
    itemActionIndex(position){
        const {navigator} = this.props;
        if(position === 0){
           InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Prepaid,
              name: 'Prepaid'
            });
          });
        }else if(position === 1){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: AddressM,
              name: 'AddressM'
            });
          });
        }else if(position === 2){
           InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Charge,
              name: 'Charge'
            });
          });

        }else if(position === 3){

        }else if(position === 4){

        }else if(position === 5){
          InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: More,
              name: 'More'
              });
            });
      }
    }
    //编辑按钮
    itemModifyAction(){
       const {navigator} = this.props;
       InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: ModifyInformation,
              name: 'ModifyInformation'
              });
            });
    }

    render() {
        return (
         <View style={styles.body_bg}>

                <View style={styles.body_head}>
                    <HeaderView titleView='个人中心'
                    rightButton={'rightIcon'}
                    leftIconAction={() => this.props.navigator.pop()}
                     />
                </View>

                <View style={{backgroundColor:'white'}}>
                    <View style={{flexDirection:'row',height:100}}>
                       <TouchableOpacity onPress={() => {this.loginButtonActiom()}} >
                           <Image  style={{width:70,height:70,marginLeft:10,marginTop:15}} source={require('../static/images/icon-photoDefault.png')}/>
                       </TouchableOpacity>
                       <View style={{flexDirection:'column',justifyContent:'center',marginLeft:10}}>
                          <Text>Julia Stone</Text>
                          <View style={{flexDirection:'row'}}>
                             <Text style={{color:'#ddd'}}>余额:</Text>
                             <Text style={{color:'#ddd'}}>¥2000</Text>
                          </View>
                       </View>
                    </View>
                </View>



                <View style={[styles.top_line,{marginTop:10}]}></View>
                <CenterItem
                   title='收货地址'
                   icon={require('../static/images/icon-adress.png')}
                   onPress={()=>this.itemActionIndex(1)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='红包/优惠券'
                   icon={require('../static/images/icon-coupon.png')}
                   onPress={()=>this.itemActionIndex(2)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='发票管理'
                   icon={require('../static/images/icon-invoiceAddress.png')}
                   onPress={()=>this.itemActionIndex(3)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem
                   title='意见反馈'
                   icon={require('../static/images/icon-track.png')}
                   onPress={()=>this.itemActionIndex(4)}/>
                <View style={styles.top_line}></View>
         </View>

        );
    }
}
module.exports = PersonCenter;
