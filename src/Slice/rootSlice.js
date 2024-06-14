import { NEXT_VIDEO, SHOW_COMMENTS, CLOSE_WEBSITE, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../Redux/actions';

const initialState = {
  notification: '',
  showCommentsSection: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_VIDEO:
      alert('Moving to next video');
      return state;
    case SHOW_COMMENTS:
      alert('Showing comments section');
      return { ...state, showCommentsSection: true };
    case SHOW_NOTIFICATION:
      return { ...state, notification: action.message };
    case HIDE_NOTIFICATION:
      return { ...state, notification: '' };
    default:
      return state;
  }
};

export default rootReducer;
