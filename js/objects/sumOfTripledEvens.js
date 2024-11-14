
function isEven(num){
    return num % 2 == 0
}

function triple(num){
    return num *= 3
}

function sumOfTripledEvens(arr){
    const evenNums = arr.filter(isEven)
    const tripledNums = evenNums.map(triple)

    const sum = tripledNums.reduce((total, currentItem)=> {
        return total += currentItem
    })

    return sum
}


let testArr = [1, 2, 3, 4, 5]

let ans = sumOfTripledEvens(testArr)

console.log(ans)