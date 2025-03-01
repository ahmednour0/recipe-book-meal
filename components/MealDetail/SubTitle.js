import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SubTitle = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>

        <Text  style={styles.subtitle}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle:{
        color:"#e2b497",
        fontSize:18,
        fontWeight:"bold",
    
    textAlign:'center',
    
      },
      subtitleContainer:{
    borderBottomColor:"#e2b497",
    borderBottomWidth:2,
    padding:6,
    marginHorizontal:12,
    marginVertical:4
      },
})

export default SubTitle;
