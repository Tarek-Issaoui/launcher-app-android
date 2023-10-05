/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @refresh reset
 */
import React, { useState,useEffect } from 'react';
// import { useMMKVStorage } from 'react-native-mmkv-storage';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { Button, Dialog, FAB, IconButton, PaperProvider, Portal } from 'react-native-paper';
import InstalledApps from './InstalledApps';
import { Avatar } from '@rneui/themed';
import {store} from '../store/index'
import { Connect } from 'react-redux';
const Home = ({navigation}) => {
  const checkedApps=useSelector(state=>state.launchedApps);
  console.log(checkedApps.length)
  // const [user, setUser] = useMMKVStorage('launcheddApps', store, checkedApps)
  const [visible, setVisible] = useState(false);
  const dispatch=useDispatch();
  const showDialog = () => setVisible(true);
  // dispatch({type:'retrieve'})
  const hideDialog = () => setVisible(false);
  // console.log(user)
  // useEffect(async ()=>{
  //   //  dispatch({type:'retrieve'})
  //   dispatch()

  // },[checkedApps])
//   useEffect(()=>{
    
console.log(checkedApps[checkedApps.length-1])
// },[checkedApps])
  // console.log(checkedApps?.length)
  useEffect(()=>{
    dispatch({type:'retrieve'})
},[checkedApps,visible])
  return (
    <PaperProvider>
      <ScrollView style={{backgroundColor:"#21262d"}}>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}
          style={{ backgroundColor: '#2E4374', borderCurve:"none", height: '73%' ,marginBottom:100, zIndex:1}}
          backdropStyle={{ backgroundColor: '#2E4374' }}
          >
            <Dialog.Content >
              <InstalledApps />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog} style={{color:'white'}}>Cancel</Button>
              <Button onPress={()=>{
                dispatch({type:'retrieve'})
                hideDialog()
              }}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      <View style={{display:'flex',flexWrap:'wrap',marginTop:80,marginLeft:10 ,marginRight:10,flexDirection:'row'}}>
      {checkedApps?.length>0 && checkedApps.map((item,index)=>{
        return(
          <View key={index} style={{display:'flex',width:'25%',height:'80',alignItems:'center',marginBottom:10 }}>
            <Avatar
              source={{uri: `data:image/jpeg;base64,${item.icon}`}}
              size={50}
              iconStyle={{margin:10}}
            />
            <Text style={{fontVariant:'small-caps',color:'white',fontSize:15,marginTop:5,marginBottom:5,fontWeight:'bold'}}>{item.label}</Text>
          </View>
      )})}
      </View>
      </ScrollView>
      <FAB style={{backgroundColor:'#2E4374',width:60,height:60 ,position:'absolute',bottom:40 ,borderCurve:"none" ,right:30 ,zIndex:1 }}   icon={require('../icons/addIcons.png')}  onPress={showDialog}/>
    </PaperProvider>
  );
};
const mapStateToProps=(state)=>{
  return{
    allApps:state.allApps,
    launchedApps:state.launchedApps
  }
}

export default Home;


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'grey',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    btn:{
      width: 60,
      height: 60,
      backgroundColor: "blue",
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      marginBottom:50,
      marginTop:'150%',
      marginLeft:'80%',
      shadowColor:"grey",
  },

  });
  
