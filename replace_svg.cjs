const fs = require('fs');
const path = require('path');

const logFilePath = 'C:\\Users\\PC\\.gemini\\antigravity\\brain\\9ece1945-26bd-43b8-afb9-ac1de3005d38\\.system_generated\\logs\\overview.txt';
const heroFilePath = 'C:\\Users\\PC\\NvsTech-Page\\src\\components\\Hero.tsx';

try {
    const logContent = fs.readFileSync(logFilePath, 'utf8');
    
    // Find the last SVG in the log that the user provided
    const svgStarts = [...logContent.matchAll(/<svg/g)].map(m => m.index);
    if (svgStarts.length === 0) {
        console.error('No SVG found in log file.');
        process.exit(1);
    }
    
    const lastSvgStart = Math.max(...svgStarts);
    const endSvgIdx = logContent.indexOf('</svg>', lastSvgStart);
    if (endSvgIdx === -1) {
        console.error('SVG end tag not found.');
        process.exit(1);
    }
    
    const svgContent = logContent.substring(lastSvgStart, endSvgIdx + 6);
    console.log(`Found SVG of length ${svgContent.length}`);
    
    // Read Hero.tsx
    let heroContent = fs.readFileSync(heroFilePath, 'utf8');
    
    // Add class anim-isometric-illustration to SVG
    const SVGWithClass = svgContent.replace('<svg ', '<svg className="anim-isometric-illustration" ');

    // Replace the img tag. We look for <img ... /> inside hero-image
    const imgRegex = /<img[\s\S]*?\/>/g;
    heroContent = heroContent.replace(imgRegex, SVGWithClass);
    
    // We can also remove the heroImg import
    const importRegex = /import heroImg from '\.\.\/assets\/hero\.png';\s*/g;
    heroContent = heroContent.replace(importRegex, '');
    
    fs.writeFileSync(heroFilePath, heroContent, 'utf8');
    console.log('Successfully replaced img with SVG in Hero.tsx.');
} catch (e) {
    console.error('An error occurred:', e);
}
