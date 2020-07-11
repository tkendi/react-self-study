import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    username: String,
    hashedPassword: Strin,
});

UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10)
    this.hashedPassword = hahs
}

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword)
    return result;
}

UserSchema.static.findByUsername = function(username) {
    return this.findOne({username})
}

const User = mongoose.model('User', UserSchema)
export default User