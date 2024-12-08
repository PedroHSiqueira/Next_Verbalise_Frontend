"use server";

import { pusherServer } from "@/lib/pusher";
// import { PrismaClient } from "@prisma/client";

export const sendMessage = async (message: string) => {
  try {
    // Store the message inside ur db
    // const prisma = new PrismaClient();

    // await prisma.message.create({
    //   data: {
    //     content: message,
    //     createdAt: new Date(),
    //   },
    // });
    // 1
    pusherServer.trigger("chat-app", "upcoming-message", {
      message,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
