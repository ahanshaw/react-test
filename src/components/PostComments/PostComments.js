export function PostComments({comment}) {
	return (
		<div className="post-comment">
			<p>{comment.body}</p>
			<p><a href={"mailto:" + comment.email}>{comment.name}</a></p>
		</div>
    );
}

