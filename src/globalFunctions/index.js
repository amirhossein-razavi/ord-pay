export const tree_digit_number = (text) => {
    if (text == null)
        return null
    const text2 = text.toString().replace("-", "")
    let number = text2.toString().split("").reverse();
    let data2 = [];
    for (let i = 0; i < number.length; i++) {
        if (i % 3 == 0 && i != 0) data2.unshift(number[i], ",")
        else data2.unshift(number[i])
    }
    return data2.join("")
}