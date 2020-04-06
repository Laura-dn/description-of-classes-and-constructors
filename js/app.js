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
    #tableName;
    #tableWidth;
    #tableHeight;
    #tableLength;
    #tableCountertopMaterial;
    #tableFootMaterial;
    #tableCountertopShape;
    #tablePrice;

    constructor({name, width, height, length, countertopMaterial, footMaterial, countertopShape, price}) {
        //Вызывает сеттер
        this.name = name;
        this.width = width;
        this.height = height;
        this.length = length;
        this.countertopMaterial = countertopMaterial;
        this.footMaterial = footMaterial;
        this.countertopShape = countertopShape;
        this.price = price;
    }

    get name() {return this.#tableName;}
    set name(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#tableName = value;
        }
    }

    get width() {return this.#tableWidth;}
    set width(value) {
        if(this.checkDigit(value)) {
            this.#tableWidth = value;
        } else {
            console.log(this.error(value));
            return;
        }
    }

    get height() {return this.#tableHeight;}
    set height(value) {
        if(this.checkDigit(value)) {
            this.#tableHeight = value;
        } else {
            console.log(this.error(value));
            return;
        }
    }

    get length() {return this.#tableLength;}
    set length(value) {
        if(this.checkDigit(value)) {
            this.#tableLength = value;
        } else {
            console.log(this.error(value));
            return;
        }
    }

    get countertopMaterial() {return this.#tableCountertopMaterial;}
    set countertopMaterial(value) {
        if(value.length < 3) {
            console.log(this.error(value));
            return;
        } else {
            this.#tableCountertopMaterial = value;
        }
    }

    get footMaterial() {return this.#tableFootMaterial;}
    set footMaterial(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#tableFootMaterial = value;
        }
    }

    get countertopShape() {return this.#tableCountertopShape;}
    set countertopShape(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#tableCountertopShape = value;
        }
    }

    get price() {return this.#tablePrice;}
    set price(value) {
        if(this.checkDigit(value)) {
            this.#tablePrice = value;
        } else {
            console.log(this.error(value));
            return;
        }
    }

    error(arg) {return `TablesClass. ОШИБКА в данных: ${arg}`;}

    checkDigit(variable) {
        if(!isNaN(variable) && variable > 0 && variable < Infinity) {
            return true;
        } else {
            return false;
        }
    }

    checkStr(variable) {
        if(variable.length < 4) {
            return true;
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
    #shoesSize;
    #shoesName;
    #shoesPrice;
    #shoesMaterial;

    constructor({size, name, price, material}) {
        //Вызывает сеттер
        this.size = size;
        this.name = name;
        this.price = price;
        this.material = material;
    }

    get size() {return this.#shoesSize;}
    set size(variable) {
        if(!isNaN(variable) && variable > 0 && variable < 50) {
            this.#shoesSize = variable;
        } else {
            console.log(this.error(variable));
            return;
        }
    }

    get name() {return this.#shoesName;}
    set name(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#shoesName = value;
        }
    }

    get price() {return this.#shoesPrice;}
    set price(variable) {
        if(!isNaN(variable) && variable > 0 && variable < Infinity) {
            this.#shoesPrice = variable;
        } else {
            console.log(this.error(variable));
            return;
        }
    }

    get material() {return this.#shoesMaterial;}
    set material(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#shoesMaterial = value;
        }
    }
    
    error(arg) {return `ShoesClass. ОШИБКА в данных: ${arg}`;}

    checkStr(variable) {
        if(variable.length < 4) {
            return true;
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
    #workerName;
    #workerLastName;
    #workerDateOfBirth;
    #workerEducation;
    #workerGender;
    #workerDateOfEmployment;
    #workerNationality;
    #workerSpecialty;

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

    get name() {return this.#workerName;}
    set name(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#workerName = value;
        }
    }

    get lastName() {return this.#workerLastName;}
    set lastName(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#workerLastName = value;
        }
    }

    get dateOfBirth() {return this.#workerDateOfBirth;}
    set dateOfBirth(value) {
        if(this.checkDate(value)) {
            this.#workerDateOfBirth = value;
        } else {
            console.log(this.error(value));
            return;
        }
    }

    get education() {return this.#workerEducation;}
    set education(value) {
        if(['Начальное', 'Среднее', 'Высшее'].includes(value)) {
            this.#workerEducation = value;
        } else {
            console.log(this.error(value));
            return;
        }
    }

    get gender() {return this.#workerGender;}
    set gender(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#workerGender = value;
        }
    }

    get dateOfEmployment() {return this.#workerDateOfEmployment;}
    set dateOfEmployment(value) {
        if(this.checkDate(value)) {
            this.#workerDateOfEmployment = value;
        } else {
            console.log(this.error(value));
            return;
        }
    }

    get nationality() {return this.#workerNationality;}
    set nationality(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#workerNationality = value;
        }
    }

    get specialty() {return this.#workerSpecialty;}
    set specialty(value) {
        if(this.checkStr(value)) {
            console.log(this.error(value));
            return;
        } else {
            this.#workerSpecialty = value;
        }
    }

    error(arg) {return `WorkerClass. ОШИБКА в данных: ${arg}`;}

    checkDigit(variable) {
        if(!isNaN(variable) && variable > 0 && variable < Infinity) {
            return true;
        } else {
            return false;
        }
    }

    checkStr(variable) {
        if(variable.length < 4) {
            return true;
        } else {
            return false;
        }
    }

    checkDate(variable) {
        let re = /\d{2}\.\d{2}\.\d{4}/g;
        if(re.test(variable)) {
            return true;
        } else {
            return false;
        }
    }

    get experience() {
        let currentDate = new Date(),
            dateOfEmployment = new Date(this.#workerDateOfEmployment),
            days = 0,
            years = 0,
            experience = document.querySelector(".experience");

        days = Math.floor((currentDate - dateOfEmployment) / 1000 / 3600 / 24);

        if(Math.floor(days/365)) {
            years = Math.floor(days/365);
            days = days - (years * 365);

            experience.innerHTML = `${years} лет и ${days} дней.`
        } else {
            experience.innerHTML = `${days} дней.`;
        }
    }

    get age() {
        let currentDate = new Date(),
            dateOfBirth = new Date(this.#workerDateOfBirth),
            age = document.querySelector(".age");

        age.innerHTML = `${Math.floor((currentDate - dateOfBirth) / 1000 / 3600 / 24 / 365)} годиков.`;
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
        education: "Высшее",
        gender: "girl",
        dateOfEmployment: "09.01.2019",
        nationality: "Ukrainian",
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

objResult.workerClass.experience; //Выводим геттером Стаж
objResult.workerClass.age;        //Выводим возраст
