import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'



const persistConfig = {
    key: 'root',
    storage,
};

// root reducer
const rootReducer = combineReducers({
    usertoken: authSlice,
  
   
});

const persistRootReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistRootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,
                    REGISTER],
            },
        }),

});
// persist all data to local storage
const persistor = persistStore(store)

export { store, persistor };
