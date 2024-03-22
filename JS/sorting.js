// let s="javascript"
// let array=s.split("")

let array=[6,7,4,8,3,5]
// console.log(array)

// !bubbleSort

// function bubbleSort(array)
// {
//     for(let i=0;i<array.length;i++)
//     {
//         for(let j=0; j<(array.length-i-1);j++)
//         {
//             if(array[j]>array[j+1])
//             {
//                 let temp=array[j+1]
//                 array[j+1]=array[j]
//                 array[j]=temp
//             }
//         }
//     }
// }
// bubbleSort(array);
// console.log(array);


// ! insertionsorting


// function insertionSort(array)
// {
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i]>array[i+1])
//         {
//             [array[i],array[i+1]]=[array[i+1],array[i]]
//             i=-1
//         }
//     }
// }
// insertionSort(array)
// console.log(array)

// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let currentElement = array[i];
//         let j = i - 1;

//         while (j >= 0 && array[j] > currentElement) {
//             array[j + 1] = array[j];
//             j--;
//         }

//         array[j + 1] = currentElement;
//     }
// }
// insertionSort(array);
// console.log(array);

// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let current = array[i];
//         let j;
//         for (j = i - 1; j >= 0 && array[j] > current; j--) {
//             array[j + 1] = array[j];
//         }
//         array[j + 1] = current;
//     }
//     return array;
// }
// console.log(insertionSort(array))

// ! binarysearch


// function binarySearch(array,search)
// {
//     let sml=0
//     let big=array.length

//     while(sml<=big)
//     {
//         let mid=parseInt((sml+big)/2)
//         if(array[mid]===search)
//         {
//             return mid;
//         }
//         else if(array[mid]>search)
//         {
//             big=mid-1
//         }
//         else
//         {
//             sml=mid+1
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(array,"v"));

// ! quick sorting

// function QuickSort(array)
// {
//     let pivot=array[array.length-1]
//     console.log(pivot)

//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i]>pivot)
//         {
            
//         }
//     }
// }

// QuickSort(array)

// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     let pivot = arr[0];
//     let left = [];
//     let right = [];
  
//     for (let i = 1; i < arr.length; i++) {
//         console.log(pivot)
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     // console.log(left,pivot,right)
//     return quickSort(left).concat(pivot, quickSort(right));
//   }
  
//   let unsortedArray = [5, 2, 9, 3, 6, 1, 8, 7];
//   console.log(unsortedArray)
//   let sortedArray = quickSort(unsortedArray);
//   console.log(sortedArray);
 
  
//   ! recursion

// function printNumber(n)
// {
//     if(n===0)
//     {
//         return;
//     }
//     console.log(n)

//     printNumber(n-1)
// }

// printNumber(5)
  

// function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     //   console.log(n);
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   }
  
//   for (let i = 0; i <= 10; i++) {
//     console.log(fibonacci(i));
//   }
  
// console.log(fibonacci(10))
// fibonacci(5)


// ! mergr sort 

function mergeSort(arr)
{
  if(arr.length<2)
  {
    return arr
  }
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right)
{
  let sort = []
  while(left.length && right.length)
  {
    if(left[0] <= right[0])
    {
      sort.push(left.shift())
    }
    else
    {
      sort.push(right.shift())
    }
  }
  return [...sort,...left,...right]
}

console.log(mergeSort(array))
