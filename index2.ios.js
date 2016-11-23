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

      // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // return {
      //   dataSource:ds.cloneWithRows(this._genRows({})),
      // };
  }


    // static  get(host, callback) {
    //     fetch(host)
    //     .then((response) => response.text())
    //     .then((responseText) => {
    //       alert(JSON.parse(responseText));
    //       callback(JSON.parse(responseText));
    //     }).done();
    //   }

//     function toQueryString(obj) {
//         return obj ? Object.keys(obj).sort().map(function (key) {
//             var val = obj[key];
//             if (Array.isArray(val)) {
//                 return val.sort().map(function (val2) {
//                     return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
//                 }).join('&');
//             }
//
//             return encodeURIComponent(key) + '=' + encodeURIComponent(val);
//         }).join('&') : '';
//     }
//
// //disclass:'product',action:'gfreshHome',PortID:'1'
//
//     fetch(url, {
//         method: 'post',
//         body: toQueryString({
//             // 'firstParam': 'yourValue',
//             // 'secondParam':'yourOtherValue'
//             'disclass':'product',
//             'action':'gfreshHome',
//             'PortID':'1'
//         })
//     })

// static  postFrom(url,method,headers,body, data, callback,errorCallback) {
//     var fetchOptions = {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body:'data='+data+''//这里我参数只有一个data,大家可以还有更多的参数
//     };
//
//     fetch(url, fetchOptions)
//     .then((response) => response.text())
//     .then((responseText) => {
//       callback(JSON.parse(responseText));
//     }).done();
//   }




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

 // _renderContent = (color: string, pageText: string, num?: number) => {
 //    return (
 //      <View style={[styles.tabContent, {backgroundColor: color}]}>
 //        <Text style={styles.tabText}>{pageText}</Text>
 //        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
 //      </View>
 //    );
 //  };



  // function setValue() {
  // var jsonData = document.getElementById("jsonData").value;
  // var json = eval("("+jsonData+")");
  // for (var o in json) {
  // var names = document.getElementsByName(o);
  // var tagname = names[0].tagName;
  // if ("INPUT" == tagname) {
  // names[0].value = json[o];
  // } else if ("SELECT" == tagname) {
  // names[0].value = json[o];
  // } else {
  // names[0].innerHTML = json[o];
  // }
  // }
  // }



componentDidMount()
{
  //postFrom(url,method,headers,body, data, callback,errorCallback)
 // let headers : {
 //        'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
 //        'Content-Type' : 'text/plain;charset=UTF-8',
 //        'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
 //        'Host' : 'domain.xx.com',
 //    }
 //表单
  // let headers = {'Accept': 'application/json','Content-Type': 'application/x-www-form-urlencoded'};
  //json形式
  // let header2 = { 'Accept': 'application/json','Content-Type': 'application/json'};
  let params = {'disclass':'product','action':'gfreshHome','PortID':'1'};
 // let params = {'start':'0',limit:'20','isNeedCategory': true, 'lastRefreshTime': '2016-09-25 09:45:12'};
  // let url = Global.LOGIN;
    // let map = new Map()
    // map.set('disclass','product');
    // map.set('action','gfreshHome');
    // map.set('PortID','1');
    // let sx = Util.mapToJson(Util.tokenAndKo(map));


let postUrl = 'http://10.10.20.40:8080/no/client?disclass=product&action=gfreshHome&PortID=1';
 // console.log('params ：'+postUrl+','+headers+','+params);

  this.getData('http://10.10.20.40:8080/no/client?disclass=product&action=gfreshHome&PortID=1', successCallback =(success)=>{

     if (typeof(success.data) == "object" ){
      // alert(set_json.data.timeList);

      // postFrom(url,headers,body,data,callback,errorCallback) {
     //  let formData = new FormData();
     //  formData.append("disclass","product");
     //  formData.append("action","gfreshHome");
     // formData.append("PortID","1");
     //
     //    this.postFrom('http://10.10.20.40:8080/no/client',callback = (responsedata)=>
     //   {
     //      console.log(responsedata.data);
     //   },errorCallback = (error)=>{
     //       console.log('请求发生错误:'+error);
     //   });

      //遍历二级分类数据
      // for (var value of success.data.homeAreaList) {

          // this.THUMB_URLS = success.data.homeAreaList;
        // console.log(success.data.homeAreaList);




  // for (var obJvalue of success.data.homeAreaList)
  // {
  //    var obj = [];
  //    for (let [key, value] of entries(obJvalue))
  //    {
  //      obj.push([key, value]);
  //     // console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
  //    }
  //
  //    dataList.push(obj);   //   [  [[key,value],[key,value]] ]
  // }

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

// renderLoadingView()
//      {
//          return (<View style={styles.container} >
//                  <Text>Loading movies......</Text>
//              </View>
//
//          );
//      }


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





    //   <Navigator
    //    initialRoute={routes[0]}
    //    initialRouteStack={routes}
    //    renderScene={(route, navigator) =>
    //      <TouchableHighlight onPress={() => {
    //        if (route.index === 0) {
    //          navigator.push(routes[1]);
    //        } else {
    //          navigator.pop();
    //        }
    //      }}>
    //      <Text>Hello {route.title}!</Text>
    //      </TouchableHighlight>
    //    }
    //    style={{padding: 100}}
    //  />

      // <Navigator
      //   style={{flex:1}}
      //   initialRoute={{component:PageOne}}
      //   configureScene={this.configureScene}
      //   renderScene={this.renderScene}/>

        // <Navigator
        // initialRoute= {{ name: 'TabBarView', component: TabBarView}}
        //                configureScene={(route) => {
        //                  if (route.sceneConfig)
        //                  {
        //                    return route.sceneConfig;
        //                  }
        //                    return Navigator.SceneConfigs.FloatFromRight;
        //                } }
        //
        //                renderScene={(route, navigator) => {
        //                    let Component = route.component;
        //                    return(
        //                        <Component navigator = {navigator} route = {route} {...route.passProps} />
        //                    )
        //                } }
        //                />

        //  <Navigator
        //           initialRoute={{ name: defaultName, component: defaultComponent }}
        //           configureScene={(route) => {
        //               return Navigator.SceneConfigs.PushFromRight ;
        //             }}
        //           renderScene={(route, navigator) => {
        //               let Component = route.component;
        //               return <Component {...route.params} navigator={navigator} />
        //             }}/>
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

        //  <TabBarIOS
        //       unselectedTintColor="yellow"
        //       tintColor="white"
        //       barTintColor="darkslateblue">
        //       <TabBarIOS.Item
        //         title="Blue Tab"
        //         icon={{uri: base64Icon, scale: 3}}
        //         selected={this.state.selectedTab === 'blueTab'}
        //         onPress={() => {
        //           this.setState({
        //             selectedTab: 'blueTab',
        //           });
        //         }}>
        //         {this._renderContent('#414A8C', 'Blue Tab')}
        //       </TabBarIOS.Item>
        //       <TabBarIOS.Item
        //         systemIcon="history"
        //         badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
        //         selected={this.state.selectedTab === 'redTab'}
        //         onPress={() => {
        //           this.setState({
        //             selectedTab: 'redTab',
        //             notifCount: this.state.notifCount + 1,
        //           });
        //         }}>
        //         {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        //       </TabBarIOS.Item>
        //       <TabBarIOS.Item
        //         icon={require('./flux.png')}
        //         selectedIcon={require('./relay.png')}
        //         renderAsOriginal
        //         title="More"
        //         selected={this.state.selectedTab === 'greenTab'}
        //         onPress={() => {
        //           this.setState({
        //             selectedTab: 'greenTab',
        //             presses: this.state.presses + 1
        //           });
        //         }}>
        //         {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        //       </TabBarIOS.Item>
        //     </TabBarIOS>
       )}



  // _renderRow(rowData,sectionID,rowID)
  // {
  //   var imgSource = THUMB_URLS[rowID];
  //   return (
  //     // <TouchableHighlight underlayColor="red">
  //       // <View style={styles.list}>
  //         <View style={styles.row}>
  //           <Image style={styles.thumb} source={imgSource} />
  //           <Text style={styles.text}>
  //             {rowData}
  //           </Text>
  //         </View>
  //       //  </View>
  //     // </TouchableHighlight>
  //   );
  // }






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

  // _genRows(pressData: {[key: number]:boolean}): Array<string>
  // {
  //   var dataBlob = [];
  //   for (var ii = 0; ii < 25;ii++) {
  //     dataBlob.push('单元格 ' + ii);
  //   }
  //   return dataBlob;
  // }

  // _genRows(pressData: {[key: number]:boolean}): Array<string>
  // {
  //   var dataBlob = [];
  //   for (var ii = 0; ii < THUMB_URLS.length;ii++) {
  //     dataBlob.push( THUMB_URLS[ii].FilePath+ THUMB_URLS[ii].FileName);
  //   }
  //   return dataBlob;
  // }
}
module.exports = HelloWorldApp;
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
