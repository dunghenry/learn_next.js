import { Schema, model, models } from 'mongoose';
import { isEmail } from 'validator';
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: isEmail,
                message: 'Email address invalid',
            },
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const User = models.User || model('User', userSchema);
export default User;
