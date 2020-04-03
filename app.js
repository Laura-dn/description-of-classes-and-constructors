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
    constructor({name, lastName, dateOfBirth, education, gender, dateOfEmployment, nationality, specialty}) {
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth= dateOfBirth;
        this.education = education;
        this.gender = gender;
        this.dateOfEmployment = dateOfEmployment;
        this.nationality = nationality;
        this.specialty = specialty;
    }
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
        name: "Krossy",
        price: 100,
        material: "Kozha"
    },
    {
        name: "Laura",
        lastName: "Avrakhova",
        dateOfBirth: "01.01.2001",
        education: "Visshee",
        gender: "girl",
        dateOfEmployment: "01.01.2020",
        nationality: "Ukraine",
        specialty: "Senior web-developer"
    }
],

    objResult = {
        tablesConstructor: new TablesConstructor(data[0]),
        tablesClass: new TablesClass(data[0]),
        shoesConstructor: new ShoesConstructor(data[1]),
        shoesClass: new ShoesClass(data[1]),
        workerConstructor: new WorkerConstructor(data[2]),
        workerClass: new WorkerClass(data[2])
    };

//1.1. Object table - Constructor
console.log(objResult.tablesConstructor);

//1.2. Object table - Class
console.log(objResult.tablesClass);

//2.1. Object shoes - Constructor
console.log(objResult.shoesConstructor);

//2.2. Object shoes - Class
console.log(objResult.shoesClass);

//3.1. Object worker - Constructor
console.log(objResult.workerConstructor);

//3.2. Object worker - Class
console.log(objResult.workerClass);
