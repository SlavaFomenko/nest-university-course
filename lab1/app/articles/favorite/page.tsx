import {Suspense} from 'react';
import FavoriteArticle from "@/app/articles/favorite/components/FavoriteArticle";
import Loading from "@/app/articles/favorite/components/Loading";

function FavoritePage() {
    const articleIds = [1, 2, 3];

    return (
        <div>
            <h1>Favorite Articles</h1>
            <ul>
                {articleIds.map((id) => (
                    <li key={id}>
                        <Suspense fallback={<Loading />}>
                            <FavoriteArticle id={id} />
                        </Suspense>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritePage;
