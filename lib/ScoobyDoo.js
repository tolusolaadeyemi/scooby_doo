
class ScoobyDoo {
    static onlyLetters(str) {
        return /^[A-Za-z]*$/.test(str);
      }

    static toScoobyDoo(word){
        try {
            if(word.length > 0 && this.onlyLetters(word)){
                return word.replace(/^[^aeiou]*/i, "r")
            }else{
                return('please enter letters only')
            }
        } catch (error) {
            console.log(error)
        }   
    }
}

module.exports = ScoobyDoo;