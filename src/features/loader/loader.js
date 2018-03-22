export const SHOW_LOADER = 'loader/show';
export const HIDE_LOADER = 'loader/hide';

/**
 * reducer
 */
export function loaderReducer(state = { showLoader: false }, action) {
  switch (action.type) {
  case SHOW_LOADER:
    return {
      showLoader: true
    };
  case HIDE_LOADER:
    return {
      showLoader: false
    };
  default:
    return state;
  }
}

/**
 * action to show the loader
 */
export function showLoader() {
  return {
    type: SHOW_LOADER
  };
};

/**
 * action to hide the loader
 */
export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
};
