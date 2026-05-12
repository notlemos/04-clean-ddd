import { Slug } from "./values-objects/slug"
import { Entity } from "../../core/entities/entity"

interface QuestionProps {
    title: string
    content: string
    slug: Slug
    authorId: string
}

export class Question extends Entity<QuestionProps> {

}