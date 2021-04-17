import { actionTypes } from "../actions/actionType"

const initalstate = {
  trakcs: [],
  playAllTracks: false,
}


export const reducerPlayAllTracks = (state = initalstate, action) => {

  switch (action.type) {
    case actionTypes.PLAY_ALL_TRACKS:
      return {
        tracks: action.tracks,
        playAllTracks: action.true_false
      }
    default:
      return state;
  }

}