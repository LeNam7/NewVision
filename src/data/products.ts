export interface Product {
  id: number;
  slug: string;
  title: string;
  enTitle?: string;
  description: string;
  enDescription?: string;
  image: string;
  date?: string;
  link?: string;
  tags?: string[];
  content: {
    type: 'paragraph' | 'heading' | 'list' | 'image' | 'platforms' | 'fields' | 'technologies' | 'workload' | 'telegram_demo' | 'digitization_demo' | 'certificate_gallery';
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
    images?: string[];
  }[];
  enContent?: {
    type: 'paragraph' | 'heading' | 'list' | 'image' | 'platforms' | 'fields' | 'technologies' | 'workload' | 'telegram_demo' | 'digitization_demo' | 'certificate_gallery';
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
    images?: string[];
  }[];
}

export const products: Product[] = [
  {
    id: 12,
    slug: "so-hoa-chuyen-hoa-du-lieu",
    title: "Số hoá ( Chuyển hoá dữ liệu )",
    enTitle: "Digitization (Data Transformation)",
    description: "Giải pháp số hoá và chuyển hoá dữ liệu toàn diện, giúp doanh nghiệp quản lý, lưu trữ và khai thác dữ liệu hiệu quả để tối ưu hoá quy trình làm việc.",
    enDescription: "Comprehensive data digitization and transformation solutions, helping businesses effectively manage, store, and utilize data to optimize workflows.",
    image: `${import.meta.env.BASE_URL}products/data_digitization.png`,
    tags: ["so-hoa", "du-lieu", "data-transformation", "digitization"],
    content: [
      { type: 'paragraph', text: 'Số hóa dữ liệu là quá trình chuyển đổi thông tin, tài liệu từ định dạng vật lý sang định dạng kỹ thuật số. Quá trình chuyển hóa dữ liệu giúp doanh nghiệp dễ dàng lưu trữ, tìm kiếm, và quản lý thông tin một cách an toàn và hiệu quả hơn.' },
      { type: 'digitization_demo' },
      { type: 'heading', text: 'Lợi ích của việc Số hoá dữ liệu' },
      { type: 'list', items: [
        'Giảm thiểu không gian lưu trữ vật lý và chi phí quản lý tài liệu.',
        'Dễ dàng truy xuất, tìm kiếm và chia sẻ thông tin mọi lúc mọi nơi.',
        'Tăng cường bảo mật và an toàn dữ liệu với các biện pháp mã hóa.',
        'Tạo nền tảng vững chắc cho quá trình Chuyển đổi số (Digital Transformation).'
      ]},
      { type: 'paragraph', text: 'Chúng tôi cung cấp giải pháp chuyển hóa dữ liệu trọn gói, từ việc phân tích hệ thống dữ liệu hiện tại, đến việc xây dựng quy trình số hóa chuẩn hóa, đảm bảo tính toàn vẹn và chính xác của dữ liệu sau khi chuyển đổi.' },
      { type: 'certificate_gallery', images: [
        `${import.meta.env.BASE_URL}certificates/Screenshot_23-4-2026_15852_.jpeg`,
        `${import.meta.env.BASE_URL}certificates/Screenshot_23-4-2026_15927_.jpeg`,
        `${import.meta.env.BASE_URL}certificates/Screenshot_23-4-2026_15948_.jpeg`
      ]},
      { type: 'fields', text: 'Chuyển đổi số, Quản trị dữ liệu' },
      { type: 'technologies', text: 'Cloud Storage, OCR, Data Mining, Big Data' }
    ],
    enContent: [
      { type: 'paragraph', text: 'Data digitization is the process of converting information and documents from physical formats to digital formats. The data transformation process helps businesses easily store, search, and manage information more safely and efficiently.' },
      { type: 'digitization_demo' },
      { type: 'heading', text: 'Benefits of Data Digitization' },
      { type: 'list', items: [
        'Minimize physical storage space and document management costs.',
        'Easily retrieve, search, and share information anytime, anywhere.',
        'Enhance data security and safety with encryption measures.',
        'Create a solid foundation for the Digital Transformation process.'
      ]},
      { type: 'paragraph', text: 'We provide an end-to-end data transformation solution, from analyzing the current data system to building a standardized digitization process, ensuring the integrity and accuracy of data after conversion.' },
      { type: 'certificate_gallery', images: [
        `${import.meta.env.BASE_URL}certificates/Screenshot_23-4-2026_15852_.jpeg`,
        `${import.meta.env.BASE_URL}certificates/Screenshot_23-4-2026_15927_.jpeg`,
        `${import.meta.env.BASE_URL}certificates/Screenshot_23-4-2026_15948_.jpeg`
      ]},
      { type: 'fields', text: 'Digital Transformation, Data Management' },
      { type: 'technologies', text: 'Cloud Storage, OCR, Data Mining, Big Data' }
    ]
  },
  {
    id: 11,
    slug: "nvs-bot-clawbot",
    title: "NVS_Bot - Trợ lý ảo AI (ClawBot)",
    enTitle: "NVS_Bot - Smart AI Assistant (ClawBot)",
    description: "Trợ lý ảo thông minh dựa trên công nghệ AI tiên tiến, hỗ trợ tự động hóa các tác vụ vận hành và chăm sóc khách hàng doanh nghiệp.",
    enDescription: "Smart AI virtual assistant based on advanced AI technologies, designed to automate operational tasks and customer care systems.",
    image: `${import.meta.env.BASE_URL}products/nvs_bot_ai.png`,
    tags: ["ai", "assistant", "chatbot", "clawbot"],
    content: [
      { type: 'paragraph', text: 'NVS_Bot (được biết đến với tên gọi ClawBot) là giải pháp Trợ lý ảo thông minh (AI Assistant) do đội ngũ New Vision nghiên cứu và phát triển. Với khả năng xử lý ngôn ngữ tự nhiên vượt trội, NVS_Bot giúp doanh nghiệp rút ngắn thời gian xử lý công việc và tăng trải nghiệm người dùng.' },
      { type: 'telegram_demo' },
      { type: 'heading', text: 'Tính năng cốt lõi' },
      { type: 'list', items: [
        'Xử lý ngôn ngữ tự nhiên thông minh, linh hoạt',
        'Khả năng tích hợp sâu vào hệ thống CRM/ERP của doanh nghiệp',
        'Tự động phân tích và trích xuất dữ liệu, hỗ trợ code',
        'Đóng vai trò nhân viên ảo chăm sóc khách hàng 24/7'
      ]},
      { type: 'platforms', text: 'Web-based, API Integration, CLI' },
      { type: 'fields', text: 'AI, Tự động hóa' },
      { type: 'technologies', text: 'NodeJS, Python, LLM, ReactJS' },
      { type: 'workload', text: '16MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'NVS_Bot (also known as ClawBot) is a Smart AI Assistant solution researched and developed by the New Vision team. With exceptional natural language processing capabilities, NVS_Bot helps enterprises minimize task processing time and enhance user experiences.' },
      { type: 'telegram_demo' },
      { type: 'heading', text: 'Core Features' },
      { type: 'list', items: [
        'Smart and flexible natural language processing',
        'Deep integration capabilities into enterprise CRM/ERP systems',
        'Automated data parsing, extraction, and code support',
        'Acts as a 24/7 virtual customer service representative'
      ]},
      { type: 'platforms', text: 'Web-based, API Integration, CLI' },
      { type: 'fields', text: 'AI, Automation' },
      { type: 'technologies', text: 'NodeJS, Python, LLM, ReactJS' },
      { type: 'workload', text: '16MM' }
    ]
  },
  {
    id: 1,
    slug: "dimuonnoi-tim-kiem-hanh-trinh-nhanh-chong",
    title: "Dimuonnoi.vn - Tìm kiếm hành trình nhanh chóng",
    enTitle: "Dimuonnoi.vn - Quick Journey Search",
    link: "https://dimuonnoi.vn/",
    description: "DIMUONNOI là trang web đặt chỗ và so sánh du lịch trực tuyến cung cấp cho người dùng nhiều lựa chọn di chuyển, bao gồm xe buýt, tàu hỏa và chuyến bay",
    enDescription: "DIMUONNOI is an online travel booking and comparison website providing users with a variety of transportation options including buses, trains, and flights.",
    image: `${import.meta.env.BASE_URL}products/product_01.jpg`,
    tags: ["dimuonnoi", "travel", "comparison", "so-sanh", "hanh-trinh"],
    content: [
      { type: 'paragraph', text: 'DIMUONNOI là trang web đặt chỗ và so sánh du lịch trực tuyến cung cấp cho người dùng nhiều lựa chọn di chuyển, bao gồm xe buýt, tàu hỏa và chuyến bay. Người dùng có thể dễ dàng so sánh và lựa chọn phương án phù hợp nhất với nhu cầu của mình.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/03-1.png', alt: 'Dimuonnoi' },
      { type: 'paragraph', text: 'DIMUONNOI còn hỗ trợ đặt vé, giao dịch trực tuyến, đặt tour & khách sạn và blog du lịch. Với dữ liệu đặt chỗ và vận chuyển được cập nhật theo thời gian thực, DIMUONNOI giúp quá trình lập kế hoạch du lịch của người dùng trở nên dễ dàng và ít tốn thời gian hơn bao giờ hết.' },
      { type: 'platforms', text: 'Web-based Application, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Vận tải, Du lịch' },
      { type: 'technologies', text: 'ReactJS, React Native, PHP, RESTApi, ElasticSearch...' },
      { type: 'workload', text: '32MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'DIMUONNOI is an online travel booking and comparison website providing users with a variety of transportation options, including buses, trains, and flights. Users can easily compare and select the most suitable option for their needs.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/03-1.png', alt: 'Dimuonnoi' },
      { type: 'paragraph', text: 'DIMUONNOI also supports online booking, ticketing, tour & hotel reservations, and travel blogs. With real-time updated booking and transportation data, DIMUONNOI makes users\' travel planning easier and faster than ever.' },
      { type: 'platforms', text: 'Web-based Application, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Transportation, Travel' },
      { type: 'technologies', text: 'ReactJS, React Native, PHP, RESTApi, ElasticSearch...' },
      { type: 'workload', text: '32MM' }
    ]
  },
  {
    id: 3,
    slug: "he-thong-quan-ly-khach-hang-crm",
    title: "Hệ thống quản lý khách hàng BE CRM",
    enTitle: "CRM Customer Management System",
    description: "Hệ thống quản lý thông tin khách hàng tập trung, cung cấp các tính năng quản lý thông tin khách hàng, chiến dịch marketing cũng như phân tích hành vi khách hàng",
    enDescription: "Centralized customer information management system providing features for managing customer info, marketing campaigns, and analyzing behavior.",
    image: `${import.meta.env.BASE_URL}products/product_03.jpg`,
    date: "2022-04-04",
    tags: ["crm", "erp", "customer", "management"],
    content: [
      { type: 'paragraph', text: 'Hệ thống quản lý thông tin khách hàng tập trung, cung cấp các tính năng quản lý thông tin khách hàng, chiến dịch marketing cũng như phân tích hành vi khách hàng' },
      { type: 'heading', text: 'CRM là gì?' },
      { type: 'paragraph', text: 'CRM là viết tắt của Customer Relationship Management - Quản lý quan hệ khách hàng. Ngày nay, khi nhắc đến CRM thì hầu như từ này đều mang ý nghĩa là phần mềm CRM - công cụ hoạt động như một kho lưu trữ duy nhất để kết hợp các hoạt động bán hàng, tiếp thị, hỗ trợ khách hàng của doanh nghiệp, giúp tối ưu hoá quy trình, chính sách và nhân lực của doanh nghiệp trong một nền tảng.' },
      { type: 'paragraph', text: 'CRM là phương pháp tiếp cận hiện đại, giúp doanh nghiệp cải thiện các mối quan hệ khách hàng hiện có và có được khách hàng mới nhanh hơn. Những lợi ích mà một hệ thống CRM mang lại không chỉ được thể hiện qua những con số thống kê mà còn trong việc xây dựng những giá trị vô hình cho doanh nghiệp.' },
      { type: 'heading', text: 'Tại sao các doanh nghiệp cần hệ thống CRM?' },
      { type: 'paragraph', text: 'Chúng ta đã trải qua thời kỳ của website và mobile application. Trong bối cảnh trên thế giới đã có quá nhiều ứng dụng web và các mạng xã hội thì sự xu hướng hiện nay là hướng tới xử lý lượng dữ liệu khổng lồ sinh ra từ các hệ thống online mỗi ngày. Đối với một doanh nghiệp thì hệ thống CRM chính là lời giải cho vấn đề đó. Hệ thống CRM giúp doanh nghiệp bao quát mọi khía cạnh của chu kỳ kinh doanh, gia tăng doanh số và lợi nhuận tiếp thị, đồng thời cắt giảm chi phí.' },
      { type: 'heading', text: 'Hệ thống CRM có thể giúp gì cho doanh nghiệp?' },
      { type: 'list', items: [
        'Phân tích và tối ưu dữ liệu khách hàng của doanh nghiệp',
        'Loại bỏ các hoạt động không hiệu quả trong quy trình',
        'Tăng doanh thu, cắt giảm chi phí không hiệu quả',
        'Lưu trữ thông tin chi tiết của khách hàng',
        'Nâng cao chất lượng dịch vụ và trải nghiệm của khách hàng',
        'Hỗ trợ hiệu quả cho các chiến dịch marketing',
        'Xây dựng hình ảnh chuyên nghiệp cho doanh nghiệp'
      ]},
      { type: 'heading', text: 'Tích hợp đa kênh, chuẩn hoá dữ liệu đầu vào' },
      { type: 'paragraph', text: 'Dữ liệu khách hàng luôn là tài nguyên quan trọng nhất đối với một doanh nghiệp. Tuy nhiên, việc dữ liệu khách hàng phân tán nhiều nơi, nhiều kênh, không nhất quán, bị trùng lắp, không cập nhật thường xuyên, thiếu bảo mật… luôn là vấn đề đau đầu với mọi doanh nghiệp.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/05-1.png', alt: 'CRM' },
      { type: 'heading', text: 'Hệ thống CRM của chúng tôi' },
      { type: 'paragraph', text: 'Hệ thống CRM được phát triển bằng công nghệ phân tích dữ liệu tiên tiến, có khả năng xây dựng hệ thống linh hoạt, phù hợp với các công ty, tổ chức thuộc nhiều ngành nghề. Có khả năng xử lý lượng lớn dữ liệu với cấu trúc phức tạp, hệ thống CRM của chúng tôi vẫn mang lại hiệu suất và độ chính xác tuyệt vời.' },
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'Quản lý' },
      { type: 'technologies', text: 'PHP, MySQL, VueJS, RESTApi' },
      { type: 'workload', text: '20MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'A centralized customer information management system that provides features for managing customer data, marketing campaigns, as well as analyzing customer behavior.' },
      { type: 'heading', text: 'What is CRM?' },
      { type: 'paragraph', text: 'CRM stands for Customer Relationship Management. Today, when mentioning CRM, it mostly refers to CRM software - a tool functioning as a single repository to combine sales, marketing, and customer support activities, helping optimize a business\'s processes, policies, and personnel on one platform.' },
      { type: 'paragraph', text: 'CRM is a modern approach that helps businesses improve existing customer relationships and acquire new customers faster. The benefits a CRM system brings are shown not only through statistics but also in building intangible assets for the enterprise.' },
      { type: 'heading', text: 'Why do businesses need a CRM system?' },
      { type: 'paragraph', text: 'We have gone through the era of websites and mobile applications. In the context of countless web apps and social networks worldwide, the current trend is to process massive amounts of data generated from online systems every day. For a business, a CRM system is the answer to this issue. A CRM system helps cover every aspect of the business cycle, increasing sales and marketing profits while cutting costs.' },
      { type: 'heading', text: 'How can a CRM system help businesses?' },
      { type: 'list', items: [
        'Analyze and optimize the business\'s customer data',
        'Eliminate inefficient activities in workflows',
        'Increase revenue, cut inefficient expenses',
        'Store detailed customer information',
        'Enhance service quality and customer experience',
        'Provide effective support for marketing campaigns',
        'Build a professional image for the enterprise'
      ]},
      { type: 'heading', text: 'Multi-channel integration, input data standardization' },
      { type: 'paragraph', text: 'Customer data is always the most important resource for a business. However, having data scattered across multiple places, channels, being inconsistent, duplicated, outdated, or lacking security... is always a headache for every enterprise.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/05-1.png', alt: 'CRM' },
      { type: 'heading', text: 'Our CRM System' },
      { type: 'paragraph', text: 'The CRM system was developed using advanced data analytics, capable of building a flexible system suitable for companies and organizations across multiple industries. Even with the capability to process large volumes of data with complex structures, our CRM system still yields excellent performance and accuracy.' },
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'Management' },
      { type: 'technologies', text: 'PHP, MySQL, VueJS, RESTApi' },
      { type: 'workload', text: '20MM' }
    ]
  },
  {
    id: 2,
    slug: "he-thong-khai-thac-nft",
    title: "Hệ thống khai thác NFT",
    enTitle: "NFT Mining System",
    description: "Hệ thống tạo NFT từ hình ảnh và sử dụng trên hệ sinh thái blockchain.",
    enDescription: "System for creating NFTs from images and utilizing them in the blockchain ecosystem.",
    image: `${import.meta.env.BASE_URL}products/product_02.jpg`,
    date: "2022-06-30",
    tags: ["nft", "blockchain"],
    content: [
      { type: 'paragraph', text: 'Hệ thống khai thác và đúc tài sản số NFT từ hình ảnh 2D cho khách hàng Nhật Bản, sử dụng hình ảnh 2D để tạo tài sản số độc nhất và sử dụng trên thị trường blockchain NFT.' },
      { type: 'paragraph', text: 'Hệ thống tự động tạo ra hình ảnh của các nhân vật nữ hai chiều - “Bishojyo”, mà Nhật Bản tự hào, bằng cách sử dụng công nghệ AI và công nghệ GAN tích hợp áp dụng học sâu làm cốt lõi.' },
      { type: 'paragraph', text: 'Hệ thống đúc tiền cho dự án 10.000 NFT này sử dụng ba công nghệ chính: service server API, service worker, service IPFS.' },
      { type: 'paragraph', text: 'Hơn nữa, hệ thống có thể giúp tự động tạo ra 6 hình ảnh ngẫu nhiên và người dùng có thể chọn và đúc ký tự họ muốn dưới dạng NFT.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/09-1.png', alt: 'NFT' },
      { type: 'platforms', text: 'Web-based Application, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Blockchain' },
      { type: 'technologies', text: 'ReactJS, NodeJS, Solidity' },
      { type: 'workload', text: '18MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'An NFT digital asset mining and minting system from 2D images for Japanese clients, using 2D images to create unique digital assets and operate on the NFT blockchain market.' },
      { type: 'paragraph', text: 'The system automatically generates images of two-dimensional female characters - "Bishojyo", which Japan is famous for, utilizing cutting-edge AI and integrated GAN technologies applying deep learning at its core.' },
      { type: 'paragraph', text: 'The minting system for this 10,000 NFT project utilizes three main technologies: service server API, service worker, service IPFS.' },
      { type: 'paragraph', text: 'Furthermore, the system can assist in automatically generating 6 random images, and users can select and mint their desired characters as NFTs.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/09-1.png', alt: 'NFT' },
      { type: 'platforms', text: 'Web-based Application, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Blockchain' },
      { type: 'technologies', text: 'ReactJS, NodeJS, Solidity' },
      { type: 'workload', text: '18MM' }
    ]
  },
  {
    id: 4,
    slug: "he-thong-thong-tin-dia-ly",
    title: "Hệ thống thông tin địa lý - GIS",
    enTitle: "Geographic Information System - GIS",
    description: "Hệ thống thông tin địa lý của chúng tôi đã được tích hợp trong nhiều lĩnh vực hoạt động hành chính và cung cấp giải pháp hiệu quả.",
    enDescription: "Our geographic information system has been integrated into various public administration fields and provides efficient solutions.",
    image: `${import.meta.env.BASE_URL}products/product_04.jpg`,
    date: "2021-07-31",
    tags: ["gis"],
    content: [
      { type: 'paragraph', text: 'Hệ thống thông tin địa lý - GIS - là một hệ thống sử dụng bản đồ và không gian để tạo, quản lý, phân tích và ánh xạ dữ liệu. Hệ thống GIS đã và đang được sử dụng để quản lý dữ liệu trong lĩnh vực địa chính, cơ sở hạ tầng, giao thông và hơn thế nữa.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/07-1.png', alt: 'GIS' },
      { type: 'paragraph', text: 'Hệ thống thông tin địa lý của chúng tôi đã được tích hợp trong nhiều lĩnh vực hoạt động hành chính công và đang mang lại những hiệu quả nhất định trong công tác quản lý công.' },
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'Hành chính công' },
      { type: 'technologies', text: 'AngularJS, .NET' },
      { type: 'workload', text: '18MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'A Geographic Information System - GIS - is a system that uses maps and spatial data to create, manage, analyze, and map information. The GIS system has been used to manage data in cadastre, infrastructure, transportation, and beyond.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/07-1.png', alt: 'GIS' },
      { type: 'paragraph', text: 'Our geographic information system has been integrated into numerous public administrative operations and has proven effective in public management.' },
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'Public Administration' },
      { type: 'technologies', text: 'AngularJS, .NET' },
      { type: 'workload', text: '18MM' }
    ]
  },
  {
    id: 5,
    slug: "kol-ao",
    title: "Trợ lý, KOL ảo",
    enTitle: "Virtual KOL, AI Assistant",
    description: "KOL ảo cung cấp giải pháp thay thế hiệu quả về mặt chi phí và rủi ro thấp cho việc thuê những KOL thực sự để đại diện cho thương hiệu.",
    enDescription: "Virtual KOLs provide a cost-effective and low-risk alternative to hiring real KOLs to represent the brand.",
    image: `${import.meta.env.BASE_URL}products/product_05.jpg`,
    date: "2023-07-31",
    tags: ["kol", "ai", "virtual", "influencer"],
    content: [
      { type: 'paragraph', text: 'Với sự phát triển của công nghệ hiện nay, việc ứng dụng AI để tạo và vận hành một KOL ảo đang đóng vai trò xu hướng cho tương lai. KOL ảo cung cấp giải pháp thay thế hiệu quả về mặt chi phí và rủi ro thấp cho việc thuê những KOL thực sự để đại diện cho thương hiệu.' },
      { type: 'paragraph', text: 'Các thương hiệu có thể sở hữu và tùy chỉnh những avatar ảo này, sử dụng chúng dựa trên nhu cầu và xu hướng hiện tại của họ.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/12-1.png', alt: 'KOL ảo' },
      { type: 'paragraph', text: 'Cách tiếp cận này mang lại sự linh hoạt, chi phí thấp hơn và sử dụng không giới hạn hình ảnh của avatar so với cách sắp xếp KOL truyền thống' },
      { type: 'platforms', text: 'Tích hợp' },
      { type: 'fields', text: 'AI, Machine Learning' },
      { type: 'technologies', text: 'Java, NestJS, NextJS, ReactJS, MongoDB, Solidity, Redis, Kafka' },
      { type: 'workload', text: '44MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'With the current advancement of technology, applying AI to create and operate a virtual KOL is a trending role for the future. Virtual KOLs provide a highly cost-effective and low-risk alternative to hiring real KOLs to represent the brand.' },
      { type: 'paragraph', text: 'Brands can own and completely customize these virtual avatars, utilizing them based on their current needs and trends.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/12-1.png', alt: 'Virtual KOL' },
      { type: 'paragraph', text: 'This approach offers flexibility, lower costs, and unrestricted use of the avatar\'s image compared to traditional KOL arrangements.' },
      { type: 'platforms', text: 'Integrated' },
      { type: 'fields', text: 'AI, Machine Learning' },
      { type: 'technologies', text: 'Java, NestJS, NextJS, ReactJS, MongoDB, Solidity, Redis, Kafka' },
      { type: 'workload', text: '44MM' }
    ]
  },
  {
    id: 6,
    slug: "mego-ung-dung-dat-xe-thong-minh",
    title: "MeGo - Giải pháp đặt xe thông minh của người Việt",
    enTitle: "MeGo - Smart Ride-Hailing Solution",
    description: "MeGo cung cấp dịch vụ đặt xe thông minh tại Việt Nam, nơi bạn có thể gọi xe khi ở bất cứ đâu và bất cứ khi nào. Tài xế MeGo sẽ luôn có mặt nhanh chóng và cùng bạn thực hiện chuyến hành trình.",
    enDescription: "MeGo provides smart ride-hailing services in Vietnam, where you can hail a ride anywhere and anytime. MeGo drivers will always arrive promptly.",
    image: `${import.meta.env.BASE_URL}products/product_06.jpg`,
    date: "2022-05-16",
    tags: ["mego", "dat-xe", "ung-dung-dat-xe"],
    content: [
      { type: 'paragraph', text: 'Bạn đã bao giờ gặp phải những vấn đề không thoải mái khi sử dụng các ứng dụng đặt xe chưa? Bạn đã từng gặp phải những trải nghiệm không mong muốn về dịch vụ khi di chuyển bằng taxi, xe ôm truyền thống? Bạn đã từng gặp tình huống phải trả số tiền nhiều hơn dự kiến do nhiều lý do khác nhau khi tới nơi chưa?' },
      { type: 'paragraph', text: 'Nếu đã từng gặp phải những trường hợp không mấy vui vẻ khi trải nghiệm việc di chuyển bằng các phương tiện công cộng, taxi hoặc xe ôm truyền thống hoặc thậm chí là các ứng dụng đặt xe, tại sao không thử tìm hiểu về MeGo nhỉ?' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/01-1.png', alt: 'MeGo' },
      { type: 'paragraph', text: 'Đối với MeGo, việc đảm bảo quyền lợi cho khách hàng sử dụng dịch vụ và các đối tác tài xế luôn là ưu tiên hàng đầu. Hiều được những khó khăn và trăn trở của cả hai phía, MeGo xây dựng rất nhiều những chính sách và phương hướng hoạt động nhằm đảm bảo quyền lợi và nâng cao trải nghiệm sử dụng hệ thống của cả tài xế và khách hàng.' },
      { type: 'paragraph', text: 'Mặc dù đã được tiếp cận và sử dụng các dịch vụ đặt xe trong thời gian gần đây, không ít khách hàng vẫn có rất nhiều điều không hài lòng với các dịch vụ, ứng dụng trên thị trường. Với nhiều chính sách và quy định khác nhau, có nhiều thời điểm khách hàng sẽ phải thanh toán số tiền khác xa với dự tính, đem lại trải nghiệm không mấy vui vẻ.' },
      { type: 'paragraph', text: 'Đối với các đối tác tài xế, tình huống cũng không mấy dễ chịu khi mức phí từ nền tảng dịch vụ cao và các quy định phức tạp. Điều này tương đương với việc thu nhập của tài xế khó được đảm bảo, tài xế không được hưởng toàn bộ công sức mình bỏ ra. Về lâu dài, chính sách này sẽ khiến tài xế không thực sự thoải mái khi phục vụ hành khách, có thể dẫn tới nhiều trường hợp thiếu chuyên nghiệp không mong muốn.' },
      { type: 'paragraph', text: 'MeGo đã nghiên cứu, tìm hiểu và đưa ra các chính sách phù hợp nhằm cải thiện những hạn chế kể trên, góp phần đảm bảo một nền tảng dịch vụ vận tải hành khách mang lại trải nghiệm tốt nhất cho cả khách hàng và các đối tác tài xế.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/01-2.png', alt: 'MeGo Features' },
      { type: 'platforms', text: 'Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Vận tải' },
      { type: 'technologies', text: 'Swift, Kotlin, Python, RESTApi, Firebase' },
      { type: 'workload', text: '12MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'Have you ever experienced discomfort when using ride-hailing apps? Have you ever had undesirable service experiences when traveling by traditional taxis or motorbike taxis? Have you ever faced a situation where you had to pay much more than expected due to various reasons upon arriving?' },
      { type: 'paragraph', text: 'If you have had unpleasant encounters while using public transport, taxis, or traditional ride-hailing apps, why not try discovering MeGo?' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/01-1.png', alt: 'MeGo' },
      { type: 'paragraph', text: 'For MeGo, ensuring the rights and benefits of customers and driver partners is always our top priority. Understanding the difficulties and concerns of both sides, MeGo has established numerous policies & operations to secure their rights and leverage system experience.' },
      { type: 'paragraph', text: 'Despite access to various ride-hailing services recently, many customers remain unsatisfied with the services over the market. With various policies and regulations, sometimes customers have to pay much more than the initial estimations.' },
      { type: 'paragraph', text: 'For driver partners, the situation is nowhere more pleasant when intermediate platform fees are high alongside complex policies. The long-term impact guarantees driver\'s income cannot be matched with their efforts.' },
      { type: 'paragraph', text: 'MeGo has thoroughly researched and devised appropriate policies to mitigate these limitations, contributing to an enhanced passenger transportation platform serving optimum experiences for both customers and driver partners.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/01-2.png', alt: 'MeGo Features' },
      { type: 'platforms', text: 'Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Transportation' },
      { type: 'technologies', text: 'Swift, Kotlin, Python, RESTApi, Firebase' },
      { type: 'workload', text: '12MM' }
    ]
  },
  {
    id: 7,
    slug: "mehome-quan-ly-toa-nha",
    title: "MeHome - Ứng dụng quản lý tòa nhà",
    enTitle: "MeHome - Building Management Application",
    description: "Ứng dụng quản lý tòa nhà MeHome đem đến giải pháp thông minh cho các chung cư, tòa nhà dân cư, cung cấp các tiện ích quản lý tiên tiến.",
    enDescription: "The MeHome building management application provides smart solutions for apartments and residential buildings, offering advanced management utilities.",
    image: `${import.meta.env.BASE_URL}products/product_07.jpg`,
    date: "2022-08-31",
    tags: ["quan-ly-chung-cu", "mehome"],
    content: [
      { type: 'paragraph', text: 'Hệ thống quản lý chung cư MeHome ra đời với mục tiêu hiện đại hóa, tiện nghi hóa các chung cư, tòa nhà dân cư. MeHome mang tới một giải pháp quản lý thông minh cho các BQL tòa nhà, cũng như xây dựng kênh thông tin, trao đổi tức thời giữa cư dân và BQL.' },
      { type: 'paragraph', text: 'Với danh mục tính năng đa dạng, đáp ứng đầy đủ các nhu cầu đời sống của cư dân cũng như quản lý vận hành của BQL, MeHome tự tự tin mang lại giải pháp đơn giản hóa cuộc sống cho mọi người.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/02-1.png', alt: 'MeHome Dashboard' },
      { type: 'paragraph', text: 'Ứng dụng di động dành cho cư dân được xây dụng với giao diện hiện đại, dễ tiếp cận và sử dụng, cho phép cư dân làm quen và trải nghiệm các tiện ích của hệ thống mà không gặp khó khăn gì.' },
      { type: 'paragraph', text: 'Hệ thống quản lý dành cho BQL được xây dựng khoa học, có sự liên kết thông tin, dữ liệu rõ ràng và dễ sử dụng, đảm bảo đáp ứng các nghiệp vụ quản lý cần thiết với các tòa nhà, chung cư.' },
      { type: 'paragraph', text: 'Hệ thống cũng đảm bảo đáp ứng các nhu cầu hàng ngày của cư dân trong tòa nhà, chung cư như:' },
      { type: 'list', items: [
        'Đăng ký khách thăm',
        'Đăng ký chuyển đồ',
        'Phản ánh, đóng góp ý kiến',
        'Thanh toán hóa đơn',
        'Đăng ký tiện ích',
        'Bảng tin khu dân cư, thông báo...'
      ]},
      { type: 'platforms', text: 'Web-based, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Tiện ích, Quản lý' },
      { type: 'technologies', text: 'Flutter, NodeJs, RESTApi, AWS' },
      { type: 'workload', text: '15MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'The MeHome apartment management system was launched with the goal to modernize and add convenience to living apartments and residential buildings. MeHome brings a smart management solution for building management boards, as well as establishing an immediate communication channel between residents and management.' },
      { type: 'paragraph', text: 'With a diverse category of features fulfilling all life constraints of residents as well as management operations, MeHome confidently delivers a simplified lifestyle.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/02-1.png', alt: 'MeHome Dashboard' },
      { type: 'paragraph', text: 'The mobile app targeted for residents is built with a modern UI, easily accessible and operational, enabling residents to experience system utility friction-lessly.' },
      { type: 'paragraph', text: 'The management system panel is built scientifically with distinct connections of data/info seamlessly, ensuring operational capacity for building boards.' },
      { type: 'paragraph', text: 'The system also assures to fulfill daily resident operations such as:' },
      { type: 'list', items: [
        'Registering visitors',
        'Registering moving properties',
        'Feedbacks & suggestions',
        'Bill payments',
        'Registering local utilities',
        'Residential bulletin boards, notices...'
      ]},
      { type: 'platforms', text: 'Web-based, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Utilities, Management' },
      { type: 'technologies', text: 'Flutter, NodeJs, RESTApi, AWS' },
      { type: 'workload', text: '15MM' }
    ]
  },
  {
    id: 8,
    slug: "nen-tang-chia-se-du-lieu",
    title: "Nền tảng tích hợp và chia sẻ dữ liệu cấp Tỉnh",
    enTitle: "Provincial Data Sharing Platform",
    description: "Nền tảng chia sẻ dữ liệu tích hợp, liên tỉnh, cho phép các cơ quan hành chính cấp tỉnh chia sẻ dữ liệu, thông tin, tài liệu trong quá trình hoạt động.",
    enDescription: "Integrated, inter-provincial data sharing platform allowing provincial administrative agencies to share data, info, and documents during operations.",
    image: `${import.meta.env.BASE_URL}products/product_08.jpg`,
    date: "2022-07-31",
    tags: ["lgsp", "chia-se-du-lieu"],
    content: [
      { type: 'paragraph', text: 'Nền tảng chia sẻ dữ liệu tích hợp, liên tỉnh, cho phép các cơ quan hành chính cấp tỉnh chia sẻ dữ liệu, thông tin, tài liệu trong quá trình hoạt động. LGSP đóng vai trò là nền tảng cho chính phủ điện tử, đóng vai trò là cơ sở dữ liệu chia sẻ cho các hoạt động liên quan đến chính phủ, cung cấp thông tin và dịch vụ cho nhiều bộ, ngành trong quá trình hoạt động.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/06-1.png', alt: 'LGSP' },
      { type: 'paragraph', text: 'Được phát triển theo yêu cầu từ khách hàng Dịch vụ công, LGSP cung cấp cầu nối tài liệu và thông tin xuyên suốt nhiều cơ quan, đơn vị và đóng góp cho hệ thống NGSP (nền tảng dịch vụ chính phủ quốc gia) trên toàn quốc.' },
      { type: 'paragraph', text: 'LGSP cung cấp nền tảng chuyển đổi số, tạo điều kiện thuận lợi cho các cơ quan, đơn vị khác trong quá trình chuyển đổi số, hỗ trợ quá trình chuyển đổi số của Việt Nam' },
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'Hành chính công' },
      { type: 'technologies', text: 'ESB, .NET' },
      { type: 'workload', text: '35MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'An integrated, inter-provincial data sharing platform allowing provincial administrative agencies to seamlessly share data, info, and documents during their workflow. LGSP stands as the platform basis for an e-government, acting as a shared database for government-related operations, delivering info & services to multiple boards.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/06-1.png', alt: 'LGSP' },
      { type: 'paragraph', text: 'Developed per requests from Public Services clients, LGSP acts as a data bridge distributing structural info universally through multiple units, supplementing the NGSP (national government services platform) country-wide.' },
      { type: 'paragraph', text: 'LGSP delivers a digital transformation springboard, facilitating favorable circumstances for agencies in their digital paths, assisting Vietnam\'s digital transformation process.' },
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'Public Administration' },
      { type: 'technologies', text: 'ESB, .NET' },
      { type: 'workload', text: '35MM' }
    ]
  },
  {
    id: 9,
    slug: "nen-tang-trao-doi-tap-trung",
    title: "Nền tảng trao đổi tập trung",
    enTitle: "Centralized Exchange Platform",
    description: "Sàn giao dịch tiền điện tử tập trung đầy đủ, hỗ trợ cả tiền điện tử và tiền pháp định.",
    enDescription: "A fully centralized cryptocurrency exchange supporting both cryptocurrency and fiat money.",
    image: `${import.meta.env.BASE_URL}products/product_09.jpg`,
    date: "2022-04-04",
    tags: ["exchange", "platform", "exchange-platform"],
    content: [
      { type: 'paragraph', text: 'Một sàn giao dịch tiền điện tử tập trung đầy đủ, hỗ trợ cả tiền điện tử và tiền pháp định.' },
      { type: 'paragraph', text: 'Các tính năng dành cho người dùng bao gồm các cặp giao dịch, tổng quan về lịch sử thị trường, gửi/rút tiền theo ý muốn, chương trình giới thiệu, tùy chọn bảo mật, v.v.' },
      { type: 'paragraph', text: 'Lợi ích và tính năng của nền tảng trao đổi là: Hiệu suất cao, Đa nền tảng, Tích hợp API, Chương trình KYC & Giới thiệu, Danh sách trắng IP & Địa chỉ, Nhiều loại đơn đặt hàng, Hỗ trợ đa ngôn ngữ, Xác thực HMAC, Xác thực 2 yếu tố, Máy chủ OAuth 2.0, Dữ liệu được mã hóa, Ngăn chặn Tấn công DDoS, bảo vệ XSS, CSRF & SSRF, Ví lạnh đa chữ ký' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/10-1.png', alt: 'Exchange Platform' },
      { type: 'platforms', text: 'Web-based, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Blockchain' },
      { type: 'technologies', text: 'PHP, NodeJS, VueJS, RESTApi, React Native' },
      { type: 'workload', text: '42MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'A completely centralized cryptocurrency exchange supporting both crypto and fiat monetary standards.' },
      { type: 'paragraph', text: 'User features involve interactive trading pairs, historical market panoramas, arbitrary deposits/withdrawals, referral mechanism, advanced security options, etc.' },
      { type: 'paragraph', text: 'The exchange platform benefits and features include: High performance, Cross-platform compatibility, API integrations, KYC & Referrals, IP & Address whitelists, Multiple trading orders, Multi-language accessibility, HMAC Auth, 2-Factor Authentication, OAuth 2.0 servers, End-to-end encrypted databases, Anti-DDoS layers, XSS/CSRF/SSRF prevention, Multi-signature Cold Wallets.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/10-1.png', alt: 'Exchange Platform' },
      { type: 'platforms', text: 'Web-based, Google Playstore, Apple Appstore' },
      { type: 'fields', text: 'Blockchain' },
      { type: 'technologies', text: 'PHP, NodeJS, VueJS, RESTApi, React Native' },
      { type: 'workload', text: '42MM' }
    ]
  },
  {
    id: 10,
    slug: "toa-soan-dien-tu",
    title: "Hệ thống tòa soạn điện tử",
    enTitle: "Electronic Newsroom System",
    description: "Hệ thống biên tập và quản lý tin bài phục vụ cho các trang báo điện tử, cung cấp đầy đủ quy trình biên tập, quản lý và xuất bản tin bài với nhiều định dạng tin khác nhau.",
    enDescription: "Editorial and news management system for online newspapers, providing a complete workflow for editing, managing, and publishing news.",
    image: `${import.meta.env.BASE_URL}products/product_10.jpg`,
    date: "2022-05-15",
    tags: ["tin-tuc", "toa-soan", "toa-soan-dien-tu"],
    content: [
      { type: 'paragraph', text: 'Hệ thống tòa soạn điện tử được tối ưu hóa các chức năng cần thiết và nâng cao, đáp ứng mọi nhu cầu quản lý và xuất bản báo điện tử.' },
      { type: 'paragraph', text: 'Với các tính năng có thể tùy chỉnh theo nhu cầu thực tế, hệ thống đáp ứng đầy đủ nhu cầu vận hành của một tòa soạn báo điện tử, từ quy mô nhỏ tới lớn.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/04-1.png', alt: 'Tòa soạn điện tử' },
      { type: 'paragraph', text: 'Tòa soạn điện tử được xây dựng với hệ thống quản trị nội dung chuyên nghiệp, đầy đủ các tính năng cần thiết cho một tòa soạn báo điện tử.' },
      { type: 'list', items: [
        'Biên tập và quản lý bài viết: Hệ thống biên tập và quản lý bài viết xây dựng chuyên nghiệp, tối ưu hóa các tính năng cần thiết, cho phép tạo và quản lý các bài viết một cách khoa học',
        'Tùy chỉnh giao diện người dùng: Cho phép tùy chỉnh sắp xếp giao diện người dùng, hiển thị các chuyên mục theo sắp xếp riêng bất kỳ lúc nào.',
        'Hỗ trợ đa phương tiện: Hỗ trợ các định dạng file và dạng tin bài đa phương tiện (bài viết, tin video, tin ảnh, tin audio, EMagzazine,...)'
      ]},
      { type: 'paragraph', text: 'Giao diện độc giả thân thiện, hiện đại, cung cấp thông tin đa dạng.' },
      { type: 'list', items: [
        'Tin bài nổi bật, mới cập nhật',
        'Tin bài theo dòng sự kiện, chuỗi tin bài',
        'Tin bài dạng video',
        'Tin bài dạng ảnh',
        'Tin bài dạng tạp chí',
        'Đọc tạp chí giấy online'
      ]},
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'Tin tức, Quản lý' },
      { type: 'technologies', text: 'PHP, MySQL, VueJS, RESTApi' },
      { type: 'workload', text: '15MM' }
    ],
    enContent: [
      { type: 'paragraph', text: 'The electronic newsroom system is optimized with both essential and advanced features, catering to everything relating to online newspaper management and publication operations.' },
      { type: 'paragraph', text: 'With features uniquely customizable per practical conditions, the system satisfies all operational criteria of an electronic news editorial, ranging closely from small to large scale layouts.' },
      { type: 'image', src: 'https://nvs-technology.com/posts/test-article/04-1.png', alt: 'Electronic Newsroom' },
      { type: 'paragraph', text: 'The electronic newsboard builds upon a professional CMS, adequately packed with essential traits for an online news journal.' },
      { type: 'list', items: [
        'Editorial article management: Build professional article processes, optimizing necessary traits, permitting generation and management scientifically.',
        'Extensive UI customization: Granting sorting capability of the presentation layer, showcasing categories freely on demand.',
        'Multi-media traits support: Covering diverse file formats spanning articles, video news, photo news, audio news, EMagazine,...'
      ]},
      { type: 'paragraph', text: 'The reader interface remains friendly, modern, exposing varied informative sections.' },
      { type: 'list', items: [
        'Trending & updated publications',
        'Publications tracing events / series',
        'Video publications',
        'Image publications',
        'Magazine-type publications',
        'Reviewing traditional papers online'
      ]},
      { type: 'platforms', text: 'Web-based' },
      { type: 'fields', text: 'News, Management' },
      { type: 'technologies', text: 'PHP, MySQL, VueJS, RESTApi' },
      { type: 'workload', text: '15MM' }
    ]
  }
];
