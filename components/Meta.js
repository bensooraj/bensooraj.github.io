import Head from 'next/head';

const Meta = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name='keywords'
                content='golang, nodejs, mysql, docker, kubernetes, Ben Sooraj'
            />
        </Head>
    );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
    title: 'Ben Sooraj - A journal of my learnings',
};
