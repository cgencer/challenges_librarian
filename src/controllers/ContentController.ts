import { validationResult } from 'express-validator';
import { BaseController } from './BaseController.js';
import { Users } from '../models/Users.js';
import { Contents } from '../models/Contents.js';

interface Base {
    get_content: (req: any, res: any) => void;
    get_contents: (req: any, res: any) => void;
    create_content: (req: any, res: any) => void;
    update_content: (req: any, res: any) => void;
    delete_content: (req: any, res: any) => void;
}

export class ContentController implements Base {

    /* get all posts */
    async get_contents(req: any, res: any): Promise<void> {
        try {
            const posts = await Contents.findAll();
            console.dir(posts);
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
    async get_content(req: any, res: any): Promise<void> {
        try {
            const post = await Contents.findByPk(req.params.id);
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
    async create_content(req: any, res: any): Promise<void> {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                type: 'error',
                message: errors.array()
            });
        } else {
            try {
                const { username, title, description } = req.body;
               
                const newPost = await new Contents({
                    // @ts-ignore
                    userName: username,
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
    async update_content(req: any, res: any): Promise<void> {
        const existing = await Contents.findByPk(req.params.id);
        if (!existing) {
            res.status(404).json({
                type: "error",
                message: "Content doesn't exists"
            })
        } else {
            // @ts-ignore
            if(existing.userName === req.body.username){
                try {

                    const updatedPost = await Contents.update({
                        ...req.body
                    },{
                        where: { id: req.params.id }
                    });


/*
                    const updatedPost = await Contents.findByIdAndUpdate(req.params.id, {
                                            $set: req.body
                    },
                        { new: true }
                    );
*/
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
    async delete_content(req: any, res: any): Promise<void> {
        const existing = await Contents.findByPk(req.params.id);
        if (!existing) {
            res.status(200).json({
                type: "error",
                message: "Content doesn't exists"
            })
        } else {
            // @ts-ignore
            if (existing.userName === req.body.username) {
                try {
                      await Contents.destroy({ where: { id: req.params.id } })

//                    await Contents.findOneAndDelete(req.params.id);
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
};
