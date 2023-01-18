import UserModel from '../models/index.mjs'
import BaseController from './BaseController.mjs'

class ProfileController extends BaseController {
    async index(req, res) {
        const user_profile_code = req.params.user_profile_code

        const user = await UserModel.User.findOne({
            where: {
                id: user_profile_code
            }
        })

        if (user == null) {
            return res.status(404).send({
                success: false,
                message: 'user not found'
            })
        }

        return res.status(200).json({
            profileCode: user.id,
            wantedJobTitle: user.wantedJobTitle,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            country: user.country,
            city: user.city,
            address: user.address,
            postalCode: user.postalCode,
            drivingLicense: user.drivingLicense,
            nationality: user.nationality,
            placeOfBirth: user.placeOfBirth,
            dateOfBirth: user.dateOfBirth,
            photoUrl: user.photoUrl
        })
    }

    async create(req, res) {
        const { wantedJobTitle,
            firstName,
            lastName,
            email,
            phone,
            country,
            city,
            address,
            postalCode,
            drivingLicense,
            nationality,
            placeOfBirth,
            dateOfBirth,
        } = req.body

        const user = await UserModel.User.create({
            wantedJobTitle: wantedJobTitle,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            city: city,
            address: address,
            postalCode: postalCode,
            drivingLicense: drivingLicense,
            nationality: nationality,
            placeOfBirth: placeOfBirth,
            dateOfBirth: dateOfBirth,
        })

        return res.status(201).json({
            profileCode: user.id
        })
    }

    async update(req, res) {
        const { wantedJobTitle,
            firstName,
            lastName,
            email,
            phone,
            country,
            city,
            address,
            postalCode,
            drivingLicense,
            nationality,
            placeOfBirth,
            dateOfBirth,
        } = req.body

        const user_profile_code = req.params.user_profile_code

        if (user_profile_code == null) {
            return res.status(404).send({
                success: false,
                status: 'user not found'
            })
        }

        await UserModel.User.update({
            wantedJobTitle: wantedJobTitle,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            city: city,
            address: address,
            postalCode: postalCode,
            drivingLicense: drivingLicense,
            nationality: nationality,
            placeOfBirth: placeOfBirth,
            dateOfBirth: dateOfBirth,
        }, {
            where: {
                id: user_profile_code
            }
        }).then(() => {
            return res.status(201).json({
                profileCode: user_profile_code
            })
        }).catch((err) => {
            return res.status(400).json({
                success: false,
                message: err
            })

        })

    }


}

export default new ProfileController();