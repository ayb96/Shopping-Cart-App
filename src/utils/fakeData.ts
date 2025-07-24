import type { Product } from '../models/Product';

let productsCache: Product[] = [];

const productCount = 10000;

export const generateFakeProducts = (count: number = productCount): Product[] => {
  if (productsCache.length === count) {
    return productsCache;
  }

  const categories = ['Electronics', 'Clothing', 'Home', 'Books', 'Toys'];
  const brands = [
    'Acme',
    'Globex',
    'Soylent',
    'Initech',
    'Umbrella',
    'Wayne',
    'Stark',
    'Oscorp',
    'Wonka',
    'Cyberdyne',
  ];
  productsCache = [];

  const seed = 12345;

  for (let i = 0; i < count; i++) {
    const pseudoRandom = (Math.abs(Math.sin(seed + i)) * 10000) % 1;

    const categoryIndex = Math.floor(pseudoRandom * categories.length);
    const category = categories[categoryIndex];
    const brandIndex = Math.floor(pseudoRandom * brands.length);
    const brand = brands[brandIndex];

    const price = pseudoRandom * 900 + 100;
    const rating = Math.floor(pseudoRandom * 5) + 1;
    const reviewCount = Math.floor(pseudoRandom * 1000);
    const inStock = pseudoRandom > 0.3;

    const id = `prod_${seed}_${i}`;
    const sku = `${brand.substring(0, 3).toUpperCase()}-${category
      .substring(0, 3)
      .toUpperCase()}-${i.toString().padStart(6, '0')}`;

    productsCache.push({
      id,
      sku,
      name: `${brand} ${category} Product ${i + 1}`,
      price: parseFloat(price.toFixed(2)),
      description: `This is a ${brand} ${category.toLowerCase()} product with great features.`,
      image: `https://picsum.photos/300/200?seed=${id}`,
      rating,
      reviewCount,
      category,
      brand,
      inStock,
    });
  }

  return productsCache;
};
