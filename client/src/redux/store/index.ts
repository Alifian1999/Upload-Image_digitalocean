import { configureStore } from '@reduxjs/toolkit'
import rootReducers from '../reducer/rootReducer'
import thunk from 'redux-thunk'


let applyMiddlewares = [thunk]

const store = configureStore ({
    reducer     : rootReducers,
    middleware  : (getDefaultMiddleware : any) => getDefaultMiddleware({
        serializableCheck:false,
        applyMiddlewares
    })
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store