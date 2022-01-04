// import store from 'react-native-simple-store'

import { MENU } from '../../common/constants';
// import createReducer from './CreateReducer';
import { createReducer } from './CreateReducer';
import initState from '../Lib/key';

export const menuFooterRedux = createReducer( initState.menuFooter, {
  [MENU.SET_MENU_FOOTER]( state, action ) {
    return action.payload;
  },
} );
