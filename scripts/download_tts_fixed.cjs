const fs = require('fs');
const https = require('https');

const texts = {
  vi: [
    "NVS Technology tiên phong trong việc tích hợp trợ lý ảo thông minh vào hệ thống doanh nghiệp, giúp tự động hóa quy trình chăm sóc khách hàng và nâng cao năng suất đột phá.",
    "Thiết kế, đào tạo và cung cấp các mô hình Trí tuệ Nhân tạo chuyên biệt, giải quyết tối ưu bài toán dữ liệu lớn và đặc thù của từng tổ chức với tính bảo mật cao nhất.",
    "NVS Technology luôn chú trọng phát triển những sản phẩm riêng, mang tầm nhìn và sáng tạo của chính đội ngũ công ty.",
    "Chúng tôi tập trung vào những hệ thống đa nền tảng, cung cấp những tiện ích tốt nhất.",
    "NVS Technology với quy trình làm việc chuyên nghiệp chuẩn quốc tế và đội ngũ giàu kinh nghiệm cung cấp trọn gói cho khách hàng dịch vụ phát triển theo thiết kế.",
    "NVS Technology hỗ trợ tư vấn và cung cấp các giải pháp phục vụ quá trình chuyển đổi số cho doanh nghiệp và các cơ quan quản lý."
  ],
  en: [
    "NVS Technology is a pioneer in integrating smart virtual assistants into enterprise systems, helping automate customer care processes and boosting productivity.",
    "Designing, training, and providing specialized Artificial Intelligence to optimally solve big data problems and organizational specifics with maximum security.",
    "NVS Technology always focuses on developing proprietary products, bringing the vision and creativity of the company's team.",
    "We focus on multi-platform systems, providing the best utilities.",
    "NVS Technology, with international standard professional workflows and an experienced team, provides end-to-end development services according to design.",
    "NVS Technology provides consulting and solutions for the digital transformation process of businesses and management agencies."
  ]
};

try { fs.mkdirSync('./public/tts', { recursive: true }); } catch(e){}

async function getMp3Buffer(text, lang) {
  const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=${lang}&q=${encodeURIComponent(text)}`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
       if (res.statusCode !== 200) return reject(new Error('Failed ' + res.statusCode));
       const chunks = [];
       res.on('data', c => chunks.push(c));
       res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function run() {
  for (let lang of Object.keys(texts)) {
     const t = texts[lang];
     
     const dest1 = `./public/tts/${lang}_1.mp3`;
     fs.writeFileSync(dest1, await getMp3Buffer(t[0], lang)); console.log(dest1);
     await new Promise(r => setTimeout(r, 1000));

     const dest2 = `./public/tts/${lang}_2.mp3`;
     fs.writeFileSync(dest2, await getMp3Buffer(t[1], lang)); console.log(dest2);
     await new Promise(r => setTimeout(r, 1000));

     const dest3 = `./public/tts/${lang}_3.mp3`;
     const b3a = await getMp3Buffer(t[2], lang);
     await new Promise(r => setTimeout(r, 1000));
     const b3b = await getMp3Buffer(t[3], lang);
     fs.writeFileSync(dest3, Buffer.concat([b3a, b3b])); console.log(dest3);
     await new Promise(r => setTimeout(r, 1000));

     const dest4 = `./public/tts/${lang}_4.mp3`;
     fs.writeFileSync(dest4, await getMp3Buffer(t[4], lang)); console.log(dest4);
     await new Promise(r => setTimeout(r, 1000));

     const dest5 = `./public/tts/${lang}_5.mp3`;
     fs.writeFileSync(dest5, await getMp3Buffer(t[5], lang)); console.log(dest5);
     await new Promise(r => setTimeout(r, 1000));
  }
}
run();
