"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { formatCurrency } from '@/utils/currency';

interface CategoryClientProps {
  products: any[];
  slug: string;
}

const SORTS = [
  { value: "recommended", label: "Anbefalt" },
  { value: "new", label: "Nyheter" },
  { value: "price-asc", label: "Pris: Lav–Høy" },
  { value: "price-desc", label: "Pris: Høy–Lav" },
];

export default function CategoryClient({ products, slug }: CategoryClientProps) {
  const [sort, setSort] = useState("recommended");
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  
  const categories = ['Alle', 'Fete dekk', 'Gjennomgang', 'Last og familie', 'Sammenleggbar', 'Pendling', 'Terrengsykkel'];
  const showFilters = slug === 'dyu' || slug === 'jobo';
  
  // Map slugs to proper Norwegian display names
  const categoryDisplayNames: { [key: string]: string } = {
    'by-pendler': 'By og Pendler',
    'terreng': 'Terreng',
    'hybrid': 'Hybrid',
    'sammenleggbar': 'Sammenleggbar',
    'lastesykkel': 'Lastesykkel',
    'fatbike': 'Fatbike'
  };

  // Map Norwegian categories to English product categories
  const categoryMap: { [key: string]: string } = {
    'Alle': 'all',
    'Fete dekk': 'fat tire',
    'Gjennomgang': 'step-thru', 
    'Last og familie': 'cargo & family',
    'Sammenleggbar': 'foldable',
    'Pendling': 'commuting',
    'Terrengsykkel': 'mtb'
  };

  const perPage = 24;

  const filteredProducts = useMemo(() => {
    if (!showFilters || selectedCategory === 'Alle') {
      return products;
    }
    const englishCategory = categoryMap[selectedCategory];
    if (!englishCategory) {
      return products;
    }
    return products.filter(product => 
      product.category.some((cat: string) => 
        cat.toLowerCase() === englishCategory.toLowerCase()
      )
    );
  }, [products, selectedCategory, showFilters, categoryMap]);

  const total = filteredProducts.length;

  const sortedProducts = useMemo(() => {
    let arr = [...filteredProducts];
    if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
    if (sort === "new") arr.reverse();
    return arr.slice((page - 1) * perPage, page * perPage);
  }, [sort, page, filteredProducts]);

  return (
    <main className="bg-white text-gray-900 mt-52 md:mt-36">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-2 py-3 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-black transition">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium">{categoryDisplayNames[slug] || slug.replace("-", " ")}</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-2 pt-6">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-center">
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black text-center sm:text-left">
            {categoryDisplayNames[slug] || slug.replace("-", " ")}
          </h1>
        </header>
      </section>

      {/* Product grid */}
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-2 mb-16">
        {/* Category Filter - Only show for DYU and JOBOBIKE */}
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
        
        <div className="mb-2 flex items-center justify-between text-sm text-gray-700">
          <div className="text-xs sm:text-sm">{total} produkter</div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden"
        >
          {sortedProducts.map((product) => (
            <li
              key={product.id}
              className="group rounded-xl sm:rounded-2xl border border-gray-200 p-2 sm:p-3 transition hover:border-black flex flex-col h-full"
            >
              <div className="relative mb-2 sm:mb-3">
                <Link href={`/products/${product.slug}`}>
                  <img
                    className="object-cover w-[85%] h-[85%] sm:w-full sm:h-full m-auto sm:m-0 rounded-lg sm:rounded-xl"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
              </div>

              <div className="space-y-1 flex-grow">
                <h3 className="text-xs sm:text-sm font-medium text-black group-hover:underline leading-tight h-8 sm:h-10 flex items-start">
                  <Link href={`/products/${product.slug}`} className="break-words line-clamp-2">
                    {product.name}
                  </Link>
                </h3>
                
                <div className="flex-1 min-w-0">
                  <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                    {formatCurrency(product.originalPrice)}
                  </span>

                  {product.features?.length && (
                    <ul className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-gray-700">
                      {product.features.slice(0, 2).map((f: string, i: number) => (
                        <li
                          key={i}
                          className="rounded-md border border-gray-200 px-1.5 sm:px-2 py-0.5 whitespace-nowrap"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-2 flex-shrink-0">
                <AddToCartButton
                  product={product}
                  className="w-full rounded-full border border-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition sm:text-white sm:bg-black sm:hover:border-black sm:hover:bg-gray-50 sm:hover:text-black whitespace-nowrap"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


