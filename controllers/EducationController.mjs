import BaseController from './BaseController.mjs'
import Model from '../models/index.mjs'

import { Op } from "sequelize";

class EducationController extends BaseController {

    async index(req, res) {
        const user_profile_code = req.params.user_profile_code

        const user = await Model.User.findOne({
            where: {
                id: user_profile_code
            }
        })

        if (user == null) {
            return res.status(404).send({
                succes: false,
                message: 'user not found'
            })
        }

        const edu = await Model.Education.findAll({
            where: {
                profile_code: user_profile_code
            },
            attributes: [
                "id",
                "school",
                "degree",
                "startDate",
                "endDate",
                "city",
                "description",
            ]
        })

        res.status(200).send({
            data: edu
        })
    }

    async create(req, res) {
        const {
            school,
            degree,
            startDate,
            endDate,
            city,
            description } = req.body

        const user_profile_code = req.params.user_profile_code

        const edu = await Model.Education.create({
            profile_code: user_profile_code,
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            city: city,
            description: description
        });

        res.status(201).send({
            profile_code: user_profile_code,
            id: edu.id
        });


    }

    async delete(req, res) {
        const user_profile_code = req.params.user_profile_code
        const id = req.params.id

        await Model.Education.destroy({
            where: {
                [Op.and]: [
                    { profile_code: user_profile_code },
                    { id: id },
                ]
            }
        }).then(() => {
            res.status(200).send({
                profileCode: user_profile_code
            })
        }).catch((err) => {
            res.status(400).send({
                success: false,
                message: err
            })
        })
    }
}

export default new EducationController();