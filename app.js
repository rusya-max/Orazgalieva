const IMG = {
  lamp:"https://www.tekled.co.uk/cdn/shop/files/adjustable-armature-desk-lamp-130-03696-03.webp?v=1761668145&width=1445",
  books:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700&auto=format&fit=crop&q=80",
  chair:"https://images.unsplash.com/photo-1503602642458-232111445657?w=700&auto=format&fit=crop&q=80",
  jacket:"https://www.3sixteen.com/cdn/shop/products/20210520-3sixteen-Denim-Jacket-washed-1_1200x.jpg?v=1621545699",
  plant:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&auto=format&fit=crop&q=80",
  camera:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80",
  toys:"https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=700&auto=format&fit=crop&q=80",
  bag:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80",
  dishes:"https://digitalcontent.api.tesco.com/v2/media/marketplace/9d990b8f-9644-4f51-8588-b47e726ead2a/6b7ba4ec555742c8a20bb57f9a0786a4_1438775654.jpeg?h=960&w=960",
  shoes:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80"
};
const seedItems = [
 {id:1,name:"Настольная лампа",category:"Для дома",condition:"Хорошее",description:"Рабочая лампа в отличном состоянии. Подойдёт для рабочего стола или прикроватной тумбы.",place:"Центр Уральска",owner:"Мадина",image:IMG.lamp,date:Date.now()-100000},
 {id:2,name:"Книги для чтения",category:"Книги",condition:"Хорошее",description:"Несколько интересных книг. Буду рада, если они найдут нового читателя.",place:"мкр. Строитель",owner:"Алия",image:IMG.books,date:Date.now()-200000},
 {id:3,name:"Стул для комнаты",category:"Для дома",condition:"Есть следы использования",description:"Крепкий удобный стул. Есть небольшие следы использования, всё целое.",place:"район Депо",owner:"Данияр",image:IMG.chair,date:Date.now()-300000},
 {id:4,name:"Джинсовая куртка",category:"Одежда",condition:"Хорошее",description:"Джинсовая куртка из денима, размер M. Подойдёт для прохладной весенней погоды.",place:"Центр Уральска",owner:"Асем",image:IMG.jacket,date:Date.now()-400000},
 {id:5,name:"Комнатное растение",category:"Другое",condition:"Хорошее",description:"Неприхотливое растение в горшке. Ищу человека, который будет за ним ухаживать.",place:"мкр. Самал",owner:"Диана",image:IMG.plant,date:Date.now()-500000},
 {id:6,name:"Фотоаппарат",category:"Техника",condition:"Есть следы использования",description:"Старый цифровой фотоаппарат. Включается, подойдёт для начинающего.",place:"район вокзала",owner:"Арман",image:IMG.camera,date:Date.now()-600000},
 {id:7,name:"Детские игрушки",category:"Детское",condition:"Хорошее",description:"Набор игрушек в хорошем состоянии. Отдам всё вместе.",place:"мкр. Астана",owner:"Жанна",image:IMG.toys,date:Date.now()-700000},
 {id:8,name:"Женская сумка",category:"Одежда",condition:"Хорошее",description:"Аккуратная сумка, больше не пользуюсь. Без дефектов.",place:"Центр Уральска",owner:"Карина",image:IMG.bag,date:Date.now()-800000},
 {id:9,name:"Набор посуды",category:"Для дома",condition:"Как новое",description:"Небольшой набор посуды. Все предметы целые и чистые.",place:"мкр. Северо-Восток",owner:"Руслан",image:IMG.dishes,date:Date.now()-900000},
 {id:10,name:"Кроссовки",category:"Одежда",condition:"Хорошее",description:"Кроссовки, размер 38. Чистые, состояние хорошее.",place:"район Центрального рынка",owner:"Малика",image:IMG.shoes,date:Date.now()-1000000}
];
const regionPlaces = {
  'Абайская область': 'Семей',
  'Акмолинская область': 'Кокшетау',
  'Актюбинская область': 'Актобе',
  'Алматинская область': 'Конаев',
  'Атырауская область': 'Атырау',
  'Восточно-Казахстанская область': 'Усть-Каменогорск',
  'Жамбылская область': 'Тараз',
  'Жетысуская область': 'Талдыкорган',
  'Западно-Казахстанская область': 'Уральск',
  'Карагандинская область': 'Караганда',
  'Костанайская область': 'Костанай',
  'Кызылординская область': 'Кызылорда',
  'Мангистауская область': 'Актау',
  'Павлодарская область': 'Павлодар',
  'Северо-Казахстанская область': 'Петропавловск',
  'Туркестанская область': 'Туркестан',
  'Улытауская область': 'Жезказган',
  'Астана': 'Астана',
  'Алматы': 'Алматы',
  'Шымкент': 'Шымкент'
};
// У каждого региона свой набор демонстрационных вещей: названия и описание не повторяются.
const regionalListings = {
  'Абайская область': ['Школьные энциклопедии','Керамическая ваза','Зимний шарф','Компьютерная клавиатура','Пазлы на 500 деталей','Кастрюля с крышкой','Спортивная сумка','Детские ботинки','Настольный органайзер','Альбом для рисования'],
  'Акмолинская область': ['Учебники по математике','Небольшой торшер','Женский кардиган','Беспроводная мышь','Мягкий медведь','Чайный сервиз','Рюкзак для прогулок','Кеды 37 размера','Коробка для хранения','Набор цветных карандашей'],
  'Актюбинская область': ['Книги о путешествиях','Настенные часы','Демисезонная куртка','Портативная колонка','Детский самосвал','Стеклянные салатницы','Кошелёк','Кроссовки 40 размера','Плед для дивана','Настольная игра'],
  'Алматинская область': ['Романы в мягкой обложке','Кофейный столик','Джинсовая рубашка','Проводная гарнитура','Набор кубиков','Форма для выпечки','Шоппер из ткани','Сандалии 38 размера','Зеркало в рамке','Скетчбук'],
  'Атырауская область': ['Детские сказки','Настольный вентилятор','Женская жилетка','Флеш-накопитель','Игрушечный поезд','Набор кружек','Дорожная косметичка','Туфли 39 размера','Корзина для белья','Набор наклеек'],
  'Восточно-Казахстанская область': ['Сборник рассказов','Книжная полка','Тёплый свитер','Компьютерная веб-камера','Плюшевая игрушка','Столовый набор','Мужская сумка через плечо','Ботинки 42 размера','Настольная лампа с абажуром','Конструктор для детей'],
  'Жамбылская область': ['Книги по истории','Подушка декоративная','Лёгкое пальто','Зарядное устройство','Детский набор доктора','Фарфоровые тарелки','Поясная сумка','Балетки 36 размера','Органайзер для мелочей','Набор фломастеров'],
  'Жетысуская область': ['Словари и справочники','Складной стул','Спортивная кофта','Микрофон для компьютера','Игрушечная машинка','Стеклянный кувшин','Пляжная сумка','Кроссовки 39 размера','Полка для обуви','Мозаика для детей'],
  'Западно-Казахстанская область': ['Детские книги','Кожаная куртка','Набор кухонных полотенец','Старый фотоаппарат','Развивающий конструктор','Набор ваз','Женская сумка','Кроссовки 38 размера','Стул для письменного стола','Настольная игра для семьи'],
  'Карагандинская область': ['Атлас мира','Компактная тумбочка','Рубашка в клетку','Наушники с микрофоном','Набор фигурок животных','Керамические пиалы','Рюкзак школьный','Зимние сапоги 37 размера','Коробка для игрушек','Папка для документов'],
  'Костанайская область': ['Книги по психологии','Полка для ванной','Худи свободного кроя','Компьютерная мышь','Детский трактор','Набор столовых приборов','Сумка для ноутбука','Кроссовки 41 размера','Покрывало на кровать','Набор для творчества'],
  'Кызылординская область': ['Сказки на казахском языке','Ночник для спальни','Летнее платье','Пауэрбанк','Мягкие кубики','Набор контейнеров','Клатч','Детские сандалии','Корзина для хранения','Альбом с наклейками'],
  'Мангистауская область': ['Книги о природе','Складной журнальный столик','Ветровка','Настольный калькулятор','Набор игрушечной посуды','Керамическая миска','Дорожный рюкзак','Мокасины 40 размера','Пляжное полотенце','Набор пазлов'],
  'Павлодарская область': ['Учебные пособия','Вешалка напольная','Кардиган на пуговицах','Компьютерная камера','Детский гараж для машинок','Набор бокалов','Сумка для спорта','Ботинки 39 размера','Короб для хранения','Набор бумаги для творчества'],
  'Северо-Казахстанская область': ['Классическая литература','Настольное зеркало','Тёплая шапка','USB-колонки','Мягкий зайчик','Кастрюля для супа','Портфель','Кеды 40 размера','Плед в клетку','Детское домино'],
  'Туркестанская область': ['Книги для дошкольников','Декоративная полка','Рубашка женская','Клавиатура','Набор игрушечных животных','Чайник заварочный','Сумка-шоппер','Туфли 38 размера','Коврик прикроватный','Набор пластилина'],
  'Улытауская область': ['Познавательные журналы','Табурет деревянный','Флисовая кофта','Проводные наушники','Детский автобус','Набор блюдец','Кошелёк на молнии','Кроссовки 42 размера','Настенный органайзер','Пазлы с пейзажем'],
  'Астана': ['Книги для подготовки к экзаменам','Настольный светильник','Деловой жакет','Подставка для ноутбука','Набор LEGO-совместимых деталей','Набор тарелок','Городской рюкзак','Кроссовки 37 размера','Офисный стул','Планер на год'],
  'Алматы': ['Современная проза','Кофейная пара','Джинсовая куртка','Bluetooth-наушники','Детский набор железной дороги','Форма для кексов','Сумка через плечо','Кеды 38 размера','Зеркало настольное','Набор для скрапбукинга'],
  'Шымкент': ['Книги о саморазвитии','Кашпо для интерьера','Лёгкая ветровка','Портативная клавиатура','Детский набор инструментов','Набор стеклянных банок','Сумка для покупок','Сандалии 40 размера','Корзина для игрушек','Набор гуаши']
};
// Оставляем только несколько уже существовавших объявлений в каждом регионе.
// Индексы относятся к исходному regionalListings: новые объявления не создаются.
const regionalKeepIndexes = {
  'Абайская область': [0, 1],
  'Акмолинская область': [0, 7],
  'Актюбинская область': [0, 7],
  'Алматинская область': [0, 6],
  'Атырауская область': [0, 1],
  'Восточно-Казахстанская область': [0, 8],
  'Жамбылская область': [0, 5],
  'Жетысуская область': [0, 1],
  'Западно-Казахстанская область': [0, 1, 3],
  'Карагандинская область': [0, 5],
  'Костанайская область': [0, 7],
  'Кызылординская область': [0, 7],
  'Мангистауская область': [0, 5],
  'Павлодарская область': [0, 5],
  'Северо-Казахстанская область': [0, 5],
  'Туркестанская область': [0, 6],
  'Улытауская область': [0, 7],
  'Астана': [0, 8],
  'Алматы': [0, 2],
  'Шымкент': [0, 7]
};
function descriptionForListing(name) {
  const key = photoKeyForName(name);
  const details = {
    books: 'Книги для чтения или учёбы. Можно забрать весь набор.',
    keyboard: 'Компьютерная клавиатура для подключения к компьютеру.',
    tech: 'Компьютерный аксессуар или техника. Совместимость и комплектность можно уточнить у владельца.',
    tote: 'Тканевая сумка-шоппер для покупок и повседневных вещей.',
    fan: 'Настольный вентилятор для обдува рабочего места.',
    lamp: 'Настольная лампа для освещения рабочего стола.',
    camera: 'Фотоаппарат для съёмки фотографий. Работоспособность можно уточнить у владельца.',
    sneakers: 'Кроссовки для повседневной носки.',
    shoes: 'Пара обуви для повседневной носки.',
    sandals: 'Сандалии для тёплой погоды.',
    chair: 'Стул для комнаты или рабочего стола.',
    leatherJacket: 'Кожаная куртка. Это именно кожаная модель, не джинсовая.',
    denimJacket: 'Джинсовая куртка из денима. Это именно джинсовая модель, не кожаная.',
    mirror: 'Зеркало для дома.',
    vase: 'Декоративная керамическая ваза.',
    dishes: 'Набор посуды для кухни и сервировки.'
  };
  return `Отдам бесплатно: ${name}. ${details[key] || 'Подробности о состоянии и комплектности можно уточнить у владельца.'}`;
}
const regionalSeedItems = Object.entries(regionPlaces).flatMap(([region, place], ri) =>
  regionalKeepIndexes[region].map(ti => {
    const name = regionalListings[region][ti];
    const category = inferCategory(name);
    const condition = 'Хорошее';
    return {
      id: 1000 + ri * 10 + ti, name, category, condition,
      description: descriptionForListing(name),
      place: place + ', район центра',
      owner: ['Алия','Дамир','Мадина','Аружан','Ерлан','Диана','Нуржан','Айдана','Руслан','Меруерт'][(ri + ti) % 10],
      image: '', date: Date.now() - (ri * 10 + ti + 1) * 3600000, region, demo: true
    };
  })
);
// Подбираем демонстрационное фото по смыслу объявления, а не по одной общей картинке категории.
// Индивидуальные фотографии для объявлений, которые ранее получали неподходящие или повторяющиеся изображения.
// Разные lock-значения запрашивают отдельные фотографии для каждого конкретного объявления.
const exactListingPhotos = {
  'Детские игрушки': `https://mpr-shop.ru/upload/medialibrary/013/nb1j40gmhbeup2xytnooh8tt3sym1uqh.jpg`,
  'Набор посуды': `https://vprestige.kz/upload/iblock/06b/ppmd9gunim2m9k78w92136pipkqksd0z/42_568_7_.jpg`,
  'Школьные энциклопедии': `https://ir.ozone.ru/s3/multimedia-d/c1000/6170195377.jpg`,
  'Учебники по математике': `https://s.f.kz/prod/3514/3513619_1000.jpg`,
  'Детские сказки': `https://storage.yandexcloud.net/galamart/images/eab101ec-9a0c-11f0-ba45-0050568fff95/1.webp`,
  'Сборник рассказов': `https://kniga.lv/_img/gallery/221/1/37/1737735400/w1280_h1785_cover_q70.jpg`,
  'Настольная лампа с абажуром': `https://cdn.minimir.ru/images/catalog/nastolnyy-svetilnik-s-tkanevym-abazhurom-15150-chicago-a059864-0001.jpg`,
  'Книги по истории': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vLJWjPiPZ0hl_-gT6-6fy7rwbJ73bUVcM_2JkI2a4A&s=10`,
  'Словари и справочники': `https://avatars.mds.yandex.net/get-mpic/20331564/2a0000019f8e30dc510027e96d2ee31508f7/orig`,
  'Детские книги': `https://teatrtogo.ru/wp-content/uploads/2022/04/167026-796x1024.jpg`,
  'Атлас мира': `https://ir.ozone.ru/s3/multimedia-v/6151149991.jpg`,
  'Книги по психологии': `https://cbs-uu.ru/wp-content/uploads/2020/11/yz4.jpg`,
  'Керамические пиалы': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkiEni0elNiEvoHBEJ8Aij8_31fwE1ElPPIyKdmtKlA&s=10`,
  'Сказки на казахском языке': `https://s.f.kz/prod/3855/3854182_1000.jpg?v=891914`,
  'Детские сандалии': `https://img.joomcdn.net/6486acec73ecb1dbb9583665df1013ce1b9af24f_original.jpeg`,
  'Книги о природе': `https://s.f.kz/prod/2322/2321013_1000.jpg`,
  'Учебные пособия': `https://img.fix-price.com/insecure/rs:fit:800:800/plain/pim/images/_default_upload_bucket/4000276_anons_1080x1350.jpg`,
  'Классическая литература': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8Njffe_4NGw-SI6YVz1odjQi6sVKnWW19Gz2yid-lg&s=10`,
  'Набор бокалов': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1s1BNaAmMmsMPaDKM_fdxZa6XrcguwyK0XjaphEMjA&s=10`,
  'Керамическая миска': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5S_cwuatIRCs4jYuasx2xdoQimZtrd55YYnymFGSBA&s=10`,
  'Сандалии 40 размера': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZwS3o2cvAsbUR6RoiSIQVWQ10RAlpWHz0jjpnp7yEQ&s`,
  'Современная проза': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGBM0GzmyV6oAdrUw4EKRAsNTS1dlnqVDtenjYAWI1g&s=10`,
  'Офисный стул': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7YJHjyhJkqICh8N0EJWTEhJzwXH305FgCYnx1qR-ig&s=10`,
  'Книги о саморазвитии': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cFFxH9JGHuSDmBdqwKw8IKHPM3naH192RrYOgTL3Kw&s=10`,
  'Книги для подготовки к экзаменам': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9McI89SnrfdCY1zpP3tPdc3ho4eyW3g6JDLVFkCoJg&s=10`,
  'Сумка-шоппер': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGa6I_yjk_e_X0gcEZ6jAwY5xxLqQNm8_HfjWfM1lXg&s=10`,
  'Кеды 37 размера': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HMjFLhTLjuCzEzfGEkyICySOPitIricbWRQjizy2aw&s`, 
  'Кроссовки 40 размера': `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_PBok8HnqHuh3-nM1hec_pwBRJqp-jhrRF6arxcHIA&s`, 
};
const photoPools = {
  books: [
    'photo-1507842217343-583bb7270b66','photo-1519682337058-a94d519337bc','photo-1544947950-fa07a98d237f',
    'photo-1512820790803-83ca734da794','photo-1497633762265-9d179a990aa6'
  ],
  decor: [
    'photo-1578500494198-246f612d3b3d','photo-1578749556568-bc2c40e68b61','photo-1577083552431-6e5fd01aa342',
    'photo-1490312278390-ab64016e0aa9','photo-1610701596007-11502861dcfa'
  ],
  clothing: [
    'photo-1551028719-00167b16eac5','photo-1548126032-079a0fb0099d','photo-1591047139829-d91aecb6caea',
    'photo-1548624149-f6f3e7c6d7b1','photo-1434389677669-e08b4cac3105'
  ],
  tech: [
    'photo-1517336714731-489689fd1ca8','photo-1518770660439-4636190af475','photo-1587829741301-dc798b83add3',
    'photo-1505740420928-5e560c06d30e','photo-1590658268037-6bf12165a8df'
  ],
  toys: [
    'photo-1596461404969-9ae70f2830c1','photo-1566576912321-d58ddd7a6088','photo-1599623560574-39d485900c95',
    'photo-1560961911-ba7ef651a56c','photo-1587654780291-39c9404d746b'
  ],
  kitchen: [
    'photo-1603199506016-b9a594b593c0','photo-1576021182211-9d3a5f7f3f1a',
    'photo-1495546968767-f0573cca821e'
  ],
  bags: [
    'photo-1548036328-c9fa89d128fa','photo-1553062407-98eeb64c6a62','photo-1584917865442-de89df76afd3',
    'photo-1590874103328-eac38a683ce7'
  ],
  shoes: [
    'photo-1542291026-7eec264c27ff','photo-1543163521-1bf539c55dd2','photo-1460353581641-37baddab0fa2',
    'photo-1600185365483-26d7a4cc7519'
  ],
  furniture: [
    'photo-1503602642458-232111445657','photo-1505693416388-ac5ce068fe85','photo-1555041469-a586c61ea9bc',
    'photo-1499933374294-4584851497cc','photo-1538688525198-9b88f6f53126'
  ],
  stationery: [
    'photo-1455390582262-044cdead277a','photo-1517842645767-c639042777db','photo-1453738773917-9c3eff1db985',
    'photo-1544816155-12df9643f363'
  ],
  plant: [
    'photo-1485955900006-10f4d324d411','photo-1501004318641-b39e6451bec6','photo-1497250681960-ef046c08a56e'
  ]
};
const photoUrl = id => /^https?:\/\//.test(id) ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=82`;
const productPhotos = {
  lamp: ['photo-1661956602926-db6b25f75947','photo-1507473885765-e6ed057f782c','photo-1507473885765-e6ed057f782c'],
  chair: ['photo-1503602642458-232111445657','photo-1499933374294-4584851497cc','photo-1538688525198-9b88f6f53126'],
  denimJacket: ['https://www.3sixteen.com/cdn/shop/products/20210520-3sixteen-Denim-Jacket-washed-1_1200x.jpg?v=1621545699'],
  leatherJacket: ['https://www.brecklenmeyer.com/cdn/shop/files/20251222_2346_Stylish_Black_Jacket_Modeling_remix_01kd4rdqf3ej5s348gyxce4psg_1800x1800.png?v=1766465503'],
  jacket: ['photo-1551028719-00167b16eac5'],
  camera: ['photo-1711289469532-4ec73eda0c31','photo-1542992804-34f8f4cb193b','photo-1516035069371-29a1b244cc32'],
  dishes: ['photo-1541508168132-0b1d81249c25','photo-1603199506016-b9a594b593c0','photo-1576021182211-9d3a5f7f3f1a'],
  scarf: ['photo-1434389677669-e08b4cac3105','photo-1548126032-079a0fb0099d','photo-1591047139829-d91aecb6caea'],
  sneakers: ['photo-1542291026-7eec264c27ff','photo-1460353581641-37baddab0fa2','photo-1600185365483-26d7a4cc7519'],
  vase: ['photo-1580485978320-cc2bc7dcf569','photo-1607200711767-5f91ad860ae0','photo-1578749556568-bc2c40e68b61'],
  pots: ['photo-1541508168132-0b1d81249c25','photo-1495546968767-f0573cca821e','photo-1603199506016-b9a594b593c0'],
  puzzle: ['photo-1684773585761-fde68b4ece42','photo-1735380675901-4867fad9d670','photo-1566576912321-d58ddd7a6088'],
  keyboard: ['photo-1722681983885-5c06e670d067','photo-1646979389305-2a77ef89902f','photo-1587829741301-dc798b83add3'],
  organizer: ['photo-1777917845221-f92884c1b61b','photo-1455390582262-044cdead277a','photo-1544816155-12df9643f363'],
  mirror: ['photo-1490312278390-ab64016e0aa9','photo-1578500494198-246f612d3b3d','photo-1505693416388-ac5ce068fe85'],
  fan: ['photo-1568392816241-44d223d4d490','photo-1568392816241-44d223d4d490','photo-1568392816241-44d223d4d490'],
  sandals: ['photo-1642484865841-bb40baba02b6','photo-1543163521-1bf539c55dd2'],
  tote: ['photo-1558101846-3d992cf91697','photo-1553062407-98eeb64c6a62','photo-1590874103328-eac38a683ce7'],
  flash: ['photo-1493946947703-a0e68b050bee','photo-1518770660439-4636190af475','photo-1518770660439-4636190af475'],
  books: photoPools.books,
  plant: photoPools.plant,
  toys: photoPools.toys,
  bags: photoPools.bags,
  furniture: photoPools.furniture,
  stationery: photoPools.stationery,
  clothing: photoPools.clothing,
  tech: photoPools.tech,
  kitchen: photoPools.kitchen,
  decor: photoPools.decor
};
function photoKeyForName(name='') {
  const n=String(name).toLowerCase().replaceAll('ё','е').replaceAll('ё','е');
  // Сначала распознаём конкретные предметы, чтобы они не попадали в общую категорию.
  if (/настольн.*ламп|ламп|светильник|торшер|ночник/.test(n)) return 'lamp';
  if (/стул|табурет|кресл|сидень/.test(n)) return 'chair';
  if (/джинсов.*куртк/.test(n)) return 'denimJacket';
  if (/кожан.*куртк/.test(n)) return 'leatherJacket';
  if (/куртк/.test(n)) return 'clothing';
  if (/фотоапп|фотокамер|цифров.*камер|\bкамера\b/.test(n)) return 'camera';
  if (/настольн.*вентилятор|вентилятор/.test(n)) return 'fan';
  if (/флеш|usb[- ]?накоп|накопител/.test(n)) return 'flash';
  if (/клавиатур|\bклава\b/.test(n)) return 'keyboard';
  if (/пазл/.test(n)) return 'puzzle';
  if (/настольн.*игр|игра для семьи|фигур|трактор|автобус|железн.*дорог|поезд|lego|лего|детский.*набор/.test(n)) return 'toys';
  if (/зеркал/.test(n)) return 'mirror';
  if (/органайзер/.test(n)) return 'organizer';
  if (/ваза|набор ваз/.test(n)) return 'vase';
  if (/шарф/.test(n)) return 'scarf';
  if (/сандал/.test(n)) return 'sandals';
  if (/кроссов|кед|сникер/.test(n)) return 'sneakers';
  if (/шопп|шопер|шопен|сумка для покупок/.test(n)) return 'tote';
  if (/кастр|кострюл|сковород/.test(n)) return 'pots';
  if (/посуда|тарел|круж|сервиз|салатниц|кувшин|чайник|пиал|столовы.*прибор|столовый набор|бокал|блюдец|контейнер|банок|форма для выпеч|форма для кекс|кухонн.*полотенц|кофейн.*пар|керамическ.*мис/.test(n)) return 'dishes';
  if (/книг|энциклопед|роман|сказк|учебник|атлас|словар|журнал|литератур|справочник|пособи|сборник рассказ|современн.*проз/.test(n)) return 'books';
  if (/растени|цвет|кашпо/.test(n)) return 'plant';
  if (/игруш|медвед|конструктор|кубик|самосвал|поезд|машинк|гараж|домино|пластилин|фломастер|карандаш|гуаш|мозаик|доктора|инструмент|зайчик|зайц/.test(n)) return 'toys';
  if (/рюкзак|портфель|кошел|клатч|косметичк|поясн|сумк|корзина для белья/.test(n)) return 'bags';
  if (/ботин|туфл|балетк|сапог|мокасин|обув/.test(n)) return 'shoes';
  if (/альбом|скетчбук|планер|папк|бумаг|наклеек|фломастер|гуаш|карандаш|блокнот|творчеств|скрапбукинг/.test(n)) return 'stationery';
  if (/мыш|наушник|колонк|пауэрбанк|заряд|микрофон|калькулятор|веб-кам|гарнитур|подставк.*ноутбук|компьютерн.*камера/.test(n)) return 'tech';
  if (/свитер|кардиган|пальто|кофт|плать|рубаш|жакет|ветровк|жилет|худи|шапк|одежд|джинсов/.test(n)) return 'clothing';
  if (/полк|столик|тумбоч|вешал|короб|корзин|плед|покрывал|подушк|коврик|мебел/.test(n)) return 'furniture';
  if (/декор|подсвеч|рамк|настенные часы|часы/.test(n)) return 'decor';
  return 'decor';
}
function photoPoolForName(name='') { return productPhotos[photoKeyForName(name)] || productPhotos.decor; }
function handleImageError(img, category, name) {
  if (exactListingPhotos[name]) {
    img.onerror=null;
    img.classList.add('photo-unavailable');
    img.removeAttribute('src');
    return;
  }
  const pool=photoPoolForName(name), attempt=Number(img.dataset.photoAttempt||0)+1;
  img.dataset.photoAttempt=String(attempt);
  if(attempt<pool.length){img.src=photoUrl(pool[attempt % pool.length]);}
  else{img.onerror=null;img.classList.add('photo-unavailable');img.removeAttribute('src');}
}
function inferCategory(name='') {
  const key=photoKeyForName(name);
  if(key==='books') return 'Книги';
  if(['jacket','denimJacket','leatherJacket','scarf','sneakers','sandals','tote','clothing','bags','shoes'].includes(key)) return 'Одежда';
  if(['camera','keyboard','fan','flash','tech'].includes(key)) return 'Техника';
  if(['puzzle','toys'].includes(key)) return 'Детское';
  if(key==='plant') return 'Другое';
  return 'Для дома';
}
function photoForCategory(category) {
  const map={'Книги':IMG.books,'Одежда':IMG.jacket,'Для дома':IMG.chair,'Техника':IMG.camera,'Детское':IMG.toys,'Другое':IMG.plant};
  return map[category]||IMG.plant;
}
function matchingPhoto(item,index=0) {
  // Для перечисленных объявлений всегда используем отдельную тематическую фотографию.
  if (exactListingPhotos[item.name]) return exactListingPhotos[item.name];
  const pool=photoPoolForName(item.name);
  // Детерминированный выбор внутри пула конкретного предмета: одинаковые категории
  // не получают одну и ту же первую фотографию подряд.
  const seed = Number(item.id) || index;
  return photoUrl(pool[Math.abs(seed + index) % pool.length]);
}
seedItems.forEach((item,index)=>{item.image=matchingPhoto(item,index);});
regionalSeedItems.forEach((item,index)=>{item.category=inferCategory(item.name);item.image=matchingPhoto(item,index);});

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const load = (key, fallback) => {try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}};
let items = load("db_items", [...seedItems, ...regionalSeedItems]);
// Refresh bundled regional demo listings on every load; keep user-created listings untouched.
// Each region already has ten sample listings (at least two as requested).
items = items.filter(item => !item.demo && !(Number(item.id) >= 1 && Number(item.id) <= 10 && !item.userEmail)).concat(seedItems, regionalSeedItems);
// Older versions did not store a region on the original sample cards.
items = items.map(item => item.region ? item : ({...item, region: "Западно-Казахстанская область"}));
// Keep the sample listing photos accurate even if an older version was opened before.
items = items.map((item, index) => {
  if (item.demo || [1,2,3,4,5,6,7,8,9,10].includes(item.id) && !item.userEmail) return {...item, image: matchingPhoto(item, index)};
  return item;
});
localStorage.setItem("db_items", JSON.stringify(items));
let user = load("db_user", null);
let favorites = load("db_favorites", []);
let requests = load("db_requests", []);
let selectedImage = IMG.lamp;
let customItemImage = "";
let activeCategory = "Все";
let selectedRegion = load("db_region", "Западно-Казахстанская область");
let currentPage = "home";
const save = () => {localStorage.setItem("db_items",JSON.stringify(items));localStorage.setItem("db_user",JSON.stringify(user));localStorage.setItem("db_favorites",JSON.stringify(favorites));localStorage.setItem("db_requests",JSON.stringify(requests));};
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2600)}
function initials(name){return (name||"Г").trim().charAt(0).toUpperCase()}
function ensureUser(){if(!user){$("#authModal").classList.remove("hidden");return false}return true}
function renderCard(item){const saved=favorites.includes(item.id);const ownerPhoto=item.userEmail===user?.email?user.photo:item.ownerPhoto;return `<article class="item-card" data-id="${item.id}"><div class="item-photo"><img src="${item.image || fallbackImage(item.category,item.name)}" alt="${esc(item.name)}" loading="lazy" onerror="handleImageError(this, &quot;${esc(item.category)}&quot;, &quot;${esc(item.name)}&quot;)"><span class="free-tag">БЕСПЛАТНО</span><button class="heart-btn ${saved?"saved":""}" data-fav="${item.id}" aria-label="В избранное">${saved?"♥":"♡"}</button></div><div class="item-body"><span class="item-category">${esc(item.category)}</span><h3>${esc(item.name)}</h3><p class="item-description">${esc(item.description)}</p><div class="item-meta"><span class="item-owner">${ownerPhoto?`<img class="mini-avatar photo-avatar" src="${ownerPhoto}" alt="">`:`<span class="mini-avatar">${initials(item.owner)}</span>`}${esc(item.owner)}</span><span>⌖ ${esc(item.place)}</span></div></div></article>`}
function renderHome(){let q=$("#searchInput").value.trim().toLowerCase();let list=items.filter(x=>(selectedRegion==="Все регионы"||(x.region||"Западно-Казахстанская область")===selectedRegion)&&(activeCategory==="Все"||x.category===activeCategory)&&(!q||(x.name+" "+x.description+" "+x.category+" "+x.place).toLowerCase().includes(q)));if($("#sortSelect").value==="old")list.reverse();$("#itemGrid").innerHTML=list.map(renderCard).join("");$("#resultCount").textContent=`Найдено вещей: ${list.length}`;$("#emptyState").classList.toggle("hidden",list.length>0);bindCards()}
function renderFavorites(){let list=items.filter(x=>favorites.includes(x.id));$("#favoritesGrid").innerHTML=list.map(renderCard).join("");$("#favoritesEmpty").classList.toggle("hidden",list.length>0);bindCards()}
function renderRequests(){let list=requests.map(r=>({...r,item:items.find(x=>x.id===r.itemId)})).filter(r=>r.item);$("#requestList").innerHTML=list.map(r=>`<div class="request-row"><img src="${r.item.image || fallbackImage(r.item.category,r.item.name)}" alt="" onerror="handleImageError(this, &quot;${esc(r.item.category)}&quot;, &quot;${esc(r.item.name)}&quot;)"><div><h3>${esc(r.item.name)}</h3><p>Владелец: ${esc(r.item.owner)} · ${esc(r.item.place)}</p><p>Заявка отправлена: ${new Date(r.date).toLocaleDateString("ru-RU")}</p></div><span class="status ${r.status==="Подтверждена"?"approved":""}">${r.status}</span></div>`).join("");$("#requestsEmpty").classList.toggle("hidden",list.length>0)}
function renderMyItems(){let list=items.filter(x=>x.userEmail===user?.email);$("#myItemsGrid").innerHTML=list.map(x=>renderCard(x)+`<div class="my-delete" data-delete="${x.id}">Удалить объявление</div>`).join("");$("#myItemsEmpty").classList.toggle("hidden",list.length>0);bindCards();$$("[data-delete]").forEach(b=>b.onclick=()=>{items=items.filter(x=>x.id!==Number(b.dataset.delete));save();renderAll();toast("Объявление удалено")})}
function renderProfile(){if(!user)return;$("#sideName").textContent=user.name;$("#headerName").textContent=user.name;$("#profileDisplayName").textContent=user.name;$("#profileEmail").textContent=user.email;const profileAvatar=$("#profileAvatarView");profileAvatar.innerHTML=user.photo?`<img src="${user.photo}" alt="Фото профиля">`:initials(user.name);$$(".avatar").forEach(a=>a.innerHTML=user.photo?`<img src="${user.photo}" alt="">`:initials(user.name));$("#statItems").textContent=items.filter(x=>x.userEmail===user.email).length;$("#statRequests").textContent=requests.length;$("#statFavorites").textContent=favorites.length}
function renderAll(){renderHome();renderFavorites();renderRequests();renderMyItems();renderProfile()}
function bindCards(){$$(".item-card").forEach(card=>card.onclick=e=>{if(e.target.closest("[data-fav]"))return;showDetail(Number(card.dataset.id))});$$("[data-fav]").forEach(btn=>btn.onclick=e=>{e.stopPropagation();const id=Number(btn.dataset.fav);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save();renderAll();toast(favorites.includes(id)?"Добавлено в избранное":"Удалено из избранного")})}
function go(page){if(page==="profile"&&!ensureUser())return;currentPage=page;$$(".page").forEach(p=>p.classList.remove("active"));$("#page-"+page).classList.add("active");$$("[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===page));renderAll();window.scrollTo({top:0,behavior:"smooth"})}
function showDetail(id){let x=items.find(i=>i.id===id);if(!x)return;let mine=x.userEmail&&x.userEmail===user?.email;$("#detailContent").innerHTML=`<div class="detail-layout"><img src="${x.image || fallbackImage(x.category,x.name)}" alt="${esc(x.name)}" onerror="handleImageError(this, &quot;${esc(x.category)}&quot;, &quot;${esc(x.name)}&quot;)"><div class="detail-copy"><span class="eyebrow green">${esc(x.category)} · БЕСПЛАТНО</span><h2>${esc(x.name)}</h2><p>${esc(x.description)}</p><p><b>Состояние:</b> ${esc(x.condition)}</p><p><b>Владелец:</b> ${esc(x.owner)}</p><div class="detail-place">⌖ ${esc(x.place)}</div><button class="outline-btn share-item-btn" id="shareItemBtn" type="button">↗ Поделиться объявлением</button>${mine?'<button class="outline-btn" disabled>Это ваше объявление</button>':`<button class="primary-btn full-btn" id="requestBtn" data-id="${x.id}">Отправить заявку</button>`}</div></div>`;$("#detailModal").classList.remove("hidden");$("#shareItemBtn").onclick=async()=>{const shareData={title:x.name,text:`${x.name} — бесплатно на DonateBox. ${x.description}`,url:location.href};try{if(navigator.share)await navigator.share(shareData);else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(shareData.text+" "+shareData.url);toast("Текст объявления скопирован")}else toast("Поделиться можно через меню браузера")}catch(err){if(err.name!=="AbortError")toast("Не удалось поделиться")}};$("#requestBtn")?.addEventListener("click",()=>{if(!ensureUser())return;let id=Number($("#requestBtn").dataset.id);if(requests.some(r=>r.itemId===id&&r.email===user.email)){toast("Вы уже отправляли заявку");return}requests.push({itemId:id,email:user.email,date:Date.now(),status:"Ожидает ответа"});save();$("#detailModal").classList.add("hidden");renderAll();toast("Заявка отправлена!")})}
function openAdd(){if(!ensureUser())return;$("#itemModal").classList.remove("hidden")}
function setupImageChoices(){let choices=[IMG.lamp,IMG.books,IMG.chair,IMG.jacket,IMG.plant,IMG.camera,IMG.toys,IMG.bag,IMG.dishes,IMG.shoes];$("#imageChoices").innerHTML=choices.map((src,i)=>`<button type="button" class="image-choice ${i===0?"selected":""}" data-image="${src}"><img src="${src}" alt="Вариант ${i+1}" onerror="handleImageError(this, &quot;Другое&quot;, &quot;Вариант ${i+1}&quot;)"></button>`).join("");$$("[data-image]").forEach(b=>b.onclick=()=>{$$(".image-choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedImage=b.dataset.image;customItemImage="";$("#itemPhotoPreview").classList.add("hidden")})}
function readCompressedImage(file,callback){if(!file||!file.type.startsWith("image/")){toast("Выберите файл изображения");return}const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const max=1000,scale=Math.min(1,max/Math.max(img.width,img.height));const canvas=document.createElement("canvas");canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);callback(canvas.toDataURL("image/jpeg",.78))};img.onerror=()=>toast("Не удалось открыть изображение");img.src=reader.result};reader.onerror=()=>toast("Не удалось прочитать файл");reader.readAsDataURL(file)}
function closeModal(id){$("#"+id).classList.add("hidden")}
$$("[data-page]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
$("#heroAdd").onclick=openAdd;$("#myAdd").onclick=openAdd;$("#mobileAdd").onclick=openAdd;$("#emptyAdd").onclick=openAdd;
$("#searchInput").addEventListener("input",renderHome);$("#sortSelect").addEventListener("change",renderHome);
$$(".category").forEach(b=>b.onclick=()=>{$$(".category").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeCategory=b.dataset.category;renderHome()});
$("#showAllCategories").onclick=()=>{$$(".category").forEach(x=>x.classList.remove("active"));$(".category[data-category='Все']").classList.add("active");activeCategory="Все";renderHome()};
$("#resetFilters").onclick=()=>{$("#searchInput").value="";activeCategory="Все";selectedRegion="Все регионы";localStorage.setItem("db_region",selectedRegion);updateRegionLabel();$$(".category").forEach(x=>x.classList.toggle("active",x.dataset.category==="Все"));renderHome();toast("Все фильтры сброшены")};
$$("[data-close]").forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
$$(".modal-backdrop").forEach(back=>back.addEventListener("click",e=>{if(e.target===back)back.classList.add("hidden")}));
$("#itemForm").onsubmit=e=>{e.preventDefault();if(!ensureUser())return;let item={id:Date.now(),name:$("#itemName").value.trim(),category:$("#itemCategory").value,condition:$("#itemCondition").value,description:$("#itemDescription").value.trim(),place:$("#itemPlace").value.trim(),region:selectedRegion==="Все регионы"?"Западно-Казахстанская область":selectedRegion,owner:user.name,image:customItemImage||photoForCategory($("#itemCategory").value),ownerPhoto:user.photo||"",date:Date.now(),userEmail:user.email};items.unshift(item);save();e.target.reset();selectedImage=IMG.lamp;customItemImage="";$("#itemPhotoPreview").classList.add("hidden");setupImageChoices();closeModal("itemModal");go("myitems");toast("Объявление опубликовано!")};
$("#authForm").onsubmit=e=>{e.preventDefault();user={name:$("#authName").value.trim(),email:$("#authEmail").value.trim().toLowerCase(),photo:""};save();closeModal("authModal");renderAll();toast("Добро пожаловать, "+user.name+"!");if(currentPage==="profile")go("profile")};
$("#logoutBtn").onclick=()=>{user=null;localStorage.removeItem("db_user");renderProfile();go("home");toast("Вы вышли из аккаунта")};
$("#editProfile").onclick=()=>{if(!user)return;let name=prompt("Как вас зовут?",user.name);if(name&&name.trim()){user.name=name.trim();save();renderProfile();toast("Имя обновлено")}};
$("#profilePhotoInput").addEventListener("change",e=>{readCompressedImage(e.target.files[0],data=>{user.photo=data;save();renderProfile();renderAll();toast("Фото профиля обновлено")});e.target.value=""});
$("#itemCategory").addEventListener("change",()=>{if(!customItemImage){selectedImage=photoForCategory($("#itemCategory").value);$$(".image-choice").forEach(x=>x.classList.toggle("selected",x.dataset.image===selectedImage));}});
$("#itemPhotoInput").addEventListener("change",e=>{readCompressedImage(e.target.files[0],data=>{customItemImage=data;$("#itemPhotoPreviewImg").src=data;$("#itemPhotoPreview").classList.remove("hidden");$$(".image-choice").forEach(x=>x.classList.remove("selected"));toast("Фото вещи добавлено")});e.target.value=""});
$("#removeItemPhoto").onclick=()=>{customItemImage="";$("#itemPhotoPreview").classList.add("hidden");toast("Своё фото убрано")};
$("#sidebarProfile").onclick=()=>go("profile");$("#headerProfile").onclick=()=>go("profile");$("#headerBell").onclick=()=>toast("Новых уведомлений пока нет");
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#searchInput").focus()}if(e.key==="Escape")$$(".modal-backdrop").forEach(x=>x.classList.add("hidden"))});
// Region picker: selection is saved and filters the main listings.
function updateRegionLabel(){const label=selectedRegion==="Все регионы"?"Весь Казахстан":selectedRegion;$("#currentRegionLabel").textContent=label;$("#regionSelect").value=selectedRegion;}
$("#regionButton").addEventListener("click",()=>{$("#regionSelect").value=selectedRegion;$("#regionModal").classList.remove("hidden")});
$("#applyRegion").addEventListener("click",()=>{selectedRegion=$("#regionSelect").value;localStorage.setItem("db_region",selectedRegion);updateRegionLabel();closeModal("regionModal");renderHome();toast(selectedRegion==="Все регионы"?"Показаны объявления со всего Казахстана":"Регион выбран: "+selectedRegion)});
$("#clearRegion").addEventListener("click",()=>{$("#regionSelect").value="Все регионы";selectedRegion="Все регионы";localStorage.setItem("db_region",selectedRegion);updateRegionLabel();closeModal("regionModal");renderHome();toast("Показаны объявления со всего Казахстана")});
updateRegionLabel();setupImageChoices();renderAll();
if(!user){setTimeout(()=>{$("#authModal").classList.remove("hidden")},500)}
