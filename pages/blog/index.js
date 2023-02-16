import PostItem from '../../components/PostItem';

import { getPosts } from '../../scripts/utils.js';
import styles from '../../styles/Home.module.css';

const Blog = ({ posts }) => {
    return (
        <>
            <h1>Blog</h1>
            <hr />
            <div className={styles.articleList}>
                {posts.map((post, index) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
        </>
    );
};

export default Blog;

export const getStaticProps = async () => {
    const posts = getPosts(undefined);

    return {
        props: {
            posts,
        },
    };
};