import { Router } from "express";
import {
  deletePost,
  getPostById,
  getPosts,
  newPost,
  updatePost,
} from "../controllers/job";

export const jobRoute: Router = Router();

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - location
 *               - company
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: number
 *               company:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job created successfully
 *       400:
 *         description: Invalid input
 */
jobRoute.post("/", newPost);

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all job posts
 *     responses:
 *       200:
 *         description: List of all job posts
 */
jobRoute.get("/", getPosts);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get job post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job post found
 *       404:
 *         description: Job post not found
 */
jobRoute.get("/:id", getPostById);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update a job post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: number
 *               company:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       404:
 *         description: Job post not found
 *       400:
 *         description: Invalid input
 */
jobRoute.put("/:id", updatePost);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       404:
 *         description: Job post not found
 */
jobRoute.delete("/:id", deletePost);
