import React, { Component } from 'react';
import { FlatList, View, Text,Alert  } from 'react-native';

import { List } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';

import * as Animatable from 'react-native-animatable';

import Notifications from '../model/Notifications';


 
 const NotificationScreen = () =>  {

    const [listData, setListData] = useState(
        Notifications.map((NotificationItem, index) => ({
          key: `${index}`,
          title: NotificationItem.title,
          details: NotificationItem.details,
        })),
      );

    

  

        
        const renderMenuItem = ({item}) => {
            const rightButton = [
                {
                    text: 'Delete', 
                    type: 'delete',
                    onPress: () => {
                        Alert.alert(
                            'Delete Favorite?',
                            'Are you sure you wish to delete the favorite dish ' + item.title + '?',
                            [
                                { 
                                    text: 'Cancel', 
                                    onPress: () => console.log(item.title + ' Not Deleted'),
                                    style: ' cancel'
                                },
                                {
                                    text: 'OK',
                                    onPress: () => {}
                                }
                            ],
                            { cancelable: false }
                        );
                        
                    }                
                }
            ]
            return (
                <Swipeout right={rightButton} autoClose={true}>
                    <Animatable.View animation="fadeInRightBig" duration={2000}> 
                    <List.Item
                 title={item.title}
            description={item.details}
            
                />
                       </Animatable.View>
            </Swipeout>
            );
        };
         

   
        
            return (
                <FlatList 
                    data={listData}
                    renderItem={renderMenuItem}
                 
                    />
            );
       
    
}


export default NotificationScreen;