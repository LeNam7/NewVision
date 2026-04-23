const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');
let lines = content.split('\n');

let before = lines.slice(0, 55);
let nft = lines.slice(55, 88);
let crm = lines.slice(88, 153);
let after = lines.slice(153);

let crmText = crm.join('\n').replace('Hệ thống quản lý khách hàng CRM', 'Hệ thống quản lý khách hàng BE CRM');

let newLines = [...before, ...crmText.split('\n'), ...nft, ...after].join('\n');
fs.writeFileSync('src/data/products.ts', newLines);
