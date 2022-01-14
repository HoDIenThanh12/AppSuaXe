// import store from 'react-native-simple-store'

import { MENU, KEY_PAGE } from '../../common/constants';
// import createReducer from './CreateReducer';
import { createReducer } from './CreateReducer';
import initState from '../Lib/key';

export const menuFooterRedux = createReducer( initState.menuFooter, {
  [MENU.SET_MENU_FOOTER]( state, action ) {
    return action.payload;
  },
} );
export const user = createReducer( initState.user, {
  [MENU.USER]( state, action ) {
    return action.payload;
  },
} );
export const listWorker = createReducer( initState.list, {
  [KEY_PAGE.SET_LIST_WORKER]( state, action ) {
    return action.payload;
  },
} );
