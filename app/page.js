import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f5f0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop"
            alt="Luxurious eco-friendly bedding" 
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wider text-white mb-6">
            GREEN SLUMBER
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 max-w-2xl mx-auto mb-10">
            Premium eco-friendly bedding for luxury, crafted from sustainable materials to bring you comfort
          </p>
          {/* <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
            Crafted from sustainable materials to bring you perfect comfort while preserving our planet
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#e8ede4] text-[#2c3a2a] px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#d1dbc9] transition-all duration-300">
              Discover Collection
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-white/10 transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] mb-12">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#4a5a47] mb-16">
              At Green Slumber, we believe that luxury and sustainability can coexist harmoniously. 
              Our commitment is to provide you with bedding that nurtures both your well-being and 
              our planet, creating a perfect balance of comfort and consciousness.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center mb-6 rounded-full bg-[#e8ede4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Sustainable Materials</h3>
                <p className="text-[#4a5a47] text-center">Ethically sourced organic cotton, bamboo, and linen that respect our environment.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center mb-6 rounded-full bg-[#e8ede4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Unparalleled Comfort</h3>
                <p className="text-[#4a5a47] text-center">Designs perfected for the ultimate sleeping experience and well-being.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center mb-6 rounded-full bg-[#e8ede4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Conscious Craftsmanship</h3>
                <p className="text-[#4a5a47] text-center">Every piece is crafted with minimal environmental impact and fair labor practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-24 bg-[#f2f5f0]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] text-center mb-20">
            Our Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-6 group hover:shadow-lg transition-all duration-300">
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop"
                  alt="Organic Cotton Sheets" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Organic Cotton Sheet Set</h3>
              <p className="text-[#4a5a47] mb-4">Luxuriously soft, GOTS-certified organic cotton for your most restful sleep.</p>
              <p className="text-[#2c3a2a] font-medium">From $129</p>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white p-6 group hover:shadow-lg transition-all duration-300">
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1932&auto=format&fit=crop"
                  alt="Bamboo Duvet Cover" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Bamboo Duvet Cover</h3>
              <p className="text-[#4a5a47] mb-4">Temperature-regulating bamboo fabric for year-round comfort and elegance.</p>
              <p className="text-[#2c3a2a] font-medium">From $189</p>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white p-6 group hover:shadow-lg transition-all duration-300">
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1887&auto=format&fit=crop" 
                  alt="Linen Pillowcases" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Stone-Washed Linen Pillowcases</h3>
              <p className="text-[#4a5a47] mb-4">Breathable, durable linen that gets softer with every wash.</p>
              <p className="text-[#2c3a2a] font-medium">From $79</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="border-2 border-[#2c3a2a] text-[#2c3a2a] px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#2c3a2a] hover:text-white transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-b border-[#e8ede4] pb-6">
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">What makes Green Slumber products eco-friendly?</h3>
              <p className="text-[#4a5a47]">Our products are made from certified organic materials, processed using eco-friendly methods with minimal water usage and no harmful chemicals. We also use plastic-free packaging and carbon-neutral shipping methods.</p>
            </div>
            
            <div className="border-b border-[#e8ede4] pb-6">
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">How do I care for my Green Slumber bedding?</h3>
              <p className="text-[#4a5a47]">We recommend washing in cold water with a gentle, eco-friendly detergent. Tumble dry on low or line dry to reduce energy consumption. Detailed care instructions are included with each product and can be found on individual product pages.</p>
            </div>
            
            <div className="border-b border-[#e8ede4] pb-6">
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">What is your return policy?</h3>
              <p className="text-[#4a5a47]">We offer a 60-night trial on all our bedding products. If you&apos;re not completely satisfied, you can return unused items in their original packaging for a full refund. For hygiene reasons, used pillows cannot be returned unless defective.</p>
            </div>
            
            <div className="border-b border-[#e8ede4] pb-6">
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Do you ship internationally?</h3>
              <p className="text-[#4a5a47]">Yes, we ship to most countries worldwide. International shipping rates are calculated at checkout based on destination and package weight. We use carbon-offset shipping methods for all deliveries.</p>
            </div>
            
            <div className="border-b border-[#e8ede4] pb-6">
              <h3 className="font-serif text-xl font-medium text-[#2c3a2a] mb-3">Are your products hypoallergenic?</h3>
              <p className="text-[#4a5a47]">Many of our products are naturally hypoallergenic. Our organic cotton and bamboo products are especially suitable for sensitive skin and those with allergies. We never use harmful chemicals in our manufacturing process.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 bg-[#f2f5f0]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-[#2c3a2a] mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-[#4a5a47] mb-10">
                Have a question about our products or want to learn more about our sustainable practices? 
                We&apos;d love to hear from you.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ede4] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#2c3a2a]">Email</h3>
                    <p className="text-[#4a5a47]">hello@greenslumber.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ede4] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#2c3a2a]">Phone</h3>
                    <p className="text-[#4a5a47]">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8ede4] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2c3a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#2c3a2a]">Location</h3>
                    <p className="text-[#4a5a47]">123 Eco Street, Portland, OR 97205</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2c3a2a] text-white hover:bg-[#4a5a47] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2c3a2a] text-white hover:bg-[#4a5a47] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2c3a2a] text-white hover:bg-[#4a5a47] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h3 className="font-serif text-2xl font-light text-[#2c3a2a] mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4a5a47] mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-[#e8ede4] focus:border-[#2c3a2a] focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4a5a47] mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-[#e8ede4] focus:border-[#2c3a2a] focus:outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#4a5a47] mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-[#e8ede4] focus:border-[#2c3a2a] focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4a5a47] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-[#e8ede4] focus:border-[#2c3a2a] focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#2c3a2a] text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#4a5a47] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#2c3a2a] text-white py-16">
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
                <li><a href="/" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="/collections" className="text-white/80 hover:text-white transition-colors">Collections</a></li>
                <li><a href="/story" className="text-white/80 hover:text-white transition-colors">Our Story</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Contact</h4>
              <p className="text-white/80 mb-2">hello@greenslumber.com</p>
              <p className="text-white/80 mb-2">+1 (800) 123-4567</p>
              <p className="text-white/80">123 Eco Street, Portland, OR 97205</p>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
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
