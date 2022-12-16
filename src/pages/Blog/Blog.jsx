import BlogBody from '../../components/BlogPage/BlogBody/BlogBody';
import BlogTitle from '../../components/BlogPage/BlogTitle/BlogTitle';
import './Blog.scss';
function Blog() {
    return (  
        <div className="blog-page">
            <BlogTitle />
            <BlogBody />
        </div>
    );
}

export default Blog;