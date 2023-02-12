import mongoose from 'mongoose';
import colors from 'colors';
const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(colors.green('Connect MongoDB successfully!!'));
    } catch (error) {
        console.log(error.message);
        console.log(colors.red('Connect MongoDB falied!!'));
        process.exit(1);
    }
};
export default connectDB;
