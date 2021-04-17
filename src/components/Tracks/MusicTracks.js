import { useSelector } from 'react-redux';
import CoverImage from './CoverImage';
import {Link} from 'react-router-dom';

function MusicTracks() {

  
  const tracks = useSelector(state => state.reducerFetchTracks.payload);
  console.log(tracks);


  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {
        tracks.length > 0 &&
        tracks.map(item=>{
          return <div key={item.uuid}>
            <div>
              <Link to={`track-details/${item.uuid}`}>
              <div>
                <CoverImage imgsrc={item.image} />
              </div>
              </Link>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default MusicTracks
