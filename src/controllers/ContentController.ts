import { validationResult } from 'express-validator';
import { Users } from '../models/Users.js';
import { Contents } from '../models/Contents.js';
import { Books, Comments } from '../models/ContentTypes.js';
import lodash from 'lodash';
const { pick } = lodash;

interface Base {
    getContent: (req: any, res: any) => void;
    getContents: (req: any, res: any) => void;
    createContent: (req: any, res: any) => void;
    updateContent: (req: any, res: any) => void;
    deleteContent: (req: any, res: any) => void;
}

export class ContentController implements Base {

    /* get all posts */
    async getContents(req: any, res: any): Promise<void> {
console.log(':::> getContents');
        try {
            const books = await Contents.findAll({ where: { type: 'book' } });

            res.status(200).json(
                books.map(book => pick(book, ['id', 'name']))
            )
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    };

    /* get single post */
    async getContent(req: any, res: any): Promise<void> {
console.log(':::> getContent');
        try {
            const book = await Contents.findByPk(req.params.id);
            if (!book) {
                res.status(404).json({
                    type: "error",
                    message: "Post doesn't exists"
                })
            } else {
                res.status(200).json(
                    pick(book, ['id', 'name', 'score'])
                );
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
    async createContent(req: any, res: any): Promise<void> {

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
    async updateContent(req: any, res: any): Promise<void> {
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
    async deleteContent(req: any, res: any): Promise<void> {
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
export class ArticleController extends ContentController implements Base {
};
export class ProductController extends ContentController implements Base {
};
export class BookController extends ContentController implements Base {
};
export class CommentController extends ContentController implements Base {
};
