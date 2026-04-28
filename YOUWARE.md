# InfoSage Technologies Website

This is a modern React + TypeScript + Tailwind CSS website for InfoSage Technologies, an IT solutions company with high-level GSAP animations.

## Project Overview

- **Project Type**: Modern Corporate IT Solutions Website
- **Entry Point**: `src/main.tsx`
- **Build System**: Vite 7.3.2
- **Styling**: Tailwind CSS 3.4.19 + Framer Motion/GSAP
- **Animations**: GSAP 3.15.0 with ScrollTrigger for complex scroll-driven sequences
- **Brand Identity**: 
  - Primary: #082d4a (Deep Navy)
  - Accent: #ec1d25 (Vibrant Red)
  - Logo/Favicon: Fully updated with brand colors

## High-Level Animations Implemented

### 1. Hero Section (ScrollDrivenBanner)
- **Cinematic Video Background** with scroll-synchronized scrubbing
- **Scroll-triggered content layers** (3 distinct phases of message reveal)
- **Gradient text effects** using brand primary and accent colors
- **Interactive call-to-action** with hover animations
- **Sticky positioning** for immersive scrolling experience
- **Scroll indicator** with pulse animation
- **Glassmorphism cards** in the final phase with backdrop blur effects

### 2. About Section
- **3D perspective reveal** for image card
- **Staggered text animations** from left
- **Floating skill cards** with continuous animation
- **Gradient rotation** effect on main card
- **Smooth scroll-triggered animations**

### 3. Services Section
- **3D card flip animation** on scroll
- **Mouse-tracking 3D tilt effect** (rotateX/rotateY based on cursor position)
- **Hover glow effects** with gradient
- **Staggered reveal** with perspective transform
- **Scale and shadow transitions**

### 4. Stats Section (Why Choose Us)
- **Dynamic count-up animation** (0 → target)
- **Continuous glow pulse** effect
- **Scale and opacity reveal** with back easing
- **Animated background** with pulsing orbs
- **Glassmorphism cards** with backdrop blur

### 5. Solutions Section
- **Slide-up with rotation** reveal animation
- **Hover translate and shadow** effects
- **Icon scale animation** on hover
- **Staggered card entrance**

### 6. Contact Section
- **Slide-in from sides** for info and form
- **Form input stagger** animation
- **Gradient shadows** on buttons
- **Background gradient** transitions

### 7. Footer & Navbar
- **Navbar slide-down** on page load
- **Scroll-based background change** with blur
- **Link underline animation** on hover
- **Footer items stagger** reveal

### Additional Animation Features
- **Custom scrollbar** with gradient
- **Noise texture overlay** for depth
- **Grid pattern backgrounds**
- **Animated gradient borders**
- **Shimmer effects**
- **3D transform utilities** (perspective, preserve-3d)

## Color Scheme
- Primary: #082d4a (Deep Navy)
- Accent: #ec1d25 (Vibrant Red)
- Background: #f8fafc (Light Gray)
- Dark Background: #0f172a (Dark Slate)

## Animation Libraries Used
- **GSAP 3.15.0** - Core animation library
- **ScrollTrigger** - Scroll-based animations
- **Lucide React** - Animated icons

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
