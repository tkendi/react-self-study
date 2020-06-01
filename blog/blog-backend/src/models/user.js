import mongoose, {Schema} from 'mongoose'

const UserSchema = new ({
    username: String,
    hashedPassword: String,
});

const User = mongoose.model('User', UserSchema)
export default User;