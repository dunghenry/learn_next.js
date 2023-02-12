import React from 'react';
import { getPosts } from '../../lib/posts';
import Link from 'next/link';
const Posts = ({ posts }) => {
    // console.log(props);
    return (
        <div>
            <h1>List post</h1>
            {posts.map((post) => (
                <div key={post.id} className="my-3 shadow">
                    <div>
                        <h4>
                            {post.id} - {post.title}
                        </h4>
                        <p>{post.body}</p>
                        <Link href={`posts/${post.id}`}>
                            <>See more</>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Static site generation
// Run server
// Can only be exported from a page
export const getStaticProps = async () => {
    const posts = await getPosts(5);
    return {
        props: {
            posts,
        },
        //allows you to create or update static pages after you have created the site
        revalidate: 1,
    };
};
export default Posts;
