import { prisma } from './lib/db';

prisma.blogPost.findMany()
  .then(posts => {
    console.log("Success!", posts.length);
  })
  .catch(err => {
    console.error("Prisma Error:", err);
  });
