import { Comment, CommentResponse } from "@/api/comment";
import { Post } from "@/api/post";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./index.module.css";

interface Props {
  post: Post;
  comment_list: Comment[];
}

const PostDetail: FC<Props> = (props) => {
  const { post, comment_list } = props;

  const router = useRouter();
  // router.isFallback;

  // const { data: comment_list, isLoading } = useQuery(
  //   getCommentListQueryOptions(post.id)
  // );

  if (router.isFallback) {
    return <main>LOADING ...</main>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
      <ol className={styles.comment_list}>
        {comment_list?.map((comment) => {
          return (
            <li key={comment.id}>
              <span className={styles.name}>{comment.name}</span>
              <span className={styles.email}>{comment.email}</span>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ol>
      {/* <ol className={styles.comment_list}>
        {isLoading
          ? "Loading comments"
          : comment_list?.map((comment) => {
              return (
                <li key={comment.id}>
                  <span className={styles.name}>{comment.name}</span>
                  <span className={styles.email}>{comment.email}</span>
                  <p>{comment.body}</p>
                </li>
              );
            })}
      </ol> */}
    </main>
  );
};

export { PostDetail };

// function getCommentListQueryOptions(
//   post_id: number
// ): UseQueryOptions<
//   CommentResponse,
//   Error,
//   CommentResponse["comments"],
//   [string, typeof post_id]
// > {
//   return {
//     queryKey: ["comment-list", post_id],
//     queryFn: async () => {
//       const result = await fetch(`/api/post/${post_id}/comment`);
//       const data: CommentResponse = await result.json();
//       return data;
//     },
//     select: (data) => {
//       return data.comments;
//     },
//   };
// }
