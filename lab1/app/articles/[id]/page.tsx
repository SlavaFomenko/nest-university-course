import { Post } from "@/app/articles/interfaces/Post";
import { Comment } from "@/app/articles/interfaces/Comment";

type Params = Promise<{ id: string }>; //the only solution i found https://nextjs.org/docs/app/building-your-application/upgrading/version-15#asynchronous-page

export function generateStaticParams(): { id: string }[] {
    return Array.from({ length: 10 }, (_, i) => ({
        id: (i + 1).toString(),
    }));
}

export default async function Page({ params }: { params: Params }) {
    const { id } = await params;

    const [data, comments]: [Post, Comment[]] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json()),
    ]);

    return (
        <div>
            <h2>{data.title}</h2>
            <ul>
                {comments.map((comment: Comment, index) => (
                    <li key={index}>{index + 1}. {comment.body}</li>
                ))}
            </ul>
        </div>
    );
}
