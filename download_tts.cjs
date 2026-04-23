const fs = require('fs');
const https = require('https');

const texts = {
  vi: [
    "NVS Technology tiên phong trong việc tích hợp trợ lý ảo thông minh vào hệ thống doanh nghiệp, giúp tự động hóa quy trình chăm sóc khách hàng và nâng cao năng suất đột phá.",
    "Thiết kế, đào tạo và cung cấp các mô hình Trí tuệ Nhân tạo chuyên biệt, giải quyết tối ưu bài toán dữ liệu lớn và đặc thù của từng tổ chức với tính bảo mật cao nhất.",
    "NVS Technology luôn chú trọng phát triển những sản phẩm riêng, mang tầm nhìn và sáng tạo của chính đội ngũ công ty. Chúng tôi tập trung vào những hệ thống đa nền tảng, cung cấp những tiện ích tốt nhất.",
    "NVS Technology với quy trình làm việc chuyên nghiệp chuẩn quốc tế và đội ngũ giàu kinh nghiệm cung cấp trọn gói cho khách hàng dịch vụ phát triển theo thiết kế.",
    "NVS Technology hỗ trợ tư vấn và cung cấp các giải pháp phục vụ quá trình chuyển đổi số cho doanh nghiệp và các cơ quan quản lý."
  ],
  en: [
    "NVS Technology is a pioneer in integrating smart virtual assistants into enterprise systems, helping automate customer care processes and boosting productivity.",
    "Designing, training, and providing specialized Artificial Intelligence to optimally solve big data problems and organizational specifics with maximum security.",
    "NVS Technology always focuses on developing proprietary products, bringing the vision and creativity of the company's team. We focus on multi-platform systems, providing the best utilities.",
    "NVS Technology, with international standard professional workflows and an experienced team, provides end-to-end development services according to design.",
    "NVS Technology provides consulting and solutions for the digital transformation process of businesses and management agencies."
  ]
};

try { fs.mkdirSync('./public/tts', { recursive: true }); } catch(e){}

async function download() {
  for (const lang of Object.keys(texts)) {
    for (let i = 0; i < texts[lang].length; i++) {
        const text = texts[lang][i];
        // Using gtx client which works for Node
        const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=${lang}&q=${encodeURIComponent(text)}`;
        const dest = `./public/tts/${lang}_${i+1}.mp3`;
        
        await new Promise((resolve, reject) => {
          https.get(url, (res) => {
             if (res.statusCode !== 200) {
                console.error(`Failed to get: ${res.statusCode} for ${url}`);
                resolve();
                return;
             }
             const file = fs.createWriteStream(dest);
             res.pipe(file);
             file.on('finish', () => { file.close(); resolve(); });
          }).on('error', reject);
        });
        console.log(`Saved ${dest}`);
        await new Promise(r => setTimeout(r, 600)); // sleep
    }
  }
}
download();
