import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "organic-cotton-sheet-set",
    name: "Organic Cotton Sheet Set",
    price: "From $129",
    description: "Luxuriously soft, GOTS-certified organic cotton for your most restful sleep.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop",
    highlights: [
      "100% organic cotton, GOTS certified",
      "300 thread count percale weave",
      "Naturally hypoallergenic",
      "Available in 7 earth-inspired colors",
      "Sustainably made with low-impact dyes"
    ]
  },
  {
    id: "bamboo-duvet-cover",
    name: "Bamboo Duvet Cover",
    price: "From $189",
    description: "Temperature-regulating bamboo fabric for year-round comfort and elegance.",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1932&auto=format&fit=crop",
    highlights: [
      "100% bamboo lyocell fabric",
      "Naturally temperature regulating",
      "Silky smooth texture",
      "Moisture-wicking properties",
      "Available in 5 calming colors"
    ]
  },
  {
    id: "linen-pillowcases",
    name: "Stone-Washed Linen Pillowcases",
    price: "From $79",
    description: "Breathable, durable linen that gets softer with every wash.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1887&auto=format&fit=crop",
    highlights: [
      "100% European flax linen",
      "Stone-washed for immediate softness",
      "Exceptional breathability",
      "Naturally anti-bacterial",
      "Set of 2 pillowcases"
    ]
  },
  {
    id: "eucalyptus-sheet-set",
    name: "Eucalyptus Lyocell Sheet Set",
    price: "From $149",
    description: "Ultra-soft and cooling sheets made from sustainable eucalyptus fiber.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "100% TENCEL™ Lyocell from eucalyptus",
      "Silky smooth feel with cooling properties",
      "Requires 10x less water than cotton to produce",
      "Biodegradable and compostable material",
      "Naturally antimicrobial"
    ]
  },
  {
    id: "cotton-waffle-throw",
    name: "Organic Cotton Waffle Throw",
    price: "From $99",
    description: "Textured, lightweight throw perfect for layering in any season.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop",
    highlights: [
      "100% organic cotton in waffle weave",
      "Lightweight yet cozy texture",
      "Generous size: 50\" x 70\"",
      "Quick-drying and easy care",
      "Versatile for all seasons"
    ]
  },
  {
    id: "linen-duvet-cover",
    name: "Washed Linen Duvet Cover",
    price: "From $199",
    description: "Relaxed, textured linen for that perfectly lived-in look and feel.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop",
    highlights: [
      "100% European flax linen",
      "Pre-washed for softness from day one",
      "Button closure with interior ties",
      "Gets softer with every wash",
      "Year-round comfort with exceptional breathability"
    ]
  },
  {
    id: "alpaca-wool-blanket",
    name: "Alpaca Wool Blanket",
    price: "From $229",
    description: "Incredibly soft and warm blanket made from sustainably sourced alpaca wool.",
    image: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=1974&auto=format&fit=crop",
    highlights: [
      "100% baby alpaca wool",
      "Hypoallergenic and naturally lanolin-free",
      "Ethically sourced from small family farms",
      "Softer and warmer than sheep's wool",
      "Naturally dyed with plant-based pigments"
    ]
  },
  {
    id: "organic-cotton-quilt",
    name: "Hand-Stitched Cotton Quilt",
    price: "From $279",
    description: "Lightweight, hand-stitched quilt perfect for layering year-round.",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop",
    highlights: [
      "100% GOTS-certified organic cotton",
      "Traditional hand-stitching techniques",
      "Soft cotton batting for perfect weight",
      "Reversible design for versatility",
      "Heirloom quality craftsmanship"
    ]
  }
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#f2f5f0]">
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center bg-[#2c3a2a]">
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-5xl font-light tracking-wider text-white mb-6">
            Our Collections
          </h1>
          <p className="text-xl font-light tracking-wide text-white/90 max-w-2xl mx-auto">
            Discover our range of eco-friendly, luxurious bedding products crafted from sustainable materials.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 group hover:shadow-lg transition-all duration-300">
                <Link href={`/collections/${product.id}`} className="cursor-pointer">
                  <div className="relative h-80 mb-6 overflow-hidden">
                    <Image 
                      src={product.image}
                      alt={product.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">{product.name}</h3>
                  <p className="text-[#4a5a47] mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#2c3a2a] font-medium">{product.price}</p>
                    <span className="text-sm text-[#2c3a2a] font-medium border-b border-[#2c3a2a] group-hover:border-transparent transition-all cursor-pointer">
                      View Details
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Callout */}
      <section className="py-16 bg-[#e8ede4]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-light tracking-wider text-[#2c3a2a] mb-6">
            Luxury Meets Sustainability
          </h2>
          <p className="text-lg text-[#4a5a47] max-w-3xl mx-auto mb-10">
            Every Green Slumber product is crafted with careful attention to environmental impact, 
            ethical manufacturing practices, and uncompromising quality.
          </p>
          <Link href="/story">
            <button className="bg-[#2c3a2a] text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#4a5a47] transition-all duration-300 cursor-pointer">
              Learn About Our Mission
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}