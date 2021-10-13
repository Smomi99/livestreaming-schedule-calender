import React from 'react'

function Stream() {
    return (
        <div >
            <h2 className="stream-head">Streamming Video</h2>
            <iframe className="stream" width="560" height="315" src="https://www.youtube.com/embed/UN9lVuPMX_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Stream
