import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

import { Loader } from "../Loader/Loader";
import { PostComments } from "../PostComments/PostComments";

export function Post() {
	const [isLoading, setLoading] = useState(true);
	const {postId} = useParams();
    const [post, setPost] = useState();
    const [comments, setComments] = useState();

	useEffect(() => {
		let mounted = true;
		setLoading(true);

		Promise.all([
			fetch('https://jsonplaceholder.typicode.com/posts/' + postId),
			fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
		])
		.then(function (responses) {
			return Promise.all(responses.map(function (response) {
				return response.json();
			}));
		})
		.then(function (data) {
			if (mounted) {
				setPost(data[0]);
				setComments(data[1]);
				setLoading(false);
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	
        return function cleanup() {
            mounted = false
        }
	}, [postId]);

    if (isLoading){
        return (
            <Loader />
        );
    }

    return (
        <div className="post">
			<div className="post__content">
				<h1>{post.title}</h1>
				<p className="author">By Author {post.userId}</p>
				<p>{post.body}</p>
				<Link className="read-more" to={`/author/${post.userId}`}>Read More by Author {post.userId} <span className="arrow">&#x27B8;</span></Link>
				<h2>Comments</h2>
			</div>
			<div className="post__comments">
				{comments.map((comment) => {
					return (
						<PostComments key={comment.id} comment={comment} />
					)
				})}
			</div>
		</div>
    );
}