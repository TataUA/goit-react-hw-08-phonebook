export const selectUserData = state => state.auth.userData;
export const selectUserToken = state => state.auth.token;
export const selectUserAuthentication = state => state.auth.authentication;
export const selectUserLoading = state => state.auth.isLoading;
export const selectUserIsRefreshing = state => state.auth.isRefreshing;
export const selectUserError = state => state.auth.error;
