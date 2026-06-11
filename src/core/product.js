export default class Product {
  constructor(
    id,
    name,
    price,
    image,
    category,
    vendor,
    featured,
    newArrival,
    Warranty,
    description,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.category = category;
    this.vendor = vendor;
    this.featured = featured;
    this.newArrival = newArrival;
    this.Warranty = Warranty;
    this.description = description;
  }

  static create({
    id,
    name,
    price,
    image,
    category,
    vendor,
    featured,
    newArrival,
    Warranty,
    description,
  }) {
    const product = new Product(
      id,
      name,
      price,
      image,
      category,
      vendor,
      featured,
      newArrival,
      Warranty,
      description,
    );
    return product;
  }
}
