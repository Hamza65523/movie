import React from 'react'

const Join = () => {
  return (
    <div style={{backgroundRepeat:'no-repeat',backgroundSize:'100%'}} className=' bg-[url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")]'>
      <div className="flex">
      <div className="">
            <h1>Join Today</h1>
            <p>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Zee5, and Sun Nxt.</p>
            <input type="submit"  value='Submit'/>
        </div>
        <div className="">
            <ul>
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming services and find something to watch</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Join