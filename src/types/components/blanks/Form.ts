export type FormField = {
	name?: string
	value: string | number,
	error?: boolean,
	placeholder?: string,
	regExp?: RegExp
	list?: { id: number, name: string }[]
}