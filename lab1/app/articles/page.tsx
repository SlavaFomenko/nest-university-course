import {Post} from "@/app/articles/interfaces/Post";

export default async function ArticlesPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles: Post[] = await response.json();

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {articles.slice(0, 5).map((article) => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}
