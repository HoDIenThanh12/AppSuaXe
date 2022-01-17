import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import { height, width } from 'common/styles';

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    width: width( 90 ),
  },
  containerQuality: {
    flexDirection: 'row',
    width: width( 75 ),
    height: height( 18 ),
    backgroundColor: '#BEDFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginRight: width( 3 ),
    marginTop: 5,
    marginBottom: width( 1 ),
    padding: 10,
  },
  containerOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width( 50 ),
  },
  optionMenu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 2,
    // backgroundColor:Colors.GRAY,
    // opacity:0.5,
    borderRadius: 10,
  },
  optionMenuDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleOption: {
    fontSize: height( 2.5 ),
    fontWeight: 'bold',
  },
  detailQuality: {
    width: width( 58 ),
    elevation: 10,
    paddingLeft: 10,
    // alignItems: 'center',

  },
  containerQualityDetail: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
  },
  callQuantity: {
    borderColor: 'red',
  },
  titleQuality: {
    fontWeight: 'bold',
    fontSize: height( 2.2 ),
  },
  luotXemQuality: {
    color: 'red',
  },
  addressQuality: {
    width: width( 54 ),
    // numberLines: 3,
    // textAlign: 'center',
    paddingRight: 10,
  },
  icCallQuality: {
    height: 30,
    width: 30,
    padding: 10,
  },
  // list worker
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
  // setup All
  textAll: {
    paddingVertical: 5,
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
