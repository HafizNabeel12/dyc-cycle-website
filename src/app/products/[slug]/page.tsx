// src/app/products/[slug]/page.tsx
import { getAllProductSlugs, getProductBySlug } from "@/lib/productData";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="  ">
      <ProductDetails product={product!} />
    </div>
  );
}
