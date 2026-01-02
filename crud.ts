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
  //   const users = await prisma.user.findMany({
  // include: {           // include diye main data er sathe included data gula add hoye jay
  //   posts: true,
  //   profiles: true,
  // },
  //     select: {
  // select diye only selected item gula e dekha jay
  //       id: true,
  //       name: true,
  //       email: true,
  //       posts: true,
  //       profiles: true,
  //     },
  //   });
  //   console.dir(users, { depth: Infinity });
  //* Update user -----------------------------------------------------------

  const updateUser = await prisma.profile.update({
    where: {
      userId: 1,
    },
    data: {
      bio: "Web Developer and Student",
      dateOfBirth: "2005-06-13T10:50:07.368Z",
    },
    select: {
      id: true,
      bio: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  console.log(updateUser);
}

run();
