# Formula S Style Hero Banner - Update

## 🏎️ Premium Automotive Hero Design

Your hero banner has been completely redesigned to match the **premium, minimalist aesthetic** of formula-s.net!

---

## ✨ What Changed

### 1. **Full-Width Layout**
- **100% wide** - No containers, edge-to-edge
- **Larger canvas** - 700px default height (up to 800px)
- **Immersive** - Full-bleed imagery

### 2. **Clean, Bold Typography**
- **Massive headlines** - 7rem font size
- **Pure white text** - No gradients, clean and simple
- **Uppercase style** - Professional automotive feel
- **Minimal letter spacing** - Tighter, more modern

### 3. **Simple Overlay**
- **Clean dark overlay** - Adjustable 0-80% darkness
- **No gradients** - Just a single color overlay
- **Better readability** - Text pops against any image
- **Default 40%** - Perfect balance

### 4. **Formula S Style Button**
- **White background** - Bold, stands out
- **Black text** - High contrast
- **"SHOP NOW"** uppercase
- **Hover effect** - Inverts to transparent with white border
- **No rounded corners** - Sharp, angular edges

### 5. **Premium Image Treatment**
- **Higher resolution** - Supports up to 2400px wide
- **Responsive srcset** - Optimized for all devices
- **Full object-fit** - Always fills the space perfectly
- **Center positioned** - Key elements always visible

---

## 🎨 Design Comparison

### Before (Elegant Style):
- Gradient overlays
- Gradient text effects
- Cyan/pink accents
- Rounded buttons
- Complex effects

### After (Formula S Style):
- Clean dark overlay
- Pure white text
- Minimalist approach
- Sharp angular buttons
- Simple, bold

---

## ⚙️ Customization Options

### In Theme Customizer:

1. **Banner Image**
   - Upload high-res images (2400x900px recommended)
   - Full-width, no cropping

2. **Banner Height**
   - Medium: 600px
   - Large: 700px (default)
   - Extra Large: 800px

3. **Overlay Darkness**
   - Slider: 0-80%
   - Default: 40%
   - Lighter images need more overlay

4. **Text Alignment**
   - Left
   - Center (default)

5. **Heading**
   - Bold, uppercase
   - Displays at 7rem

6. **Subheading**
   - Clean, minimal
   - Smaller text below heading

7. **Button Text**
   - Default: "SHOP NOW"
   - Always uppercase

8. **Button URL**
   - Where the button links

---

## 📐 Layout Structure

```
┌──────────────────────────────────────────────┐
│                                              │
│     [Full-width Hero Image]                 │
│                                              │
│         BOLD HEADLINE TEXT                  │
│         Subtitle text                       │
│         [SHOP NOW]                          │
│                                              │
└──────────────────────────────────────────────┘
```

**Key Features:**
- Full viewport width
- Centered or left-aligned text
- Clean white button
- Simple dark overlay

---

## 🎯 Formula S Style Elements

### Typography:
- ✅ **Bold, uppercase headlines** - 7rem, 800 weight
- ✅ **Clean subheadings** - 2rem, 400 weight
- ✅ **White text only** - No colors, no gradients
- ✅ **Minimal spacing** - Tighter, modern feel

### Button Style:
- ✅ **White background + black text**
- ✅ **2px white border**
- ✅ **Uppercase + wide letter spacing**
- ✅ **Hover: Transparent bg + white text**
- ✅ **No border radius** (sharp corners)

### Image Treatment:
- ✅ **Full-width placement**
- ✅ **Clean dark overlay** (no gradients)
- ✅ **High-resolution support**
- ✅ **Responsive srcset**

### Overall Feel:
- ✅ **Minimalist sophistication**
- ✅ **Premium automotive culture**
- ✅ **Bold imagery focus**
- ✅ **Restrained typography**

---

## 📸 Recommended Images

### Best Image Types:
1. **High-end car photos**
   - Side profiles
   - 3/4 angle shots
   - Clean backgrounds

2. **Product photography**
   - Wheels/rims
   - Engine components
   - Performance parts

3. **Action shots**
   - Cars on track
   - Rolling shots
   - Dynamic angles

### Image Specs:
- **Resolution:** 2400x900px or larger
- **Aspect Ratio:** 8:3 (landscape)
- **Format:** JPG (optimized) or PNG
- **File Size:** Under 500KB for fast loading
- **Quality:** High-res, sharp focus
- **Subject:** Center or left-aligned for text space

### Overlay Tips:
- **Dark images:** 20-30% overlay
- **Medium images:** 40-50% overlay (default)
- **Bright images:** 60-80% overlay

---

## 🚀 Using Your New Hero Banner

### Step 1: Upload Image
1. Go to **Theme Customizer**
2. Click **Hero Banner** section
3. **Select image** → Upload high-res photo
4. Image automatically scales to full-width

### Step 2: Add Text
1. **Heading:** Your main message (e.g., "Premium Performance Parts")
2. **Subheading:** Supporting text (e.g., "For Honda S2000 & Nissan Skyline GT-R")
3. Keep it short and impactful!

### Step 3: Adjust Overlay
1. Find **"Image Overlay Darkness"** slider
2. Adjust until text is clearly readable
3. Default 40% works for most images

### Step 4: Set Button
1. **Button Text:** "SHOP NOW" (or customize)
2. **Button URL:** Where it should link (e.g., /collections/all)

### Step 5: Choose Height
1. **Medium (600px)** - Compact, less scroll
2. **Large (700px)** - Default, balanced
3. **Extra Large (800px)** - Maximum impact

---

## 💡 Pro Tips

### Text Readability:
- Use **darker overlay** for busy images
- Keep headlines **short** (3-5 words max)
- **Center alignment** works for most cases
- **Left alignment** better for portrait images

### Button Best Practices:
- Keep text **short** (2-3 words)
- Common options:
  - "SHOP NOW"
  - "EXPLORE"
  - "LEARN MORE"
  - "VIEW COLLECTION"

### Image Selection:
- Choose images with **negative space** for text
- Avoid busy/cluttered backgrounds
- Test on mobile - important elements should be centered
- Use professional automotive photography

### Performance:
- Optimize images before uploading
- Use tools like TinyPNG or ImageOptim
- Aim for under 300-400KB
- JPG usually better than PNG for photos

---

## 📱 Mobile Optimization

The hero automatically adapts:

**Desktop (>768px):**
- 700px height
- 7rem headline
- Full padding

**Tablet (768px):**
- 500px height
- 4rem headline
- Reduced padding

**Mobile (480px):**
- 400px height
- 3rem headline
- Compact spacing

---

## 🎨 Color Customization

While the Formula S style is minimalist, you can adjust:

### Text Colors:
Currently white (#ffffff) for maximum contrast. To change:
- Edit `sections/hero-banner.liquid`
- Find `.hero-banner__heading` color
- Change to your preferred color

### Button Colors:
Default white button with black text. To customize:
- `.hero-banner__cta` background
- `.hero-banner__cta` color
- `.hero-banner__cta:hover` for hover state

### Overlay Color:
Default black overlay. To change:
- Find `.hero-banner__overlay` background
- Change `rgba(0, 0, 0, ...)` to your color

---

## 🔄 Comparison to Other Styles

### Formula S Style (Current):
**Best for:**
- Premium automotive brands
- Minimalist aesthetics
- Bold product focus
- Professional presentations

**Features:**
- Clean overlays
- White buttons
- Bold typography
- Full-width images

### Previous Elegant Style:
**Best for:**
- Colorful brands
- Tech/modern feel
- Gradient effects
- Glowing accents

**Features:**
- Gradient overlays
- Gradient text
- Cyan accents
- Rounded buttons

---

## ✅ What You Get

Your new hero banner:
- ✨ **Formula S inspired design**
- 📐 **Full-width layout**
- 🎨 **Clean, minimalist style**
- 💪 **Bold typography**
- ⚡ **Fast loading**
- 📱 **Fully responsive**
- ⚙️ **Easy to customize**
- 🏎️ **Premium automotive feel**

---

## 🎯 Perfect For

This hero style is ideal for:
- ✅ Performance parts stores
- ✅ High-end automotive shops
- ✅ Premium wheel retailers
- ✅ JDM/tuner brands
- ✅ Luxury car accessories
- ✅ Professional racing parts

---

## 📦 What's Updated

**File:** `sections/hero-banner.liquid`

**Changes:**
- Complete redesign
- New layout structure
- Formula S style CSS
- White button styling
- Adjustable overlay
- Responsive breakpoints

**Theme Package:** `3-Cat-Garage-Elegant-Theme.zip` (52 KB)

---

Your hero banner now has the same premium, minimalist aesthetic as formula-s.net! 🏁

Bold imagery, clean typography, and a professional automotive feel that perfectly matches your high-performance parts store.

Need to adjust the overlay, change the height, or tweak the button? It's all customizable in the Theme Customizer! 🎨
