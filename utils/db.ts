import prisma from '~/lib/prisma'

// const getCourses = async () => {
//   const prisma = new PrismaClient()
//   const courses = await prisma.course.findMany({
//     include: {
//       lessons: true,
//     },
//   })
//   await prisma.$disconnect()
//   return courses
// }

// const getCourseBySlug = async (slug) => {
//   const prisma = new PrismaClient()
//   const course = await prisma.course.findUnique({
//     where: {
//       slug,
//     },
//     include: {
//       lessons: true,
//     },
//   })
//   await prisma.$disconnect()
//   return course
// }

// const getCourse = async (id) => {
//   const prisma = new PrismaClient()
//   const course = prisma.course.findUnique({
//     where: {
//       id,
//     },
//   })
//   await prisma.$disconnect()
//   return course
// }

// const getUserByEmail = async (email) => {
//   const prisma = new PrismaClient()
//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//     include: {
//       courses: true,
//     },
//   })
//   await prisma.$disconnect()
//   return user
// }

// const getLessons = async () => {
//   const prisma = new PrismaClient()
//   const lessons = await prisma.lesson.findMany()
//   await prisma.$disconnect()
//   return lessons
// }

// const getLessonBySlug = async (slug) => {
//   const prisma = new PrismaClient()
//   const lesson = await prisma.lesson.findUnique({
//     where: {
//       slug,
//     },
//     include: {
//       course: true,
//     },
//   })
//   await prisma.$disconnect()
//   return lesson
// }

const createUser = async (email: string) => {
  const user = await prisma.user.create({
    data: { email },
  })
  return user
}

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: String(id),
    },
  })
  return user
}

const getThymeDataById = async (id: string) => {
  const thymeData = await prisma.thymeData.findUnique({
    where: {
      id: String(id),
    },
  })

  return thymeData
}

const updateUser = async (id: string, data: any) => {
  const user = await prisma.user.update({
    where: {
      id: String(id),
    },
    data,
  })
  return user
}

// const enrolUser = async (userId, courseId) => {
//   const prisma = new PrismaClient()
//   const user = await prisma.user.update({
//     where: {
//       id: userId,
//     },
//     data: {
//       courses: {
//         connect: {
//           id: courseId,
//         },
//       },
//     },
//     include: {
//       courses: true,
//     },
//   })
//   await prisma.$disconnect()
//   return user
// }

// const subscribeUser = async (stripeId) => {
//   const prisma = new PrismaClient()
//   const user = await prisma.user.update({
//     where: {
//       stripeId,
//     },
//     data: {
//       isSubscribed: true,
//     },
//   })
//   await prisma.$disconnect()
//   return user
// }

// const cancelSubscription = async (stripeId) => {
//   const prisma = new PrismaClient()
//   const user = await prisma.user.update({
//     where: {
//       stripeId,
//     },
//     data: {
//       isSubscribed: false,
//     },
//   })
//   await prisma.$disconnect()
//   return user
// }

export {
  //   getCourses,
  //   getCourseBySlug,
  //   getCourse,
  //   getLessons,
  //   getLessonBySlug,
  createUser,
  updateUser,
  getUserById,
  getThymeDataById,
  //   getUserByEmail,
  //   enrolUser,
  //   subscribeUser,
  //   cancelSubscription,
}
