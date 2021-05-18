import * as api from '../../api'
import { postConstants } from './constants'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost()
        dispatch({
            type: postConstants.FETCH_ALL, payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: postConstants.CREATE, payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async dispatch => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: postConstants.UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}
export const deletePost = (id) => async dispatch => {
    try {
        await api.deletePost(id)
        dispatch({ type: postConstants.DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async dispatch => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: postConstants.UPDATE, payload: data })
    } catch (error) {

    }
}