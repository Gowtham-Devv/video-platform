// Action Types
export const NEXT_VIDEO = 'NEXT_VIDEO';
export const SHOW_COMMENTS = 'SHOW_COMMENTS';
export const CLOSE_WEBSITE = 'CLOSE_WEBSITE';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

// Action Creators
export const nextVideo = () => ({ type: NEXT_VIDEO });
export const showComments = () => ({ type: SHOW_COMMENTS });
export const closeWebsite = () => ({ type: CLOSE_WEBSITE });
export const showNotification = (message) => ({ type: SHOW_NOTIFICATION, message });
export const hideNotification = () => ({ type: HIDE_NOTIFICATION });
