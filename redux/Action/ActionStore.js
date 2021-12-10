import {MENU} from '../../common/constans'
export default class StorageReduxAction{
  static setMenuFooter (payload) {
    // checkStore(payload, 'SET_MENU_FOOTER')
    return {
      type: MENU,
      page
    }
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