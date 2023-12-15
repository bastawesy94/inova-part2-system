import { Router } from 'express';
import Story from '../models/Story';
const router = Router();
router.get('/stories', async (req, res) => {
    try {
        const userId = parseInt(req.query.userId as string) || 1;
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const offset = (page - 1) * pageSize;
        const stories = await Story.findAll({
            where: { userId: userId },
            limit: pageSize,
            offset: offset,
        });
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.post('/stories', async (req, res) => {
    try {
        const story = await Story.create(req.body);
        console.log("story added: ", story);
        res.status(201).json(story);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.put('/stories/:id', async (req, res) => {
    try {
        const story = await Story.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.delete('/stories/:id', async (req, res) => {
    try {
        await Story.destroy({
            where: { id: req.params.id },
        });
        res.status(204).json({ message: 'Story deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

export default router;
