import { prisma } from "./lib/prisma";

async function run() {
  //* create user -----------------------------------------------------------

  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "Mahi",
  //       email: "Mahi@gmail.com",
  //     },
  //   });

  //   console.log("created user :", createUser);

  //* create post -----------------------------------------------------------

  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "this is a title",
  //       content: "This is a big content!",
  //       authorId: 1,
  //     },
  //   });

  //   console.log("Created Post :", createPost);

  //* create profile -----------------------------------------------------------

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "Next Level Development - L2",
  //       userId: 1,
  //     },
  //   });

  //   console.log("Created Profile :", createProfile);

  //* Find all user  -----------------------------------------------------------
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profiles: true,
    },
  });
  console.dir(users, { depth: Infinity });
}

run();
