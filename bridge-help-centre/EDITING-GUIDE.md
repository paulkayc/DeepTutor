# Editing the website — a guide for staff

You can change the website yourself in an online editor called **Pages CMS**. No coding is needed.
Every time you click **Save**, the live website (www.thebridgehelpcentre.org) updates itself in about
**2 minutes**.

## What you can change

| In the editor | What it changes on the website |
| --- | --- |
| **Upcoming programmes** | Events on the Home page (date, flyer, slideshow, speaker, registration form) |
| **Gallery** | Photos in "Moments from Our Work" on the Home page |
| **About Us and Director** | Meet Our Director (Home), Our Story, Vision, Mission and Our Team (About Us) |
| **Contact details, hours and bank details** | Phone/WhatsApp, email, opening hours, address, forms, bank details, social media links |
| **Impact numbers** | The counting numbers on the Home page |
| **Home page top photo** | The big photo at the top of the Home page |
| **Home page text** | Headline, paragraphs, button, quote, Our Impact heading and photo, section headings |
| **Page names, footer and contact band** | Page names in the menu, the big title on each page, the pink "Let's walk this journey together" band and the footer |
| **Our Services** | The service cards on the Home page, the Our Programmes page and the footer |
| **Extra pages** | New pages you build yourself from blocks (text, photos, buttons…) |
| **Home page extra sections** | Extra blocks on the Home page, below "Moments from Our Work" |

Changes to colours or the layout of the existing pages need a developer or Claude.

## Signing in (first time)

1. Go to **https://app.pagescms.org**.
2. Click **Sign in with GitHub** and sign in with your GitHub account. (If you don't have one, create a
   free account at github.com first and ask the website owner to add you to the repository.)
3. Allow Pages CMS when GitHub asks.
4. Choose the **bridge-help-centre** repository, then the **main** branch.
5. The menu on the left shows the sections listed above.

## Everyday tasks

### Add an upcoming programme
1. Click **Upcoming programmes**.
2. Click the **Add** button (+) at the bottom of the list.
3. Fill in the title, date, time, location and a short description.
4. Under **Main image or flyer**, click to upload the flyer from your computer or phone.
5. Optional: add the Google Form link so people can register.
6. Click **Save** (top right).

Past programmes disappear from the website by themselves the day after they happen, so you don't need
to delete them. The first programme that has **Slideshow images** is shown as a slideshow; any other
upcoming programmes appear as cards below it.

### Add a photo to the gallery
1. Click **Gallery**, then the **Add** button (+).
2. Upload the photo.
3. Describe the photo in one sentence (for example "Students listening during a school outreach").
   Blind visitors hear this description.
4. Add a short caption if you like, and choose a category.
5. Click **Save**.

The Home page shows the first 8 photos. To change the order, drag the photos up or down the list.

### Change a phone number, email, opening hours or bank details
1. Click **Contact details, hours and bank details**.
2. Change the text you need.
3. Click **Save**.

### Add a new page
1. Click **Extra pages**, then **Add an entry** (or **New**).
2. Type the **Page title**, for example "Holiday Camp 2026". The title becomes the web address:
   www.thebridgehelpcentre.org/holiday-camp-2026/
3. Leave **Show this page on the website** switched on. Tick **Show in the top menu** if it should
   appear at the top (up to 2 extra pages fit there; every page is listed at the bottom of the site).
4. Under **Page content**, click **Add** and choose a block: Heading, Text, Photo, Photo beside text,
   Photo gallery, Quote, Buttons or Video link. Add as many as you like and drag them into order.
5. Click **Save**. After about 2 minutes the page is live.

Open **Example page** in the list to see every kind of block. It is switched off, so it never shows
on the website. To hide a page without deleting it, switch off **Show this page on the website**.

### Add a section to the Home page
Click **Home page extra sections**, add blocks the same way, and click **Save**. They appear below
"Moments from Our Work".

### Writing in a Text block
- Leave an empty line to start a new paragraph.
- Start a line with `- ` to make a bullet point.
- Put `**two stars**` around words to make them **bold**.
- Web addresses and email addresses become clickable by themselves.

## Good to know

- **Photos:** upload them as they are, even straight from a phone. The website shrinks and turns them
  automatically so pages stay fast. Only use photos of children when you have permission.
- **Describe every photo.** The "Describe the photo" boxes matter for people who use screen readers.
- **Nothing breaks the live site.** If something goes wrong while the website rebuilds, the previous
  version stays online.
- **Undo a change:** in Netlify, open **Deploys**, click an earlier version, and click **Publish deploy**.
  GitHub also keeps every past version of every file.
- **Several people can edit,** but avoid editing the same section at the same time.
