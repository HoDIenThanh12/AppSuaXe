import { checkStore } from 'modals/function';
import { MENU } from '../../common/constants';

export default class StorageReduxAction {
  static setMenuFooter( payload ) {
    // checkStore(payload, 'SET_MENU_FOOTER')
    return {
      type: MENU.SET_MENU_FOOTER,
      payload,
    };
  }

  static setUser( payload ) {
    checkStore( 'user', payload );
    return {
      type: MENU.USER,
      payload,
    };
  }
  // static setSDT (payload) {
  //   checkStore(payload, KEYSTORE.SET_MENU_FOOTER)
  //   return {
  //     type: KEYSTORE.SET_MENU_FOOTER,
  //     payload
  //   }
  // }
  // static setName (payload) {
  //   checkStore(payload, KEYSTORE.SET_MENU_FOOTER)
  //   return {
  //     type: KEYSTORE.SET_MENU_FOOTER,
  //     payload
  //   }
  // }
}
