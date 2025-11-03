# Creating Navigation Menus From Scratch in Shopify

Don't have navigation yet? No problem! Here's how to create your entire menu system from scratch.

## Step 1: Access Navigation in Shopify Admin

1. Log in to your **Shopify Admin** dashboard
2. On the left sidebar, click **Online Store**
3. Click **Navigation**

You should see a page that says "Menus" at the top.

## Step 2: Create Your Main Menu

If you don't have a "Main menu" yet, let's create one:

1. Click the **Add menu** button
2. **Title:** Enter "Main menu" (exactly like this - it's important!)
3. Click **Save menu**

## Step 3: Add Your First Menu Item

Now let's add menu items to your Main menu:

### Example 1: Add "Special Projects"

1. Click **Add menu item**
2. **Name:** Special Projects
3. **Link:** You can link to:
   - A collection: Click "Link" dropdown → Collections → Select a collection
   - A page: Click "Link" dropdown → Pages → Select a page
   - Or type a custom URL like `/pages/special-projects`
4. Click **Add**

### Example 2: Add "Accessories" with Dropdown Items

**Step A: Add the main item**
1. Click **Add menu item**
2. **Name:** Accessories
3. **Link:** /collections/accessories (or select from Collections)
4. Click **Add**

**Step B: Add dropdown items under Accessories**
1. Click **Add menu item** again
2. **Name:** Floor Mats
3. **Link:** /collections/floor-mats (or select collection)
4. **Before clicking Add**, drag the item slightly to the RIGHT
   - You'll see it indent under "Accessories"
   - This creates the dropdown!
5. Click **Add**

6. Repeat for more dropdown items:
   - Seat Covers
   - Steering Wheels
   - Shift Knobs
   - Car Covers

### Example 3: Add "Brakes" with Dropdown

1. Click **Add menu item**
2. **Name:** Brakes
3. **Link:** /collections/brakes
4. Click **Add**

5. Add dropdown items (indent them to the right):
   - Brake Pads → /collections/brake-pads
   - Brake Rotors → /collections/brake-rotors
   - Brake Calipers → /collections/brake-calipers
   - Brake Lines → /collections/brake-lines
   - Brake Kits → /collections/brake-kits

## Step 4: Complete Menu Structure

Here's a recommended full menu structure for an automotive parts store:

```
Main Menu
│
├── Special Projects
│
├── Accessories
│   ├── Floor Mats
│   ├── Seat Covers
│   ├── Steering Wheels
│   └── Shift Knobs
│
├── Appearance
│   ├── Body Kits
│   ├── Spoilers
│   ├── Hood Vents
│   ├── Carbon Fiber
│   └── Decals & Wraps
│
├── Brakes
│   ├── Brake Pads
│   ├── Brake Rotors
│   ├── Brake Calipers
│   ├── Brake Lines
│   └── Brake Kits
│
├── Drivetrain
│   ├── Clutch Kits
│   ├── Differentials
│   ├── Driveshafts
│   └── Axles
│
├── Engine
│   ├── Air Intakes
│   ├── Exhaust Systems
│   ├── Turbo Kits
│   ├── Engine Internals
│   ├── Cooling
│   └── Fuel Systems
│
├── Electronics
│   ├── ECU Tuning
│   ├── Gauges
│   ├── Sensors
│   └── Wiring
│
├── Kits
│   ├── Performance Kits
│   ├── Stage Kits
│   └── Complete Builds
│
├── Suspension
│   ├── Coilovers
│   ├── Lowering Springs
│   ├── Sway Bars
│   ├── Control Arms
│   └── Bushings
│
├── Wheels
│   ├── Forged Wheels
│   ├── Cast Wheels
│   ├── Wheel Accessories
│   └── Lug Nuts
│
└── Services
    ├── Installation
    ├── Tuning
    └── Consultation
```

## Step 5: How to Create Collections (If You Don't Have Them)

If you don't have collections yet, you need to create them first:

1. Go to **Products > Collections**
2. Click **Create collection**
3. **Title:** Enter collection name (e.g., "Brake Pads")
4. **Description:** Add a description
5. **Collection type:**
   - **Manual:** You add products yourself
   - **Automated:** Products are added based on conditions
6. Click **Save**

Repeat this for each category you want (Brakes, Engine, Suspension, etc.)

## Step 6: Assign Menu to Your Theme

After creating your menu:

1. Go to **Online Store > Themes**
2. Click **Customize** on your active theme
3. Click on the **Header** section
4. Find the **Menu** setting
5. From the dropdown, select **Main menu**
6. Click **Save**

## Step 7: Test Your Navigation

1. Click **Preview** in the theme editor
2. Hover over menu items to see dropdowns
3. Make sure all links work correctly

## Quick Start Menu (Minimal Setup)

If you want to start simple, create just these items:

1. **Home** → /
2. **Shop All** → /collections/all
3. **New Arrivals** → /collections/new
4. **Sale** → /collections/sale
5. **About** → /pages/about
6. **Contact** → /pages/contact

You can always add dropdowns and more items later!

## Visual Tips for Menu Creation

### How to Create a Dropdown (Visual Guide)

**WRONG (no dropdown):**
```
- Brakes
- Brake Pads
- Brake Rotors
```
All items are at the same level = no dropdown

**CORRECT (with dropdown):**
```
- Brakes
    - Brake Pads  ← indented to the right
    - Brake Rotors  ← indented to the right
```
Child items are indented = dropdown created!

### Drag to Indent

When adding a menu item:
1. Type the name and select the link
2. **Before clicking "Add"**, use your mouse to **drag the item to the right**
3. You'll see it shift under the parent item
4. NOW click "Add"

## Common Issues & Solutions

### Issue: "I don't see Collections in the link dropdown"
**Solution:** You need to create collections first (Products > Collections)

### Issue: "Menu items aren't indenting"
**Solution:** Drag them BEFORE clicking "Add", not after

### Issue: "Navigation isn't showing on my site"
**Solution:** Make sure you've assigned the menu to your theme (Step 6)

### Issue: "Dropdowns aren't showing"
**Solution:** Make sure child items are properly indented under parent items

## Need Even More Help?

If you're stuck, you can:
1. **Use Shopify's default links** - Home, Catalog, Contact pages
2. **Start with 3-5 items** - Don't overwhelm yourself
3. **Add dropdowns later** - Get basic navigation working first

## What Happens After You Create Navigation?

Once you create your menu structure in Shopify, your Formula S themed navigation will automatically:
- ✅ Show your menu items in the header
- ✅ Display dropdowns with smooth animations
- ✅ Apply orange hover effects
- ✅ Center dropdowns below menu items
- ✅ Add the orange accent bar on hover

The theme does all the styling - you just need to create the menu structure!

---

**Ready to create your menu?** Follow steps 1-7 above and you'll have a professional navigation system in minutes! 🚀
