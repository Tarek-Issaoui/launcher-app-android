import { InstalledApps } from 'react-native-launcher-kit';

const initialState={
    allApps:InstalledApps.getApps().map(el=>{
        return {
            ...el,
            checked:false
        }
    }),
    launchedApps:[],
}
const myReducer= (state=initialState,action)=>{
    switch(action.type){
        case 'launch':
            console.log('clicked')
            var x;
           return{
            allApps:state.allApps.map(el=>{
                if(el.label===action.label){
                    x= {
                        ...el,
                        checked:true
                    }
                    return x
                }
                return el
            }),
            launchedApps:[...state.launchedApps,x]
           }
        case 'unlaunch':
            console.log('clicked from unlaunch')
            return{
                allApps:state.allApps.map(el=>{
                    if(el.label===action.label){
                        return{
                            ...el,
                            checked:false
                        }
                    }
                    return el
                }),
                launchedApps:state.launchedApps?.filter(el=>el.label!==action.label)
               }
               default:
                   return state
    }
};

export default myReducer;
