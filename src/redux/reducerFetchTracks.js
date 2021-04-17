const { actionTypes } = require('./actionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
  payload: '',
  payloadLength: 0
}

export const reducerFetchTracks = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.TRACKS_FETCHED:
      console.log('DATA REDUCER', action.data);
      let arr = [];
      const baseUrl = action.baseUrl;
      action.data.forEach(function (item) {
        arr.push({
          title: item.title,
          track: baseUrl + item.field_track_mp3,
          image: baseUrl + item.field_coverimage,
          lyric: item.field_lyric_and_chords,
          youtubeId: item.field_youtube_id,
          briefDesc: item.field_brief_description,
          uuid: item.uuid
        })
      })
      return {
        fetched: true,
        payload: arr,
        data: action.data,
        dataLength: action.data.length
      }
    case actionTypes.TRACKS_FETCH_ERROR:
      return {
        fetched: false,
        fetching: false,
        error: action.error
      }
    /** default state */
    default:
      return state;
  }
}



