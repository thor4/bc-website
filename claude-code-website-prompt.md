# Comprehensive Website Development Plan for bryanconklin.com

## Project Overview
Build a personal brand website for Bryan Conklin, PhD - Gen AI Specialist Solution Architect at AWS, focusing on Agentic AI and Computational Neuroscience-Inspired AI.

## Development Approach
Claude Code will handle this as a single comprehensive project with milestone tracking. The project will be stored in a Git repository with proper documentation and progress tracking.

---

## MASTER PROMPT FOR CLAUDE CODE

```
You are an expert full-stack developer building a personal brand website for Bryan Conklin, PhD. This website will serve dual audiences: technical practitioners ("Alex") and business leaders ("Brenda"). You'll create a production-ready site using modern best practices.

## PROJECT REQUIREMENTS DOCUMENT

### 1. Project Setup & Documentation
First, create the following project structure and documentation:

```
bryan-conklin-website/
├── README.md (project overview, setup instructions)
├── DEVELOPMENT_PLAN.md (detailed plan with checkboxes)
├── TECH_STACK.md (technology decisions and rationale)
├── CONTENT_STRATEGY.md (content organization and SEO strategy)
├── src/
├── public/
└── docs/
```

### 2. Development Plan (DEVELOPMENT_PLAN.md)
Create a comprehensive development plan with the following sections:

```markdown
# Development Plan for bryanconklin.com

## Phase 1: Foundation (Week 1)
- [ ] Initialize project with Astro 4.0
- [ ] Set up TypeScript with strict mode
- [ ] Configure Tailwind CSS with custom design tokens
- [ ] Implement dark mode with system preference detection
- [ ] Create base layout components
- [ ] Set up Git repository and version control
- [ ] Configure ESLint and Prettier
- [ ] Set up testing framework (Vitest)

## Phase 2: Design System (Week 1)
- [ ] Implement color palette (dark theme primary)
- [ ] Configure typography system (Inter + JetBrains Mono)
- [ ] Create reusable UI components
- [ ] Build responsive grid system
- [ ] Implement accessibility features (WCAG 2.1)
- [ ] Create component documentation

## Phase 3: Core Pages (Week 2)
- [ ] Homepage with dual-audience funnel
- [ ] About page with professional narrative
- [ ] Articles hub with filtering system
- [ ] Projects showcase with case studies
- [ ] Speaking/presentations archive
- [ ] Contact page with multiple pathways

## Phase 4: Content Management (Week 2)
- [ ] Markdown processing with syntax highlighting
- [ ] KaTeX integration for mathematical notation
- [ ] Interactive code examples system
- [ ] PDF viewer for presentations
- [ ] SEO metadata system
- [ ] RSS feed generation

## Phase 5: Advanced Features (Week 3)
- [ ] Newsletter subscription system
- [ ] Social media integration
- [ ] Analytics implementation
- [ ] Performance optimization
- [ ] Edge function deployment
- [ ] A/B testing framework

## Phase 6: Testing & Launch (Week 3)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Performance audit (Core Web Vitals)
- [ ] SEO audit and optimization
- [ ] Security headers configuration
- [ ] Production deployment
```

### 3. Technology Stack

**Core Framework**: Astro 4.0
- Zero JavaScript by default
- Island architecture for interactive components
- Excellent AI coding assistant compatibility
- Superior performance (95-100 Lighthouse scores)

**Styling**: Tailwind CSS
- Utility-first approach
- Dark mode support
- Consistent design system
- AI-friendly class names

**Interactive Components**: React (via Astro islands)
- For complex interactions only
- Lazy-loaded for performance
- TypeScript for type safety

**Content Management**: Markdown + MDX
- Frontmatter for metadata
- Shiki for syntax highlighting
- KaTeX for mathematical equations
- Mermaid for diagrams

**Deployment**: Vercel
- Optimal performance
- Edge functions support
- Analytics included
- Easy CI/CD integration

### 4. Design System Specifications

```css
/* Color Palette - Premium Dark Mode */
:root {
  /* Backgrounds */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #141414;
  --color-bg-tertiary: #1a1a1a;
  
  /* Text */
  --color-text-primary: rgba(255, 255, 255, 0.95);
  --color-text-secondary: rgba(255, 255, 255, 0.70);
  --color-text-tertiary: rgba(255, 255, 255, 0.50);
  
  /* Accent - Tech-forward mint green */
  --color-accent: #10b981;
  --color-accent-hover: #34d399;
  
  /* Semantic colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Borders */
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(255, 255, 255, 0.16);
}

/* Typography Scale */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Spacing Scale (8px base) */
--space-1: 0.5rem;
--space-2: 1rem;
--space-3: 1.5rem;
--space-4: 2rem;
--space-6: 3rem;
--space-8: 4rem;
--space-12: 6rem;
--space-16: 8rem;
```

### 5. Content Architecture

#### Homepage Structure
```
Hero Section
├── Headline: "Bridging AI Research and Real-World Impact"
├── Subheadline: "Gen AI Specialist architecting the future of autonomous systems"
├── Dual CTAs:
│   ├── "Explore Technical Deep Dives" → /articles?filter=technical
│   └── "Discover Business Applications" → /articles?filter=business
└── Social Proof: AWS badge, speaking engagements count

Featured Content Grid
├── Latest Technical Article
├── Recent Project Case Study
└── Upcoming Speaking Event

Newsletter Signup
└── "Join 1,000+ AI practitioners and business leaders"
```

#### Content Pillars
1. **Technical Deep Dives** (For "Alex")
   - Agentic system design patterns
   - Multi-agent orchestration
   - Computational neuroscience applications
   - Code tutorials with working examples

2. **Business Strategy** (For "Brenda")
   - AI ROI frameworks
   - Implementation roadmaps
   - Risk mitigation strategies
   - Industry-specific applications

3. **Case Studies** (Bridge content)
   - Executive summary (2-min read)
   - Technical deep dive (expandable)
   - Metrics and outcomes
   - Lessons learned

4. **Thought Leadership**
   - Future of agentic AI
   - Ethics and responsible AI
   - Industry predictions
   - Research commentary

### 6. SEO & Content Strategy

**Target Keywords** (based on specialization):
- Primary: "agentic AI architect", "multi-agent systems AWS"
- Secondary: "computational neuroscience AI", "autonomous AI systems"
- Long-tail: "how to build multi-agent AI systems", "agentic AI for enterprise"

**Content Calendar** (First 3 months):
- Week 1-2: "The Agentic AI Layered Model: A New Framework"
- Week 3-4: "From Soloist to Symphony: Multi-Agent Design Patterns"
- Week 5-6: "Computational Neuroscience Meets Enterprise AI"
- Week 7-8: "Building Production-Ready Agentic Systems on AWS"
- Week 9-10: "The Business Case for Autonomous AI Agents"
- Week 11-12: "Lessons from Deploying AI in Global Energy"

### 7. Implementation Instructions

**Step 1: Initial Setup**
```bash
# Create project
npm create astro@latest bryan-conklin-website -- --template minimal --typescript strict

# Add integrations
npx astro add tailwind react mdx sitemap

# Additional dependencies
npm install @astrojs/rss shiki @shikijs/transformers katex remark-math rehype-katex
npm install -D @types/katex vitest @testing-library/react
```

**Step 2: Create Base Layout** (src/layouts/BaseLayout.astro)
```astro
---
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
import SEO from '../components/SEO.astro';

export interface Props {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

const { title, description, image, article = false } = Astro.props;
---

<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <SEO title={title} description={description} image={image} article={article} />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>
<body class="bg-[--color-bg-primary] text-[--color-text-primary] font-sans antialiased">
  <Navigation />
  <main class="min-h-screen">
    <slot />
  </main>
  <Footer />
</body>
</html>
```

**Step 3: Create Homepage** (src/pages/index.astro)
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import FeaturedContent from '../components/FeaturedContent.astro';
import Newsletter from '../components/Newsletter.astro';
---

<BaseLayout 
  title="Bryan Conklin - Gen AI Architect | Agentic Systems Expert"
  description="AWS Gen AI Specialist architecting autonomous AI systems. Expert in multi-agent orchestration and computational neuroscience-inspired AI."
>
  <Hero />
  <FeaturedContent />
  <Newsletter />
</BaseLayout>
```

### 8. Testing Requirements

1. **Unit Tests**: Component functionality
2. **Integration Tests**: Page routing and data flow
3. **Visual Regression**: Screenshot comparisons
4. **Performance Tests**: Core Web Vitals monitoring
5. **Accessibility Tests**: WCAG 2.1 compliance
6. **SEO Tests**: Metadata and structured data validation

### 9. Content Migration Strategy

**From LinkedIn**:
- Professional summary → About page narrative
- Experience details → Project case studies
- Skills → Technical expertise section
- Recommendations → Testimonials

**From GitHub**:
- Repository descriptions → Project summaries
- README files → Technical documentation
- Contribution graph → Activity visualization
- Star counts → Social proof metrics

**From Presentations**:
- Slide decks → Interactive viewers
- Speaker notes → Blog expansions
- Q&A sections → FAQ content
- References → Resource library

### 10. Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: <1.0s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.0s
- Bundle size: <100KB initial

### 11. Progressive Enhancement Plan

**MVP (Week 1-2)**:
- Static site with core pages
- Basic responsive design
- Essential SEO setup
- Contact form

**Enhanced (Week 3-4)**:
- Newsletter integration
- Interactive code examples
- Advanced filtering
- Analytics

**Advanced (Month 2+)**:
- A/B testing
- Personalization
- AI chat assistant
- API endpoints

## EXECUTION INSTRUCTIONS

1. Create all documentation files first
2. Test each component in isolation
3. Use semantic HTML throughout
4. Implement proper error boundaries
5. Add loading states for dynamic content
6. Include fallbacks for JavaScript-disabled browsers
7. Test on real devices, not just browser DevTools
8. Monitor bundle size continuously
9. Run accessibility audits after each major feature
10. Deploy to staging environment for testing

## SPECIFIC CONTENT TO INCLUDE

### About Page Content
```
Dr. Bryan Conklin is a Gen AI Specialist Solution Architect at AWS, where he architects cutting-edge AI solutions for global energy enterprises. With a PhD in [Your Field] and extensive experience in both research and practical implementation, Bryan bridges the gap between theoretical AI advancement and real-world business impact.

Specializing in agentic AI systems and computational neuroscience-inspired architectures, Bryan has pioneered approaches to multi-agent orchestration that enable autonomous decision-making at scale. His work has been featured at [Conferences] and implemented by Fortune 500 companies to drive operational efficiency and innovation.

As a regular speaker at AI conferences and meetups, Bryan is passionate about democratizing AI knowledge and helping organizations navigate the complexities of AI adoption. His recent presentation on "From Soloist to Symphony: Multi-Agent Design Patterns" has become a reference point for practitioners building production AI systems.
```

### Initial Blog Posts (3 provided as examples)

1. **"The OSI Model for Agentic AI: A Layered Approach to Autonomous Systems"**
   - Technical depth: High
   - Reading time: 20 minutes
   - Target: Technical practitioners
   - Include: Interactive layer diagram, code examples

2. **"Why Your AI Strategy Needs Agents, Not Just Models"**
   - Technical depth: Medium
   - Reading time: 8 minutes
   - Target: Business leaders
   - Include: ROI calculator, case studies

3. **"Lessons from Building Multi-Agent Systems at AWS Scale"**
   - Technical depth: High
   - Reading time: 15 minutes
   - Target: Both audiences
   - Include: Architecture diagrams, performance metrics

Remember to:
- Commit after each major milestone
- Update the checkbox list in DEVELOPMENT_PLAN.md
- Run tests before committing
- Document any deviations from the plan
- Keep the README updated with setup instructions
```

## FINAL INSTRUCTIONS FOR CLAUDE CODE

When you start this project:

1. First, create the documentation structure exactly as specified
2. Initialize the Astro project with the recommended settings
3. Implement the design system before any UI work
4. Build components in isolation with proper tests
5. Use real content where possible (from the provided examples)
6. Generate placeholder content that matches the brand voice for missing sections
7. Ensure every page has proper SEO metadata
8. Test accessibility at each step
9. Commit frequently with descriptive messages
10. Update the progress tracking document as you complete tasks

This is a comprehensive project that should result in a production-ready website that effectively serves both technical practitioners and business leaders while establishing Bryan Conklin as a thought leader in agentic AI and computational neuroscience-inspired systems.
