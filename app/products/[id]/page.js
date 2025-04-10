'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collections } from '../../collections/page';

// Helper function to find a product by ID
function findProductById(productId) {
  for (const collection of collections) {
    const product = collection.products.find(p => p.id === productId);
    if (product) {
      return { product, collection };
    }
  }
  return null;
}

export default function ProductPage({ params }) {
  const { id } = params;
  const productData = findProductById(id);
  
  const [quantity, setQuantity] = useState(1);
  
  if (!productData) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-serif mb-6">Product Not Found</h1>
        <p className="mb-8">Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
        <Link href="/collections" className="bg-[#2c3a2a] text-white px-8 py-3 rounded-md hover:bg-[#3c4a3a] transition-colors">
          Back to Collections
        </Link>
      </div>
    );
  }
  
  const { product, collection } = productData;
  
  const handlePurchase = () => {
    alert(`Thank you for purchasing ${quantity} ${quantity > 1 ? 'units' : 'unit'} of ${product.name}!`);
  };
  
  return (
    <main className="pb-16">
      {/* Breadcrumb */}
      <div className="bg-[#f7f9f5] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#2c3a2a]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/collections" className="hover:text-[#2c3a2a]">Collections</Link>
            <span className="mx-2">/</span>
            <Link href={`/collections/${collection.id}`} className="hover:text-[#2c3a2a]">{collection.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2c3a2a] font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Display */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative rounded-lg overflow-hidden h-[400px] md:h-[600px]">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-serif text-[#2c3a2a] mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-700 mb-6">${product.price}</p>
            
            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
              
              <div className="flex items-center mb-8">
                <div className="mr-6">
                  <label htmlFor="quantity" className="block text-sm text-gray-600 mb-2">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      id="quantity" 
                      min="1" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 py-1 text-center focus:outline-none"
                    />
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button 
                  className="flex-1 bg-[#2c3a2a] text-white py-3 px-6 rounded-md hover:bg-[#3c4a3a] transition-colors"
                  onClick={handlePurchase}
                >
                  Add to Cart
                </button>
              </div>
              
              <div className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <span className="text-sm">Free shipping on orders over $75</span>
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <h2 className="text-xl font-medium text-[#2c3a2a] mb-4">Product Details</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ethically sourced materials</li>
                <li>Handcrafted by skilled artisans</li>
                <li>Environmentally friendly production</li>
                <li>Minimal, recyclable packaging</li>
                <li>1-year craftsmanship guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* You May Also Like */}
      <section className="bg-[#f7f9f5] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#2c3a2a] mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collection.products.filter(p => p.id !== product.id).map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                href={`/products/${relatedProduct.id}`} 
                className="block group"
              >
                <div className="relative h-[250px] overflow-hidden rounded-lg mb-4">
                  <Image 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[#2c3a2a] font-medium group-hover:underline">{relatedProduct.name}</h3>
                <p className="text-gray-700">${relatedProduct.price}</p>
              </Link>
            ))}
            {collection.products.length === 1 && (
              <div className="text-center col-span-full">
                <p className="text-gray-700">No other products in this collection.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Sustainability Promise */}
      <section className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-serif text-[#2c3a2a] mb-6">Our Sustainability Promise</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Eco Luxe Living, we believe that luxury and sustainability can go hand in hand. 
          Every product in our collection is crafted with a deep commitment to environmental 
          stewardship and ethical manufacturing.
        </p>
        <p className="text-lg text-gray-700 mb-10">
          From the materials we source to the artisans we partner with, each step in our 
          process is guided by our dedication to creating a positive impact on the planet.
        </p>
        <Link href="/our-story" className="inline-block border-2 border-[#2c3a2a] text-[#2c3a2a] px-8 py-3 rounded-md hover:bg-[#2c3a2a] hover:text-white transition-colors">
          Learn More About Our Practices
        </Link>
      </section>
    </main>
  );
} 