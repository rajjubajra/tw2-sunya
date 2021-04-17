import {useState, useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from '../../config/data';


function AboutPage() {

  const URL = `${baseUrl.URL}/d9-sunya/rest-api/about`;

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
        
          <div className="w-11/12 m-auto md:grid md:grid-cols-8 md:-mt-20">
            <div className="col-span-2 flex justify-center items-center">
              <div className="md:transform md:-rotate-90">
                <h2 className="md:text-8xl text-5xl py-20 md:py-0">{data[0].title}</h2> 
              </div>
            </div>    
            <div className="flex md:min-h-screen items-center col-span-6 order-2">
                <div className="lg:w-2/3 m-auto">
                  <div dangerouslySetInnerHTML={createMarkup(data[0].field_about)} />
                </div>
            </div>
          </div>
      }
    </div>
  )
}

export default AboutPage