/*
 Find the second smallest number from unsorted array
 Example :
  Input : [3,5,4,6,1,5,10,2,7,9,8];
  output : 2
*/

/*
First method by sigle loop and it is an optomal solution
*/

function secondSmallestMethodFirst(arr) {
	let first = second = Number.MAX_SAFE_INTEGER;
	let len = arr.length;
	if (len < 2) {
		return "Invalid input";
	}

	for (let i = 0; i < len; i++) {
		if (arr[i] < first) {
			second = first;
			first  = arr[i];
		} else if (arr[i] < second && first != arr[i]) {
			second = arr[i];
		}
	}
	if (second === Number.MAX_SAFE_INTEGER) {
		return "There is no second minimum number in the array";
	}
	return second;
}
/*
By sorting the array and then return the 2nd element
*/

function secondSmallestMethodSecond(arr) {
	arr.sort((a, b) => a - b);
	return arr[1];
}

/*
By math.max and then remove the biggest element and then find the 2nd largest from remaining array
*/

function secondLargestMethodThird(arr) {
	let minimum_elem =  Math.min(...arr);
	arr = arr.splice(arr.indexOf(minimum_elem), 1);
	return Math.max(...arr);
}