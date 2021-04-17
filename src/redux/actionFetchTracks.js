import { actionTypes } from "./actionTypes"
import axios from "axios"
import { baseUrl } from '../config/data';

export const actionFetchTracks = (uuid) => {

  /** NOTE: To be done in Drupal Veiw'  
   *        - Format/settings -> Json
   *        - Advance/Contextual Filters -> uuid
  */
  
  const URL = uuid 
              ? `${baseUrl.URL}/d9-sunya/rest-api/music-tracks/${uuid}` 
              : `${baseUrl.URL}/d9-sunya/rest-api/music-tracks`;
  
  return function (dispatch) {
    dispatch({
      type: actionTypes.TRACKS_START_FETCHING
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
    .then((res) => {
        
        console.log(res.data)

        dispatch({
          type: actionTypes.TRACKS_FETCHED,
          baseUrl: baseUrl.URL,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.TRACKS_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}