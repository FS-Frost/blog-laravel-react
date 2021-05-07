export default interface IPost {
    id: number;
    user_id: number;
    title: string;
    content: string;
    published_at: Date;
    created_at: Date;
    updated_at: Date;
}
