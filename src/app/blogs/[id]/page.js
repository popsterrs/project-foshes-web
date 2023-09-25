import 'src/app/styles/blog-page.css'
import { GetBlogByGUID } from 'src/app/scripts/data.js';

export default async function ItemPage({ params }) {
    const blog = await GetBlogByGUID(params.id);

    return (
        <div className='blog-page-bounds'>
            <div className='blog-page-wrapper'>
                <a href='/blogs' className='blog-page-return-button'> <span>&lt;-</span> Back to blogs</a>
                <h1 className='blog-page-title'>{blog.title}</h1>

                <div className='blog-page-content' dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                <div className='blog-page-info'>
                    <h4 className='blog-page-info-author'>Written by {blog.author}</h4>
                    <h5 className='blog-page-info-publish-date'>{blog.pubDate.slice(0, 10)}</h5>
                </div>
            </div>
        </div>
    )
}