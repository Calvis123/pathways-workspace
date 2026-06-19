export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  country: string;
  emoji: string;
  image: string;
  imageAlt: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Barak Pathways helped me get into University of Derby and build a stronger career path.",
    name: "James",
    location: "Eldoret",
    country: "United Kingdom",
    emoji: "\uD83C\uDF93",
    image: "/images/students/james-uk-student-story.png",
    imageAlt: "James, a Kenyan student on a UK university campus",
  },
  {
    quote: "Professional service. Got my UK visa in 1 month!",
    name: "Mercy",
    location: "Nairobi",
    country: "United Kingdom",
    emoji: "\u2708\uFE0F",
    image: "/images/students/mercy-uk-visa-story.png",
    imageAlt: "Mercy, a Kenyan student ready for international study travel",
  },
  {
    quote: "Best IELTS training. I got Band 8!",
    name: "Brian",
    location: "Mombasa",
    country: "IELTS Training",
    emoji: "\uD83D\uDCCA",
    image: "/images/students/brian-ielts-story.png",
    imageAlt: "Brian, a Kenyan student preparing with IELTS study materials",
  },
  {
    quote: "Canada was the best choice for me. The post-grad work permit opened so many doors!",
    name: "Kevin",
    location: "Nakuru",
    country: "Canada",
    emoji: "\uD83C\uDF41",
    image: "/images/students/kevin-canada-story.png",
    imageAlt: "Kevin, a Kenyan student on a Canadian university campus",
  },
  {
    quote: "Studying in Australia was life-changing. Barak Pathways made the entire process seamless.",
    name: "Grace",
    location: "Mombasa",
    country: "Australia",
    emoji: "\uD83E\uDD98",
    image: "/images/students/grace-australia-story.png",
    imageAlt: "Grace, a Kenyan student on an Australian university campus",
  },
  {
    quote: "Malta was affordable and the experience was incredible. English is everywhere!",
    name: "Dennis",
    location: "Kisumu",
    country: "Malta",
    emoji: "\uD83C\uDFDD\uFE0F",
    image: "/images/students/dennis-malta-story.png",
    imageAlt: "Dennis, a Kenyan student in a Mediterranean study setting",
  },
];

