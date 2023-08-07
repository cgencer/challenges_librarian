const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const { encode_registration_token } = require('../helpers/tokens');