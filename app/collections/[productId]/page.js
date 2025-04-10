"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

// Product data - same as in collections page
const products = [
  {
    id: "organic-cotton-sheet-set",
    name: "Organic Cotton Sheet Set",
    price: "From $129",
    basePrice: 129,
    description: "Luxuriously soft, GOTS-certified organic cotton for your most restful sleep.",
    longDescription: "Experience the perfect balance of softness and durability with our Organic Cotton Sheet Set. Made from 100% GOTS-certified organic cotton, these sheets are breathable, hypoallergenic, and get softer with every wash. Our cotton is ethically sourced and processed using eco-friendly methods, creating bedding that's as kind to your skin as it is to the planet.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584098731498-20e85735d7a5?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop"
    ],
    highlights: [
      "100% organic cotton, GOTS certified",
      "300 thread count percale weave",
      "Naturally hypoallergenic",
      "Available in 7 earth-inspired colors",
      "Sustainably made with low-impact dyes"
    ],
    variants: {
      size: ["Twin", "Full", "Queen", "King", "California King"],
      color: ["Cloud White", "Stone", "Sage", "Terracotta", "Indigo", "Dusk Blue", "Charcoal"]
    }
  },
  {
    id: "bamboo-duvet-cover",
    name: "Bamboo Duvet Cover",
    price: "From $189",
    basePrice: 189,
    description: "Temperature-regulating bamboo fabric for year-round comfort and elegance.",
    longDescription: "Our luxurious Bamboo Duvet Cover offers the perfect combination of silky-smooth texture and temperature-regulating properties. Made from 100% bamboo lyocell, this duvet cover naturally wicks away moisture while keeping you cool in summer and warm in winter. Bamboo requires significantly less water to grow than cotton, making this a sustainable choice for conscious consumers.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1932&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629949009710-2ca3b9454deb?q=80&w=1916&auto=format&fit=crop"
    ],
    highlights: [
      "100% bamboo lyocell fabric",
      "Naturally temperature regulating",
      "Silky smooth texture",
      "Moisture-wicking properties",
      "Available in 5 calming colors"
    ],
    variants: {
      size: ["Twin", "Full/Queen", "King/Cal King"],
      color: ["Pearl White", "Cloud Grey", "Sage Green", "Soft Blue", "Sand"]
    }
  },
  {
    id: "linen-pillowcases",
    name: "Stone-Washed Linen Pillowcases",
    price: "From $79",
    basePrice: 79,
    description: "Breathable, durable linen that gets softer with every wash.",
    longDescription: "Our Stone-Washed Linen Pillowcases bring effortless elegance and incredible comfort to your bed. Made from 100% European flax, these pillowcases are stone-washed for immediate softness while maintaining linen's signature texture. Naturally temperature-regulating and moisture-wicking, linen helps you stay comfortable all night long and gets even softer with each wash.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1887&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1887&auto=format&fit=crop"
    ],
    highlights: [
      "100% European flax linen",
      "Stone-washed for immediate softness",
      "Exceptional breathability",
      "Naturally anti-bacterial",
      "Set of 2 pillowcases"
    ],
    variants: {
      size: ["Standard", "King"],
      color: ["White", "Natural", "Blush", "Sage", "Coal", "Sky"]
    }
  },
  {
    id: "eucalyptus-sheet-set",
    name: "Eucalyptus Lyocell Sheet Set",
    price: "From $149",
    basePrice: 149,
    description: "Ultra-soft and cooling sheets made from sustainable eucalyptus fiber.",
    longDescription: "Experience the luxurious feel of our Eucalyptus Lyocell sheets, made from sustainable eucalyptus fibers. These sheets are remarkably soft, cool to the touch, and naturally moisture-wicking to keep you comfortable all night. Eucalyptus requires significantly less water than cotton to grow and our closed-loop production process ensures minimal environmental impact.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584099733229-c21205e6d236?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
    ],
    highlights: [
      "100% TENCEL™ Lyocell from eucalyptus",
      "Silky smooth feel with cooling properties",
      "Requires 10x less water than cotton to produce",
      "Biodegradable and compostable material",
      "Naturally antimicrobial"
    ],
    variants: {
      size: ["Twin", "Full", "Queen", "King", "California King"],
      color: ["White", "Ivory", "Grey", "Sage", "Blue"]
    }
  },
  {
    id: "cotton-waffle-throw",
    name: "Organic Cotton Waffle Throw",
    price: "From $99",
    basePrice: 99,
    description: "Textured, lightweight throw perfect for layering in any season.",
    longDescription: "Add texture and warmth to any space with our Organic Cotton Waffle Throw. The distinctive waffle weave creates air pockets that trap warmth while remaining breathable and lightweight. Made from 100% organic cotton, this versatile throw is perfect for cozying up on the couch or adding an extra layer to your bed. The textured design adds visual interest to any room.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop"
    ],
    highlights: [
      "100% organic cotton in waffle weave",
      "Lightweight yet cozy texture",
      "Generous size: 50\" x 70\"",
      "Quick-drying and easy care",
      "Versatile for all seasons"
    ],
    variants: {
      color: ["Natural", "Oatmeal", "Grey", "Terracotta", "Moss"]
    }
  },
  {
    id: "linen-duvet-cover",
    name: "Washed Linen Duvet Cover",
    price: "From $199",
    basePrice: 199,
    description: "Relaxed, textured linen for that perfectly lived-in look and feel.",
    longDescription: "Transform your bedroom with our Washed Linen Duvet Cover, crafted from 100% European flax linen. Pre-washed for a soft, relaxed feel from day one, this duvet cover embodies casual luxury with its natural texture and effortless drape. Linen's natural temperature-regulating properties make it perfect for year-round use, keeping you cool in summer and cozy in winter.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop"
    ],
    highlights: [
      "100% European flax linen",
      "Pre-washed for softness from day one",
      "Button closure with interior ties",
      "Gets softer with every wash",
      "Year-round comfort with exceptional breathability"
    ],
    variants: {
      size: ["Twin", "Full/Queen", "King/Cal King"],
      color: ["White", "Oatmeal", "Terracotta", "Sage", "Charcoal", "Blue"]
    }
  },
  {
    id: "alpaca-wool-blanket",
    name: "Alpaca Wool Blanket",
    price: "From $229",
    basePrice: 229,
    description: "Incredibly soft and warm blanket made from sustainably sourced alpaca wool.",
    longDescription: "Experience the unparalleled softness and warmth of our Alpaca Wool Blanket. Made from 100% baby alpaca wool, this luxurious blanket is softer, warmer, and lighter than traditional sheep's wool, without the itch. Alpaca fiber is naturally hypoallergenic and lanolin-free, making it perfect for those with sensitive skin. Each blanket supports small family farms that practice ethical animal husbandry.",
    image: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623497846695-f925c3f267d4?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585037545520-32305caeed93?q=80&w=1780&auto=format&fit=crop"
    ],
    highlights: [
      "100% baby alpaca wool",
      "Hypoallergenic and naturally lanolin-free",
      "Ethically sourced from small family farms",
      "Softer and warmer than sheep's wool",
      "Naturally dyed with plant-based pigments"
    ],
    variants: {
      size: ["Throw (51\" x 70\")", "Queen (90\" x 90\")", "King (108\" x 90\")"],
      color: ["Ivory", "Grey", "Camel", "Soft Brown", "Charcoal"]
    }
  },
  {
    id: "organic-cotton-quilt",
    name: "Hand-Stitched Cotton Quilt",
    price: "From $279",
    basePrice: 279,
    description: "Lightweight, hand-stitched quilt perfect for layering year-round.",
    longDescription: "Our Hand-Stitched Cotton Quilt combines traditional craftsmanship with organic materials for a piece that's as beautiful as it is sustainable. Made from 100% GOTS-certified organic cotton, each quilt features intricate hand-stitching that creates a subtle texture and incredible durability. The medium weight makes it perfect for year-round use, either as a standalone summer cover or as an extra layer in cooler months.",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591499295567-59c30f046696?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629949009710-2ca3b9454deb?q=80&w=1916&auto=format&fit=crop"
    ],
    highlights: [
      "100% GOTS-certified organic cotton",
      "Traditional hand-stitching techniques",
      "Soft cotton batting for perfect weight",
      "Reversible design for versatility",
      "Heirloom quality craftsmanship"
    ],
    variants: {
      size: ["Twin", "Full/Queen", "King"],
      color: ["White", "Natural", "Grey", "Terracotta"]
    }
  }
];

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <main className="min-h-screen bg-[#f2f5f0] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-3xl font-light text-[#2c3a2a] mb-8">Product Not Found</h1>
          <p className="text-[#4a5a47] mb-8">Sorry, we couldnt find the product youre looking for.</p>
          <Link href="/collections">
            <button className="bg-[#2c3a2a] text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#4a5a47] transition-all duration-300">
              Return to Collections
            </button>
          </Link>
        </div>
      </main>
    );
  }

  // Calculate price based on size (if applicable)
  let price = product.basePrice;
  if (selectedSize) {
    // Add price increase for larger sizes
    if (selectedSize.includes('Queen')) price += 20;
    if (selectedSize.includes('King')) price += 40;
    if (selectedSize.includes('California')) price += 40;
  }

  const handlePurchase = () => {
    // Simple alert for purchase functionality
    alert(`Thank you for your purchase!
    
Product: ${product.name}
${selectedSize ? `Size: ${selectedSize}` : ''}
${selectedColor ? `Color: ${selectedColor}` : ''}
Quantity: ${quantity}
Total: $${price * quantity}
    
Your order has been confirmed.`);
  };

  return (
    <main className="min-h-screen bg-[#f2f5f0]">
      <div className="container mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 text-sm text-[#4a5a47]">
            <Link href="/" className="hover:text-[#2c3a2a] cursor-pointer">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-[#2c3a2a] cursor-pointer">Collections</Link>
            <span>/</span>
            <span className="text-[#2c3a2a]">{product.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="relative h-[500px] mb-4 bg-white">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="bg-white"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-4xl font-light text-[#2c3a2a] mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-[#2c3a2a] mb-6">${price}</p>
            <p className="text-[#4a5a47] mb-8">{product.longDescription}</p>
            
            <div className="space-y-8 mb-10">
              {/* Size Selection (if applicable) */}
              {product.variants.size && (
                <div>
                  <h3 className="font-medium text-[#2c3a2a] mb-3">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.size.map((size) => (
                      <button 
                        key={size}
                        className={`px-4 py-2 border cursor-pointer ${selectedSize === size ? 'bg-[#2c3a2a] text-white border-[#2c3a2a]' : 'border-[#d1dbc9] text-[#4a5a47] hover:border-[#2c3a2a]'}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Color Selection (if applicable) */}
              {product.variants.color && (
                <div>
                  <h3 className="font-medium text-[#2c3a2a] mb-3">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.color.map((color) => (
                      <button 
                        key={color}
                        className={`px-4 py-2 border cursor-pointer ${selectedColor === color ? 'bg-[#2c3a2a] text-white border-[#2c3a2a]' : 'border-[#d1dbc9] text-[#4a5a47] hover:border-[#2c3a2a]'}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity */}
              <div>
                <h3 className="font-medium text-[#2c3a2a] mb-3">Quantity</h3>
                <div className="flex border border-[#d1dbc9] w-32">
                  <button 
                    className="px-3 py-2 bg-[#e8ede4] text-[#2c3a2a] cursor-pointer"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    min="1" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center border-0 focus:ring-0 bg-transparent text-[#2c3a2a] font-medium"
                  />
                  <button 
                    className="px-3 py-2 bg-[#e8ede4] text-[#2c3a2a] cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            {/* Add to Cart / Buy Now Button */}
            <button 
              className="w-full bg-[#2c3a2a] text-white py-4 text-sm uppercase tracking-widest font-medium hover:bg-[#4a5a47] transition-all duration-300 mb-6 cursor-pointer"
              onClick={handlePurchase}
            >
              Add to Cart
            </button>
            
            {/* Key Features */}
            <div className="border-t border-[#d1dbc9] pt-8 mt-10">
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#2c3a2a] mr-2">•</span>
                    <span className="text-[#4a5a47]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sustainability Badge */}
            <div className="mt-8 bg-[#e8ede4] p-4 rounded-sm">
              <p className="flex items-center text-[#2c3a2a] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                Sustainably made with eco-friendly materials and practices
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-light tracking-wider text-[#2c3a2a] text-center mb-12">
            You Might Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => p.id !== productId).slice(0, 4).map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <Link href={`/collections/${relatedProduct.id}`} className="cursor-pointer">
                  <div className="relative h-64 mb-4 overflow-hidden bg-[#f2f5f0]">
                    <Image 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#2c3a2a] mb-1">{relatedProduct.name}</h3>
                  <p className="text-[#4a5a47]">{relatedProduct.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 