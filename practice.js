function findthree(arr){
    let x = Number.MIN_VALUE
    let y = Number.MIN_VALUE
    let z = Number.MIN_VALUE
if (arr.length < 3)
    return 'not enough numbers'
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > x) {
            z = y
            y = x
            x = arr[i];
        } else if ( arr[i] > y) {
            y = z
            y = arr[i];
        } else if (arr[i] > z) {
            z = arr[i];
        }
    }
console.log(x, y ,z)
}

let arr = [10, 55, 405, 1090, 650, 23, 6554]
findthree(arr)