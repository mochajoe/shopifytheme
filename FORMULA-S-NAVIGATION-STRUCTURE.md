# Formula S Navigation Structure - Complete Setup Guide

Your theme already has dropdown menus working! You just need to create the menu structure in Shopify to match Formula S.

## 📋 Formula S Navigation Structure

Based on https://formula-s.net/, here's their exact navigation:

### Main Categories (10 items):
1. Special Projects
2. Accessories
3. Appearance
4. Brakes
5. Drivetrain
6. Engine
7. Electronics
8. Kits
9. Suspension
10. Wheels

---

## 🎯 How to Create Formula S Style Dropdowns in Shopify

### Step 1: Go to Navigation

1. **Shopify Admin** → **Online Store** → **Navigation**
2. Click on **Main menu** (or create it if you don't have one)

### Step 2: Create Each Category with Dropdowns

Here's the exact structure for each category:

---

## 1️⃣ SPECIAL PROJECTS

**Main Item:**
- Name: `Special Projects`
- Link: `/collections/special-projects`

**No dropdown items** - this is a standalone category

---

## 2️⃣ ACCESSORIES

**Main Item:**
- Name: `Accessories`
- Link: `/collections/accessories`

**Dropdown Items** (indent these to the right):
- Floor Mats → `/collections/floor-mats`
- Mirrors → `/collections/mirrors`
- Seats → `/collections/seats`
- Steering Wheels → `/collections/steering-wheels`
- Shift Knobs → `/collections/shift-knobs`
- Car Covers → `/collections/car-covers`
- Key Chains → `/collections/key-chains`

---

## 3️⃣ APPEARANCE

**Main Item:**
- Name: `Appearance`
- Link: `/collections/appearance`

**Dropdown Items - Interior:**
- Interior → `/collections/interior`

**Dropdown Items - Exterior:**
- Bumpers → `/collections/bumpers`
- Aerodynamics → `/collections/aerodynamics`
- Lights → `/collections/lights`
- Emblems → `/collections/emblems`
- Body Kits → `/collections/body-kits`
- Hood Vents → `/collections/hood-vents`
- Spoilers → `/collections/spoilers`
- Carbon Fiber → `/collections/carbon-fiber`

---

## 4️⃣ BRAKES

**Main Item:**
- Name: `Brakes`
- Link: `/collections/brakes`

**Dropdown Items:**
- Brake Pads → `/collections/brake-pads`
- Brake Rotors → `/collections/brake-rotors`
- Brake Calipers → `/collections/brake-calipers`
- Brake Lines → `/collections/brake-lines`
- Master Cylinders → `/collections/master-cylinders`
- Brake Fluid → `/collections/brake-fluid`
- Brake Kits → `/collections/brake-kits`
- Brake Accessories → `/collections/brake-accessories`

---

## 5️⃣ DRIVETRAIN

**Main Item:**
- Name: `Drivetrain`
- Link: `/collections/drivetrain`

**Dropdown Items:**
- Clutch Kits → `/collections/clutch-kits`
- Flywheels → `/collections/flywheels`
- Differentials → `/collections/differentials`
- Driveshafts → `/collections/driveshafts`
- Axles → `/collections/axles`
- CV Joints → `/collections/cv-joints`
- Transmission Mounts → `/collections/transmission-mounts`

---

## 6️⃣ ENGINE

**Main Item:**
- Name: `Engine`
- Link: `/collections/engine`

**Dropdown Items:**
- Belts & Pulleys → `/collections/belts-pulleys`
- Cooling → `/collections/cooling`
- Exhaust → `/collections/exhaust`
- Filters → `/collections/filters`
- Fuel Systems → `/collections/fuel-systems`
- Air Intake → `/collections/air-intake`
- Engine Internals → `/collections/engine-internals`
- Oil Management → `/collections/oil-management`
- Valve Covers → `/collections/valve-covers`
- Turbo Kits → `/collections/turbo-kits`
- Superchargers → `/collections/superchargers`

---

## 7️⃣ ELECTRONICS

**Main Item:**
- Name: `Electronics`
- Link: `/collections/electronics`

**Dropdown Items:**
- ECU Tuning → `/collections/ecu-tuning`
- Gauges → `/collections/gauges`
- Sensors → `/collections/sensors`
- Wiring → `/collections/wiring`
- Ignition Systems → `/collections/ignition-systems`
- Battery & Alternator → `/collections/battery-alternator`

---

## 8️⃣ KITS

**Main Item:**
- Name: `Kits`
- Link: `/collections/kits`

**Dropdown Items:**
- Performance Kits → `/collections/performance-kits`
- Stage 1 Kits → `/collections/stage-1-kits`
- Stage 2 Kits → `/collections/stage-2-kits`
- Stage 3 Kits → `/collections/stage-3-kits`
- Complete Builds → `/collections/complete-builds`

---

## 9️⃣ SUSPENSION

**Main Item:**
- Name: `Suspension`
- Link: `/collections/suspension`

**Dropdown Items:**
- Coilovers → `/collections/coilovers`
- Lowering Springs → `/collections/lowering-springs`
- Sway Bars → `/collections/sway-bars`
- Control Arms → `/collections/control-arms`
- Bushings → `/collections/bushings`
- Shocks & Struts → `/collections/shocks-struts`
- Suspension Arms → `/collections/suspension-arms`
- Camber Kits → `/collections/camber-kits`

---

## 🔟 WHEELS

**Main Item:**
- Name: `Wheels`
- Link: `/collections/wheels`

**Dropdown Items:**
- Center Caps → `/collections/center-caps`
- Lug Nuts → `/collections/lug-nuts`
- Tires → `/collections/tires`
- Titan-7 → `/collections/titan-7`
- Volk Racing → `/collections/volk-racing`
- Wheel Spacers → `/collections/wheel-spacers`
- Wheel Locks → `/collections/wheel-locks`

---

## 🛠️ Step-by-Step: How to Add Each Item

### Creating Main Categories:

1. Click **Add menu item**
2. **Name:** (e.g., "Brakes")
3. **Link:**
   - Click dropdown
   - Select "Collections"
   - Choose your collection (or type custom URL)
4. Click **Add**

### Creating Dropdown Items:

1. Click **Add menu item** again
2. **Name:** (e.g., "Brake Pads")
3. **Link:** Choose collection
4. **BEFORE CLICKING ADD:**
   - **Drag the item to the RIGHT**
   - It should indent under the parent category
   - You'll see it shift under "Brakes"
5. NOW click **Add**

### Visual Guide:

**CORRECT Structure (creates dropdown):**
```
Brakes (main)
    ↳ Brake Pads (indented)
    ↳ Brake Rotors (indented)
    ↳ Brake Calipers (indented)
```

**WRONG Structure (no dropdown):**
```
Brakes (main)
Brake Pads (not indented)
Brake Rotors (not indented)
```

---

## ⚡ Quick Start - Minimal Menu

If you want to start simple and add more later:

1. **Shop All** → `/collections/all`
2. **Brakes** → with 3-4 subcategories
3. **Engine** → with 3-4 subcategories
4. **Suspension** → with 3-4 subcategories
5. **Contact** → `/pages/contact`

Then expand over time!

---

## 🎨 What Your Dropdowns Will Look Like

Once you create this structure, your dropdowns will have:

✅ **Smooth fade-in animation** - 0.3s cubic-bezier easing
✅ **Orange underline on hover** - Appears on main items
✅ **Black background** - Matches Formula S style
✅ **White text** - Clean and readable
✅ **Orange accent bar** - 3px bar slides in on hover
✅ **Background highlight** - Subtle orange tint on hover
✅ **Centered positioning** - Dropdown appears centered below item
✅ **Clean separators** - Subtle lines between items

---

## 📝 Before You Start: Create Collections First!

**IMPORTANT:** You need to create collections before you can link to them.

### How to Create Collections:

1. Go to **Products** → **Collections**
2. Click **Create collection**
3. **Title:** (e.g., "Brake Pads")
4. **Description:** Add description
5. **Collection type:**
   - Manual: You add products manually
   - Automated: Products added by rules/tags
6. Click **Save**

Repeat for each category you want!

---

## 💡 Pro Tips

1. **Create collections first** - Then add them to navigation
2. **Use clear names** - "Brake Pads" not "BP-Collection"
3. **Match Formula S** - Use their exact category names
4. **Start simple** - Add 3-5 categories, then expand
5. **Test each dropdown** - Make sure indentation worked
6. **Use consistent URLs** - `/collections/brake-pads` format
7. **Add products** - Empty collections look bad

---

## 🚀 Your Dropdowns Are Ready!

Your theme **already has** all the dropdown features you need:
- ✅ Hover animations
- ✅ Orange styling
- ✅ Mobile support
- ✅ Smooth transitions
- ✅ Professional design

You just need to **create the menu structure** in Shopify!

---

## 🎯 Quick Checklist

- [ ] Create collections for each category
- [ ] Go to Online Store > Navigation
- [ ] Create or edit Main menu
- [ ] Add 10 main categories (or start with 5)
- [ ] Add dropdown items (remember to indent!)
- [ ] Save menu
- [ ] Go to theme customizer
- [ ] Assign Main menu to header
- [ ] Save and preview
- [ ] Test all dropdowns work
- [ ] Launch!

---

**Your theme is ready - just build the menu structure!** 🎉

The dropdowns will work automatically with the Formula S black & orange styling you wanted!
