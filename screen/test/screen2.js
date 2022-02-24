// import React, { useState, useEffect }  from 'react';
// import { View, Button } from 'react-native';
// import notifee from '@notifee/react-native';
// import messaging from '@react-native-firebase/messaging';
// import auth from '@react-native-firebase/auth';
// export default function screen2() {
//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED
//       || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if ( enabled ) {
//       messaging()
//         .getToken()
//         .then( ( fcmToken ) => {
//           console.log( 'FCM Token -> ', fcmToken );
//         } );
//     } else {
//       console.log( 'Authorization status:', authStatus );
//     }
//   };
//   const onDisplayNotification = async () => {
//     console.log( 'đã vào' );
//     // Create a channel
//     const channelId = await notifee.createChannel( {
//       id: 'default',
//       name: 'Default Channel'
//     } );

//     // Display a notification
//     await notifee.displayNotification( {
//       title: 'Notification Title',
//       body: 'Main body content of the notification',
//       android: {
//         channelId
//         // smallIcon: 'ic_launche', // optional, defaults to 'ic_launcher'.
//       }
//     } );
//   };
//   const submit=()=>{

//   }
//   return (
//     <View>
//       <Button title="Display Notification" onPress={onDisplayNotification} />
//       <Button
//         title="Display Notification Firebase"
//         onPress={requestUserPermission}
//       />
//        <Button
//         title="Number Phone"
//         onPress={requestUserPermission}
//       />
//     </View>
//   );
// }
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneSignIn=()=> {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
   const signInWithPhoneNumber=async(phoneNumber)=> {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
      <TextInput value={code} onChangeText={text => setCode(text)} />
    </>
  );
}
export default PhoneSignIn
