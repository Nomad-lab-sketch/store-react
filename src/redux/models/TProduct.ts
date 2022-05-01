export interface ProductCard {
	name: string
	price: number
	count: number
	id: number
}

export interface StateType {
	price: string
	count: string
	name: string
	productCard: ProductCard[]
}


