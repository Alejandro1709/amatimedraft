import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const questionRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.question.findMany({
      where: { isPublic: true },
    });
  }),
  createOne: publicProcedure.input(z.object({ question: z.string(), author: z.string() })).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.question.create({
      data: {
        question: input.question,
        author: input.author || "Anonymous",
      }
    })
  })
});
