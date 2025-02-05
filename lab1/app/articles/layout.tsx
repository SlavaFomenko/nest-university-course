'use client';

import styles from '../menu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function ArticlesLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div>
            <nav className={styles.nav}>
                <Link
                    href="/articles/favorite"
                    className={`${styles.navLink} ${pathname === '/articles/favorite' ? styles.active : ''}`}
                >
                    Favorite
                </Link>
                <Link
                    href="/articles/create"
                    className={`${styles.navLink} ${pathname === '/articles/create' ? styles.active : ''}`}
                >
                    Create
                </Link>
            </nav>
            {children}
        </div>
    );
}
