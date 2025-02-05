import {Post} from "@/app/articles/interfaces/Post";

async function fetchArticle(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
}

interface ServerFavoriteArticleProps {
    id: number;
}

export default async function ServerFavoriteArticle({id}: ServerFavoriteArticleProps) {
    const article = await fetchArticle(id);

    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </div>
    );
}
