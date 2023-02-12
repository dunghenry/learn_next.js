import connectDB from '@/configs/connect.db';
import User from '@/models/User';
export default function Users(props) {
    // console.log(props);
    return (
        <div>
            <h1>Users Page</h1>
        </div>
    );
}
export const getServerSideProps = async () => {
    try {
        await connectDB();
        const users = await User.find({});
        const data = users.map((item) => {
            const user = item.toObject();
            user._id = `${user._id}`;
            delete user.password;
            delete user.__v;
            user.createdAt = `${user.createdAt}`;
            user.updatedAt = `${user.updatedAt}`;
            return user;
        });
        return {
            props: {
                users: data,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
};
