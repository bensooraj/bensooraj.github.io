/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
    return src
}

const MeetMe = ({ src }) => {
    return (
        <div>
            <img
                src={src}
                alt="ben sooraj avatar"
                width={150}
                height={150}
                className={styles.img}
            />
            <p className={styles.p}>
                Hi 👋🏼, I&apos;m Ben, a software engineer, a husband, a father and a voracious learner.
            </p>
        </div>
    );
};

export default MeetMe;
