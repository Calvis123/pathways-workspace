export interface Country {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  universities: string[];
  whyStudy: string[];
  visaRequirements: string[];
  costOfLiving: string;
  scholarships: string[];
  testimonials: {
    quote: string;
    name: string;
    location: string;
  }[];
}

export const countries: Country[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    tagline: "World-class education in the heart of Europe",
    description:
      "The UK is home to some of the world's most prestigious universities, including Oxford, Cambridge, and Imperial College London. With a rich academic tradition and diverse cultural experience, studying in the UK offers unmatched opportunities for personal and professional growth.",
    universities: ["University of Derby", "University of Manchester", "University of Birmingham", "University of Leeds"],
    whyStudy: [
      "Globally recognized degrees",
      "Shorter courses (3 years for undergrad)",
      "Post-study work visa (2 years)",
      "Rich cultural heritage",
      "Multicultural society",
    ],
    visaRequirements: [
      "Valid passport",
      "CAS (Confirmation of Acceptance for Studies)",
      "Proof of funds (tuition + living costs)",
      "English proficiency (IELTS 6.0+)",
      "Tuberculosis test certificate",
    ],
    costOfLiving: "KSh 150K - 200K/month",
    scholarships: [
      "Chevening Scholarships",
      "Commonwealth Scholarships",
      "University-specific merit scholarships",
      "GREAT Scholarships",
    ],
    testimonials: [
      {
        quote: "Barak Pathways helped me get into University of Derby. Now I'm earning 3.5M KES/year!",
        name: "James",
        location: "Eldoret",
      },
      {
        quote: "Professional service. Got my UK visa in 1 month!",
        name: "Mercy",
        location: "Nairobi",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "\uD83C\uDDE8\uD83C\uDDE6",
    tagline: "Affordable education with excellent post-grad opportunities",
    description:
      "Canada is one of the top destinations for international students, known for its high-quality education system, affordable tuition fees, and welcoming multicultural society. Canadian degrees are recognized worldwide, and the country offers excellent post-graduation work opportunities.",
    universities: ["University of Toronto", "University of British Columbia", "McGill University", "University of Alberta"],
    whyStudy: [
      "Affordable tuition compared to US/UK",
      "Post-graduation work permit (up to 3 years)",
      "Pathway to permanent residency",
      "Safe and welcoming country",
      "High-quality research facilities",
    ],
    visaRequirements: [
      "Valid passport",
      "Letter of Acceptance from DLI",
      "Proof of funds (Kshs 10,000/year + tuition)",
      "English proficiency (IELTS 6.0+)",
      "Medical examination (if required)",
    ],
    costOfLiving: "KSh 130K - 275K/month",
    scholarships: [
      "Vanier Canada Graduate Scholarships",
      "Ontario Trillium Scholarships",
      "University-specific entrance scholarships",
      "Government of Canada International Scholarships",
    ],
    testimonials: [
      {
        quote: "Canada was the best choice for me. The post-grad work permit opened so many doors!",
        name: "Kevin",
        location: "Nakuru",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "\uD83C\uDDE6\uD83C\uDDFA",
    tagline: "Sunshine, quality education, and endless opportunities",
    description:
      "Australia is a top study destination with world-class universities, beautiful beaches, and a laid-back lifestyle. The Australian education system is known for its strong focus on research and practical learning, preparing students for successful global careers.",
    universities: ["University of Melbourne", "University of Sydney", "Australian National University", "Monash University"],
    whyStudy: [
      "8 of top 100 universities globally",
      "Post-study work visa (2-4 years)",
      "Excellent research opportunities",
      "Beautiful climate and lifestyle",
      "Multicultural cities",
    ],
    visaRequirements: [
      "Valid passport",
      "Confirmation of Enrolment (CoE)",
      "Proof of funds (Kshs 24,505/year + tuition)",
      "English proficiency (IELTS 6.0+)",
      "Overseas Student Health Cover (OSHC)",
    ],
    costOfLiving: "KSh 170K - 220K/month",
    scholarships: [
      "Australia Awards Scholarships",
      "Endeavour Scholarships",
      "Research Training Program (RTP)",
      "University-specific scholarships",
    ],
    testimonials: [
      {
        quote: "Studying in Australia was life-changing. Barak Pathways made the entire process seamless.",
        name: "Grace",
        location: "Mombasa",
      },
    ],
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "\uD83C\uDDF2\uD83C\uDDF9",
    tagline: "Mediterranean island with growing educational opportunities",
    description:
      "Malta offers a unique study abroad experience with its rich history, Mediterranean lifestyle, and growing international education sector. English is one of Malta's official languages, making it an accessible destination for Kenyan students.",
    universities: ["University of Malta", "Malta College of Arts, Science & Technology", "American University of Malta", "Global College Malta"],
    whyStudy: [
      "English-speaking country",
      "Affordable tuition fees",
      "EU member state benefits",
      "Mediterranean lifestyle",
      "Growing job market",
    ],
    visaRequirements: [
      "Valid passport",
      "Acceptance letter from Maltese institution",
      "Proof of funds",
      "English proficiency proof",
      "Health insurance",
    ],
    costOfLiving: "KSh 83K - 125K/month",
    scholarships: [
      "Malta Government Scholarships",
      "EU Erasmus+ Scholarships",
      "University of Malta merit awards",
      "Commonwealth Scholarships",
    ],
    testimonials: [
      {
        quote: "Malta was affordable and the experience was incredible. English is everywhere!",
        name: "Dennis",
        location: "Kisumu",
      },
    ],
  },
  {
    slug: "usa",
    name: "USA",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    tagline: "World-class education and global career pathways",
    description:
      "The USA hosts many of the world's top-ranked universities with flexible learning options, strong research environments, and globally respected degrees. Students can choose from affordable pathways to premium institutions while building international networks.",
    universities: [
      "University of Texas at Arlington",
      "Wichita State University",
      "University of South Florida",
      "California State University Long Beach",
    ],
    whyStudy: [
      "World-class education system",
      "Flexible learning options across majors and programs",
      "Work opportunities during study",
      "Strong post-study career routes through OPT",
      "Diverse and global student environment",
    ],
    visaRequirements: [
      "Valid passport",
      "Admission offer and I-20 form from a SEVP-approved institution",
      "Proof of funds for tuition and living costs",
      "English proficiency (IELTS/TOEFL if required)",
      "F-1 visa interview and supporting documents",
    ],
    costOfLiving: "KSh 83K - 192K/month",
    scholarships: [
      "University merit scholarships",
      "Graduate assistantships (selected programs)",
      "Departmental scholarships",
      "International student tuition awards",
    ],
    testimonials: [
      {
        quote: "Studying in the USA gave me global exposure and practical skills that boosted my career options.",
        name: "Faith",
        location: "Thika",
      },
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "\uD83C\uDDEA\uD83C\uDDF8",
    tagline: "Culture, language, and quality European education",
    description:
      "Spain offers an incredible blend of rich culture, vibrant lifestyle, and quality education. With many programs now offered in English, Spain is becoming an attractive destination for international students seeking a European experience.",
    universities: ["University of Barcelona", "Complutense University of Madrid", "Universidad Autonoma de Barcelona", "IE University"],
    whyStudy: [
      "Rich cultural heritage",
      "Affordable living costs in most cities",
      "Growing English-taught programs",
      "Gateway to EU job market",
      "Excellent climate and lifestyle",
    ],
    visaRequirements: [
      "Valid passport",
      "University acceptance letter",
      "Proof of funds (Kshs 600/month minimum)",
      "Health insurance",
      "Medical certificate",
    ],
    costOfLiving: "KSh 100K - 150K/month",
    scholarships: [
      "Spanish Government Scholarships (MAEC)",
      "Erasmus+ Scholarships",
      "University-specific grants",
      "AECID Scholarships",
    ],
    testimonials: [
      {
        quote: "Spain changed my perspective on life. The culture, the food, the education - everything was amazing.",
        name: "Alex",
        location: "Nairobi",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
    tagline: "Affordable European education with strong career pathways",
    description:
      "Germany is one of Europe's leading destinations for international students, attracting more than 400,000 students from around the world. It is known for high-quality education, strong research institutions, affordable public universities, and excellent employment opportunities in technical and professional fields.",
    universities: [
      "Technical University of Munich",
      "RWTH Aachen University",
      "Heidelberg University",
      "Humboldt University of Berlin",
    ],
    whyStudy: [
      "Most public universities charge no tuition fees",
      "More than 2,000 English-taught programs",
      "Strong economy with high demand for skilled graduates",
      "Excellent for engineering, IT, healthcare and renewable energy",
      "Post-study residence pathway for job search",
    ],
    visaRequirements: [
      "Valid passport",
      "University admission letter",
      "Academic certificates and transcripts",
      "Health insurance",
      "Proof of finances, often through a blocked account",
    ],
    costOfLiving: "KSh 135K - 180K/month",
    scholarships: [
      "DAAD Scholarships",
      "Deutschlandstipendium",
      "University-specific scholarships",
      "Erasmus+ Scholarships",
    ],
    testimonials: [
      {
        quote: "Germany gave me access to affordable education and strong engineering opportunities.",
        name: "Brian",
        location: "Nairobi",
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "\uD83C\uDDF3\uD83C\uDDFF",
    tagline: "Safe, scenic, and world-renowned education",
    description:
      "New Zealand is known for its stunning natural landscapes, safe environment, and world-class education system. The country's universities consistently rank high globally, and its welcoming attitude toward international students makes it a top choice.",
    universities: ["University of Auckland", "University of Otago", "Victoria University of Wellington", "University of Canterbury"],
    whyStudy: [
      "Safe and peaceful country",
      "Work while studying (up to 20 hrs/week)",
      "Post-study work visa (1-3 years)",
      "Stunning natural environment",
      "High-quality research institutions",
    ],
    visaRequirements: [
      "Valid passport",
      "Offer of place from NZ institution",
      "Proof of funds (Kshs 20,000/year + tuition)",
      "English proficiency (IELTS 6.0+)",
      "Medical and travel insurance",
    ],
    costOfLiving: "KSh 56K - 92K/month",
    scholarships: [
      "New Zealand Scholarships",
      "NZ Aid Programme",
      "University-specific international scholarships",
      "Commonwealth Scholarships",
    ],
    testimonials: [
      {
        quote: "New Zealand's education system is phenomenal. And the scenery is unbeatable!",
        name: "Samuel",
        location: "Eldoret",
      },
    ],
  },
];



