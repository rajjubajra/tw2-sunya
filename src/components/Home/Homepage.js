import {useState, useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from '../../config/data';


function Homepage() {

  const URL = `${baseUrl.URL}/d9-sunya/rest-api/homepage`;

  const [data, setData] = useState([]);

  useEffect(()=>{

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
    .then(res => setData(res.data) )
    .catch(err => console.log("DATA FETCH ERROR: ", err))

  },[URL])
  
  console.log(data);

  function createMarkup(text){
    return {__html: text}
  }

  return (
    <div className="container m-auto">
      {
        data.length > 0 && 
        
        <div className="md:m-h-screen md:flex md:items-center">
          <div>
            <img 
            src={`${baseUrl.URL}${data[0].field_homepage_image}`} 
            alt="bg" />
          </div>
          
            <div 
            className="md:text-8xl text-5xl text-center relative -top-30" 
            dangerouslySetInnerHTML={createMarkup(data[0].field_text_homepage)} />
        </div>
      }
    </div>
  )
}

export default Homepage