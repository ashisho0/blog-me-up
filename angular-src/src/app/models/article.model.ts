export class Article {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    image: string;
    isPublished: string;
    approvedDate: Date;

    constructor(details: any) {

        this.title = details.title || "";
        this.description = details.description || "";
        this.content = details.content || "";
        this.author = details.author || "";
        this.image = details.image || "";
        this.isPublished = details.isPublished || "";
        this.approvedDate = details.approvedDate || "";

    }
}


