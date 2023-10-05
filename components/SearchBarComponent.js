
import React,{useState} from 'react'
import { View, TextInput, Image, StyleSheet, Button ,Alert } from 'react-native';
import { IconButton } from 'react-native-paper';


const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
    <View style={styles.searchContainer}>
      {searchQuery.length === 0 ? <IconButton
        icon={require('../icons/search.png')}
        size={20}
        iconColor='white'
        
      /> : <IconButton
      icon={require('../icons/goBack.png')}
      size={20}
      iconColor='white'
      onPress={() => setSearchQuery()}
    />}
      <TextInput
        style={styles.input}
        placeholder="Search ..."
        placeholderTextColor="#9EBCD9"
        value={searchQuery}
        onChangeText={onChangeSearch}
      />
       <IconButton
        icon={require('../icons/threeDot.png')}
        size={20}
        iconColor='white'
      />
    </View>
  </View>
  )
}

export default SearchBarComponent
const styles = StyleSheet.create({
  container: {
    // color:"#2E4374",
    backgroundColor:"transparent",
    position: 'relative',
    padding: 10,
    alignItems: 'center',
    borderLeftColor:"#21262d",
    borderBottomColor:"#21262d",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    maxWidth: "100%",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  searchContainer: {
    position: 'relative',
    backgroundColor:"#2E4374",
    width: '95%',
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width:'50%',
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 10,
    color: '#9EBCD9',
    fontSize: 15,
    borderWidth: 0,
  },
  searchIcon: {
    width: 50,
    height: 50, 
    aspectRatio: 1,
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 25, // Half of the width/height for a circular shape
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
});