
function TablesConstructor({name, width, height, length, countertopMaterial, footMaterial, countertopShape, price}) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.countertopMaterial = countertopMaterial;
    this.footMaterial = footMaterial;
    this.countertopShape = countertopShape;
    this.price = price;
}

class TablesClass{
    constructor(name, width, height, length, countertopMaterial, footMaterial, countertopShape, price){
        this.name = name;
        this.width = width;
        this.height = height;
        this.length = length;
        this.countertopMaterial = countertopMaterial;
        this.footMaterial = footMaterial;
        this.countertopShape = countertopShape;
        this.price = price;
    }
}
// const tb = new Tables("обеденный", "70", " 80", " 120", "массив сосны", "хромированный металл", "прямоугольная", "800");
// console.log(tb);

function Shoes(size, name, price, material) {
    this.size = size;
    this.name = name;
    this.price = price;
    this.material = material;
}

class Shoes1{
    constructor(size, name, price, material){
        this.size = size;
        this.name = name;
        this.price = price;
        this.material = material;
    }
}
// const sh = new Shoes()

function CoWorker(name, lastName, dateOfBirth, education, gender, dateOfEmployment, nationality, specialty) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth= dateOfBirth;
    this.education = education;
    this.gender = gender;
    this.dateOfEmployment = dateOfEmployment;
    this.nationality = nationality;
    this.specialty = specialty;
}





let tableData = {
        name: "Jysk",
        width: 0.6,
        height: 0.8,
        length: 1.5,
        countertopMaterial: "ПВХ",
        footMaterial: "Сосна",
        countertopShape: "Прямоугольный",
        price: 300
};
let table1 = new TablesConstructor(tableData);
console.dir(table1);