// Static Imports
import headshot from '../assets/images/headshot.svg';
import heroBackgroundAlt from '../assets/images/hero-background-secondary.svg';
import hollandAmericaHorizontal from '../assets/images/holland-america-horizontal.png';
import hollandAmericaFeature from '../assets/images/holland-america-feature.png';
import halVideo from '../assets/videos/HalEdited.mp4';

//Import Collections
import { techStackIcons } from './collectionData';

const getIcons = (data) => {
    let icons = [];
    data.forEach(x => {
        techStackIcons.forEach(y => {
            if(x === y.text) {
                icons.push(y);
            }
        });
    });

    return icons;
}

export const hollandAmerica = {
    title: 'title',
    blocks: [
        {
            blockType: 'Hero',
            theme: 'caseStudy',
            backgroundImage: heroBackgroundAlt,
            backgroundImageAlt: 'background',
            featureImage: hollandAmericaFeature,
            logoImage: hollandAmericaHorizontal,
            featureImageAlt: 'Jordan Rhodes (UX Designer) in grayscale wearing green glasses with concentric circles behind him.',
            text: 'UX/UI Design | UX Research',
            text2: '2022 | 2.5 Months',
            ctaButton: {
                attributes: {
                    href: 'https://www.hollandamerica.com',
                    theme: 'primary',
                    text: 'Holland America Line',
                    isExternal: true
                }
            },
            icons: getIcons(['Figma', 'Adobe Xd', 'UserZoom', 'MS Teams', 'Slack'])
        },
        {
            blockType: 'FullSection',
            theme: 'primary',
            headingType: 'h2',
            heading: 'About Holland America Line',
            text: 'Holland America Line is a large cruise liner based in Seattle, WA, but originated in Rotterdam, Netherlands in 1873 making the company almost 150 years old as this is written.'
        },
        {
            blockType: 'FullSection',
            theme: 'secondary',
            headingType: 'h3',
            heading: 'What was my role in all of this?',
            subHeading: 'May 2022',
            text: 'We started out this large project with about two weeks of discovery. There were several accessibility issues on the site that were immediately addressed, and their design file needed to be moved from Xd to Figma.',
            sectionDivider: true,
            icons: getIcons(['Adobe Xd', 'Figma', 'WCAG 2.1'])
        },
        {
            blockType: 'FullSection',
            theme: 'secondary',
            subHeading: 'June 2022',
            text: 'I was tasked with spearheading the complex header prototype for all viewports (desktop/tablet/mobile). I also worked with another designer on developing a design system.',
            icons: getIcons(['Prototyping', 'Design System'])
        },
        {
            blockType: 'FullMedia',
            heading: 'Header Prototype',
            media: {
                url: halVideo
            }
        },
        {
            blockType: 'FullSection',
            sectionDivider: true
        },
        {
            blockType: 'FullSection',
            theme: 'secondary',
            subHeading: 'July 2022',
            text: 'We started out this large project with about two weeks of discovery. There were several accessibility issues on the site that were immediately addressed, and their design file needed to be moved from Xd to Figma.',
            icons: getIcons(['Moderated Usability Study', 'Rapid UI Design'])
        },
        {
            blockType: 'FullMedia',
            heading: 'Style Guide',
            iframe: {
                title: 'Holland America Style Guide',
                url: 'https://www.figma.com/file/sSWhlXfOZTSVr51Yvmtk5C/HALDS?node-id=0%3A1&t=BCOBwRYgzDBKDeO5-1'
            }
        },
        {
            blockType: 'FullSection',
            sectionDivider: true
        },
        {
            blockType: 'FullSection',
            theme: 'secondary',
            subHeading: 'Augest 2022',
            sectionDivider: true,
            text: 'The final part of this project was delivering synthesized data results to the design team. I also helped rebadge the site for the sister company, Seaborne.',
            icons: getIcons(['Delivery of synthesized data', 'Rebadge for Seaborne'])
        },
        {
            blockType: 'FullSection',
            icons: getIcons(['Project Completion!'])
        }
    ]
}