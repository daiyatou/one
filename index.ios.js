import React, { Component } from 'react';
import { AppRegistry,Text,StyleSheet,Image,View,ListView,TouchableOpacity,TouchableHighlight,ScrollView,TabBarIOS,Navigator} from 'react-native';
import ViewPager from 'react-native-viewpager';
import NetUitl from './utils/NetUitl';
import secondPageComponent from './static/pages/PageTwo';

const tabBarItems = [
    { title: '首页', icon: () => <Image style={{ width: 15, height: 15 }} source={require('./static/images/icon-home.png')}/> },
    { title: '客服', icon: () => <Image style={{ width: 15, height: 15 }} source={require('./static/images/icon-service.png')}/> },
    { title: '购物车', icon: () => <Image style={{ width: 15, height: 15 }} source={require('./static/images/icon-cart.png')}/> },
    { title: '我的', icon: () => <Image style={{ width: 15, height: 15 }} source={require('./static/images/icon-personal.png')}/>},
];

const bannerImages = [
    require('./images/1.jpg'),
    require('./images/2.jpg'),
    require('./images/3.jpg'),
    require('./images/4.jpg'),
];



// var THUMB_URLS =[];
var dataList;
var THUMB_URLS = [
  require('./images/like.png'),
  require('./images/dislike.png'),
  require('./images/call.png'),
  require('./images/fist.png'),
  require('./images/bandaged.png'),
  require('./images/flowers.png'),
  require('./images/heart.png'),
  require('./images/liking.png'),
  require('./images/party.png'),
  require('./images/poke.png'),
  require('./images/superlike.png'),
  require('./images/victory.png'),
  require('./images/victory.png'),
  require('./images/poke.png'),
  require('./images/superlike.png'),
  require('./images/victory.png'),
  require('./images/victory.png'),
  require('./images/poke.png'),
  require('./images/superlike.png'),
  require('./images/victory.png'),
  require('./images/victory.png')
];
// var let  const
// var data = {disclass:'product',action:'gfreshHome',PortID:'1'};
var host = 'http://10.10.20.40:8080/no/client';




class HelloWorldApp extends Component {

    static title = '<TabBarIOS>';
    static description = 'Tab-based navigation.';
    static displayName = 'TabBarExample';



   constructor(props) {
      super(props);
      // 用于构建DataSource对象
      var pagerdataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
      });

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // 实际的DataSources存放在state中
      this.state = {
          // selectedTab: tabBarItems[0].title,
          selectedTab: 'blueTab',
          notifCount: 0,
          presses: 0,
          dataSource1: pagerdataSource.cloneWithPages(bannerImages),
          // homeAreaArray:null,
          loaded: false,
          dataSource2:ds,
      };
  }


  postFrom(url,callback,errorCallback) {
    // var datas = new FormData();
    var payload = {'disclass':'product','action':'gfreshHome','PortID':'1'};
    // datas.append( "data", JSON.stringify( payload ) );
    var fetchOptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(payload) //JSON.stringify({'disclass':'product','action':'gfreshHome','PortID':'1'})           // JSON.stringify(body)
    };

    fetch(url,fetchOptions)
    .then((response) =>response.text())
    .then((responseText) => {
       callback(JSON.parse(responseText));
    }).catch((error) =>{
       errorCallback(error)
    }).done();
  }



   getData =(url, successCallback, failCallback)=>{
    //  console.log(url);
     fetch(url)
       .then((response) => response.text())
       .then((responseText) => {
         successCallback(JSON.parse(responseText));
       }).catch(function(err){
          failCallback(err);
       });
   }

_renderPage(data, pageID) {
     return (
         <Image
             source={data}
             style={styles.page}/>
     );
 }


componentDidMount()
{
  let params = {'disclass':'product','action':'gfreshHome','PortID':'1'};

let postUrl = 'http://10.10.20.40:8080/no/client?disclass=product&action=gfreshHome&PortID=1';
 // console.log('params ：'+postUrl+','+headers+','+params);

  this.getData('http://10.10.20.40:8080/no/client?disclass=product&action=gfreshHome&PortID=1', successCallback =(success)=>{

     if (typeof(success.data) == "object" ){


         this.setState(
           {
              // homeAreaArray:success.data.homeAreaList,
               dataSource2:this.state.dataSource2.cloneWithRows(success.data.homeAreaList),
               loaded:true,
           }
         )

      //  }
     }



  }, failCallback=(failed)=>{
    console.log('回调失败信息：......'+failed);
  })

}


  _pressRow(id){
  console.log('params is:'+id);
// const {navigator} = this.props;
this.props.navigator.push(
  {
  component: secondPageComponent,
});
}

render() {

  const routes = [{title: 'First Scene', index: 0},{title: 'Second Scene', index: 1}];

  let defaultName = 'currentPage';
  let defaultComponent = secondPageComponent;



    return(

      <ScrollView>
        <View style={{flex:1}}>
        <View style={{height:180}}>



      <ViewPager
          style={{height:130}}
          dataSource={this.state.dataSource1}
          renderPage={this._renderPage}
          isLoop={true}
          autoPlay={true}/>
        </View>

        <View style={{height:118}}>

          <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{width: 75, height: 50}} >
             <Image source={require('./images/icon_home_section_1.png')} style={{width:60,height:60}}/>
               <Text >极鲜拍</Text>
          </View>

          <View style={{width: 75, height: 50}} >
              <Image source={require('./images/icon_home_section_2.png')} style={{width:60,height:60}}/>
               <Text>我要购买</Text>
          </View>

          <View style={{width: 75, height: 50}} >
              <Image source={require('./images/icon_home_section_3.png')} style={{width:60,height:60}}/>
               <Text>定期购</Text>
          </View>

          <View style={{width: 75, height: 50}} >
              <Image source={require('./images/icon_home_section_4.png')} style={{width:60,height:60}}/>
               <Text>精英会员</Text>
          </View>

          <View style={{width: 75, height: 50}} >
            <Image source={require('./images/icon_home_section_5.png')} style={{width:60,height:60}}/>
               <Text>物流/发票</Text>
         </View></View></View>

         <ListView
          //  initialListSize={13*2}
           contentContainerStyle={styles.list}
           dataSource={this.state.dataSource2}
           renderRow={this._renderRow.bind(this)}
            removeClippedSubviews={false}
         />
         </View>


         </ScrollView>
       )}

  _renderRow(rowData,sectionID,rowID)
  {

    return (
      // <TouchableOpacity onPress = {() =>this._pressRow(rowData.FileName)} underlayColor = "transparent" >
      //    <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={{uri:rowData.FilePath+rowData.FileName}} />
            <Text style={styles.text}>{rowData.HomeAreaName}</Text>
          </View>
        //   </View>
        //  </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    page: {
       flex: 1,
       height: 180,
        resizeMode: 'stretch'
    },
    list: {
      marginLeft:5,
      marginTop:5,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    row: {
      justifyContent: 'center',//'center'
      padding: 5,
      margin: 3,
      width: 85,
      height: 85,
      // backgroundColor: '#F6F6F6',
      alignItems: 'center',
      // borderWidth: 1,
      // borderRadius: 5,
      borderColor: '#CCC'
    },
    thumb: {
      width: 45,
      height: 45
    },
    text: {
      flex: 1,
      marginTop: 5,
      fontWeight: 'bold'
    },

    tabContent: {
   flex: 1,
   alignItems: 'center',
 },
 tabText: {
   color: 'white',
   margin: 50,
 },
})

module.exports = HelloWorldApp;
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
