import Link from 'next/link';
import styles from '../styles/components/SideBar.module.css';
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';

export function SideBar() {
    return (
        <div className={styles.container}>
            <img src="icons/logo-small.svg" alt="moveit" />
            <div className={styles.buttons}>
                <button type="button">
                    <div></div>
                    <FiHome size={32} />
                </button>
                <button type="button" disabled>
                    <div></div>
                    <FiAward size={32} />
                </button>
            </div>
            <div className={styles.logOut}>
                <Link href="/">
                    <FiLogOut size={28} />
                </Link>
            </div>
        </div>
    );
}