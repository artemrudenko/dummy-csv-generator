"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColumn = void 0;
var chance_1 = require("chance");
function generateColumn(keyword, amount, opts) {
    var chance = chance_1.Chance();
    var values = [];
    if (keyword.startsWith('pick')) {
        values = keyword.replace('pick(', '').replace(')', '').split('|');
        keyword = 'pick';
    }
    switch (keyword) {
        // Pick
        case 'pick':
            return chance.n(function () { return chance.pickone(values); }, amount);
        // Basics
        case 'bool':
            return chance.n(chance.bool, amount);
        case 'character':
            return chance.n(chance.character, amount);
        case 'float':
            return chance.n(chance.floating, amount);
        case 'integer':
            return chance.n(chance.integer, amount, opts || { min: -999999, max: 999999 });
        case 'natural':
            return chance.n(chance.natural, amount);
        case 'string':
            return chance.n(chance.string, amount);
        // Text
        case 'paragraph':
            return chance.n(chance.paragraph, amount);
        case 'sentence':
            return chance.n(chance.sentence, amount);
        case 'word':
            return chance.n(chance.word, amount);
        // Person
        case 'age':
            return chance.n(chance.age, amount, !!opts ? opts : {});
        case 'gender':
            return chance.n(chance.gender, amount);
        case 'birthday':
            return chance.n(chance.birthday, amount, opts || { string: true });
        case 'name':
            return chance.n(chance.name, amount);
        case 'ssn':
            return chance.n(chance.ssn, amount);
        // Web
        case 'company':
            return chance.n(chance.company, amount);
        case 'email':
            return chance.n(chance.email, amount, !!opts ? opts : {});
        case 'ip':
            return chance.n(chance.ip, amount);
        case 'twitter':
            return chance.n(chance.twitter, amount);
        // Location
        case 'address':
            return chance.n(chance.address, amount, !!opts ? opts : {});
        case 'city':
            return chance.n(chance.city, amount);
        case 'country':
            return chance.n(chance.country, amount, !!opts ? opts : {});
        case 'locale':
            return chance.n(chance.locale, amount);
        case 'phone':
            return chance.n(chance.phone, amount);
        case 'postal':
            return chance.n(chance.postal, amount);
        case 'province':
            return chance.n(chance.province, amount);
        case 'state':
            return chance.n(chance.state, amount);
        case 'street':
            return chance.n(chance.street, amount);
        case 'zip':
            return chance.n(chance.zip, amount);
        // Time
        case 'date':
            return chance.n(chance.date, amount, opts || { string: true });
        case 'timezone':
            return chance.n(chance.timezone, amount);
        // Finance
        case 'cc':
            return chance.n(chance.cc, amount, !!opts ? opts : {});
        case 'dollar':
            return chance.n(chance.dollar, amount, !!opts ? opts : {});
        // Miscellaneous
        case 'guid':
            return chance.n(chance.guid, amount);
        case 'hash':
            return chance.n(chance.hash, amount);
        default:
            throw new Error("Unsupported type: " + keyword + " specified!");
    }
}
exports.generateColumn = generateColumn;
