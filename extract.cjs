const fs = require('fs');
const html = fs.readFileSync('./scratch.html', 'utf8');

const allUrls = Array.from(new Set(html.match(/[^"'\s(>]*\.(png|jpe?g|webp)[^"'\s)>]*/gi) || []));
console.log('All image-like strings:', allUrls.join('\n'));
