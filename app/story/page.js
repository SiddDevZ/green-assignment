import Image from "next/image";
import Link from "next/link";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#f2f5f0]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070&auto=format&fit=crop"
            alt="Sustainable farming fields" 
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wider text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl font-light tracking-wide text-white/90 max-w-3xl mx-auto">
            How a passion for sustainable living transformed into a mission to create the perfect eco-friendly bedding
          </p>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] text-center mb-16">
              Our Beginning
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg leading-relaxed text-[#4a5a47] mb-6">
                  Green Slumber began in 2015 when our founder, Emma Clarke, discovered the environmental impact of conventional bedding production while renovating her home.
                </p>
                <p className="text-lg leading-relaxed text-[#4a5a47] mb-6">
                  Shocked by the chemicals, water waste, and carbon footprint involved in traditional textile manufacturing, Emma set out to find truly sustainable alternatives that didn&apos;t compromise on luxury or comfort.
                </p>
                <p className="text-lg leading-relaxed text-[#4a5a47]">
                  When she couldn&apos;t find what she was looking for, she decided to create it herself—partnering with sustainable farmers, ethical manufacturers, and textile experts who shared her vision.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935&auto=format&fit=crop"
                  alt="Organic cotton field" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1550098141-9cae5813f7fe?q=80&w=1964&auto=format&fit=crop"
                  alt="Sustainable textile workshop" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg leading-relaxed text-[#4a5a47] mb-6">
                  What began as a small collection of organic cotton sheets has grown into a complete range of sustainable bedding products—each designed with both luxury and environmental responsibility in mind.
                </p>
                <p className="text-lg leading-relaxed text-[#4a5a47] mb-6">
                  Today, Green Slumber works with a network of family farms, artisan workshops, and ethical factories across the globe, supporting communities while maintaining the highest standards of sustainability.
                </p>
                <p className="text-lg leading-relaxed text-[#4a5a47]">
                  Our mission remains the same: to provide you with the most luxurious, eco-friendly bedding possible, proving that comfort and consciousness can go hand in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-24 bg-[#e8ede4]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] text-center mb-16">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-sm">
              <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-full bg-[#f2f5f0]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-4">Sustainability First</h3>
              <p className="text-[#4a5a47] leading-relaxed mb-6">
                Every decision we make considers environmental impact, from the materials we use to our packaging and shipping methods. We&apos;re committed to reducing our footprint at every step.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-sm">
              <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-full bg-[#f2f5f0]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-4">Ethical Partnerships</h3>
              <p className="text-[#4a5a47] leading-relaxed">
                We work only with partners who share our commitment to fair labor practices, living wages, and safe working conditions. Our supply chain is built on transparency and respect.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-sm">
              <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-full bg-[#f2f5f0]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-4">Uncompromising Quality</h3>
              <p className="text-[#4a5a47] leading-relaxed">
                We believe sustainable products should exceed the quality of conventional alternatives. Every Green Slumber product is designed to last longer, feel better, and improve with age.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Practices */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] text-center mb-16">
            Our Sustainability Practices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#2c3a2a] mb-6 flex items-center">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ede4] mr-4 flex-shrink-0">
                  <span className="text-[#2c3a2a]">01</span>
                </span>
                Materials Selection
              </h3>
              <p className="text-[#4a5a47] leading-relaxed mb-6">
                We use only organic cotton (GOTS certified), sustainable eucalyptus and bamboo fibers (OEKO-TEX® certified), and European flax linen grown without pesticides or excessive water use.
              </p>
              <p className="text-[#4a5a47] leading-relaxed">
                Our wool products use ethically sourced alpaca and sheep&apos;s wool from farms that prioritize animal welfare and sustainable land management.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#2c3a2a] mb-6 flex items-center">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ede4] mr-4 flex-shrink-0">
                  <span className="text-[#2c3a2a]">02</span>
                </span>
                Processing & Manufacturing
              </h3>
              <p className="text-[#4a5a47] leading-relaxed mb-6">
                Our manufacturing partners use closed-loop water systems that recycle up to 95% of water used in production, significantly reducing waste compared to conventional textile manufacturing.
              </p>
              <p className="text-[#4a5a47] leading-relaxed">
                We use low-impact, non-toxic dyes and finishing processes that are safer for workers, consumers, and the environment.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#2c3a2a] mb-6 flex items-center">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ede4] mr-4 flex-shrink-0">
                  <span className="text-[#2c3a2a]">03</span>
                </span>
                Packaging & Shipping
              </h3>
              <p className="text-[#4a5a47] leading-relaxed mb-6">
                All our packaging is plastic-free and made from recycled and/or biodegradable materials. Our shipping boxes are made from 100% post-consumer recycled cardboard.
              </p>
              <p className="text-[#4a5a47] leading-relaxed">
                We carbon-offset all shipping and have optimized our logistics to reduce transportation distances wherever possible.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#2c3a2a] mb-6 flex items-center">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ede4] mr-4 flex-shrink-0">
                  <span className="text-[#2c3a2a]">04</span>
                </span>
                Giving Back
              </h3>
              <p className="text-[#4a5a47] leading-relaxed mb-6">
                We donate 1% of annual sales to environmental nonprofits focused on textile waste reduction, water conservation, and sustainable agriculture.
              </p>
              <p className="text-[#4a5a47] leading-relaxed">
                Through our Second Life program, we help customers recycle old bedding products, ensuring they stay out of landfills and find new purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-[#f2f5f0]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] text-center mb-16">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                  alt="Emma Clarke, Founder & CEO" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-1">Emma Clarke</h3>
              <p className="text-[#4a5a47] mb-4">Founder & CEO</p>
              <p className="text-[#4a5a47] text-sm">Former sustainability consultant with a passion for textiles and design. Emma leads our product development and sustainability initiatives.</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop"
                  alt="Marcus Lee, Head of Production" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-1">Marcus Lee</h3>
              <p className="text-[#4a5a47] mb-4">Head of Production</p>
              <p className="text-[#4a5a47] text-sm">With 15+ years in textile manufacturing, Marcus ensures our production processes maintain the highest quality and ethical standards.</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                  alt="Sophia Martinez, Sustainability Director" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-1">Sophia Martinez</h3>
              <p className="text-[#4a5a47] mb-4">Sustainability Director</p>
              <p className="text-[#4a5a47] text-sm">Environmental scientist specializing in textile sustainability. Sophia oversees our certifications, material sourcing, and environmental initiatives.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-[#2c3a2a] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider mb-6">
            Experience Sustainable Luxury
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
            Join us in our mission to transform the bedding industry with products that are as kind to the planet as they are luxurious to sleep in.
          </p>
          <Link href="/collections">
            <button className="bg-white text-[#2c3a2a] px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#e8ede4] transition-all duration-300 cursor-pointer">
              Shop Our Collections
            </button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#2c3a2a] text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-serif text-xl mb-6">Green Slumber</h4>
              <p className="text-white/80 mb-6">Premium eco-friendly bedding for the conscious consumer.</p>
              <p className="text-white/80">© 2023 Green Slumber. All rights reserved.</p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-white/80 hover:text-white transition-colors cursor-pointer">Home</Link></li>
                <li><Link href="/collections" className="text-white/80 hover:text-white transition-colors cursor-pointer">Collections</Link></li>
                <li><Link href="/story" className="text-white/80 hover:text-white transition-colors cursor-pointer">Our Story</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Contact</h4>
              <p className="text-white/80 mb-2">hello@greenslumber.com</p>
              <p className="text-white/80 mb-2">+1 (800) 123-4567</p>
              <p className="text-white/80">123 Eco Street, Portland, OR 97205</p>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">Committed to sustainable practices and ethical manufacturing</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 