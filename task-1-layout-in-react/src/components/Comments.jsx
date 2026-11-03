import './Comments.css';

/** Reader comments: bold username followed by the comment text. */
export default function Comments({ comments }) {
  return (
    <section className="comments">
      <h2>Comments</h2>
      <ul className="comments__list">
        {comments.map((comment) => (
          <li key={comment.username} className="comment">
            <strong className="comment__user">{comment.username}</strong>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
