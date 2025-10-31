# 🚀 Brand Features Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Upload Theme (2 min)
1. Go to Shopify Admin → **Online Store** → **Themes**
2. Click **Add theme** → **Upload zip file**
3. Upload `shopify-car-parts-theme-with-brands.zip`
4. Click **Publish** when ready

### Step 2: Create Brand Metafield (1 min)
1. Go to **Settings** → **Custom data** → **Products**
2. Click **Add definition**
3. Set:
   - Name: `Brand`
   - Namespace: `product_specs`
   - Key: `brand`
   - Type: Single line text
4. Save

### Step 3: Add Brands to Products (2 min)
Choose one method:

**Quick Method (CSV)**:
1. Export products
2. Add column: `metafield.product_specs.brand`
3. Fill in brand names (NISMO, HKS, etc.)
4. Import CSV

**Manual Method**:
1. Edit each product
2. Scroll to Metafields
3. Enter brand name in "Brand" field
4. Save

### Step 4: Enable Brand Navigation (30 sec)
1. Go to **Online Store** → **Customize**
2. Click **Header** section
3. Check ✅ **Show 'Shop by Brand' in Navigation**
4. Save

### Done! ✨

Your theme now has:
- ✅ Dynamic brand filtering
- ✅ Brand A-Z sorting
- ✅ Brand dropdown menu
- ✅ Dedicated brand pages

---

## 🎯 4 Brand Features at a Glance

### 1️⃣ Brand Filter Sidebar
**Where**: Left sidebar on collection pages
**What**: Checkbox list of all brands
**Action**: Automatically appears when products have brands

### 2️⃣ Brand Sorting
**Where**: "Sort by" dropdown on collections
**What**: "Brand: A-Z" and "Brand: Z-A" options
**Action**: Automatically available on all collection pages

### 3️⃣ Brand Navigation Menu
**Where**: Header navigation bar
**What**: "Shop by Brand" dropdown
**Action**: Enable in Theme Customizer → Header

### 4️⃣ Brand Collection Template
**Where**: Collection template selector
**What**: Special brand showcase layout
**Action**:
1. Create a collection for the brand
2. In collection settings → Template
3. Select "collection.brand"

---

## 📝 Create Your First Brand Page (3 min)

### Example: NISMO Brand Page

1. **Create Collection**
   - Go to Products → Collections → Create
   - Name: "NISMO"
   - Type: Automated

2. **Set Condition**
   - Add condition: Product metafield
   - Select: `product_specs.brand`
   - Condition: is equal to
   - Value: `NISMO`

3. **Add Brand Logo**
   - Upload collection image (NISMO logo)
   - Recommended size: 300x300px

4. **Apply Brand Template**
   - In Template dropdown: Select "collection.brand"
   - Save

5. **Done!** Visit the collection to see your brand page with hero section

---

## 🎨 Matching Formula S Style

All brand features are pre-styled with:

✅ Dark backgrounds (#0a0a0a to #1a1a1a)
✅ Gold accents (#D4AF37)
✅ Uppercase typography
✅ Hover effects and glows
✅ Fully responsive design

No additional styling needed!

---

## 🧪 Quick Test Checklist

After setup, verify:

- [ ] Visit a collection page → See brand filter in sidebar
- [ ] Check multiple brands → Products filter correctly
- [ ] Use "Sort by" → See "Brand: A-Z" option
- [ ] Click header "Shop by Brand" → See dropdown menu
- [ ] Click a brand from menu → See filtered products
- [ ] Create brand collection → Apply brand template
- [ ] Visit brand collection → See hero with logo

---

## 📚 Full Documentation

For detailed information, see:

- **`BRAND_FEATURES_GUIDE.md`** (in theme folder)
  - Complete setup instructions
  - Troubleshooting
  - Advanced customization
  - Best practices

- **`BRAND_ENHANCEMENTS_SUMMARY.md`** (in theme folder)
  - Technical details
  - File changes
  - Design specs

---

## 💡 Pro Tips

### Tip 1: Consistent Brand Names
Use exact same spelling/capitalization everywhere:
- ✅ "NISMO" everywhere
- ❌ "nismo", "Nismo", "NISMO™" mixed

### Tip 2: Featured Brands
Create manual collections for your top 5-10 brands to have more control over:
- Featured products
- Custom descriptions
- Special promotions

### Tip 3: Brand Logos
For best results with brand template:
- Use transparent PNG logos
- Size: 300x300px or larger
- Keep aspect ratio
- High quality images

### Tip 4: SEO
- Write unique descriptions for each brand collection
- Include brand name in collection title
- Add brand keywords naturally

---

## 🐛 Quick Troubleshooting

**Problem**: No brands in filter
**Fix**: Ensure products have `product_specs.brand` metafield filled

**Problem**: Brand nav not showing
**Fix**: Enable in Customizer → Header → Show 'Shop by Brand'

**Problem**: Brand template not available
**Fix**: Ensure theme is uploaded and published

**Problem**: Brands not sorting
**Fix**: Clear browser cache, check JavaScript console

---

## 🎉 You're Ready!

Your Shopify theme now has professional brand features like Formula S!

**Next Steps**:
1. Add brands to all products
2. Create brand collections
3. Enable brand navigation
4. Launch your store! 🚀

---

## 📞 Need Help?

Check these files in your theme folder:
- `BRAND_FEATURES_GUIDE.md` - Detailed guide
- `README.md` - General theme info
- `SETUP_GUIDE.md` - Initial setup
- `FEATURES.md` - All theme features

---

**Happy Selling! 🏁**
