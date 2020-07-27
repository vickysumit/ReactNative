import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Home extends Component {

    render() {
      
        return(
            
            <View><Text style={styles.innerText}>Home Component</Text></View>
            
        );
        
    }
    
}
const styles = StyleSheet.create({

    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    innerText: {
        color: 'red'
      }
  });
  

export default Home;