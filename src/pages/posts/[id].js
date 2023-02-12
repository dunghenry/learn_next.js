import React from 'react';
import Layout from '@/components/Layout';
import { getPostById, getPostsIds } from '../../lib/posts';
import { useRouter } from 'next/router';
const PostDetail = ({ post }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <h3>Loading</h3>;
    }
    return (
        <Layout>
            <div>
                <div>
                    <h2>{post?.title}</h2>
                    <p>{post?.body}</p>
                    {/* <Link href="/posts">
                        <button>Back</button>
                    </Link> */}
                </div>
            </div>
        </Layout>
    );
};
export const getStaticPaths = async () => {
    const paths = await getPostsIds(5);
    return {
        paths,
        fallback: true,
    };
};
export const getStaticProps = async ({ params }) => {
    console.log(params);
    const post = await getPostById(params.id);
    return {
        props: {
            post,
        },
    };
};
export default PostDetail;
