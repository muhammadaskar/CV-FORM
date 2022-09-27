import BaseController from './BaseController.mjs'
import Model from '../models/index.mjs'

class WorkingExperienceController extends BaseController {

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
        const workingExperience = req.body.workingExperience

        const user_profile_code = req.params.user_profile_code

        await Model.User.update({
            workingExperience: workingExperience
        }, {
            where: {
                id: user_profile_code
            }
        });

        res.status(200).send({
            profile_code: user_profile_code
        });


    }
}

export default new WorkingExperienceController();