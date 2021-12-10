// import store from 'react-native-simple-store'

import {MENU} from '../../common/constans'
const createReducer =(initialState, handlers)=>{
  return function reducer (state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const Init={ menuFooter: 'home',}
export const menuFooterRedux = createReducer(Init.menuFooter, {
  [MENU] (state, action) {
    return action.payload
  }
})