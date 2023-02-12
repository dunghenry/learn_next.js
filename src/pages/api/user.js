import connectDB from '@/configs/connect.db';
import User from '@/models/User';
import bcrypt from 'bcrypt';
export default async function handler(req, res) {
    await connectDB();
    if (req.method === 'GET') {
        try {
            const users = await User.find({});
            users.map((item) => {
                delete item._doc.password;
                return item;
            });
            return res.status(200).json({
                users,
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } else if (req.method === 'POST') {
        try {
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: password,
            });
            const savedUser = await user.save();
            return res.status(200).json(savedUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
