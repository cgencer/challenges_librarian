import jwt from 'jsonwebtoken';
import config from '../config/config';

export const encode_reg_token = (user_id: any) => {
    return jwt.sign({
    	id: user_id
 	}, config.config.jwt_secret, {
 		expiresIn: "1h"
 	});
};
