interface Product {
  id: number;
  image: string;
  badge: string;
  badgeColor: string;
  name: string;
  category: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="product-card bg-white rounded-xl shadow-lg hover:-translate-y-2 transform transition cursor-pointer overflow-hidden max-w-xs mx-auto"
      onClick={() => alert(product.name)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image w-full h-80 object-cover bg-gray-100"
      />
      <div className="product-content p-5">
        <span
          className="product-badge inline-block text-white text-xs font-semibold rounded px-3 py-1 mb-3"
          style={{ backgroundColor: product.badgeColor }}
        >
          {product.badge}
        </span>
        <h3 className="product-name text-lg font-bold mb-1">{product.name}</h3>
        <p className="product-category text-gray-600 mb-2">
          {product.category}
        </p>
        <p className="product-price text-base font-bold">{product.price}</p>
      </div>
    </div>
  );
}
