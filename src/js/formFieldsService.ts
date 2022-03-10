import { FormField } from '@/types/components/blanks/Form'

export const validateFields = (fieldObject: Record<string, FormField>) => {
	Object.keys(fieldObject).forEach(field => {
		if (fieldObject[field].regExp) {
			const isValid = fieldObject[field].value.toString().match(fieldObject[field].regExp!) && fieldObject[field].value.toString().match(fieldObject[field].regExp!)?.length
			fieldObject[field].error = !isValid
		}
	})
}

export const createFields = (fieldsNames: string[]): Record <string, FormField> => {
	const mapFields = {
		name: {
			value: '',
			error: false,
			placeholder: 'Введите ФИО',
			regExp: /[a-zа-я0-9_-]{10,}$/
		},
		phone: {
			value: '',
			error: false,
			placeholder: 'Введите телефон',
			regExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
		},
		mail: {
			value: '',
			error: false,
			placeholder: 'Введите почту',
			regExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		},
		userInformation: {
			name: 'userInformation',
			value: 1,
			list: [
				{
					id: 1,
					name: 'Физ. лицо'
				},
				{
					id: 2,
					name: 'Юр. лицо'
				}
			]
		},
		paymethod: {
			name: 'paymethod',
			value: 1,
			list: [
				{
					id: 1,
					name: 'Онлайн оплата'
				},
				{
					id: 2,
					name: 'Оплата наличными'
				}, {
					id: 3,
					name: 'Apple pay'
				}
			]
		},
		delivery: {
			name: 'delivery',
			value: 1,
			list: [
				{
					id: 1,
					name: 'Доставка'
				},
				{
					id: 2,
					name: 'Самовывоз'
				}
			]
		},
		subject: {
			value: '',
			error: false,
			placeholder: 'Тема',
			regExp: /[a-z0-9_-]{10,}$/
		},
		message: {
			value: '',
			error: false,
			placeholder: 'Сообщение',
			regExp: /[a-z0-9_-]{20,}$/
		},
	} as Record<string, FormField >
	return fieldsNames.reduce((total, fieldName) => {
		return {
			...total,
			[fieldName]: mapFields[fieldName]
		}
	}, {})
}

export const isValidFields = (fields: Record<string, FormField>): boolean => {
	return !Object.keys(fields).some(field => fields[field].error)
}