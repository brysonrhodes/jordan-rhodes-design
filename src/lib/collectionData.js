// Referalls Headshots
import seanIvans from '../assets/images/sean-ivans.svg';
import anon from '../assets/images/anon.svg';
import kjJaramillo from '../assets/images/kj-jaramillo.svg';

// CaseStudy Icons
import hollandAmericaIcon from '../assets/images/holland-america-icon.png';
import clarityNowIcon from '../assets/images/clarity-now-icon.png';
import pulseIcon from '../assets/images/pulse-icon.png';
import vocableIcon from '../assets/images/vocable-icon.png';
import treePeaceIcon from '../assets/images/tree-peace-color-icon.png';
import coursanaIcon from '../assets/images/coursana-icon.png';

// Client Logos
import hollandAmericaLogo from '../assets/images/holland-america.svg';
import beebrickLogo from '../assets/images/beebrick.svg';
import treePeaceMonotone from '../assets/images/tree-peace-monotone.svg';

export const referrals = [
    {
        type: 'Referral',
        attributes: {
           image: seanIvans,
           imageAlt: 'Sean Ivans headshot. A man with a beard in a red shirt with short hair.',
           name: 'Sean Ivans',
           company: 'Hydrant',
           text: '"Jordan was great! He understood the UI work I needed to be done for my app, clearly defined it, and then delivered it just ahead of schedule. He communicated well with messages and video calls and asked questions along the way. The quality is fantastic and I\'m happy with the results. Thank you!"'
        }
    },
    {
        type: 'Referral',
        attributes: {
           image: anon,
           imageAlt: 'Blue avatar placeholder in green circle.',
           name: 'Mike St. Louis',
           company: 'Trail Wolf',
           text: '"Jordan is part of the top freelancers I have ever worked with. He is great to work with and easily understood the task and completed it with great skill. He is exactly who I needed for this job. I was also able to have Jordan work with a copywriter and he was able to take the initiative to made the project get completed with ease. I highly recommend working with Jordan for any UI/UX projects. He will be my go to UI/UX designer for the foreseeable future! Thanks again Jordan!"'
        }
    },
    {
        type: 'Referral',
        attributes: {
           image: kjJaramillo,
           imageAlt: 'KJ Jaramillo headshot. A man with a beard in a black shirt and glasses.',
           name: 'KJ Jaramillo',
           company: 'ClarityNOW',
           text: '"I engaged Jordan for a major UI/UX project for our SaaS app. He spearheaded the project, delivered results, and provided guidance to make significant improvements (to the app). I recommend Jordan for any UI/UX engagement because he is thorough, intentional, and produces valuable results."'
        }
    }
]

export const caseStudyCards = [
    {
        type: 'CaseStudy',
        attributes: {
            image: hollandAmericaIcon,
            imageAlt: 'A blockprint cruise ship in an oval.',
            company: 'Holland America Line',
            year: '2022',
            length: '2.5 Months',
            workCompleted: [
                'UX/UI Design',
                'UX Research'
            ],
            button: {
                attributes: {
                    href: '/holland-america',
                    text: 'View Case Study',
                    theme: 'small'
                }
            }
        }
    },
    {
        type: 'CaseStudy',
        attributes: {
            image: clarityNowIcon,
            imageAlt: 'Four asymetrical lines of different lengths interuppting a circle from the bottom left corner with the text ClarityNow.',
            company: 'ClarityNOW',
            year: '2022',
            length: '2 Months',
            workCompleted: [
                'UX Design',
                'User Testing'
            ],
            button: {
                attributes: {
                    href: '',
                    text: 'Coming Soon!',
                    theme: 'comingSoon'
                }
            }
        }
    },
    {
        type: 'CaseStudy',
        attributes: {
            image: pulseIcon,
            imageAlt: 'A line that varies up and down inside of a circle with the word PULSE.',
            company: 'Pulse',
            year: '2022',
            length: '2 Months',
            workCompleted: [
                'UX Design',
                'Rapid Prototyping'
            ],
            button: {
                attributes: {
                    href: '',
                    text: 'Coming Soon!',
                    theme: 'comingSoon'
                }
            }
        }
    },
    {
        type: 'CaseStudy',
        attributes: {
            image: vocableIcon,
            imageAlt: 'The word vocable in all lowercase letter.',
            company: 'Vocable',
            year: '2022',
            length: '2 Weeks',
            workCompleted: [
                'UI Design',
                'Rapid Prototyping'
            ],
            button: {
                attributes: {
                    href: '',
                    text: 'Coming Soon!',
                    theme: 'comingSoon'
                }
            }
        }
    },
    {
        type: 'CaseStudy',
        attributes: {
            image: treePeaceIcon,
            imageAlt: 'A green pine tree illustration with two white pine tree outlines to either side.',
            company: 'Tree Peace',
            year: '2022',
            length: '2.5 Months',
            workCompleted: [
                'UX/UI Design',
                'UX Research'
            ],
            button: {
                attributes: {
                    href: '',
                    text: 'Coming Soon!',
                    theme: 'comingSoon'
                }
            }
        }
    },
    {
        type: 'CaseStudy',
        attributes: {
            image: coursanaIcon,
            imageAlt: 'The word coursana with an illustration on the capital A',
            company: 'CoursAna',
            year: '2021',
            length: '1 Months',
            workCompleted: [
                'UX/UI Design',
                'UX Research'
            ],
            button: {
                attributes: {
                    href: '',
                    text: 'Coming Soon!',
                    theme: 'comingSoon'
                }
            }
        }
    }
]

export const logoColumns = [
    {
        type: 'ClientIcon',
        attributes: {
            image: hollandAmericaLogo,
            imageAlt: 'A blockprint cruise ship in an oval.'
        }
    },
    {
        type: 'ClientIcon',
        attributes: {
            image: beebrickLogo,
            imageAlt: 'beebrick in all lowercase spelled out in block print with three colors'
        }
    },
    {
        type: 'ClientIcon',
        attributes: {
            image: vocableIcon,
            imageAlt: 'The word vocable in all lowercase letter.'
        }
    },
    {
        type: 'ClientIcon',
        attributes: {
            image: treePeaceMonotone,
            imageAlt: 'A white outlined pine tree illustration with two white pine tree outlines to either side.'
        }
    },
    {
        type: 'ClientIcon',
        attributes: {
            image: pulseIcon,
            imageAlt: 'A line that varies up and down inside of a circle with the word PULSE.'
        }
    }
]