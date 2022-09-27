import express from 'express';
import profileRoutes from './profile.mjs';
import EmployementRoutes from './employement.mjs';
import EducationRoutes from './education.mjs';
import SkillRoutes from './skill.mjs';
import WorkingExperienceRoutes from './workingExperience.mjs';
import PhotoUserRoutes from './photo.mjs';

const router = express.Router();
router.use(express.json());

router.get('/', function (req, res) {
    res.send("hello world");
})
router.use('/profile', profileRoutes);
router.use('/photo', PhotoUserRoutes);
router.use('/working-experience', WorkingExperienceRoutes);
router.use('/employement', EmployementRoutes);
router.use('/education', EducationRoutes);
router.use('/skill', SkillRoutes);

export default router