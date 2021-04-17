import React from 'react'

function LyricView({lyric}) {

  function createMarkup(text) {
    return {__html: text };
  }

  return (
     <div dangerouslySetInnerHTML={createMarkup(lyric)} />
  )
}

export default LyricView
