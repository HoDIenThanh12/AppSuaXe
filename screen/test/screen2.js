import React from 'react';
import { View, Button } from 'react-native';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

export default function screen2() {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED
      || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if ( enabled ) {
      messaging()
        .getToken()
        .then( ( fcmToken ) => {
          console.log( 'FCM Token -> ', fcmToken );
        } );
    } else {
      console.log( 'Authorization status:', authStatus );
    }
  };
  const onDisplayNotification = async () => {
    console.log( 'đã vào' );
    // Create a channel
    const channelId = await notifee.createChannel( {
      id: 'default',
      name: 'Default Channel'
    } );

    // Display a notification
    await notifee.displayNotification( {
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId
        // smallIcon: 'ic_launche', // optional, defaults to 'ic_launcher'.
      }
    } );
  };
  return (
    <View>
      <Button title="Display Notification" onPress={onDisplayNotification} />
      <Button
        title="Display Notification Firebase"
        onPress={requestUserPermission}
      />
    </View>
  );
}
