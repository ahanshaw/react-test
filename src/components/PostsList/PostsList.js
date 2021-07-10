import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import { Loader } from "../Loader/Loader";
import { PostsItem } from "../PostsItem/PostsItem";

export function PostsList() {
	const [isLoading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);
	const [title, setTitle] = useState('All Articles');
	const {authorId} = useParams();

    // get posts
	useEffect(() => {
		let mounted = true;
		setLoading(true);

		// set fetch URL based on presence of author ID 
		let apiUrl = '';

		if (authorId) {
			apiUrl = 'https://jsonplaceholder.typicode.com/posts/?userId=' + authorId;
			setTitle('All Articles by Author ' + authorId);
		}
		else {
			apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
			setTitle('All Articles');
		}

		// fetch data
		fetch(apiUrl)
        .then(function (resp) {
            return resp.json();
        })
		.then(function (data) {
			if (mounted) {
				setPosts(data);
				setLoading(false);
			}
        })
        .catch(function (err) {
			console.log('something went wrong', err);
		});

        return function cleanup() {
            mounted = false
        }
	}, [authorId]);

	// if posts are loading
    if (isLoading) {
        return (
            <div>
                <Loader />
            </div>
        );
	}

	// if posts are loaded
	return (
		<div>
			<h1>{title}</h1>
            <div className="posts-list">
                {posts.map((post) => {
                    return (
                        <PostsItem key={post.id} post={post} />
                    )
                })}
            </div>
        </div>
    );
}