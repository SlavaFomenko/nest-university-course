'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {ReactNode} from "react";

export default function ArticlesLayout({ children }:{ children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div>
            <nav>
                <Link href="/articles/favorite" className={pathname === '/articles/favorite' ? 'active' : ''}>
                    Favorite
                </Link>
                <Link href="/articles/create" className={pathname === '/articles/create' ? 'active' : ''}>
                    Create
                </Link>
            </nav>
            {children}
        </div>
    );
}
