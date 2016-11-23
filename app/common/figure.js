import React, { Component } from 'react';
import {Text,StyleSheet,Image,View } from 'react-native';
import ViewPager from 'react-native-viewpager';
import Common from './common';

var postUrl = 'http://10.10.20.40:8080/no/client?disclass=product&action=gfreshHome&PortID=1';

class HelloWorldApp extends Component {


constructor(props) {
      super(props);
      // 用于构建DataSource对象
      var ds = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
      });
      // 实际的DataSources存放在state中
      this.state = {
          dataSource1: ds,
      };
  }

componentDidMount() {
  this.BannerDate();
}

BannerDate() {
  fetch(postUrl)
   .then((response) => response.json())
   .then((success) => {
     this.setState({
       dataSource1: this.state.dataSource1.cloneWithPages(success.data.bananerList)
     })
   })
}

render() {
    return (
    <View style={{flex:1}}>
    <ViewPager
        dataSource={this.state.dataSource1}
        renderPage={this._renderPage.bind(this)}
        isLoop={true}
        autoPlay={true}/>
        </View>
    );
  }

  _renderPage(rowData) {
    console.log(rowData.FilePathMobile+rowData.FileNameMobile);
    return (
        <Image source={{uri:rowData.FilePathMobile+rowData.FileNameMobile}} style={styles.page}/>
    )
  }


}



const styles = StyleSheet.create({
    page: {
        flex: 1,
        height:220,
        width: Common.window.width,
        resizeMode: 'stretch'
    }
})
module.exports = HelloWorldApp;
