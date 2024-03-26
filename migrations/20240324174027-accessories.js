const { faker } = require('@faker-js/faker');

const getRandomArrayValue = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];
const collections = ['street', 'black', 'casual', 'orange', 'white'];
const colors = ['purpure', 'yellow', 'orange', 'black', 'white'];
const compositions = ['cotton', 'synthetics', 'polyester'];
const accessoryTypes = ['bags', 'headdress', 'umbrella'];
const images = [
  '/img/clothes/1.jpg',
  '/img/clothes/2.jpg',
  '/img/clothes/3.jpg',
  '/img/clothes/4.jpg',
  '/img/clothes/5.jpg',
  '/img/clothes/6.jph',
  '/img/clothes/7.jph',
];
const wearingMethod = ['in hand', 'on shoulder', 'over shoulder'];
const textures = ['nubuck', 'nappa', 'suede', 'naplak'];
const styles = ['bucket bag', 'retro style', 'sports', 'travel'];
const seasons = ['demi-season', 'all season'];
const numbersOfSpokes = [9, 8, 10, 12, 7];
const spokeMaterials = ['metal', 'plastic', 'fiberglass'];
const foldedLengths = [30, 40, 50, 60];
const mechanisms = ['manual', 'automatic'];

module.exports = {
  async up(db) {
    return db.collection('accessories').insertMany(
      [...Array(50)].map(() => {
        const type =
          accessoryTypes[Math.floor(Math.random() * accessoryTypes.length)];

        const characteristics = [
          {
            type: 'bags',
            color: getRandomArrayValue(colors),
            composition: getRandomArrayValue(compositions),
            collection: getRandomArrayValue(collections),
            wearingMethod: getRandomArrayValue(wearingMethod),
            texture: getRandomArrayValue(textures),
            style: getRandomArrayValue(styles),
          },
          {
            type: 'headdress',
            color: getRandomArrayValue(colors),
            composition: getRandomArrayValue(compositions),
            season: getRandomArrayValue(seasons),
          },
          {
            type: 'umbrella',
            color: getRandomArrayValue(colors),
            composition: getRandomArrayValue(compositions),
            numberOfSpokes: getRandomArrayValue(numbersOfSpokes),
            spokeMaterial: getRandomArrayValue(spokeMaterials),
            foldedLength: getRandomArrayValue(foldedLengths),
            mechanism: getRandomArrayValue(mechanisms),
          },
        ];

        return {
          category: 'accessories',
          type,
          price: +faker.string.numeric(4).replace(/.{0,2}$/, 99),
          name: faker.lorem.sentence(2),
          description: faker.lorem.sentences(10),
          characteristics: characteristics.find((item) => item.type === type),
          images:
            '/img/clothes/' +
            faker.datatype.number({ min: 1, max: 3 }) +
            '.jpg',
          vendorCode: faker.string.numeric(4),
          inStock: faker.string.numeric(2),
          isBestseller: faker.datatype.boolean(),
          isNew: faker.datatype.boolean(),
          popularity: +faker.string.numeric(3),
          sizes:
            type === 'umbrella'
              ? {}
              : {
                  s: faker.datatype.boolean(),
                  l: faker.datatype.boolean(),
                  m: faker.datatype.boolean(),
                  xl: faker.datatype.boolean(),
                  xxl: faker.datatype.boolean(),
                },
        };
      })
    );
  },

  async down(db) {
    return db.collection('accessories').updateMany([]);
  },
};
