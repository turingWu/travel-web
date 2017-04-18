/**
 * Created by wython on 2017/3/25.
 */

import {SET_USER_DATA} from '../actions'

export function setUserData(state = {}, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return action.data;
        default:
            return {};
    }
}
