import { EducationEntry } from '@/screens/home/components/education/types';

export const EDUCATION_DATA: EducationEntry[] = [
  {
    institution: "Towson University",
    logo: "/Images/towsonLogo2.jpeg",
    degree: "Bachelor's degree in Computer Science",
    years: "August 2015 - May 2019",
    gpa: "3.16",
    achievements: [
      "Sigma Alpha Epsilon Fraternity",
      "Cybersecurity Club",
      "Software Engineering Club",
      "Club Soccer Team",
    ],
    url: "https://www.towson.edu/",
  },
  {
    institution: "Worcester Technical High School",
    logo: "/Images/wthsLogo1.jpg", 
    degree: "Pre-Engineering Program",
    years: "August 2011 - May 2015",
    gpa: "4.25",
    achievements: ["Pre-Engineering STEM Program"],
    url: "https://worcestertechhs.com/",
  },
  {
    institution: "Pocomoke High School",
    logo: "/Images/phsLogo.jpeg",
    degree: "High School Diploma",
    years: "August 2011 - May 2015",
    gpa: "4.25",
    achievements: [
      "AP Computer Science",
      "National Honor Society",
      "Captain of the Varsity Soccer Team",
      "Member of MESA (Math Engineering Science Achievement) team",
      "1x 1st Team All Conference",
      "1x Regional Champion",
      "8x Student Scholar Athlete"
    ],
    url: "https://www.pocomokehighschool.org/",
  }
];
