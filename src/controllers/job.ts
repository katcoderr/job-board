import { Request, Response, Router } from "express";
import { prismaClient } from "..";

export const newPost = async (req: Request, res: Response) => {
  try {
    const { title, description, salary, location, company } = req.body;

    if (!title || !description || !salary || !location || !company) {
      res.status(400).json({ message: "All fields are required" });
    }

    const job = await prismaClient.job.create({
      data: {
        title,
        description,
        salary,
        company,
        location,
      },
    });

    res.json(job);
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prismaClient.job.findMany({});
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const post = await prismaClient.job.findFirst({
      where: {
        id,
      },
    });

    if (!post) {
      res.status(404).json({
        message: "Job post not found",
      });
    }

    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, salary, location, company } = req.body;

    if (!title || !description || !salary || !location || !company) {
      res.status(400).json({ message: "All fields are required" });
    }

    const post = await prismaClient.job.findFirst({
      where: {
        id,
      },
    });

    if (!post) {
      res.status(404).json({
        message: "Job post not found",
      });
    }

    await prismaClient.job.updateMany({
      where: {
        id,
      },
      data: {
        title,
        description,
        salary,
        company,
        location,
      },
    });

    res.json({
      message: "Update Successful",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const post = await prismaClient.job.findFirst({
      where: {
        id,
      },
    });

    if (!post) {
      res.status(404).json({
        message: "Job post not found",
      });
    }

    await prismaClient.job.deleteMany({
      where: {
        id,
      },
    });

    res.json({
      message: "Delete Successful",
    });
  } catch (error) {
    console.log(error);
  }
};
