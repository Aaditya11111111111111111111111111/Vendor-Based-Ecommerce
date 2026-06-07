import saree1 from "../images/products/3.png";
import saree2 from "../images/products/9.png";
import saree3 from "../images/products/8.png";

export const products = [
    {
        id: 1,
        name: "Elegant Jimmy Choo Saree",
        price: 1999,
        image: saree1,
        category: "Sarees",
        vendor: "Aasu Clothing",    
        featured: true,
        newArrival: true,
    },

    {
        id: 2,
        name: "Blue Japanese Saree",
        price: 1599,
        image: saree2,
        category: "Sarees",
        vendor: "Aasu Clothing",
        featured: false,
        newArrival: true,
    },

    {
        id: 3,
        name: "Red Indian Saree",
        price: 1599,
        image: saree3,
        category: "Sarees",
        vendor: "Aasu Clothing",
        featured: false,
        newArrival: false,
    }
];