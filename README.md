# Virtual Try-On E-Commerce System

A full-stack online fashion store with **AI-powered virtual try-on**. Shoppers can browse clothing, preview how items look on themselves using generative AI, manage a cart, and complete checkout. A separate **admin dashboard** handles product catalog and order management.

---

## About the Project

This application combines a modern e-commerce storefront with a virtual fitting room experience. On any product page, users can upload a full-body photo and generate a realistic preview of themselves wearing that item—powered by **Google Gemini** image generation. The rest of the platform covers standard shop flows: user accounts, persistent carts, product discovery, and order placement with multiple payment options.

The codebase is split into three apps that work together:

| App | Role | Default URL |
|-----|------|-------------|
| **frontend** | Customer-facing shop | `http://localhost:5173` |
| **backend** | REST API & business logic | `http://localhost:4000` |
| **admin** | Store management panel | `http://localhost:5174` |

---

## Features

### Customer storefront (`frontend`)

- **Home page** — Hero section, latest collection, bestsellers, policies, newsletter signup
- **Product catalog** — Browse collection with category/subcategory filters and sorting
- **Product details** — Image gallery, size selection, add to cart, related products
- **Virtual try-on** — Upload your photo and generate an AI try-on image for the selected product
- **Search** — Product search bar across the catalog
- **Shopping cart** — Size-based quantities, cart totals, delivery fee
- **User authentication** — Register and login with JWT-backed sessions
- **Checkout** — Delivery address form with payment method selection
- **Orders** — View order history when logged in
- **Static pages** — About and Contact

### Admin dashboard (`admin`)

- **Secure admin login** — JWT authentication for store administrators
- **Add products** — Name, description, price, category, subcategory, sizes, bestseller flag, up to 4 images
- **Product list** — View and remove products from the catalog
- **Order management** — View all customer orders and update order status

### Backend API (`backend`)

- User registration, login, and admin login
- Product CRUD (admin) and public product listing
- Cart sync for logged-in users
- Order placement: **Cash on Delivery (COD)** and **Stripe Checkout**
- Virtual try-on endpoint using uploaded person image + clothing reference
- Image uploads to **Cloudinary**
- Data persistence in **MongoDB**

---

## Tech Stack

### Frontend & Admin

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI library |
| [Vite 7](https://vitejs.dev/) | Build tool & dev server |
| [React Router 7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [Axios](https://axios-http.com/) | HTTP client |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Notifications |

### Backend

| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express 5](https://expressjs.com/) | REST API framework |
| [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) | Database & ODM |
| [JWT](https://jwt.io/) | Authentication tokens |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing |
| [Multer](https://www.npmjs.com/package/multer) | Multipart file uploads |
| [Cloudinary](https://cloudinary.com/) | Product image hosting |
| [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) | Virtual try-on (Gemini) |
| [Stripe](https://stripe.com/) | Online payments |
| [Razorpay](https://razorpay.com/) | Payment SDK (dependency present; integration partially stubbed) |
| [CORS](https://www.npmjs.com/package/cors) | Cross-origin API access |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment configuration |

### AI virtual try-on

- Model: **Gemini 2.5 Flash Image** (`gemini-2.5-flash-image`)
- Flow: User photo + clothing image URL → generative model → base64 result image returned to the client

---

## Project Structure

```
virtual-try-on-System/
├── backend/
│   ├── config/          # MongoDB & Cloudinary setup
│   ├── controllers/     # Route handlers (user, product, cart, order, try-on)
│   ├── middleware/      # Auth, admin auth, multer upload
│   ├── models/          # Mongoose schemas (user, product, order)
│   ├── routes/          # API route definitions
│   └── server.js        # Express app entry point
├── frontend/
│   └── src/
│       ├── components/  # Navbar, Hero, TryOnModal, cart UI, etc.
│       ├── context/     # ShopContext (cart, auth, products)
│       └── pages/       # Home, Collection, Product, Cart, Login, ...
├── admin/
│   └── src/
│       ├── components/  # Login, Navbar, Sidebar
│       └── pages/       # Add, List, Orders
└── README.md
```

---

## Prerequisites

Before running the project locally, install:

- **Node.js** (v18 or newer recommended)
- **npm**
- A **MongoDB** database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Accounts/API keys for:
  - **Cloudinary** (product images)
  - **Google AI Studio** / Gemini API (virtual try-on)
  - **Stripe** (if using card checkout)
  - **Admin credentials** (configured via environment variables)

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd virtual-try-on-System
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `backend/.env` file with your secrets (do not commit this file):

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string

# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret

# Auth
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

# Virtual try-on
GEMINI_API_KEY=your_gemini_api_key

# Payments (Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the API server:

```bash
npm run server
# or: npm start
```

The API runs at **http://localhost:4000** by default.

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the shop:

```bash
npm run dev
```

Opens at **http://localhost:5173**.

### 4. Admin panel setup

```bash
cd admin
npm install
```

Create `admin/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin app:

```bash
npm run dev
```

Opens at **http://localhost:5174**. Log in with the `ADMIN_EMAIL` and `ADMIN_PASSWORD` from your backend `.env`.

---

## API Overview

Base URL: `http://localhost:4000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/user/register` | Register customer |
| POST | `/api/user/login` | Customer login |
| POST | `/api/user/admin` | Admin login |
| GET | `/api/product/list` | List all products |
| POST | `/api/product/single` | Get one product |
| POST | `/api/product/add` | Add product (admin + images) |
| POST | `/api/product/remove` | Remove product (admin) |
| POST | `/api/cart/get` | Get user cart |
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/cart/update` | Update cart |
| POST | `/api/order/place` | Place COD order |
| POST | `/api/order/stripe` | Create Stripe checkout session |
| POST | `/api/order/verifyStripe` | Verify Stripe payment |
| POST | `/api/order/userorders` | User order history |
| POST | `/api/order/list` | All orders (admin) |
| POST | `/api/order/status` | Update order status (admin) |
| POST | `/api/try-on` | Virtual try-on (multipart: person image) |

Protected routes expect a `token` header with a valid JWT.

---

## How Virtual Try-On Works

1. User opens a **product page** and clicks **TRY ON**.
2. A modal prompts them to upload a clear full-body photo.
3. The frontend sends the image to `POST /api/try-on` along with the product clothing image reference.
4. The backend uses **Google Generative AI** to composite the garment onto the person realistically.
5. The generated image is returned and displayed in the modal.

---

## Payment Methods

| Method | Status |
|--------|--------|
| **Cash on Delivery (COD)** | Fully implemented |
| **Stripe** | Checkout session + verify flow |
| **Razorpay** | UI option on checkout; backend handler is a placeholder |

---

## Production Build

```bash
# Frontend
cd frontend && npm run build

# Admin
cd admin && npm run build

# Backend
cd backend && npm start
```

Serve the built `frontend/dist` and `admin/dist` with any static host, and point `VITE_BACKEND_URL` to your deployed API.

---

## Security Notes

- Never commit `.env` files or API keys to version control.
- Use strong `JWT_SECRET` and unique admin credentials in production.
- Restrict CORS and admin routes when deploying publicly.
- Rotate Cloudinary, Gemini, and Stripe keys if they are ever exposed.

---

## License

This project is provided as-is for educational and portfolio use. Add a license file if you plan to open-source or distribute it.

---

## Author

Developed as a virtual try-on e-commerce system combining modern web tooling with generative AI for an enhanced shopping experience.
