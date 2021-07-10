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
			<h1>{post.title}</h1>
			<p>By Author {post.userId}</p>
			<p>{post.body}</p>
			{comments.map((comment) => {
				return (
					<PostComments key={comment.id} comment={comment} />
				)
			})}
			<Link to={`/author/${post.userId}`}>Read More by Author {post.userId}</Link>
		</div>
    );
}