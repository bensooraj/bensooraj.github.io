import Link from 'next/link';
import styles from '../styles/PostItem.module.css';

const PostItem = ({ post }) => {
    const date = new Date(post.data.date);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`;

    return (
        <div className={styles.postItem}>
            <h3 className={styles.date}>{formattedDate}</h3>
            <h3 className={styles.title}>
                <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
            </h3>
        </div>
    );
};

export default PostItem;
