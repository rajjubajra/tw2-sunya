

export default function PlayingTrackInProgress(props) {

  let now = props.now.toFixed(0);



  const widthValue = {
    width:  props.now.toFixed(0) + '%'
  }

  

  return (
    <>
    <div className="shadow w-full bg-grey-light mt-2" >
    <div 
      style={widthValue}
      className="bg-gray-300 text-xs leading-none py-1 text-center text-gray-900">
      {props.now.toFixed(0)}
    </div>
  </div>
    </>
  )
}
