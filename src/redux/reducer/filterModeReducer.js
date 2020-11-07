export default function filterModeReducer(state = null, action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}
