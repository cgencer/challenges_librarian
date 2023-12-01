import bcrypt from "bcrypt";
import lodash from 'lodash';
const { pick } = lodash;

import { Users } from '../models/Users.js';

interface Base {
    getUser: (req: any, res: any) => void;
    updateUser: (req: any, res: any) => void;
    deleteUser: (req: any, res: any) => void;
}

/* get single user */
export class UserController implements Base {

    async getUser(req: any, res: any): Promise<void> {

        try {
            const user = await Users.findByPk(req.params.id);
            if (!user) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                const { password, ...data } = user;
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

    async getUsers(req: any, res: any): Promise<void> {

        try {
            const users = await Users.findAll();
            if (!users) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                const filteredUsers = users.map(user => pick(user, ['id', 'name']));

                res.status(200).json(filteredUsers)
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
    async updateUser (req: any, res: any): Promise<void> {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10)
        }

        try {
            const updatedUser = await Users.update({
                ...req.body
            },{
                where: { id: req.params.id }
            });

/*
            const updatedUser = await Users.findByIdAndUpdate(req.params.id, { $set: req.body },{ new: true });
*/
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
    async deleteUser (req: any, res: any): Promise<void> {
        try {
              await Users.destroy({ where: { id: req.params.id } })
//            await Users.findByIdAndDelete(req.params.id)

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
};