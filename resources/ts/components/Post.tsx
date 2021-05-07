import React, { ChangeEvent } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import "~/components/post.scss";
import IPost from "@/interfaces/dto/IPost";

interface PostProps {
    post: IPost;
}

interface PostState {}

class Post extends React.Component<PostProps, PostState> {
    constructor(props: PostProps) {
        super(props);
    }

    render() {
        return (
            <div className="post">
                <div className="post-title">
                    <h5>{this.props.post.title}</h5>
                </div>
                <div className="post-content">{this.props.post.content}</div>
                <div className="post-user">
                    Publicado por ID {this.props.post.user_id}
                </div>
            </div>
        );
    }
}

export default Post;
