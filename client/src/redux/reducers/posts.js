import { postConstants } from '../actions/constants'

const posts = (posts = [], action) => {
    switch (action.type) {
        case postConstants.FETCH_ALL:
            return action.payload
        case postConstants.CREATE:
            return [...posts, action.payload]
        case postConstants.UPDATE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)
        case postConstants.DELETE:
            return posts.filter(post => post._id !== action.payload)
        default:
            return posts;
    }
}

export default posts