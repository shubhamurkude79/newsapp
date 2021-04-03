export class News {
    public name: string;
    public description: string;
    public imagePath: string;
    public id: number;
    public author: string;
    public publishedAt: string;

    constructor( name: string, desc: string, imagePath: string, id: number, author: string, publishedAt: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.id = id;
        this.author = author;
        this.publishedAt = publishedAt;
    }
}