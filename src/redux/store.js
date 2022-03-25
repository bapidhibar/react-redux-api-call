import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
//
import { rootPersistConfig, rootReducer } from '../redux/reducers/rootReducers';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
});

const persistor = persistStore(store);

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export default store;
//{ store, persistor, useSelector, useDispatch };