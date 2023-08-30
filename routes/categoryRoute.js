import express from 'express'
import { isAdmin, requireSingIn } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router()

//routes 
//create category
router.post('/create-category', requireSingIn, isAdmin, createCategoryController)

//update category
router.put('/update-category/:id', requireSingIn, isAdmin, updateCategoryController)

//getAll category
router.get('/get-category', categoryController)

//single category
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete('/delete-category/:id', requireSingIn, isAdmin, deleteCategoryController)

export default router