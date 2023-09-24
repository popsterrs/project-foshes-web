import 'src/app/styles/blog-page.css'
import { GetBlogByGUID } from 'src/app/scripts/data.js';

export default async function ItemPage({ params }) {
    const blog = await GetBlogByGUID(params.id);

    return (
        <div className='blog-page-bounds'>
            <div className='blog-page-wrapper'>
                <h1>{blog.title}</h1>
                <div className="product-des" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
        </div>
    )
}