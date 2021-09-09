export interface ResponseObject {
    status: string,
    feed: {
        url: string,
        title: string,
        link: string,
        author: string,
        description: string,
        image: string,
    },
    items: [
        {
            title: string,
            pubDate: string,
            link: string,
            guid: string,
            author: string,
            thumbnail: string,
            description: string,
            content: string,
            enclosure: {
            }
            categories: [
            ]
        }
    ],
    // child?:ResponseObject[],
}