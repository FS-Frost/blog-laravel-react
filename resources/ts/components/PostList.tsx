import React, { ChangeEvent } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import "~/components/postList.scss";
import IPost from "@/interfaces/dto/IPost";
import Post from "@/components/Post";

interface PostListProps {
    posts: IPost[];
}

interface PostListState {}

class PostList extends React.Component<PostListProps, PostListState> {
    constructor(props: PostListProps) {
        super(props);
    }

    render() {
        return (
            <div className="post-list">
                <div className="post-list-header">
                    <h1>Publicaciones</h1>
                </div>
                {this.props.posts.map((post, postIndex) => {
                    return <Post key={postIndex} post={post}></Post>;
                })}
            </div>
        );
    }
}

export default PostList;
