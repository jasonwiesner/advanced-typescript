"use strict";
let user = [1, 'Jason'];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = { id: 1,
    name: 'Jason',
    retire: (date) => {
        console.log(date);
    }
};
let employeeWithAliasType = {
    id: 1,
    name: 'Jason',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
;
kgToLbs(10);
kgToLbs('10 kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : {
        birthday: new Date()
    };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map