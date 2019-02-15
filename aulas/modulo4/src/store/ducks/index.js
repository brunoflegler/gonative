import { combineReducers } from 'redux';

import albums from './albums';
import songs from './songs';
import player from './player';

export default combineReducers({
  albums,
  songs,
  player,
});
