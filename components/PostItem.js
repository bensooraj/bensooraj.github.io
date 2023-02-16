import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PostItem = ({ post }) => {
    const date = new Date(post.data.date);
    const formattedDate = date.getDate().toString().padStart(2, "0") + '.' +
        date.getMonth().toString().padStart(2, "0") + '.' +
        date.getFullYear()
    return (
        <div className={styles.postItem}>
            <h3 style={{ textAlign: "left", float: "left", paddingRight: "1em", marginTop: "10px", marginBottom: "5px" }}>
                {formattedDate}
            </h3>
            <h3 style={{ textAlign: "left", float: "left", marginTop: "10px", marginBottom: "5px" }}>
                <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
            </h3>
            <br style={{ clear: "both" }} />
        </div>
    );
};

export default PostItem;
