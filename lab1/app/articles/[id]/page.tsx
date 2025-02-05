import { Post } from "@/app/articles/interfaces/Post";
import {Comment} from "@/app/articles/interfaces/Comment";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;

    const [data, comments]:[Post,Comment[]] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json())
    ]);

    console.log(comments);

    return (
        <div>
            <h2>{data.title}</h2>
            <ul>
                {comments.map((comment: Comment, index) => (
                    <li key={index}>{index+1}. {comment.body}</li>
                ))}
            </ul>
        </div>
    );
}
