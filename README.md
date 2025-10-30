# SOSF Website

Professional website for **Submissions of Success Foundation (SOSF)** - a non-profit organization empowering at-risk youth through combat sports and mentorship.

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Content**: JSON + MDX

## 📋 Features

- ✅ Mobile-first responsive design
- ✅ Dark theme with custom brand colors
- ✅ Reusable component library
- ✅ Content-driven architecture (JSON files)
- ✅ MDX support for rich content pages
- ✅ Hash-based routing
- ✅ Optimized images
- ✅ Professional non-profit design

## 🎨 Brand Colors

- **Dark Charcoal** (#171717) - Background
- **Soft Off-White** (#F2EEE9) - Text
- **Warm Sand** (#C7A995) - Headings
- **Vivid Red** (#E53935) - Accents
- **Neutral Gray** (#3A3A3A) - Borders

## 📁 Project Structure

```
sosf-site/
├── content/                 # Editable content
│   ├── site.json           # Site metadata & navigation
│   ├── theme.json          # Color theme
│   ├── home.json           # Homepage content
│   ├── faq.json            # FAQ content
│   ├── partners.json       # Partner gym list
│   └── pages/              # MDX content pages
│       ├── about.mdx
│       ├── programs.mdx
│       ├── how-it-works.mdx
│       ├── donate.mdx
│       ├── volunteers.mdx
│       ├── success-stories.mdx
│       ├── safeguards.mdx
│       ├── resources.mdx
│       ├── find-a-gym.mdx
│       └── contact.mdx
├── public/
│   └── images/             # Brand assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   ├── Stat.tsx
│   │   ├── MDXPage.tsx
│   │   └── ResponsiveImage.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.ts
│   ├── lib/                # Utilities
│   │   └── content.ts
│   ├── styles/             # Global styles
│   │   └── globals.css
│   ├── App.tsx             # Main app & routing
│   └── main.tsx            # Entry point
└── ...config files
```

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Management

All content is editable through JSON files in the `content/` directory:

### Update Site Information

Edit `content/site.json` to change:
- Organization name and tagline
- Contact information
- Navigation menu
- Social media links

### Modify Homepage

Edit `content/home.json` to update:
- Hero section text and CTA
- Feature sections
- Statistics

### Edit Pages

MDX files in `content/pages/` can be edited with standard Markdown syntax plus React components.

### Change Theme Colors

Edit `content/theme.json` to customize the color scheme.

## 🎯 Navigation

The site uses hash-based routing:

- `/` - Home
- `/#/about` - About SOSF
- `/#/programs` - Programs
- `/#/how-it-works` - How It Works
- `/#/donate` - Donate
- `/#/volunteers` - Get Involved
- `/#/contact` - Contact
- `/#/success-stories` - Success Stories
- `/#/safeguards` - Safety & Safeguards
- `/#/resources` - Resources
- `/#/find-a-gym` - Find a Partner Gym

## 🖼️ Images

Add images to `public/images/`. The following images are used:

- `logo.jpg` - Organization logo
- `hero.jpg` - Homepage hero image
- `ProgramsAndInitiatives.jpeg` - Programs section
- `getInvolved.jpeg` - Get Involved section
- `callToAction.jpeg` - Donate section

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Add New Components

Create new components in `src/components/` following the existing patterns.

### Add New Pages

1. Create a new route in `App.tsx`
2. Add navigation link in `content/site.json`
3. Create content in `content/pages/` or as a new page component

### Styling

Use Tailwind utility classes and the custom classes defined in `globals.css`:
- `.h1`, `.h2` - Heading styles
- `.lead` - Lead paragraph
- `.btn`, `.btn-primary`, `.btn-outline` - Button styles
- `.card` - Card container
- `.section` - Section spacing
- `.container` - Max-width container

## 🤝 Contributing

This is a non-profit organization website. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Submissions of Success Foundation.

## 🆘 Support

For questions or issues with the website, contact:
- Email: info@sosf.org
- Phone: (555) 555-5555

---

Built with ❤️ for youth empowerment through combat sports.

