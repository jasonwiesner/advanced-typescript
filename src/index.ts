// Tuples ****
let user: [number, string] = [1, 'Jason'];

// Enums ****

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size { Small = 1, Medium , Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions ****

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000);

// Objects ***

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { id: 1, 
    name: 'Jason',
    retire: (date: Date) => {
        console.log(date);
    }
};


// Type Aliases *****
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employeeWithAliasType: Employee = { 
    id: 1, 
    name: 'Jason',
    retire: (date: Date) => {
        console.log(date);
    }
};

// Union Types *****

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') 
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2;
};

kgToLbs(10);
kgToLbs('10 kg');

// Intersection Types *****
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

// Literal Types *****
// Literal (exact, specific)
type Quantity = 50 | 100; // <== literal type

let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';

// Nullable Types *****

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null);

// Optional Chaining *****
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {
        birthday: new Date()
    }
}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customers !== null && customers !== undefined)
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');






