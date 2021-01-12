import React from "react";

const Settings = () => {

    let inputArray = [3, 6, -2, -5, 7, 3]

    function adjacentElementsProduct(inputArray) {
        if (inputArray.length >=2) {
            let summ = []
            for (let i = 0; i <= inputArray.length - 2; i++) {
                summ.push(inputArray[i] * inputArray[i+1])
                console.log(summ)
            }
            let maximus = Math.max.apply(Math, summ)
            return maximus
        } else {
            console.log('too short array')
        }
    }
    return (
        <div>
            {adjacentElementsProduct(inputArray)}
        </div>
    )
}

export default Settings