export interface ProductCard {
    title: string
    price: number
    countFeedback: number
}

export interface StateType {
	price: string
	count: string
	name: string
	productCard: ProductCard[]
}

