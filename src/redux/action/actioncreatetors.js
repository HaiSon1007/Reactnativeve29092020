import actionType from './actionTypes';

function setFilterMode(filterMode) {
  return {type: actionType.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

export default {setFilterMode};
