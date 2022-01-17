import { checkStore } from 'modals/function';
import { MENU, KEY_PAGE } from 'common/constants';

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

  static setListWorker( payload ) {
    // checkStore( 'user', payload );
    return {
      type: KEY_PAGE.SET_LIST_WORKER,
      payload,
    };
  }

  static setListQualityWorker( payload ) {
    // checkStore( 'user', payload );
    return {
      type: KEY_PAGE.SET_LIST_QUALITY_WORKER,
      payload,
    };
  }
}
