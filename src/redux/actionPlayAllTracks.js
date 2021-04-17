import { actionTypes } from "./actionType";

export const actionPlayAllTracks = (tracks, true_false) => (

  {
    type: actionTypes.PLAY_ALL_TRACKS,
    tracks: tracks,
    true_false: true_false
  }
)