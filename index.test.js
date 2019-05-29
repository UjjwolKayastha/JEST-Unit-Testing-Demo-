const index = require('./index')

// console.log(index);

//describe -> collection of test cases -> checking hello function from index
describe('testing for hello function', ()=>{
    //it bhanya chai euta test case
    it('should return hello', ()=>{
        //k expect garne bhanera. ani aayo 
        expect(index.hello()).toEqual("Hello"); //toEqual for string
    })
})

describe('testing for add function', ()=>{
    //it bhanya chai euta test case
    it('should return x+y', ()=>{
        //k expect garne bhanera. ani aayo bhane pass
        expect(index.add(2,2)).toBe(4); //toBe for integer
    })
    it('should not add strings', ()=>{
        expect(index.add(2,'2')).toBe(null)
    })
    it('should not add objects', ()=>{
        expect(index.add(2,{})).toBe(null)
    })
    it('should not add arrays', ()=>{
        expect(index.add(2,[])).toBe(null)
    })

})

describe('testing for multiply function', ()=>{
    //it bhanya chai euta test case
    it('should return x*y', ()=>{
        //k expect garne bhanera. ani aayo 
        expect(index.multiply(2,-5)).toBe(-10); //toBe for integer
        expect(index.multiply(4, '2')).toBe(null)
    })
})

describe("Remove names starting with 'A'", ()=>{

    let names = ['Apple', 'Banana', 'Orange', 'avocado'] //input
    //output = ['Banana', 'Orange']

    it('should contain names starting other than "A"', ()=>{
        expect(index.removeAName(names)).toContain('Banana')
        expect(index.removeAName(names)).toContain('Orange')
        expect(index.removeAName(names)).not.toContain('Apple')
        expect(index.removeAName(names)).not.toContain('avocado')
    })
})