const thermometer= (grades, brand)=>{
    return{
        _grades: grades,
        _brand: brand,
        get grades (){ return this._grades},
        set temperature(tempInC){
           this._brand= tempInC
          },
        get brand(){return this._brand}
    }
}

const el=thermometer(3, "celcius")
console.log(el.grades)
el.temperature= "x"
console.log(el.brand)