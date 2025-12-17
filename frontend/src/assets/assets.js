import logo from './logo.png'
import cart_icon from './cart_icon.svg'
import serach_icon from './search_icon.svg'
import profile_icon from './profile_icon.svg'
import menu_icon from './menu_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import hero_img from './hero_img.jpg'
import exchange_icon from './exchange_icon.svg'
import quality_icon from './quality_icon.svg'
import support_icon from './support_icon.svg'
import dropdown2_icon from './dropdown2_icon.svg'
import cross_icon from './cross_icon.svg'
import star_icon from './star_icon.svg'
import star_icon2 from './star_icon2.svg'
import bin_icon from './bin_icon.svg'

// Product Image Imports (Original 10)
import white_lace_dress from './im1.png'
import im111 from './im111.png'
import im112 from './im112.png'
import im113 from './im113.png'

import sequin_cocktail_dress from './im2.png'
import lime_green_one_shoulder_dress from './im3.png'
import royal_blue_velvet_dress from './im4.png'
import pink_tutu_dress from './im5.png'
import red_polka_dot_dress from './im6.png'
import black_slip_dress from './im7.png'
import striped_midi_dress from './im8.png'
import floral_mini_dress from './im9.png'
import denim_shift_dress from './im10.png'

// New Product Image Imports (im11 to im15)
import metallic_slip_dress from './im11.png' // New Dress 1
import emerald_satin_gown from './im12.png' // New Dress 2
import blush_floral_maxi from './im13.png' // New Dress 3
import strapless_bandage_mini from './im14.png' // New Dress 4
import geometric_print_midi from './im15.png' // New Dress 5

import stripe_logo from './stripe_logo.png'
import razaorpay_logo  from './Razorpay_logo.svg'
import d1 from './dev1.png'
import d2 from './dev2.png'


// ---

/**
 * Global Constants
 */
export const delivery_fee = 5; // Added the missing delivery_fee

// ---

/**
 * Asset Exports
 */
export const assets = {
    logo,
    cart_icon,
    serach_icon,
    profile_icon,
    menu_icon,
    dropdown_icon,
    hero_img,
    exchange_icon,
    quality_icon,
    support_icon,
    dropdown2_icon,
    cross_icon,
    star_icon,
    star_icon2,
    bin_icon,
    stripe_logo, 
    razaorpay_logo,
    d1,d2
}

// ---

/**
 * Product Data Array
 */
export const products = [
    // --- Existing 10 Products (bestseller: false/unchanged) ---
    {
        _id: "000001",
        name: "Women Floral Print Mini Dress",
        description: "Elegant white lace dress with long sleeves, perfect for a chic event.",
        price: 100,
        image: [white_lace_dress,im111,im112,im113],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "000002",
        name: "Women White Lace Cocktail Dress",
        description: "A sparkling long-sleeved dress in a rich burgundy sequin material.",
        price: 180,
        image: [sequin_cocktail_dress],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634400123,
        bestseller: false
    },
    {
        _id: "000003",
        name: "Women Burgundy Sequin Mini Dress",
        description: "A vibrant lime green one-shoulder mini dress with a puffy sleeve, making a bold statement.",
        price: 220,
        image: [lime_green_one_shoulder_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["XS", "S", "M"],
        date: 1716634450789,
        bestseller: false
    },
    {
        _id: "000004",
        name: "Women Royal Blue Velvet Dress",
        description: "A sophisticated dress with a white top and a floral blue skirt, perfect for elegant occasions.",
        price: 190,
        image: [royal_blue_velvet_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["S", "M", "L"],
        date: 1716634500321,
        bestseller: false
    },
    {
        _id: "000005",
        name: "Women Pink Tulle Ballet Skirt Dress",
        description: "A vibrant red and pink floral dress with a classic A-line silhouette.",
        price: 110,
        image: [pink_tutu_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["XS", "S", "M"],
        date: 1716634550987,
        bestseller: false
    },
    {
        _id: "000006",
        name: "Women Lime Green One-Shoulder Dress",
        description: "A fun and classic red mini dress adorned with playful black polka dots.",
        price: 160,
        image: [red_polka_dot_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["S", "M", "L"],
        date: 1716634600654,
        bestseller: false
    },
    {
        _id: "000007",
        name: "Women Red Polka Dot Mini Dress",
        description: "A playful dress featuring a black camisole top and a voluminous light pink tulle skirt.",
        price: 95,
        image: [black_slip_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["XS", "S", "M"],
        date: 1716634650210,
        bestseller: false
    },
    {
        _id: "000008",
        name: "Women Black Satin Slip Dress",
        description: "A chic dress with a high collar and a multicolored abstract pattern.",
        price: 130,
        image: [striped_midi_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["S", "M", "L"],
        date: 1716634700876,
        bestseller: false
    },
    {
        _id: "000009",
        name: "Women Striped Knit Midi Dress",
        description: "A comfortable dress with a blue and green abstract camouflage-like pattern.",
        price: 140,
        image: [floral_mini_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634750543,
        bestseller: false
    },
    {
        _id: "000010",
        name: "Women Denim Shift Dress",
        description: "An elegant, short-sleeved shift dress in a deep royal blue velvet.",
        price: 115,
        image: [denim_shift_dress],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["S", "M", "L"],
        date: 1716634800219,
        bestseller: false
    },

    // --- New 5 Products (bestseller: true) ---
    {
        _id: "000011",
        name: "Women Metallic Silver Slip Dress",
        description: "Liquid metallic slip dress, echoing the dominant opulent satin trends of 2025.",
        price: 280,
        image: [metallic_slip_dress],
        category: "Women",
        subCategory: "BDresses",
        sizes: ["XS", "S", "M"],
        date: 1716721200000, // Newer timestamp
        bestseller: true // Set to true
    },
    {
        _id: "000012",
        name: "Women Emerald Satin Midi Gown",
        description: "A luxurious satin gown in a rich jewel tone, perfect for evening wear and formal events.",
        price: 350,
        image: [emerald_satin_gown],
        category: "Women",
        subCategory: "BDresses",
        sizes: ["S", "M", "L"],
        date: 1716721201000,
        bestseller: true // Set to true
    },
    {
        _id: "000013",
        name: "Women Pastel Blush Flowy Maxi",
        description: "A breezy, feminine maxi dress in a blossom pink pastel, featuring ethereal, floral designs.",
        price: 175,
        image: [blush_floral_maxi],
        category: "Women",
        subCategory: "BDresses",
        sizes: ["M", "L", "XL"],
        date: 1716721202000,
        bestseller: true // Set to true
    },
    {
        _id: "000014",
        name: "Women Black Strapless Bodycon Mini",
        description: "A sleek, minimalist strapless mini dress with a contoured silhouette, embracing the noughties revival.",
        price: 195,
        image: [strapless_bandage_mini],
        category: "Women",
        subCategory: "BDresses",
        sizes: ["XS", "S", "M"],
        date: 1716721203000,
        bestseller: true // Set to true
    },
    {
        _id: "000015",
        name: "Women Abstract Geometric Print Midi",
        description: "A midi dress with a bold, artistic abstract pattern in modern, vibrant colors.",
        price: 155,
        image: [geometric_print_midi],
        category: "Women",
        subCategory: "BDresses",
        sizes: ["S", "M", "L"],
        date: 1716721204000,
        bestseller: true // Set to true
    }
]