import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {actionFetchTracks} from '../../redux/actionFetchTracks';
import PlayingTrack from './PlayingTrack';
import LyricView from './LyricView';
import ReactPlayer from 'react-player';

function MusicTrack() {

  /** get uuid for the single track data */
  const params = useParams()
 
  /** disptach to action uuid for single track data */
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(actionFetchTracks(params.uuid))
  },[dispatch, params.uuid]) /** do NOT ADD params.uuid */

  /** get single track data */
  const track = useSelector(state => state.reducerFetchTracks.payload);

  /** Parse HTML */
  function createMarkup(text) {
    return {__html: text };
  }

  //console.log(track);

  return (
    <div className="container">
      {
        track &&
        <>
        {/** TRACK TITLE */}
        <div className="text-3xl py-4" dangerouslySetInnerHTML={createMarkup(track[0].title)} />

        {/** TRACK COVER IMAGE */}
        <div>
          <img className="h-80 w-full object-cover object-top" src={track[0].image}   alt="track cover" />
        </div>

        {/** TRACK PLYING MEDIA FILE */}
        <div className="md:px-20 lg:w-2/3 m-auto py-10">
          <h3>Play Track:</h3>
          <PlayingTrack track={track[0].track} title={track[0].title} />
        </div>

        {/** BRIEF DESCRIPTION OF THE TRACK */}
        <div className="my-20 md:px-20 md:w-2/3 m-auto ">
          <div dangerouslySetInnerHTML={createMarkup(track[0].briefDesc)} />
        </div>

        {/** LYRIC */}
        <div className="lg:w-2/3 m-auto md:px-20">
          <h3 className="text-3xl">Lyric:</h3>
          <LyricView lyric={track[0].lyric} />
        </div>

        
        <div className="w-full flex justify-center py-20">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${track[0].youtubeId}`} />
        </div>
        </>

      }
    </div>
  )
}

export default MusicTrack
