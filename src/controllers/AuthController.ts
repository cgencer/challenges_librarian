import { validationResult } from 'express-validator';
import bcrypt from "bcrypt";
import { encode_reg_token } from '../helpers/tokens';

import { User } from '../models/Users';

/* create new user */
export const create_user = async (req: any, res: any) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({
            type: 'error',
            message: errors.array()
        });
    } else {
        try {
            const { username, email, password } = req.body; 
            const newUser = new User({
                userName: username,
                email: email,
                password: password
            });

            const user = await newUser.save();
            res.status(201).json({
                type: 'success',
                message: "User has been created successfuly",
                data: user
            });

        } catch (err) {
            res.status(500).json({
                type: 'error',
                message: err
            });
        }    
    }
};

/* user login */
export const login_user = async (req: any, res: any) => {
    try {
        const { username } = req.body;

        /* check user is exist with our system */
        const user = await User.findOne({ userName: username });
        if (!user) {
            return res.status(401).json({
                type: 'error',
                message: 'No account is associated with the given username'
            });
        }

        /* compare password */
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                type: 'error',
                message: 'Invalid credentials'
            });
        }

        /* create access token */
        const accessToken = encode_reg_token(user._id);

        /* avoid send password in response */
        const { password, ...data } = user._doc;
        res.status(200).json({
            type: 'sucesss',
            data,
            accessToken
        });
    } catch (err) {
        res.status(500).json({
            type: 'error',
            message: err
        });
    }
};
