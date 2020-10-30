import { CategoryModel } from '../category.model'

export class CategoryResponse {
  constructor (category: CategoryModel) {
    this.id = category._id
    this.name = category.name
  }

    id: string
    name: string
}
