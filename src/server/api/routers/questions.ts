import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const questionRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.question.findMany({
      where: { isPublic: true },
    });
  })
});
