// Static Imports
import heroBackground from '../assets/images/hero-background-primary.svg';
import headshot from '../assets/images/headshot.svg';
import heroBackgroundAlt from '../assets/images/hero-background-secondary.svg';

// Collection Imports
import { referrals, caseStudyCards, logoColumns } from "./collectionData";

export const landingHeroData = {
    theme: 'primary',
    heading: '👋 Hello! I\'m Jordan.',
    backgroundImage: heroBackground,
    backgroundImageAlt: 'background',
    featureImage: headshot,
    featureImageAlt: 'Jordan Rhodes (UX Designer) in grayscale wearing green glasses with concentric circles behind him.',
    text: 'I make it easy for businesses and their clients to understand each other through design.',
    ctaButton: {
        attributes: {
            href: 'https://calendly.com/jordanrhodes-ux/let-s-talk-about-your-project',
            theme: 'primary',
            text: 'Schedule a consultation',
            isExternal: true
        }
    }
}

export const referralColumnData = {
    heading: 'What my clients are saying',
    theme: 'primary',
    numColumns: 3,
    button: {
        attributes: {
            href: 'https://www.upwork.com/freelancers/~013684d69371c8c9b6',
            theme: 'primary',
            text: 'See more reviews on Upwork',
            isExternal: true
        }
    },
    collectionData: referrals
}

export const caseStudyCarousel = {
    theme: 'primary',
    heading: 'Case Studies',
    backgroundImage: heroBackgroundAlt,
    collectionData: caseStudyCards
}

export const logoColumnsData = {
    heading: 'Previous/ongoing clients',
    theme: 'secondary',
    numColumns: 5,
    collectionData: logoColumns
}