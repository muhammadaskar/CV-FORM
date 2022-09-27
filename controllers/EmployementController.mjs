import BaseController from './BaseController.mjs';
import Model from '../models/index.mjs'
import { Op } from "sequelize";

class EmployementController extends BaseController {

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

        const emp = await Model.Employement.findAll({
            where: {
                profile_code: user_profile_code
            },
            attributes: [
                'id',
                'jobTitle',
                'employer',
                'startDate',
                'endDate',
                'city',
                'description',
            ]
        })

        res.status(200).send({
            data: emp
        })
    }

    async create(req, res) {
        const { jobTitle,
            employer,
            startDate,
            endDate,
            city,
            description } = req.body

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

        const emp = await Model.Employement.create({
            profile_code: user_profile_code,
            jobTitle: jobTitle,
            employer: employer,
            startDate: startDate,
            endDate: endDate,
            city: city,
            description: description,
        })

        res.status(201).send({
            profileCode: user_profile_code,
            id: emp.id
        })
    }

    async delete(req, res) {
        const user_profile_code = req.params.user_profile_code
        const id = req.params.id

        await Model.Employement.destroy({
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

export default new EmployementController();
