import MeetMe from '../components/MeetMe.js';
import Link from 'next/link';
import PostItem from '../components/PostItem';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import { useState } from 'react';
import { getPosts } from '../scripts/utils.js';

const Home = ({ posts }) => {

    return (
        <>
            <Meta />
            <MeetMe src="/1597573125669.jpeg" />


            <div className={styles.articleList}>
                <h2 style={{ textAlign: "left", float: "left" }}>Latest Posts</h2>
                <h4 style={{ textAlign: "right", float: "right" }}><Link href='/blog'>Read all posts</Link></h4>
                <hr style={{ clear: "both" }} />
                {posts.map((post, index) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const posts = getPosts({ num: 3 });

    return {
        props: {
            posts,
        },
    };
};
