import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = ({data}) => {
    return (
        <>
                 {data.map((datapoint) => (
                    <View key={datapoint} style={styles.ListItem}>
        <Text style={styles.itemText}>{datapoint}</Text></View>
      ))}
        </>
    );
}

const styles = StyleSheet.create({
    ListItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
    },
    itemText:{
        color:'#351401',
        textAlign:'center'
    }
})

export default List;
