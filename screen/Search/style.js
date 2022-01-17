import React from 'react';
import { StyleSheet } from 'react-native';
import TextInput from 'components/TextInput/index';
import { height, width } from 'common/styles';
import Colors from '../../common/Colors';

const styles = StyleSheet.create( {
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    // flex:1
  },
  container: {
    flex: 1,
  },
  containerOptions: {
    // width: width( 50 ),
    marginRight: height( 4 ),
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameOptions: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: height( 0.5 ),
  },
  nameUnOptions: {
    fontSize: 20,
  },
  lineOptions: {
    width: width( 15 ),
    height: height( 0.5 ),
    backgroundColor: Colors.GRAY,
    borderRadius: 5,
  },
  flatList: {
    marginTop: height( 5 ),
    height: height( 65 ),
    width: width( 90 ),
  },
  option: {
    flexDirection: 'row',

  },
  textAll: {
    paddingVertical: 5,
  },
  containerWorkerDetail: {
    flexDirection: 'row',
    // marginTop: 5,
    backgroundColor: Colors.WHITE,
    paddingVertical: 5,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  imgAvatarWorker: {
    height: height( 12 ),
    padding: 5,
    width: width( 15 ),
    alignItems: 'center',
    marginTop: height( 1.3 ),
    resizeMode: 'contain',
    marginHorizontal: 12,
  },
  titleContentWorker: {
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  viewContentWorker: {
    color: Colors.BORDER_BOX,
    fontSize: height( 1.5 ),
  },
  addressContentWorker: {
    color: Colors.RED,
    fontSize: height( 1.5 ),
    width: width( 60 ),
    // textAlign:'right'
  },
} );
export default styles;
