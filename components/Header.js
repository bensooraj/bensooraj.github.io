import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='max-width-container'>
                <h2>
                    <Link href='/'>Ben Sooraj</Link>
                </h2>
                <ul>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
