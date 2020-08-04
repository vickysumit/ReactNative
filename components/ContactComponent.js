import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component{
    constructor(props){
        super(props);


    }
    static navigationOptions = {
      title: 'Contact us',

  };
    render(){
        const styles = StyleSheet.create({
            container: {
              marginTop: 50,
            },
            bigBlue: {
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 30,
            },
            red: {
              color: 'red',
            },
          });
        return(
           <View style={styles.container}>
               <Card>   
                    <Text style={styles.red}>Contact Information</Text>
                    <Text>Our Address</Text>
                    <Text>121, Clear Water Bay Road
                      Clear Water Bay, Kowloon
                      HONG KONG
                      Tel: +852 1234 5678
                      Fax: +852 8765 4321
                      Email:confusion@food.net
                    </Text>
                    
                </Card>
                
           </View>
           
        );
      
      
          
    }
    
    
}



export default Contact;