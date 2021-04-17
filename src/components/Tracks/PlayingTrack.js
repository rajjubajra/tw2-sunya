import React from 'react';
import { useAudio } from 'react-use';
import PlayingTrackInProgress from './PlayingTrackInProgress';
import Play from './MusicPlayerIcons/Play';
import Pause from './MusicPlayerIcons/Pause';
// import Mute from './MusicPlayerIcons/Mute';
// import Forward from './MusicPlayerIcons/Forward';
// import Backward from './MusicPlayerIcons/Backward';
// import VolumeUp from './MusicPlayerIcons/VolumeUp';
// import VolumeDown from './MusicPlayerIcons/VolumeDown';
import Stop from './MusicPlayerIcons/Stop';
import { useDispatch } from 'react-redux';
import { actionStopTheTrack } from '../../redux/actionPlayTheTrack';



function PlayingTrack(props) {

  const dispatch = useDispatch()
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

  //const [track, setTrack] = useState('');

  /** useAudio from react-use */
  const [audio, state, controls, ref] = useAudio({
    src: props.track,
    autoPlay: false,
  });

  console.log("state: ", state);
  console.log("ref: ", ref);
  console.log("track: ", props.track);


  function createMarkup(text){
    return {
      __html: text
    }
  }

  return (
    <div className="mt-3">
      <ul className="mb-2">
        <li>
          {/* {<audio src={props.track} preload='auto' controls></audio>} */}
          {audio}
          {/* <div>Time Left: {Math.floor(state.duration - state.time)}</div> */}
          <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
        </li>
        <li>
          <section className="flex">
            <span className="m-2 p-2 border hover:bg-gray-200 cursor-pointer" onClick={controls.pause}><Pause /></span>
            <span className="m-2 p-2 border hover:bg-gray-200 cursor-pointer" 
            onClick={controls.play}><Play /></span>
            {/**
          <span onClick={controls.mute}><Mute /></span>
          <span onClick={controls.unmute}>Un-mute</span>
          */}
            {/**
          <span onClick={() => controls.volume(0.5)}><VolumeUp /></span>
          <span onClick={() => controls.volume(0.1)}><VolumeDown /></span>
          */}
            {/**         
          <span onClick={() => controls.seek(state.time - 5)}><Backward /></span>
          <span onClick={() => controls.seek(state.time + 5)}><Forward /></span>
           */}

            <span className="m-2 p-2 border hover:bg-gray-200 cursor-pointer" 
            onClick={() => dispatch(actionStopTheTrack())}><Stop /></span>
          </section>
          <section className="flex">
            <span>Track Playing - </span>
            <span className="mx-2">
              <div dangerouslySetInnerHTML={createMarkup(props.title)} />
            </span>
          </section>
        </li>
      </ul>
    </div>
  )
}

export default PlayingTrack