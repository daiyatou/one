import React, { PropTypes,Component } from 'react';
import {  View,  Text, StyleSheet,TouchableOpacity,} from 'react-native';

const totalCount = 10;
class Timers extends Component {
   // 构造
  constructor(props) {
      super(props);
      // 初始状态
      this.state = {
          count: totalCount
      };
      this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentWillUnmount() {
      clearInterval(this.timer);//FIXME:无法实现卸载时清除计时器
  }
  count() {
      this.timer = setInterval(()=>this.setState({
              count: this.state.count - 1
          }
      ), 1000);
      if (this.state.count == 0) {
          //clearTimeout(this.timer)//FIXME:确定程序可以走到这里，但是无法实现清除计时器
          clearInterval(this.timer);
      }
  }

  render() {
      return(
           <TouchableOpacity onPress={this.count.bind(this)} disabled={!(this.state.count == totalCount || this.state.count == 0)}>

           </TouchableOpacity>
      )
  }
}
export default Timers;
