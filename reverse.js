let word = [];

function reverse(strin){
    for(let a=strin.length-1; a>=0; a--){
      word.push(strin[a]);

    }
    return word.join("");
}
console.log(reverse("welcome"));