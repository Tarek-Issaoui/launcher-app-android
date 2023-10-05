/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @refresh reset
 */
// import { ListItemCheckBox } from '@rneui/base/dist/ListItem/ListItem.CheckBox';
import { ListItem ,Avatar } from '@rneui/themed';
import React, {useEffect, useMemo, useState}from 'react';
import {ScrollView} from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import { LinearGradient } from 'react-native-linear-gradient';
import CheckBox  from '@react-native-community/checkbox';
// import { BouncyCheckbox } from 'react-native-bouncy-checkbox';
const InstalledApps = () => {
    const [count,setCount]=useState(0)
    const data=useSelector(state=>state.allApps);
    const checkedApps=useSelector(state=>state.launchedApps);
    // const memo=useMemo(()=>data,checkedApps)
    // console.log(memo)
    const dispatch=useDispatch();
    // console.log(checkedApps)
    useEffect(()=>{
        dispatch({type:'retrieve'})
    },[checkedApps,count])
  return (
    
        <ScrollView style={{height:"90%"}}>
        {
            data.map((l, i) => (
            <ListItem 
                    key={i}  
                    linearGradientProps={{

                        colors: ['#2E4374', '#2E4374'],
                        start: { x: 3, y: 0 },
                        end: { x: 0.2, y: 0 },
                      }}
                      ViewComponent={LinearGradient}
                      style={{justifyContent:"center",alignItems:"center"}}
                      containerStyle={{height:62}}
                    >
                <Avatar
                    size={40}
                    // containerStyle={{backgroundColor:'red'}}
                    rounded
                    source={{ uri: `data:image/jpeg;base64,${l.icon}` }}
                    />
                <ListItem.Content style={{display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center",flexDirection:"row",flexWrap:"wrap",width:"100%"}} >
                    <ListItem.Title style={{fontFamily:"monospace", color:"white",fontSize:15}} >{l.label}</ListItem.Title >
                    
                    <CheckBox  
                        value={l.checked}
                        onCheckColor='#f1dff4'
                        onFillColor='#f1dff4'
                        onChange={()=>{
                            setCount(count+1)
                            l.checked?dispatch({type:'unlaunch',label:l.label}):dispatch({type:'launch',label:l.label})
                        }}
                    />
                </ListItem.Content>
            </ListItem>
            ))
        }
        </ScrollView>
  )
}

export default InstalledApps;
