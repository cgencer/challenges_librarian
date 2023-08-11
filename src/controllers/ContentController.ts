import { validationResult } from 'express-validator';

import { User } from '../models/Users';
import { Content } from '../models/Contents';

/* get all posts */
export const get_posts = async (req: any, res: any) => {
    try {
        const posts = await Content.find();
        res.status(200).json({
            type: "success",
            posts
        })
    } catch (err) {
        res.status(500).json({
            type: "error",
            message: "Something went wrong please try again",
            err
        })
    }
};

/* get single post */
export const get_post = async (req: any, res: any) => {
    try {
        const post = await Content.findById(req.params.id);
        if (!post) {
            res.status(404).json({
                type: "error",
                message: "Post doesn't exists"
            })
        } else {
            res.status(200).json({
                type: "success",
                post
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

/* create new product */
export const create_post = async (req: any, res: any) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({
            type: 'error',
            message: errors.array()
        });
    } else {
        try {
            const { username, title, description } = req.body;
           
            const newPost = await new Content({
                username: username,
                title: title,
                description: description
            });

            const post = await newPost.save();
            res.status(201).json({
                type: 'success',
                message: "Post has been created successfuly",
                data: post
            });
                    
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    }
};

/* update product */
export const update_post = async (req: any, res: any) => {
    const existing = await Content.findById(req.params.id);
    if (!existing) {
        res.status(404).json({
            type: "error",
            message: "Content doesn't exists"
        })
    } else {
        if(existing.username === req.body.username){
            try {
                const updatedPost = await Content.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },
                    { new: true }
                );
                res.status(200).json({
                    type: "success",
                    message: "Content updated successfully",
                    updatedPost
                })
            } catch (err) {
                res.status(500).json({
                    type: "error",
                    message: "Something went wrong please try again",
                    err
                })
            }
        } else {
            res.status(401).json({
                type: "error",
                message: "You are not allowed to do this",
            })
        } 
    }
};

/* delete post */
export const delete_post = async (req: any, res: any) => {
    const existing = await Content.findById(req.params.id);
    if (!existing) {
        res.status(200).json({
            type: "error",
            message: "Content doesn't exists"
        })
    } else {
        if (existing.username === req.body.username) {
            try {
                await Content.findOneAndDelete(req.params.id);
                res.status(200).json({
                    type: "success",
                    message: "Post has been deleted successfully"
                });
            } catch (err) {
                res.status(500).json({
                    type: "error",
                    message: "Something went wrong please try again",
                    err
                })
            }
        } else {
            res.status(401).json({
                type: "error",
                message: "You are not allowed to do this",
            })
        }
    }
};
