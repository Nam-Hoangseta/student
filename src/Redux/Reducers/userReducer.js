import * as userConstants from "../Constants/userConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return { isLoading: true };
    case userConstants.USER_LOGIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_LOGIN_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_LOGIN_RESET:
      return {};
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
//register
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return { isLoading: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_REGISTER_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};
//profile

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_PROFILE_REQUEST:
      return { isLoading: true };
    case userConstants.USER_PROFILE_SUCCESS:
      return { isLoading: false, userInfo: action.payload, isSuccess: true };
    case userConstants.USER_PROFILE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
//change password
export const userChangePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_CHANGE_PASSWORD_REQUEST:
      return { isLoading: true };
    case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
      return { isLoading: false, isSuccess: true, message: action?.payload };
    case userConstants.USER_CHANGE_PASSWORD_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_CHANGE_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const userGetFavoriteReducer = (state = { likeCourse: [] }, action) => {
  switch (action.type) {
    case userConstants.USER_GET_FAVORITE_REQUEST:
      return { isLoading: true };
    case userConstants.USER_GET_FAVORITE_SUCCESS:
      return { isLoading: false, likeCourse: action?.payload };
    case userConstants.USER_GET_FAVORITE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.USER_GET_FAVORITE_RESET:
      return { likeCourse: [] };
    default:
      return state;
  }
};

export const deleteFavoriteReducer = (state = { likeCourse: [] }, action) => {
  switch (action.type) {
    case userConstants.DELETE_FAVORITE_REQUEST:
      return { isLoading: true };
    case userConstants.DELETE_FAVORITE_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case userConstants.DELETE_FAVORITE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.DELETE_FAVORITE_RESET:
      return {};
    default:
      return state;
  }
};

export const getUserReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case userConstants.GET_ALL_USER_REQUEST:
      return { isLoading: true };
    case userConstants.GET_ALL_USER_SUCCESS:
      return { isLoading: false, users: action.payload };
    case userConstants.GET_ALL_USER_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.GET_ALL_USER_RESET:
      return { user: [] };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = { likeCourse: [] }, action) => {
  switch (action.type) {
    case userConstants.DELETE_USER_REQUEST:
      return { isLoading: true };
    case userConstants.DELETE_USER_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case userConstants.DELETE_USER_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.DELETE_USER_RESET:
      return {};
    default:
      return state;
  }
};

export const userLikeCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.LIKED_COURSE_REQUEST:
      return { isLoading: true };
    case userConstants.LIKED_COURSE_SUCCESS:
      return { isLoading: false, isSuccess: true };
    case userConstants.LIKED_COURSE_FAIL:
      return { isLoading: false, isError: action.payload };
    case userConstants.LIKED_COURSE_RESET:
      return {};
    default:
      return state;
  }
};
