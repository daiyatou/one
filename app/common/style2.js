import Common from './common';

module.exports = {
  body_bg:{flex:1,
    backgroundColor:'#f5f5f5'
  },
  body_head:{
    height:45,
    backgroundColor:'#3987ff',
    flexDirection:'row',
  },
  bg_blue:{
    backgroundColor:'#3987ff',
  },
  color_white:{
    color:'#ffffff',
  },
  color_red:{
    color:'#ff4d77',
  },
  color_blue:{
    color:'#0463de',
  },
  color_green:{
    color:'#4cd964',
  },
  font_14: {
    fontSize: 14,
  },
  font_bold:{
    fontWeight: 'bold',
  },
  font_12: {
   fontSize: 12,
  },
  top_line:{
      height:1,
      backgroundColor:'#eeeeee',
  },
  center_line:{
      marginLeft:10,
      marginRight:10,
  },
  marginLR_8:{
      marginLeft:8,
      marginRight:8,
  },
  modify_item:{
      alignItems:'flex-end',
      flex:1,
      marginRight:10,
      marginTop:15
  },
  //底部按钮组件
  bottom_cont_botton:{
    marginTop:8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    padding: 6,
    backgroundColor:'#0463de',
    borderRadius:3,
  },
  bottom_botton:{
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff',
  },
//ImageButton组件
  image_button_style:{
     height:25,
  },
  image_button_img:{
     width:76,
     height:25,
     justifyContent:'center',
  },
  //设置——行CenterItem组件
    person_row: {
       paddingTop:15,
       paddingBottom:15,
       backgroundColor:'#ffffff',
    },
    person_row_left:{
       justifyContent:'center',
    },
    person_row_icon:{
       width:25,
       height:25,
       marginLeft:10,
    },
    person_row_text:{
       marginLeft:8,
       fontSize: 12,
       color:'#333333',
    },
    person_right10:{
      marginLeft:8,
      position :'absolute',
      top:0,
      right:30,
    },
    person_right30:{
      marginLeft:8,
      position :'absolute',
      top:0,
      right:10,
    },
    person_row_cont:{
      fontSize: 12,
      color:'#a5aab4',
    },
    person_row_right:{
       justifyContent:'center',
       flex:1,
       alignItems:'flex-end',
       marginRight:10,
    },
    person_row_more:{
      width:12,
      height:16,
    },
  //个人中心
  person_header:{
    justifyContent: 'flex-end',
    height:45,
  },
  person_set_icon:{
    height: 18,
    width: 18,
    justifyContent: 'flex-end',
    marginRight: 10,
    marginTop: 12,
  },
  person_main:{
    alignItems:'center',
    justifyContent:'center',
  },
  person_main_row:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
  },
  person_main_unit:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    position :'relative',
  },
  person_main_icon:{
    width:24,
    height:24,
    marginBottom:8,
  },
  person_main_photo:{
    width:60,
    height:60,
  },
  person_line_ver:{
    height:20,
    width:1,
    backgroundColor:'#7cace9',
  },
  person_tab:{
    flex:1,
    marginTop:8,
    marginBottom:8,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
  },
  person_tab_icon:{
    width:24,
    height:24,
    marginTop:12,
    marginBottom:8,
  },
  person_tab_txt:{
    fontSize:12,
    color:'#404040',
    marginBottom:12,
  },
  person_order_num:{
    flex:1,
    position :'absolute',
    top:5,
    right:20,
    width:16,
    height:16,
    lineHeight:15,
    borderRadius:8,
    backgroundColor:'#ff4d77',
    color:'#ffffff',
    textAlign:'center',
    justifyContent:'center',
    fontSize:10,
  },
  person_list:{
    marginBottom:8,
    borderRadius:4,
    backgroundColor:'#ffffff',
  },
  person_list_row:{
    paddingTop:15,
    paddingBottom:15,
    alignItems:'center',
  },
  person_list_txt:{
    fontSize: 12,
    color:'#333333',
  },
//个人资料
  personinfo_head:{
    flexDirection:'row',
    backgroundColor:'#ffffff',
    marginTop:8,
    justifyContent:'center',
    alignItems:'center',
  },
  personinfo_line:{
    backgroundColor:'#f5f5f5',
    height:6,
  },
  personinfo_photo:{
    borderRadius:25,
    width:50,
    height:50,
    margin:8,
  },
  personinfo_txt:{
    flex:1,
    justifyContent: 'flex-start',
    textAlign:'left',
  },
//浏览记录
  scan_list:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#ffffff',
    marginBottom:5,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
  },
  scan_list_left:{
    width:60,
    height:60,
  },
  scan_list_img:{
    width:60,
    height:60,
    borderRadius:4,
  },
  scan_list_center:{
    marginLeft:8,
    justifyContent:'center',
    flex:1,
  },
  scan_list_name:{
    color:'#333333',
    fontSize:14,
  },
  scan_list_price:{
    color:'#0463de',
    fontSize:14,
    fontWeight:'bold',
    marginTop:5,
  },
  scan_list_size:{
    color:'#a5aab4',
    fontSize:12,
  },
  scan_list_right:{
    justifyContent: 'flex-end',
    marginLeft:8,
  },
  scan_list_date:{
    color:'#333333',
    fontSize:12,
    textAlign:'right',
  },
//我的收藏
  store_list_icon:{
    width:16,
    height:16,
  },
//到货通知
  goods_on:{
    color:'#4cd964',
  },
  goods_off:{
    color:'#a5aab4',
  },
//交易列表一行组件TradeItem
  trade_item:{
    flexDirection:'column',
    backgroundColor:'#ffffff',
    padding:10,
  },
  trade_item_row:{
    flexDirection:'row',
    marginTop:2,
    marginBottom:2,
  },
  trade_name:{
    color:'#2d2d2d',
    fontSize:12,
    justifyContent:'center',
    alignItems:'flex-end',
    justifyContent:'center',
    flex:1,
  },
  trade_datatime:{
    color:'#979797',
    fontSize:12,
    justifyContent:'center',
  },
  trade_balance:{
    color:'#979797',
    fontSize:12,
    justifyContent:'center',
    alignItems:'flex-end',
    justifyContent:'center',
    flex:1,
  },
  trade_num:{
    color:'#979797',
    fontSize:12,
    fontWeight:'bold',
    justifyContent:'center',
  },
//我的余额
  trade_tab:{
    backgroundColor:'#ffffff',
    flexDirection:'row',
  },
  trade_tab_unit:{
    width:Common.window.width/2,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    paddingTop:8,
    paddingBottom:8,
  },
  line_on:{
    width:Common.window.width/2,
    backgroundColor:'#0463de',
    height:2,
    marginTop:8,
  },
  line_off:{
    width:Common.window.width/2,
    backgroundColor:'#a5aab4',
    height:1,
    marginTop:8,
  },
  trade_tab_gray:{
    color:'#a5aab4',
  },
  balance_head:{
    backgroundColor:'#ffffff',
    flexDirection:'row',
    padding:8,
  },
  balance_photo:{
    height:50,
    width:50,
    borderRadius:25,
  },
  balance_head_title:{
    color:'#333333',
    fontSize:12,
    marginTop:5,
  },
  balance_head_num:{
    fontSize:14,
    marginTop:5,
  },
  balance_head_right:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'center',
    flexDirection:'row',
  },
  balance_btn:{
    width:50,
  },












};
