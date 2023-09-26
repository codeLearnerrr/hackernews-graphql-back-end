import { extendType, nonNull, objectType, stringArg, idArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Link = objectType({
    name: 'Link',
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("description");
        t.nonNull.string("url");
    }
});

let links: NexusGenObjects["Link"][] = [
    {
        id: 1,
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
    {
        id: 2,
        url: "graphql.org",
        description: "GraphQL official website",
    },
];

export const LinkQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {
            type: 'Link',
            resolve(parent, args, context, info) {
                return links;
            }
        });
    },
});

export const LinkMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field("post", {
            type: 'Link',
            args: {
                description: nonNull(stringArg()),
                url: nonNull(stringArg())
            },
            resolve(parent, args, context) {
                const { description, url } = args;

                let idCount = links.length + 1;
                const link = {
                    id: idCount,
                    description,
                    url
                };

                links.push(link);
                return link;
            }
        });
        t.nonNull.field("updateLink", {
            type: 'Link',
            args: {
                id: nonNull(idArg()),
                url: stringArg(),
                description: stringArg()
            },
            resolve(parent, args, context) {
                const { id, url, description } = args;

                const desiredIndex: number = links.findIndex(elem => elem.id === Number(id));
                const updatedLink: NexusGenObjects['Link'] = {
                    id: Number(id),
                    url: url?.length === 0 ? links[desiredIndex].url : url!,
                    description: description?.length === 0 ? links[desiredIndex].description : description!
                };

                links[desiredIndex] = updatedLink;

                return updatedLink;
            }
        });
        t.nonNull.field("deleteLink", {
            type: "Link",
            args: { id: nonNull(idArg()) },
            resolve(parent, args, context) {
                const { id } = args;

                const elemId = links.findIndex(elem => elem.id === Number(id)) === -1 ? 0 : links.findIndex(elem => elem.id === Number(id));
                const elementToBeDeleted = links[elemId];

                delete links[elemId];

                return elementToBeDeleted;
            }
        });
    },
});