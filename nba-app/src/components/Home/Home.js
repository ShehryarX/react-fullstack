import React from 'react';

import NewsSlider from '../Widgets/NewsSlider/NewsSlider';
import NewsList from '../Widgets/NewsList/NewsList';
import VideosList from '../Widgets/VideosList/VideosList';


const Home = () => {
  return (
    <div>
      <NewsSlider 
        type='featured'
        start={0}
        end={3}
        settings={{
          dots: false
        }}
      />
      <NewsList 
        type='card'
        loadMore={true}
        start={0}
        amount={3}
      />
      <VideosList
        type='card'
        title={true}
        loadMore={true}
        start={0}
        amount={3}
      />
    </div>
  )
}

export default Home;