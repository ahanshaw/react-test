import {Link} from 'react-router-dom';

export function PostsItem({post}) {
	return (
		<div className="posts-item">
			<h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
			<p>{post.body}</p>
		</div>
    );
}