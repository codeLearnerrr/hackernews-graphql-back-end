import { extendType, nonNull, objectType, stringArg, idArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("description");
        t.nonNull.string("url");
        t.field("postedBy", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.link.findUnique({ where: { id: parent.id } }).postedBy();
            }
        });
    }
});

export const LinkQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {
            type: 'Link',
            description: "Query all links",
            resolve(parent, args, context, info) {
                return context.prisma.link.findMany();
            }
        });
        t.nonNull.field("link", {
            type: 'Link',
            description: "Find and returns a single link",
            args: { id: nonNull(idArg()) },
            resolve(parent, args, context) {
                const { id } = args;
                const foundLink = context.prisma.link.findFirstOrThrow({ where: { id: Number(id) } });
                return foundLink;
            }
        });
    },
});

export const LinkMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field("post", {
            type: 'Link',
            description: "Creates a new link",
            args: {
                description: nonNull(stringArg()),
                url: nonNull(stringArg())
            },
            resolve(parent, args, context) {
                const { description, url } = args;
                const { userId } = context;

                if (!userId) {
                    throw new Error("Cannot post without logging in.");
                }

                const newLink = context.prisma.link.create({
                    data: {
                        description,
                        url,
                        postedBy: { connect: { id: userId } }
                    }
                });
                return newLink;
            }
        });
        t.nonNull.field("updateLink", {
            type: 'Link',
            description: "Updates a link",
            args: {
                id: nonNull(idArg()),
                url: stringArg(),
                description: stringArg()
            },
            async resolve(parent, args, context) {
                const { id, url, description } = args;

                const originalLink = await context.prisma.link.findUniqueOrThrow({ where: { id: Number(id) } });

                const updatedLinkObj: NexusGenObjects['Link'] = {
                    id: Number(id),
                    url: url?.length === 0 ? originalLink.url : url!,
                    description: description?.length === 0 ? originalLink.description : description!
                };
                const updatedLink = context.prisma.link.update({
                    where: { id: Number(id) },
                    data: { url: updatedLinkObj.url, description: updatedLinkObj.description }
                });

                return updatedLink;
            }
        });
        t.nonNull.field("deleteLink", {
            type: "Link",
            description: "Deletes a link",
            args: { id: nonNull(idArg()) },
            resolve(parent, args, context) {
                const { id } = args;

                const linkDeleted = context.prisma.link.delete({ where: { id: Number(id) } });

                return linkDeleted;
            }
        });
    },
});