import 'src/app/styles/blogs.css';
import 'src/app/styles/buttons.css';
import { GetMediumBlogPosts } from 'src/app/scripts/data.js';

function Blogs() {
    function BlogCard(props) {
        const blogPageUrl = 'blogs/' + props.title
    
        return (
            <a href={blogPageUrl}>
                <div className='blogs-grid-item card'>    
                <h1>{props.title}</h1>
                    {/* <div className='items-grid-card-info'>
                        <h1>{props.title}</h1>
                        <p>{(props.description != "") ? props.description : 'No Description Found'}</p>
                    </div> */}
                </div>
            </a>
        )
    }

    async function BlogsGrid() {
        const blogs = await GetMediumBlogPosts('@william_hamilton');
    
        function Blogs() {
            if(blogs) {
                return (
                    blogs.items.map(blog => (
                        <BlogCard key={blog.title}{...blog}/>
                    ))
                )
            } else {
                return (
                    <p className='error'>Error: No Blogs Found</p>
                )
            }
            // return <code>{JSON.stringify(blogs, null, 4)}</code>
        };
    
        return (
            <div className='blogs-grid'>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
            </div>
        )
    }

  return (
    <div className='blogs-bounds'>
      <div className='blogs-wrapper'>
        <BlogsGrid/>
      </div>
    </div>
  );
}

export default Blogs;
