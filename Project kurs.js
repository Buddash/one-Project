// let arr = ['a', 'b', 'c', 'd', 'e'];
// flag = false;

// 	for ( let elem of arr)
// 	{
// 		if (elem == 'c')
// 		{
// 			flag = true;
// 		}
// 	};

// 		if (flag == true)
// 		{
// 			console.log('+++');
// 		}
// 		else
// 		{
// 			console.log('---');
// 		}
	

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let x = 0;
// for (let elem of arr)
// {
// 	elem = String(elem);
// 	if (String(elem[0]) == 1 || String(elem[0]) == 2)
// 	{
// 		x += Number(elem);
// 	}
	
// }
// console.log(x);

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let elem in obj) {
// 	x = String(obj[elem]);
// 	if (x[0] == '1' || x[0] == '2') {
// 		sum += Number(x);
// 	}
// }


// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };

// let mass = [];
// let x = '';

// for (let key in obj)
// {
//     x = String(obj[key]);
//     if (x[0] == 1 || x[0] == 2)
//     {
//         mass.push(obj[key]);
//     }
// }
// console.log(mass);



// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// for ( i = 0; i <= arr.length-1; i++)
// {
//     key = arr[i];
//     obj[key] = i+1;
    
// }
// console.log(obj);

// let arr = [[1, 2, 3], [4, 5], [6]];
// sum = 0;

// for (let i = 0; i <= arr.length-1; i++ ) 
// {
//     {
//         for (let j = 0; j <= arr[i].length-1; j++)
//         {
//             sum += arr[i][j];
//         }
//     }
// }
// console.log(sum);


// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];                                       Создание трехмерного массива чисел
//   for (let j = 0; j < 2; j++) {
//     arr[i][j] = [];
//     for (let k = 0; k < 5; k++) {
//       arr[i][j][k] = k + 1;
//     }
//   }
// }
// console.log(arr)

let arr = [];

for (let i = 0; i < 3; i++) {
	for (let j = 1; j <= 5; j++) 
    {
		arr[i] = [];

        for (let j = 1; j <= 5; j++) 
        {
            arr[i].push[j+1];
        }
	}
}
console.log(arr);




// let arr = [];
// let k = 1; // счетчик

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	                                                  // Формирование массива с счетчиком
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k); // записываем счетчик
// 		k++; // увеличиваем счетчик
// 	}
// }

// console.log(arr);

// let obj = {
//     1: {
//       1: {
//         1: 111,
//         2: 112,
//         3: 113,
//       },
//       2: {
//         1: 121,                          Обращение к эелементам 3ч мерного объекта и их сумма
//         2: 122,
//         3: 123,
//       },
//     },
//     2: {
//       1: {
//         1: 211,
//         2: 212,
//         3: 213,
//       },
//       2: {
//         1: 221,
//         2: 222,
//         3: 223,
//       },
//     },
//     3: {
//       1: {
//         1: 311,
//         2: 312,
//         3: 313,
//       },
//       2: {
//         1: 321,
//         2: 322,
//         3: 323,
//       },
//     },
//   }
//   sum = 0;
//   x = 0;
  
//   for ( let key in obj)
//   {
//     for (let keyin in obj[key])
//     {
//       console.log(obj[key][keyin])
//       {
//         for (let keyin2 in obj[key][keyin])
//         {
//           sum += obj[key][keyin][keyin2];
//         }
//       }
//     }
//   }
//   console.log(sum);



// let users = [
// 	{
// 		name: 'name1',
// 		surn: 'surn1',
// 	},
// 	{
// 		name: 'name2',
// 		surn: 'surn2',
// 	},                                       Обращение к массиву объеков
// 	{
// 		name: 'name3',
// 		surn: 'surn3',
// 	},
// ];

// for (let user of users) {
// 	console.log(user.name + ' ' + user.surn);
// }



