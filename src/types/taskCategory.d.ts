
interface AddCategoryType{
    title: string,
    description:string,
    icon: string,
    userId: string,
    createdAt:string
}
interface CategoryType extends AddCategoryType{
    id: string,
}