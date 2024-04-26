function solution (Array) {
    let sum = 0;
    let average;

    for(let i = 0; i < Array.length; i++){
        sum += Array[i];
    }
    average = sum / Array.length ;
    return average;
}