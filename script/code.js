let myPromise = new Promise(args)
    function args(resolve, reject){
        let numb1 = +prompt ("enter a valid number")
        let numb2 = +prompt ("enter a valid number")

        if(typeof numb1== 'number' && typeof numb2 == 'number')
        resolve(`${numb1} and ${numb2} are numbers`)
    else
    reject(`${numb1} and/or ${numb2} is not a number(s)`)
    }
    myPromise.then(
        completed => confirm(completed),
        rejected=> confirm(rejected)
);
