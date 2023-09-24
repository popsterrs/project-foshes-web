'use client'
import React, { useEffect } from 'react';

function Blogs() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='blogs-bounds'>
      <div className='blogs-holder'>
        <div
          id="retainable-rss-embed"
          data-rss="https://medium.com/feed/retainable,https://medium.com/feed/vue-mastery"
          data-maxcols="3"
          data-layout="grid"
          data-poststyle="inline"
          data-readmore="Read the rest"
          data-buttonclass="btn btn-primary"
          data-offset="-100"
        ></div>
      </div>
    </div>
  );
}

export default Blogs;
