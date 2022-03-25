import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tableReducer from '../reducers/tableReducers';

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: []
  };
  
  const productPersistConfig = {
    key: 'product',
    storage,
    keyPrefix: 'redux-',
    whitelist: ['sortBy', 'checkout']
  };

  const appReducer = combineReducers({
    Mydata: tableReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
      return appReducer(undefined, action)
    }
    return appReducer(state, action)
  }
  
  export { rootPersistConfig, rootReducer };