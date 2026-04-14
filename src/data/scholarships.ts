export interface Scholarship {
  country: string;
  flag: string;
  name: string;
  level: "Undergraduate" | "Postgraduate" | "Both";
  eligibility: string;
  deadline: string;
}

export const scholarships: Scholarship[] = [
  {
    country: "United Kingdom",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    name: "Chevening Scholarships",
    level: "Postgraduate",
    eligibility: "Full-time postgraduate study at any UK university. Must have 2+ years work experience.",
    deadline: "November annually",
  },
  {
    country: "United Kingdom",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    name: "Commonwealth Scholarships",
    level: "Both",
    eligibility: "Citizens of Commonwealth countries. Strong academic record required.",
    deadline: "December annually",
  },
  {
    country: "Canada",
    flag: "\uD83C\uDDE8\uD83C\uDDE6",
    name: "Vanier Canada Graduate Scholarships",
    level: "Postgraduate",
    eligibility: "PhD students at Canadian universities. Leadership and research potential.",
    deadline: "November annually",
  },
  {
    country: "Canada",
    flag: "\uD83C\uDDE8\uD83C\uDDE6",
    name: "Ontario Trillium Scholarships",
    level: "Postgraduate",
    eligibility: "International PhD students at Ontario universities.",
    deadline: "Varies by institution",
  },
  {
    country: "Australia",
    flag: "\uD83C\uDDE6\uD83C\uDDFA",
    name: "Australia Awards Scholarships",
    level: "Both",
    eligibility: "Citizens of eligible developing countries. Strong academic and leadership qualities.",
    deadline: "April/May annually",
  },
  {
    country: "Australia",
    flag: "\uD83C\uDDE6\uD83C\uDDFA",
    name: "Research Training Program (RTP)",
    level: "Postgraduate",
    eligibility: "Domestic and international research students at Australian universities.",
    deadline: "Varies by institution",
  },
  {
    country: "New Zealand",
    flag: "\uD83C\uDDF3\uD83C\uDDFF",
    name: "New Zealand Scholarships",
    level: "Both",
    eligibility: "Citizens of eligible countries. Cover tuition, living costs, and travel.",
    deadline: "March annually",
  },
  {
    country: "Spain",
    flag: "\uD83C\uDDEA\uD83C\uDDF8",
    name: "MAEC-AECID Scholarships",
    level: "Both",
    eligibility: "International students for Spanish universities. Spanish language proficiency may be required.",
    deadline: "February-March annually",
  },
  {
    country: "Malta",
    flag: "\uD83C\uDDF2\uD83C\uDDF9",
    name: "Malta Government Scholarships",
    level: "Both",
    eligibility: "International students with strong academic records for Maltese institutions.",
    deadline: "Varies annually",
  },
  {
    country: "Cyprus",
    flag: "\uD83C\uDDE8\uD83C\uDDFE",
    name: "Cyprus Government Scholarships",
    level: "Both",
    eligibility: "International students for undergraduate and postgraduate studies in Cyprus.",
    deadline: "May annually",
  },
];

