import bcrypt from "bcrypt";
import { User } from '../models/Users';

/* get single user */
export const get_user = async (req: any, res: any) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                type: "error",
                message: "User doesn't exists"
            })
        } else {
            const { password, ...data } = user._doc;
            res.status(200).json({
                type: "success",
                data
            })
        }
    } catch (err) {
        res.status(500).json({
            type: "error",
            message: "Something went wrong please try again",
            err
        })
    }
};

/* update user */
export const update_user = async (req: any, res: any) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body },{ new: true });
        res.status(200).json({
            type: "success",
            message: "User updated successfully",
            updatedUser
        })
    } catch (err) {
        res.status(500).json({
            type: "error",
            message: "Something went wrong please try again",
            err
        })
    }
};

/* delete user */
export const delete_user = async (req: any, res: any) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            type: "success",
            message: "User has been deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            type: "error",
            message: "Something went wrong please try again",
            err
        })
    } 
};
