import { Category } from "src/app/models/category.model";

export const ExampleProduct = {
    _id: '60cb3549eb1a8f0025b6fd10',
    desciption:
      'Redmi Note 10 5G một trong những mẫu điện thoại thuộc series Redmi Note 10 của Xiaomi, không chỉ sở hữu hiệu năng mạnh mẽ đáp ứng tốt nhu cầu chơi game, đây còn là chiếc điện thoại có hỗ trợ mạng 5G cho tốc độ kết nối nhanh chóng.',
    sku: 'xiaomi123',
    images: [
      'https://cdn.tgdd.vn/Products/Images/42/235971/xiaomi-redmi-note-10-5g-xanh-bong-dem-1-600x600.jpg',
    ],
    videos: ['https://www.youtube.com/watch?v=f2TOHsvc6IQ'],
    price: 199,
    quantity: 37,
    is_active: true,
    category: [
      {
        id: '60c7242aeb1a8f0025b6fcef',
        _id: '60c7242aeb1a8f0025b6fcef',
        is_active: true,
        name: 'Phone',
        sub_category: [],
        createdAt: '2021-06-14T09:40:58.953Z',
        updatedAt: '2021-06-14T09:40:58.953Z',
        __v: 0,
      } as Category,
    ],
    promotion: null,
    specifications: {
      'Màn hình': ' IPS LCD6.5"Full HD+',
      'Hệ điều hành': ' Android 11',
      'Camera sau': ' Chính 48 MP & Phụ 2 MP, 2 MP',
      'Camera trước': ' 8 MP',
      Chip: ' MediaTek Dimensity 700',
      RAM: ' 8 GB',
      'Bộ nhớ trong': ' 128 GB',
      SIM: ' 2 Nano SIMHỗ trợ 5G',
      'Pin, Sạc': ' 5000 mAh18 W',
    },
    title: 'Xiaomi Redmi Note 10 5G 8GB',
    status: 'selling',
    createdAt: '2021-06-17T11:43:05.042Z',
    updatedAt: '2021-06-17T11:43:05.042Z',
    __v: 0,
    id: '60cb3549eb1a8f0025b6fd10',
  };