//eschema of the user in the database
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    edad: { type: Number, required: false },
    fecha_creacion: { type: Date, default: Date.now },
    direccion: {
        calle: { type: String, required: true },
        ciudad: { type: String, required: true },
        pais: { type: String, required: true },
        codigo_postal: { type: String, required: true },
    },
});

export const UserModel = mongoose.model('User',UserSchema);

// this function returns all the users with pagination
export const getUsers = (page: number = 1, limit: number = 10) => {
    const skip = (page - 1) * limit;

    return UserModel.find()
        .skip(skip)
        .limit(limit);
};
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserById = (id :string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = ( id: string) => UserModel.findOneAndDelete({_id: id});
export const getUserByDirect = (ciudad: string) => 
UserModel.find({ 'direccion.ciudad': { $regex: new RegExp(`^${ciudad}$`, 'i') } });
export const updateUserById = ( id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values, { new: true }); 