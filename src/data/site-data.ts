export interface Placement {
  name: string;
  university: string;
  country: string;
  flag: string;
  program: string;
}

export const recentPlacements: Placement[] = [
  { name: "James M.", university: "University of Derby", country: "UK", flag: "\uD83C\uDDEC\uD83C\uDDE7", program: "Business Management" },
  { name: "Mercy W.", university: "University of Manchester", country: "UK", flag: "\uD83C\uDDEC\uD83C\uDDE7", program: "Computer Science" },
  { name: "Kevin O.", university: "University of Toronto", country: "Canada", flag: "\uD83C\uDDE8\uD83C\uDDE6", program: "Engineering" },
  { name: "Grace A.", university: "University of Melbourne", country: "Australia", flag: "\uD83C\uDDE6\uD83C\uDDFA", program: "Data Science" },
  { name: "Dennis K.", university: "University of Malta", country: "Malta", flag: "\uD83C\uDDF2\uD83C\uDDF9", program: "Tourism" },
  { name: "Faith N.", university: "University of Cyprus", country: "Cyprus", flag: "\uD83C\uDDE8\uD83C\uDDFE", program: "Medicine" },
  { name: "Alex T.", university: "University of Barcelona", country: "Spain", flag: "\uD83C\uDDEA\uD83C\uDDF8", program: "International Relations" },
  { name: "Samuel J.", university: "University of Auckland", country: "NZ", flag: "\uD83C\uDDF3\uD83C\uDDFF", program: "Agriculture" },
  { name: "Brian K.", university: "University of Leeds", country: "UK", flag: "\uD83C\uDDEC\uD83C\uDDE7", program: "Finance" },
  { name: "Susan M.", university: "McGill University", country: "Canada", flag: "\uD83C\uDDE8\uD83C\uDDE6", program: "Biotechnology" },
  { name: "Peter O.", university: "Monash University", country: "Australia", flag: "\uD83C\uDDE6\uD83C\uDDFA", program: "Architecture" },
  { name: "Wanjiku N.", university: "University of Birmingham", country: "UK", flag: "\uD83C\uDDEC\uD83C\uDDE7", program: "Law" },
];

export const processSteps = [
  {
    step: 1,
    title: "Free Consultation",
    description: "15-minute consultation to understand your goals and study preferences.",
    icon: "\uD83D\uDCAC",
  },
  {
    step: 2,
    title: "Pay Consultation Fee",
    description: "Pay KES 20,000 to start your journey with us.",
    icon: "\uD83D\uDCB3",
  },
  {
    step: 3,
    title: "University Matching",
    description: "We match you with the best universities and programs for your profile.",
    icon: "\uD83C\uDF93",
  },
  {
    step: 4,
    title: "Application Support",
    description: "We help with applications, documents, and personal statements.",
    icon: "\uD83D\uDCDD",
  },
  {
    step: 5,
    title: "Visa Assistance",
    description: "Complete visa application guidance and document preparation.",
    icon: "\uD83D\uDEE1",
  },
  {
    step: 6,
    title: "Visa Approved!",
    description: "Pay the remaining KES 20,000. Congratulations!",
    icon: "\uD83C\uDF89",
  },
  {
    step: 7,
    title: "Pre-Departure",
    description: "Orientation session covering travel, accommodation, and life abroad.",
    icon: "\u2708\uFE0F",
  },
  {
    step: 8,
    title: "Fly to Your Dream!",
    description: "You're all set! Begin your study abroad adventure.",
    icon: "\uD83C\uDF0D",
  },
];
