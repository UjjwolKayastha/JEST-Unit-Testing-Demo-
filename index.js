//app is an object that has hello attribute
const app = {
    hello: function(){
        return "Hello"
    },
    add: function(x,y){
        if(typeof x !== 'number' || typeof y !== 'number'){
            return null;
        }
        return x+y
    },
    multiply: (x,y) => {
        if(typeof x !== 'number' || typeof y !== 'number'){
            return null;
        }
      return x*y
    },
    removeAName: (names) =>{
        // higher order loop
        names.forEach((name)=>{
            if(name.toLowerCase().charAt(0) === 'a'){
                index = names.indexOf(name)
                //splice => kaa baata chuttaune kaa bata jodne
                //mathi ko condition meet bhayepachhi array ko nikaalne
                names.splice(index, 1)
            }
        });
        return names;

        //  return names.filter((name) => name.toLowerCase().charAt(0) !== 'a')

    }
}

module.exports = app