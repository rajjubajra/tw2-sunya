import PageTitle from '../components/PageTitle';
import MusicTracks from '../components/Tracks/MusicTracks';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { actionFetchTracks } from '../redux/actionFetchTracks';

function Tracks() {
  const dispatch = useDispatch();

  useEffect(()=>{
    //populate tracks data in to reducer state
    dispatch(actionFetchTracks());
  },[dispatch])

  return (
    <div className="md:w-11/12 m-auto mt-20">
    <div className="my-10">
      <PageTitle title="Music Tracks" />
    </div>
      <MusicTracks />
    </div>
  )
}

export default Tracks
