// src/app/products/[slug]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { 
  ArrowLeft,
  Star, 
  Check, 
  ShoppingCart, 
  Heart, 
  Share2,
  Shield, 
  Truck, 
  Award,
  Battery,
  Gauge,
  Weight,
  
  Zap,
  Eye,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Info,
  MessageCircle,
  ThumbsUp,
  Calendar,
  BookOpen
} from 'lucide-react';

// Import the product data from centralized location
import { PRODUCTS_DATA, getProductBySlug, getRelatedProducts,  } from '../../../lib/productData';

interface ProductCard {
  id: number;
  name: string;
  slug: string;
  originalPrice: number;
  salePrice: number;
  discount: string;
  image: string;
  features: string[];
  badge?: string;
  category: string;
  rating: number;
  reviewCount: number;
  specifications: {
    motor: string;
    battery: string;
    range: string;
    speed: string;
    weight: string;
    wheelSize: string;
    foldable: boolean;
  };
  description: string;
  keyFeatures: string[];
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
}

const ProductPage: React.FC = () => {
  const params = useParams();
  const [product, setProduct] = useState<ProductCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock reviews data
  const reviews: Review[] = [
    {
      id: 1,
      name: "Alex Johnson",
      rating: 5,
      date: "2024-01-15",
      title: "Perfect for college campus!",
      content: "This bike has transformed my daily commute to classes. The battery life is excellent and it folds up perfectly for my dorm room. Highly recommend!",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: "Sarah Kim",
      rating: 4,
      date: "2024-01-10",
      title: "Great value for money",
      content: "Really happy with this purchase. The build quality is solid and it's much faster than walking to class. Only minor issue is the seat could be more comfortable for longer rides.",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: "Mike Chen",
      rating: 5,
      date: "2024-01-05",
      title: "Exceeded expectations",
      content: "The range is actually better than advertised. I can go for days without charging. The folding mechanism is smooth and the overall design is really sleek.",
      verified: true,
      helpful: 15
    }
  ];

  useEffect(() => {
    if (params.slug) {
      // Find product by slug using utility function
      const foundProduct = getProductBySlug(params.slug as string);
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Product not found, redirect to 404
        notFound();
      }
      setLoading(false);
    }
  }, [params.slug]);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    // Handle add to cart logic
    console.log(`Added ${quantity} of ${product?.name} to cart`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-yellow-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/back-to-school" className="text-gray-500 hover:text-yellow-600">Back to School</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link 
          href="/back-to-school#products" 
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Main Product Section */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center">
              <img className='object-cover group-hover:scale-110 transition-transform duration-500' 
                   src={product.image} alt={product.name} />
              </div>
              
              {/* Sale Badge */}
              {/* <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                {product.discount}
              </div> */}

              {/* Action Icons */}
              {/* <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full shadow-lg transition-colors ${
                    isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-50">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-50">
                  <Eye className="w-5 h-5" />
                </button>
              </div> */}
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {[...Array(4)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-yellow-400' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              {product.badge && (
                <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mb-4">
                  {product.badge}
                </div>
              )}
              <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-4xl font-bold text-black">${product.salePrice}</span>
                <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                  Save ${product.originalPrice - product.salePrice}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {product.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 hover:bg-gray-50 rounded-l-lg"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 hover:bg-gray-50 rounded-r-lg"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Add to Cart - ${(product.salePrice * quantity).toLocaleString()}
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="border-2 border-black text-black py-3 px-6 rounded-lg font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </button>
                <button className="border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask Question
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">2-Year Warranty</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Free Shipping</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-200">
          {/* Tab Navigation */}
          <nav className="flex space-x-8 py-6">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'reviews', label: `Reviews (${reviews.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 border-b-2 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'border-yellow-400 text-yellow-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Product Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {product.description} This electric bike combines cutting-edge technology with 
                    practical design, making it the perfect choice for students and urban commuters 
                    who demand both performance and convenience.
                  </p>
                </div>

                {/* Feature Highlights */}
                <div>
                  <h4 className="text-xl font-bold text-black mb-6">What Makes It Special</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">{feature}</h5>
                          <p className="text-gray-600 text-sm">
                            Advanced feature designed for optimal performance and user experience.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Usage Scenarios */}
                <div>
                  <h4 className="text-xl font-bold text-black mb-6">Perfect For</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Students</h5>
                      <p className="text-gray-600 text-sm">Perfect for campus commuting and getting to classes on time.</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Commuters</h5>
                      <p className="text-gray-600 text-sm">Ideal for daily work commutes and urban transportation.</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Enthusiasts</h5>
                      <p className="text-gray-600 text-sm">Great for recreational rides and weekend adventures.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Technical Specifications</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Motor & Performance */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                        Motor & Performance
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Motor</span>
                          <span className="font-medium text-gray-900">{product.specifications.motor}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Max Speed</span>
                          <span className="font-medium text-gray-900">{product.specifications.speed}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Range</span>
                          <span className="font-medium text-gray-900">{product.specifications.range}</span>
                        </div>
                      </div>
                    </div>

                    {/* Battery & Charging */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Battery className="w-5 h-5 text-yellow-400 mr-2" />
                        Battery & Charging
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Battery</span>
                          <span className="font-medium text-gray-900">{product.specifications.battery}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Charging Time</span>
                          <span className="font-medium text-gray-900">4-6 hours</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Battery Life</span>
                          <span className="font-medium text-gray-900">800+ cycles</span>
                        </div>
                      </div>
                    </div>

                    {/* Physical Specs */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Weight className="w-5 h-5 text-yellow-400 mr-2" />
                        Physical Specifications
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Weight</span>
                          <span className="font-medium text-gray-900">{product.specifications.weight}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Wheel Size</span>
                          <span className="font-medium text-gray-900">{product.specifications.wheelSize}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Foldable</span>
                          <span className="font-medium text-gray-900">
                            {product.specifications.foldable ? 'Yes' : 'No'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Info className="w-5 h-5 text-yellow-400 mr-2" />
                        Additional Features
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Brakes</span>
                          <span className="font-medium text-gray-900">Disc Brakes</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Display</span>
                          <span className="font-medium text-gray-900">LED Display</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Lighting</span>
                          <span className="font-medium text-gray-900">LED Front & Rear</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {/* Reviews Summary */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-black mb-2">{product.rating}</div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-6 h-6 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">Based on {product.reviewCount} reviews</p>
                    </div>
                    
                    {/* Rating Breakdown */}
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 w-3">{stars}</span>
                          <Star className="w-4 h-4 text-yellow-400" />
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 8 : stars === 2 ? 2 : 0}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '8%' : stars === 2 ? '2%' : '0%'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-black">Customer Reviews</h4>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                      Write a Review
                    </button>
                  </div>

                  {reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h5 className="font-semibold text-gray-900">{review.name}</h5>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h6 className="font-semibold text-gray-900 mb-2">{review.title}</h6>
                      <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>
                      
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">Helpful ({review.helpful})</span>
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 text-sm">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">You Might Also Like</h3>
            <p className="text-gray-600">Discover other great e-bikes perfect for students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getRelatedProducts(product.id, 3).map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Product Image */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                    <div className="text-center group-hover:scale-110 transition-transform">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-black" />
                      </div>
                      <p className="text-gray-600 font-medium">{relatedProduct.name}</p>
                    </div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {relatedProduct.discount}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors">
                        {relatedProduct.name}
                      </h4>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">{relatedProduct.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-2xl font-bold text-black">${relatedProduct.salePrice}</span>
                      <span className="text-lg text-gray-500 line-through">${relatedProduct.originalPrice}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{relatedProduct.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{relatedProduct.category}</span>
                      <div className="flex items-center text-yellow-600 text-sm font-medium">
                        View Details
                        <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Sticky Add to Cart Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-black">${product.salePrice}</div>
            <div className="text-sm text-gray-500 line-through">${product.originalPrice}</div>
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;