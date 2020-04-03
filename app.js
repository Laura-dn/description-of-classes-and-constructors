
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

class TablesClass
{
    constructor({name, width, height, length, countertopMaterial, footMaterial, countertopShape, price}) {
        this.name = name;
        this.width = this.checkDigit(width);
        this.height = this.checkDigit(height);
        this.length = this.checkDigit(length);
        this.countertopMaterial = countertopMaterial;
        this.footMaterial = footMaterial;
        this.countertopShape = countertopShape;
        this.price = this.checkDigit(price);
    }

    checkDigit(variable) {
        if(!isNaN(variable) && variable > 0 && variable < Infinity) {
            return variable;
        } else {
            return false;
        }
    }
}

function ShoesConstructor({size, name, price, material}) {
    this.size = size;
    this.name = name;
    this.price = price;
    this.material = material;
}

class ShoesClass
{
    constructor({size, name, price, material}) {
        this.size = this.checkDigit(size);
        this.name = name;
        this.price = this.checkDigit(price);
        this.material = material;
    }

    checkDigit(variable) {
        if(!isNaN(variable) && variable > 0 && variable < Infinity) {
            return variable;
        } else {
            return false;
        }
    }
}

function WorkerConstructor({name, lastName, dateOfBirth, education, gender, dateOfEmployment, nationality, specialty}) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth= dateOfBirth;
    this.education = education;
    this.gender = gender;
    this.dateOfEmployment = dateOfEmployment;
    this.nationality = nationality;
    this.specialty = specialty;
}

class WorkerClass
{

}

let data = [
    {
        name: "Jysk",
        width: 0.6,
        height: 0.8,
        length: 1.5,
        countertopMaterial: "ПВХ",
        footMaterial: "Сосна",
        countertopShape: "Прямоугольный",
        price: 300
    },
    {
        size: 42,
        name: "Krosy",
        price: 100,
        material: "Koga"
    },
    {

    }
];

//1.1. Object table - Constructor
let table1 = new TablesConstructor(data[0]);
console.log(`Объект стол в виде Констуктора:`);
console.log(table1);

//1.2. Object table - Class
let table2 = new TablesClass(data[0]);
console.log(`Объект стол в виде Класса:`);
console.log(table2);

//2.1. Object shoes - Constructor
let shoes1 = new ShoesConstructor(data[1]);
console.log(`Объект обувь в виде Констуктора:`);
console.log(shoes1);

//2.2. Object shoes - Class
let shoes2 = new ShoesClass(data[1]);
console.log(`Объект обувь в виде Класса:`);
console.log(shoes2);