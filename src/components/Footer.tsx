"use client";

import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Motta våre nyhetsbrev</h3>
            <p className="text-sm text-gray-600 mb-4">
              Få nyheter, tips og eksklusive tilbud rett i innboksen.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="E-post"
                className="w-full border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-yellow-400 transition">
                Meld inn
              </button>
            </div>
            <div className="flex gap-4 mt-5">
              <FaInstagram className="w-5 h-5 cursor-pointer text-gray-600 hover:text-yellow-500" />
              <FaTiktok className="w-5 h-5 cursor-pointer text-gray-600 hover:text-yellow-500" />
              <FaFacebook className="w-5 h-5 cursor-pointer text-gray-600 hover:text-yellow-500" />
              <FaPinterest className="w-5 h-5 cursor-pointer text-gray-600 hover:text-yellow-500" />
              <FaYoutube className="w-5 h-5 cursor-pointer text-gray-600 hover:text-yellow-500" />
              <FaXTwitter className="w-5 h-5 cursor-pointer text-gray-600 hover:text-yellow-500" />
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/faq" className="hover:text-yellow-500">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500">Kontakt oss</Link></li>
              <li><Link href="/returns" className="hover:text-yellow-500">Retur og reklamasjon</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Juridisk</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/privacypolicy" className="hover:text-yellow-500">Personvernerklæring</Link></li>
              <li><Link href="/terms" className="hover:text-yellow-500">Kjøpsvilkår</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Kontakt</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <HiOutlineEnvelope className="w-4 h-4 text-yellow-500" />
                support@sykkellageret.no
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="w-4 h-4 text-yellow-500" />
                +47 40 55 63 33
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBuildingOffice2 className="w-4 h-4 text-yellow-500" />
                Niels Juels Gate 70, Oslo, Norge
              </li>
              <li className="mt-3">
                <div className="text-gray-600 font-bold mb-1">Returadresse:</div>
                <div>Gromadzka 505-806 Sokołów, Polen</div>
              </li>
            </ul>
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-500">
          <div>
            © 2025 <span className="text-yellow-500 font-semibold">JALUT AI INNOSCRIBE</span>. Org nr: 932806517. Alle rettigheter forbeholdt.
          </div>
          <div className="flex gap-4">
            <img src="/images/vipps.png" alt="Vipps" className="h-6 object-contain" />
            <img src="/images/visa.png" alt="Visa" className="h-6 object-contain" />
            <img src="/images/mastercard.png" alt="Mastercard" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
