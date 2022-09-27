import BaseController from './BaseController.mjs'
import Model from '../models/index.mjs'

import fs from 'fs'
import mime from 'mime'
import base64Img from 'base64-img'

class PhotoUserController extends BaseController {

    async index(req, res) {
        const user_profile_code = req.params.user_profile_code

        const user = await Model.User.findOne({
            where: {
                id: user_profile_code
            },
            attributes: ['workingExperience']
        })

        if (user == null) {
            return res.status(404).send({
                succes: false,
                message: 'user not found'
            })
        }

        res.status(200).send({
            workingExperience: user.workingExperience
        })
    }

    async update(req, res) {

        const user_profile_code = req.params.user_profile_code

        const base64img = req.body.base64img

        base64Img.img(base64img, './app/upload/photo/', user_profile_code, function (err, filePath) {
            const pathArr = filePath.split('/')
            const fileName = pathArr[pathArr.length - 1]

            Model.User.update({
                photoUrl: fileName
            }, {
                where: {
                    id: user_profile_code
                }
            });

            res.status(200).send({
                profile_code: user_profile_code,
                photoUrl: fileName
            })
        })
    }

    async delete(req, res) {

        const user_profile_code = req.params.user_profile_code

        const user = await Model.User.findOne({
            where: {
                id: user_profile_code
            }
        })
        var filePath = user.photoUrl;
        fs.unlinkSync(filePath);

        await Model.User.update({
            photoUrl: null
        }, {
            where: {
                id: user_profile_code
            }
        })

        res.status(200).send({
            profileCode: user_profile_code
        })
    }
}

export default new PhotoUserController();