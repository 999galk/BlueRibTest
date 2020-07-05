export let Data = [
	{ id: 1, from: 'Israel', to: 'Italy', departure:'2020/10/15 10:20', landing:'2020/10/15 10:20', price: '100$'},
	{ id: 2, from: 'Israel', to: 'LA', departure:'2020/10/15 10:20', landing:'2020/10/15 10:20', price: '200$'},
	{ id: 3, from: 'Israel', to: 'India', departure:'2020/10/15 10:20', landing:'2020/10/15 10:20', price: '300$' }
]

export function setData(obj){
	console.log('got to set data', Data, obj);
	if(obj.length){
		Data.push(obj);
	}
	console.log('after add',Data);
}

// export let Data = [
// 	{ id: 1, from: 'Israel', to: 'Italy', departure:'2020/10/15 10:20', landing:'2020/10/15 10:20', price: '100$'},
// 	{ id: 2, from: 'Israel', to: 'LA', departure:'2020/10/15 10:20', landing:'2020/10/15 10:20', price: '200$'},
// 	{ id: 3, from: 'Israel', to: 'India', departure:'2020/10/15 10:20', landing:'2020/10/15 10:20', price: '300$' }
// ]