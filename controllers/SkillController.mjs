import BaseController from './BaseController.mjs'
import Model from '../models/index.mjs'

import { Op } from "sequelize";

class SkillController extends BaseController {

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

        const skill = await Model.Skill.findAll({
            where: {
                profile_code: user_profile_code
            },
            attributes: [
                "id",
                "skill",
                "level"
            ]
        })

        res.status(200).send({
            data: skill
        })
    }

    async create(req, res) {
        const { skill, level } = req.body

        const user_profile_code = req.params.user_profile_code

        const skill_user = await Model.Skill.create({
            profile_code: user_profile_code,
            skill: skill,
            level: level
        });

        res.status(201).send({
            profile_code: user_profile_code,
            id: skill_user.id
        });
    }

    async delete(req, res) {
        const user_profile_code = req.params.user_profile_code
        const id = req.params.id

        await Model.Skill.destroy({
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

export default new SkillController();