let Array = ["cat", "dog", "goat"];
function searchArray(Array, value) {
    if (Array.length === 0) {
        return false;
    } else if (Array[0] === value) {
        return true;
    }else{
        return searchArray(Array.slice(1), value);
    }
}
console.log(searchArray(Array, "cat"));
console.log(searchArray(Array, "dog"));
console.log(searchArray(Array, "lion"));
console.log(searchArray(Array, "goat"));


