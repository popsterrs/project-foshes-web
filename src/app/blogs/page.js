import 'src/app/styles/blogs.css'

export default function Blogs() {
    return (
        <div className='blogs-bounds'>
            <div id="retainable-rss-embed"
                data-rss="https://medium.com/feed/@username"
                data-maxcols="3"
                data-layout="slider"
                data-poststyle="inline"
                data-readmore="Read the rest"
                data-buttonclass="btn btn-primary"
                data-offset="-100"></div>
        </div>
    )
}