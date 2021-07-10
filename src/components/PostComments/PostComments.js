export function PostComments({comment}) {
	return (
		<div className="post-comment">
			<p>{comment.body} &mdash; <a href={"mailto:" + comment.email}>{comment.name}<span>&#65279;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" aria-hidden="true"><path d="M0 127.5v146.719L104.8 206.1zM400 274.219V127.5l-104.8 78.6zM200 277.5l-69.643-52.232L0 310v30h400v-30l-130.357-84.732z" /><path d="M0 90l200 150L400 90V60H0z" /></svg></span></a></p>
		</div>
    );
}

