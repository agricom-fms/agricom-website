import { prisma } from './lib/db';

prisma.blogPost.findMany({ select: { slug: true, title: true, image: true } })
  .then(posts => {
    console.log(JSON.stringify(posts, null, 2));
  })
  .catch(err => {
    console.error("Prisma Error:", err);
  });
