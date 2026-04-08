export interface DestinationDetail {
  tuitionRange: string;
  annualLivingBudget: string;
  workWhileStudying: string;
  postStudyPathway: string;
  heroImage: string;
  heroImageAlt: string;
  galleryImages?: {
    src: string;
    alt: string;
  }[];
  exploreRegions: string[];
  applicationSteps: string[];
  heroGradient: string;
  softAccent: string;
  accentText: string;
  accentBg: string;
  facts: string[];
  popularCourses: string[];
  overviewParagraphs?: string[];
  institutionGuide?: {
    name: string;
    summary: string;
    bestFor: string;
    costPosition: string;
  }[];
  realityCheck?: string[];
}

export const destinationDetails: Record<string, DestinationDetail> = {
  'united-kingdom': {
    tuitionRange: 'GBP 10,000 - GBP 38,000 per year',
    annualLivingBudget: 'GBP 12,000 - GBP 18,000 per year',
    workWhileStudying:
      'Most international students can usually work up to 20 hours per week during study periods and full-time during official holidays, subject to visa conditions.',
    postStudyPathway:
      'The Graduate Route can offer post-study work opportunities after finishing an eligible qualification.',
    heroImage: '/images/destinations/uk-1.jpg',
    heroImageAlt: 'Historic university architecture in the United Kingdom',
    galleryImages: [
      {
        src: '/images/destinations/uk-1.jpg',
        alt: 'Historic university street scene in the United Kingdom',
      },
      {
        src: '/images/destinations/uk-2.jpg',
        alt: 'Students gathered at a university campus event in the United Kingdom',
      },
      {
        src: '/images/destinations/uk-3.jpg',
        alt: 'University of Manchester campus entrance',
      },
    ],
    exploreRegions: ['London', 'Scotland', 'Wales', 'Northern England', 'Midlands'],
    applicationSteps: [
      'Choose your course and university shortlist.',
      'Confirm academic and English-language entry requirements.',
      'Prepare transcripts, personal statement and supporting documents.',
      'Submit your application and accept your offer.',
      'Receive your CAS, prepare funds and apply for your student visa.',
    ],
    heroGradient: 'bg-[linear-gradient(135deg,#123e7a_0%,#0f2c58_55%,#071a33_100%)]',
    softAccent: 'bg-[#e9f0fb]',
    accentText: 'text-[#0f3a78]',
    accentBg: 'bg-[#0f3a78]',
    facts: ['Shorter degree timelines', 'Strong global prestige', 'Wide scholarship awareness'],
    popularCourses: ['Business', 'Law', 'Computer Science', 'Public Health', 'Engineering'],
    overviewParagraphs: [
      'The United Kingdom remains one of the world’s leading education hubs, bringing together England, Scotland, Wales and Northern Ireland in a system known for long academic tradition and strong international reputation.',
      'One of the biggest practical advantages is structure. Undergraduate degrees are often completed in three years, and many master’s programs take only one year, which can reduce both study time and total cost compared with other destinations.',
      'Teaching in the UK is usually intensive and focused. Students specialise earlier, work more independently and are often expected to think critically rather than simply memorize content. Because English is the main language of study, international students also avoid the language barrier common in some other European destinations.',
    ],
    institutionGuide: [
      {
        name: 'University of Oxford',
        summary:
          'Oxford is one of the oldest and most prestigious universities in the world, known for its tutorial system, highly personalised learning and exceptional strength across law, medicine, humanities, politics and sciences. It is ideal for very high-performing students aiming for elite academic and career pathways.',
        bestFor: 'Top-performing students seeking world-leading prestige, deep academic intensity and global recognition.',
        costPosition: 'Among the most competitive and potentially more expensive routes, especially when total living costs are included.',
      },
      {
        name: 'University of Cambridge',
        summary:
          'Cambridge shares similar prestige with Oxford and is especially respected in mathematics, natural sciences, computer science and engineering. Its collegiate model and discussion-based teaching suit students who thrive in rigorous, high-level academic environments.',
        bestFor: 'Students with outstanding grades who want elite teaching in science, technology or mathematically strong disciplines.',
        costPosition: 'High-entry and high-competition route with strong long-term academic value.',
      },
      {
        name: 'Imperial College London',
        summary:
          'Imperial is highly specialised and particularly strong in science, engineering, medicine and technology. Its London location and close links to industry make it attractive for students thinking about innovation, research and high-growth technical careers.',
        bestFor: 'Students targeting STEM-heavy degrees with strong employer and research connections.',
        costPosition: 'Can be expensive because of both tuition level and London living costs.',
      },
      {
        name: 'London School of Economics',
        summary:
          'LSE is globally respected for economics, finance, politics and international relations. It is especially relevant for students who want analytical, policy or finance-oriented careers in competitive global sectors.',
        bestFor: 'Students aiming for economics, finance, politics, public policy or international affairs.',
        costPosition: 'Premium route, especially once London living costs are considered.',
      },
      {
        name: 'University of Manchester',
        summary:
          'Manchester is a strong modern university with solid international reputation, broad program choice and a vibrant student environment. It is often more accessible than ultra-elite institutions while still carrying strong recognition in engineering, business and computer science.',
        bestFor: 'Students seeking a respected UK university with a balance of quality, breadth and lively student life.',
        costPosition: 'Often more manageable than London-based options while still offering strong academic value.',
      },
      {
        name: 'University of Birmingham',
        summary:
          'Birmingham offers good academic standing with a somewhat more flexible and accessible route for international students. It is well regarded in business, law, engineering and health-related fields, with solid student support structures.',
        bestFor: 'Students who want a recognized university with strong support and slightly broader accessibility.',
        costPosition: 'Usually more moderate than the highest-cost UK institutions, depending on course choice.',
      },
    ],
    realityCheck: [
      'The UK is academically powerful, but it is also more expensive than lower-cost destinations such as Malta.',
      'For many bachelor’s applications, KCSE alone may not be enough for the most selective universities, so foundation study or equivalent preparation can matter.',
      'Personal statements are especially important in the UK because universities often use them to judge clarity of motivation, course fit and academic seriousness.',
      'Top universities may also require interviews, entrance tests or especially strong grades, so “studying in the UK” is not one single standard but a wide range of competitiveness levels.',
      'Bachelor’s tuition often falls in the GBP 10,000 to 20,000 range, master’s tuition may fall in the GBP 12,000 to 25,000 range, and top institutions can go well beyond that.',
    ],
  },
  canada: {
    tuitionRange: 'CAD 15,000 - CAD 35,000 per year',
    annualLivingBudget: 'CAD 12,000 - CAD 20,000 per year',
    workWhileStudying:
      'Eligible international students can often work part-time during study periods and full-time during scheduled breaks, depending on current permit rules.',
    postStudyPathway:
      'Canada remains attractive for post-graduation work and possible long-term settlement pathways.',
    heroImage: '/images/destinations/canada-1.jpg',
    heroImageAlt: 'Canada destination banner image',
    galleryImages: [
      {
        src: '/images/destinations/canada-1.jpg',
        alt: 'Canada sign and skyline-style academic atmosphere',
      },
      {
        src: '/images/destinations/canada-2.jpg',
        alt: 'Modern university building in Canada',
      },
      {
        src: '/images/destinations/canada-3.jpg',
        alt: 'University campus sign in Canada',
      },
    ],
    exploreRegions: ['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Nova Scotia'],
    applicationSteps: [
      'Select your preferred program and designated learning institution.',
      'Check academic, language and document requirements.',
      'Apply to your chosen institutions and wait for admission outcomes.',
      'Accept your offer and organise proof of funds.',
      'Apply for your study permit and prepare for departure.',
    ],
    heroGradient: 'bg-[linear-gradient(135deg,#b91c1c_0%,#7f1d1d_48%,#111827_100%)]',
    softAccent: 'bg-[#fdecec]',
    accentText: 'text-[#991b1b]',
    accentBg: 'bg-[#991b1b]',
    facts: ['Welcoming multicultural cities', 'Strong PGWP interest', 'Practical work-study balance'],
    popularCourses: ['Data Science', 'Nursing', 'Engineering', 'Business Analytics', 'Project Management'],
    overviewParagraphs: [
      'Canada is one of the most attractive destinations for international students because it combines respected education with a more visible pathway from study to work and, for some students, longer-term settlement opportunities.',
      'Its education system is highly regarded internationally and is often seen as both strong and practical. Many universities focus not only on theory but also on applied learning, research, employability and project-based experience.',
      'Canada is officially bilingual, but most international students study in English. That makes it accessible while still offering exposure to a diverse, globally connected learning environment.',
    ],
    institutionGuide: [
      {
        name: 'University of Toronto',
        summary:
          'The University of Toronto is the strongest and most globally recognized university in Canada. It is highly respected for medicine, computer science, engineering and business, and its Toronto location gives students access to a major economic and employment hub. The environment is academically intense and entry is competitive.',
        bestFor: 'Students aiming for top-tier academic reputation, strong research output and access to a major city job market.',
        costPosition: 'Usually on the higher side because of both tuition competitiveness and Toronto living costs.',
      },
      {
        name: 'University of British Columbia',
        summary:
          'UBC combines international academic strength with a strong research and innovation culture. It is especially known in environmental science, engineering, business and computer science, and many students are drawn to its Vancouver location despite the city’s higher living costs.',
        bestFor: 'Students who want a high-ranking university with strong research culture and a globally attractive study environment.',
        costPosition: 'Academic value is high, but Vancouver living costs can make the total budget heavier.',
      },
      {
        name: 'McGill University',
        summary:
          'McGill has a strong international reputation and often feels comparable to highly respected traditional universities elsewhere. It is especially notable in medicine, law, science, arts and humanities, and Montreal can be more affordable than Toronto or Vancouver for student living.',
        bestFor: 'Students seeking strong reputation with a highly international feel and relatively better city affordability.',
        costPosition: 'Often more manageable than Toronto or Vancouver-based study when living costs are considered.',
      },
      {
        name: 'University of Alberta',
        summary:
          'The University of Alberta is a respected public university with strength in engineering, environmental science and energy-related areas. Compared with Canada’s most competitive institutions, it can be slightly more accessible while still offering solid academic quality.',
        bestFor: 'Students who want a respected Canadian university with strong technical programs and slightly broader access.',
        costPosition: 'Can be a more balanced value option depending on program and city costs.',
      },
      {
        name: 'University of Waterloo',
        summary:
          'Waterloo is especially famous for its co-op model, where students alternate study with real work placements. It is highly respected in computer science, software engineering and technology, and many graduates leave with strong work experience before finishing their degree.',
        bestFor: 'Students targeting technology, software or co-op-driven career preparation.',
        costPosition: 'Strong value for students who prioritise employability and practical work experience.',
      },
      {
        name: 'York University',
        summary:
          'York is a large university in Toronto with good strength in business, law and social sciences. It is often considered more accessible than the most elite Canadian institutions while still offering the advantage of studying in a major city.',
        bestFor: 'Students who want a major-city study experience with somewhat broader entry accessibility.',
        costPosition: 'Can still be affected by Toronto living costs, but often sits below the most selective premium options.',
      },
    ],
    realityCheck: [
      'Canada is usually more affordable than the most expensive UK options, but it is still a moderately expensive destination overall.',
      'What makes Canada especially attractive is not just education quality, but the clearer connection many students see between study, work experience and longer-term immigration pathways.',
      'Applications are made directly to universities rather than through one central system like UCAS in the UK, so students need to manage each institution’s deadlines and requirements carefully.',
      'For bachelor’s study, KCSE with good grades may be enough in some cases, but some institutions or pathways may still require bridging or foundation preparation.',
      'Typical tuition ranges often fall around CAD 15,000 to 30,000 per year for bachelor’s and CAD 18,000 to 35,000 per year for many master’s programs, depending on course and institution.',
    ],
  },
  australia: {
    tuitionRange: 'AUD 20,000 - AUD 45,000 per year',
    annualLivingBudget: 'AUD 29,000+ per year',
    workWhileStudying:
      'International students in Australia may work within current visa limits during study periods and usually full-time during scheduled breaks, helping many gain experience and support living costs.',
    postStudyPathway:
      'Australia offers strong graduate visa pathways for eligible students who want work exposure after completing their studies.',
    heroImage: '/images/destinations/australia-3.jpg',
    heroImageAlt: 'Sydney harbour and city scene in Australia',
    galleryImages: [
      {
        src: '/images/destinations/australia-3.jpg',
        alt: 'Sydney Opera House and harbour view in Australia',
      },
      {
        src: '/images/destinations/australia-1.jpg',
        alt: 'University building in Australia',
      },
      {
        src: '/images/destinations/australia-2.jpg',
        alt: 'City campus setting in Australia',
      },
    ],
    exploreRegions: ['Victoria', 'New South Wales', 'Queensland', 'South Australia', 'Western Australia'],
    applicationSteps: [
      'Choose your course and review university entry requirements.',
      'Meet academic and IELTS requirements and prepare supporting documents.',
      'Submit your application online and review any offer received.',
      'Accept the offer and receive your Confirmation of Enrolment (CoE).',
      'Arrange OSHC, show funds and apply for your Student Visa (Subclass 500).',
    ],
    heroGradient: 'bg-[linear-gradient(135deg,#0a6f74_0%,#0b3c5d_55%,#06253b_100%)]',
    softAccent: 'bg-[#e8f7f4]',
    accentText: 'text-[#0a6f74]',
    accentBg: 'bg-[#0a6f74]',
    facts: ['High employability focus', 'Popular regional study options', 'Strong student lifestyle appeal'],
    popularCourses: ['Nursing', 'Construction Management', 'IT', 'Hospitality', 'Engineering'],
    overviewParagraphs: [
      'Australia is one of the world’s leading study destinations because it combines respected universities, work opportunities and a lifestyle that many students find highly attractive.',
      'Its system has strong British influence, so degrees are internationally recognized and universities consistently appear in global rankings. At the same time, Australia is often seen as practical and future-focused, with strong attention to employability and applied learning.',
      'For many international students, the biggest appeal is balance: quality education, work rights during study and clearer post-study pathways, all in an English-speaking environment with strong global recognition.',
    ],
    institutionGuide: [
      {
        name: 'University of Melbourne',
        summary:
          'The University of Melbourne is one of Australia’s highest-ranked institutions and is especially respected in medicine, law, business and the arts. It combines strong academic reputation with a flexible learning approach and benefits from being located in one of Australia’s most student-friendly cities.',
        bestFor: 'Students looking for elite reputation, strong research culture and broad academic prestige.',
        costPosition: 'Premium option with strong global recognition and major-city living costs.',
      },
      {
        name: 'Australian National University',
        summary:
          'ANU is highly respected for politics, international relations, science and research-intensive study. Because it is based in Canberra, it has strong links to government, policy and public institutions, making it attractive for students interested in academic or policy-oriented careers.',
        bestFor: 'Students aiming for research, policy, international affairs or government-linked careers.',
        costPosition: 'Strong academic value, especially for students whose goals align with research and policy.',
      },
      {
        name: 'University of Sydney',
        summary:
          'The University of Sydney is one of Australia’s oldest and most globally visible universities. It is well known in medicine, engineering and business, and its location in Sydney gives students access to a major city economy and broad professional networks.',
        bestFor: 'Students who want strong prestige and the opportunities of a major international city.',
        costPosition: 'High-value but often expensive because of both tuition and Sydney living costs.',
      },
      {
        name: 'University of New South Wales',
        summary:
          'UNSW is highly regarded for engineering, technology and business, with strong industry links that help students transition into employment. It is a strong option for students who want academics tied closely to employer relevance and innovation.',
        bestFor: 'Students focused on engineering, technology and business careers with strong industry exposure.',
        costPosition: 'Competitive investment, especially for students seeking employability outcomes in technical fields.',
      },
      {
        name: 'Monash University',
        summary:
          'Monash is one of Australia’s largest and most internationally connected universities. It is especially respected in pharmacy, engineering, business and IT, and it appeals to students who want both scale and global exposure.',
        bestFor: 'Students seeking an internationally visible university with broad program strength and global links.',
        costPosition: 'Moderate-to-premium depending on program and city context.',
      },
      {
        name: 'University of Queensland',
        summary:
          'UQ is known for science, environmental studies and engineering and offers a strong academic environment with a somewhat more relaxed city lifestyle compared to Sydney. It often appeals to students who want both quality and a more balanced day-to-day environment.',
        bestFor: 'Students who want strong science or engineering options with a lifestyle-oriented city experience.',
        costPosition: 'Can offer good overall value depending on field and Brisbane living costs.',
      },
    ],
    realityCheck: [
      'Australia is one of the more expensive destinations overall, even though many students still see the value because of work rights and longer-term opportunity.',
      'Its universities are strongly respected globally, which places Australia closer to the UK than to lower-cost destinations in terms of academic reputation.',
      'What makes Australia especially attractive is the combined package of quality education, work rights while studying and post-study visa options.',
      'Some universities may accept KCSE directly for certain pathways, while others may still require foundation preparation depending on the institution and course.',
      'Bachelor’s tuition often ranges around AUD 20,000 to 45,000 per year, while many master’s programs can range from about AUD 22,000 to 50,000 depending on course and university.',
    ],
  },
  malta: {
    tuitionRange: 'EUR 6,000 - EUR 15,000 per year',
    annualLivingBudget: 'EUR 8,500 - EUR 14,000 per year',
    workWhileStudying:
      'International students in Malta can usually work part-time, but not immediately. In many cases you need to stay in the country for a period first and secure the right permit before starting work. Student jobs are often found in tourism, hospitality, retail and customer service, so part-time work can help with day-to-day costs, but it should not be treated as guaranteed full financial support.',
    postStudyPathway:
      'Students often value Malta for affordability, English usage and access to wider European exposure.',
    heroImage: '/images/destinations/malta-1.jpg',
    heroImageAlt: 'Street view in Malta with historic dome architecture',
    galleryImages: [
      {
        src: '/images/destinations/malta-1.jpg',
        alt: 'Historic street and dome architecture in Malta',
      },
      {
        src: '/images/destinations/malta-2.jpg',
        alt: 'Waterfront heritage building in Malta',
      },
      {
        src: '/images/destinations/malta-3.jpg',
        alt: 'Students walking through a sunlit square in Malta',
      },
    ],
    exploreRegions: ['Msida', 'Sliema', 'Valletta', 'St Julians', 'Mosta'],
    applicationSteps: [
      'Shortlist the right institution and program.',
      'Confirm acceptance and English-language expectations.',
      'Prepare financial documents, passport and health cover.',
      'Submit your admission application and secure your offer.',
      'Complete the student permit process and travel planning.',
    ],
    heroGradient: 'bg-[linear-gradient(135deg,#9e5b00_0%,#d79a1f_55%,#5c3300_100%)]',
    softAccent: 'bg-[#fff4db]',
    accentText: 'text-[#9e5b00]',
    accentBg: 'bg-[#9e5b00]',
    facts: ['English-speaking learning environment', 'Lower living cost than many EU routes', 'Compact student-friendly cities'],
    popularCourses: ['Tourism', 'Business', 'Hospitality', 'Health Sciences', 'ICT'],
    overviewParagraphs: [
      'Malta is a small Southern European island state, but its higher education system sits within the wider European framework. Degrees follow the Bologna model used across much of Europe, which helps with recognition and academic progression in other European countries.',
      'A major advantage for many international students is language. English is an official language and is widely used in higher education, so students do not face the same language barrier they might encounter in countries where university study depends heavily on the local language.',
      'The system is also more compact than in larger countries. That makes it easier to understand and navigate, but it also means there are fewer institutions and fewer study pathways than you would see in places like the UK or Canada.',
    ],
    institutionGuide: [
      {
        name: 'University of Malta',
        summary:
          'The University of Malta is the strongest academic institution in the country and the one with the clearest international recognition. It is one of the oldest universities in Europe, offers a broad faculty structure and is especially notable in areas such as medicine, ICT, engineering, business, law and social sciences. It is the best fit for students who want a more serious academic route, stronger prestige and possible progression into postgraduate study or international mobility.',
        bestFor: 'Students who want academic credibility, stronger recognition and a more research-oriented university environment.',
        costPosition: 'Usually more affordable than many European universities, though still above the lowest-cost vocational routes in Malta.',
      },
      {
        name: 'American University of Malta',
        summary:
          'The American University of Malta follows a more flexible private-university model with stronger emphasis on projects, participation, practical learning and smaller class interaction. It can feel more approachable for students who prefer a less rigid system and a smoother admission route, especially in business, engineering and technology-oriented study areas.',
        bestFor: 'Students who prefer smaller classes, continuous assessment and a more career-oriented learning experience.',
        costPosition: 'Typically higher in tuition than public options because it is privately funded.',
      },
      {
        name: 'MCAST',
        summary:
          'The Malta College of Arts, Science and Technology focuses on vocational and technical training. Its strength is not prestige or research ranking, but job-readiness. Students spend more time in practical training, technical exposure and industry-linked learning, which can make it attractive for those who want employable skills and a more direct route into work.',
        bestFor: 'Students who want hands-on training, lower academic barriers and faster movement toward employment.',
        costPosition: 'Often one of the more affordable ways to study in Malta.',
      },
    ],
    realityCheck: [
      'Malta is not a wide-open university market with hundreds of institutions. It is a smaller, more defined system where each institution plays a distinct role.',
      'If your top priority is recognition and academic weight, the University of Malta is usually the strongest option.',
      'If you want a more flexible and practical private-university experience, the American University of Malta may be more suitable.',
      'If you want skill-based learning and quicker job readiness, MCAST is usually the most practical route.',
      'Malta is affordable by European standards, but it is not ultra-cheap. Rent is often the biggest expense, especially near major student areas, so shared accommodation is common for students trying to manage costs.',
    ],
  },
  cyprus: {
    tuitionRange: 'EUR 5,000 - EUR 12,000 per year',
    annualLivingBudget: 'EUR 5,000 - EUR 9,600 per year',
    workWhileStudying:
      'Students in Cyprus may be able to work part-time, but the range of opportunities is usually narrower than in places like Canada or Australia. Jobs are often found in hospitality, tourism and retail, and income from part-time work is generally limited, so students should not depend on it as their main financial plan.',
    postStudyPathway:
      'Its affordability and English-taught options make it a practical stepping stone for many international students.',
    heroImage: '/images/destinations/cyprus-3.jpg',
    heroImageAlt: 'Cyprus coastal and city view',
    galleryImages: [
      {
        src: '/images/destinations/cyprus-3.jpg',
        alt: 'Coastal aerial view in Cyprus',
      },
      {
        src: '/images/destinations/cyprus-1.jpg',
        alt: 'University architecture in Cyprus',
      },
      {
        src: '/images/destinations/cyprus-2.jpg',
        alt: 'Historic academic-style site in Cyprus',
      },
    ],
    exploreRegions: ['Nicosia', 'Limassol', 'Larnaca', 'Paphos', 'Famagusta'],
    applicationSteps: [
      'Compare universities and available English-taught programs.',
      'Check academic, passport and health insurance requirements.',
      'Prepare financial proof and supporting application documents.',
      'Secure your admission offer from the institution.',
      'Apply for visa or permit clearance before departure.',
    ],
    heroGradient: 'bg-[linear-gradient(135deg,#7c3a00_0%,#d97706_55%,#78350f_100%)]',
    softAccent: 'bg-[#fff3e6]',
    accentText: 'text-[#9a4d00]',
    accentBg: 'bg-[#9a4d00]',
    facts: ['Affordable tuition pathway', 'Mediterranean student lifestyle', 'Growing English-taught options'],
    popularCourses: ['Medicine', 'Business', 'Hospitality', 'Computer Science', 'International Relations'],
    overviewParagraphs: [
      'Cyprus is a small Eastern Mediterranean island with education links that place it between Europe, the Middle East and Africa. For many international students, that makes it feel internationally connected while still remaining relatively affordable.',
      'One of the most important things to understand is that Cyprus does not operate as one simple system. The Republic of Cyprus in the south is part of the European Union and generally offers the more internationally recognized universities, while institutions in Northern Cyprus may be cheaper but can have more limited recognition depending on the country or profession.',
      'English is widely used in universities, which lowers the entry barrier for international students. Overall, Cyprus is usually chosen less for prestige and more for accessibility, affordability and a manageable route into a European-style education system.',
    ],
    institutionGuide: [
      {
        name: 'University of Cyprus',
        summary:
          'The University of Cyprus is the strongest public university in the country and the most academically respected. It follows a European research-oriented model and is especially known for engineering, economics, pure sciences and social sciences. It also tends to be the most internationally recognized option in Cyprus.',
        bestFor: 'Students who want stronger academic credibility, public-university standards and clearer EU-linked recognition.',
        costPosition: 'Strong value for a serious academic pathway, though admission can be more competitive than other Cypriot options.',
      },
      {
        name: 'Cyprus University of Technology',
        summary:
          'This university offers a more applied and technology-focused environment while still maintaining good academic quality. It is especially relevant in engineering, technology and applied sciences and can offer a stronger balance between theory and career orientation.',
        bestFor: 'Students who want practical strength with a public-university standard and clearer employability focus.',
        costPosition: 'Generally a balanced public-university route with strong practical relevance.',
      },
      {
        name: 'University of Nicosia',
        summary:
          'The University of Nicosia is a major private institution with strong appeal among international students. It is known for business, medicine, IT and social sciences and offers many English-language programs with a more modern, flexible and internationally oriented model.',
        bestFor: 'Students who want an English-medium private-university route with broader accessibility.',
        costPosition: 'Usually more flexible in admission, with costs shaped by private-university pricing.',
      },
      {
        name: 'Near East University',
        summary:
          'Near East University is in Northern Cyprus and is popular because of affordability, wider program choice and easier access. It has strong facilities and offers medicine, engineering and business, but students need to think carefully about how degree recognition may vary internationally.',
        bestFor: 'Students with tighter budgets who want easier entry and are comfortable evaluating recognition risks carefully.',
        costPosition: 'Often cheaper than southern Cyprus options, but recognition trade-offs matter.',
      },
      {
        name: 'Eastern Mediterranean University',
        summary:
          'EMU is one of the better-known institutions in Northern Cyprus and often has stronger visibility than some other northern universities. It is noted for engineering, architecture and business and has an international student population, though recognition still depends on destination country and profession.',
        bestFor: 'Students who are considering Northern Cyprus but still want one of the better-known options there.',
        costPosition: 'Can be cost-effective, but students should review recognition carefully before deciding.',
      },
    ],
    realityCheck: [
      'Cyprus is a practical option, but it is not generally considered a top global prestige destination.',
      'The distinction between the south and the north matters a lot. Southern institutions usually offer stronger EU-linked recognition, while northern institutions may be cheaper but can create recognition issues in some countries.',
      'Admission is typically easier than in highly competitive destinations like the UK, and many universities offer foundation or preparatory routes.',
      'Tuition is relatively affordable, often in the EUR 3,000 to 10,000 range, though medicine and some specialised programs cost more.',
      'Living costs are moderate and often fall around EUR 400 to 800 per month, but students should still budget carefully because part-time income is usually limited.',
    ],
  },
  spain: {
    tuitionRange: 'EUR 8,000 - EUR 20,000 per year',
    annualLivingBudget: 'EUR 9,600 - EUR 14,400 per year',
    workWhileStudying:
      'Students in Spain can work part-time, but opportunities are usually more realistic for those who can communicate in Spanish. Jobs are often found in hospitality, tourism and retail, and work rights do not automatically translate into easy employment or high earnings.',
    postStudyPathway:
      'Students often choose Spain for culture, lifestyle and growing English-taught study options.',
    heroImage: '/images/destinations/spain-3.jpg',
    heroImageAlt: 'Spain city and university-style architecture',
    galleryImages: [
      {
        src: '/images/destinations/spain-3.jpg',
        alt: 'Academic architecture in a Spanish city',
      },
      {
        src: '/images/destinations/spain-1.jpg',
        alt: 'Students on a university campus in Spain',
      },
      {
        src: '/images/destinations/spain-2.jpg',
        alt: 'Historic civic and academic style building in Spain',
      },
    ],
    exploreRegions: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Granada'],
    applicationSteps: [
      'Choose your city, university and course type.',
      'Check language expectations and academic entry requirements.',
      'Prepare your transcripts, financial proof and health documents.',
      'Apply to the institution and secure your admission letter.',
      'Complete the visa process and departure arrangements.',
    ],
    heroGradient: 'bg-[linear-gradient(135deg,#8f1239_0%,#be123c_45%,#7c2d12_100%)]',
    softAccent: 'bg-[#fde8ee]',
    accentText: 'text-[#9f1239]',
    accentBg: 'bg-[#9f1239]',
    facts: ['Culture-rich student life', 'Appealing cost-to-lifestyle balance', 'Rising English-taught course options'],
    popularCourses: ['International Relations', 'Architecture', 'Business', 'Design', 'Hospitality'],
    overviewParagraphs: [
      'Spain is one of Europe’s largest countries and a member of the European Union, with a long academic history and universities that go back centuries. It is usually chosen less for elite global ranking and more for affordability, culture and the wider European student experience.',
      'The most important reality to understand is language. Spain is not primarily an English-speaking destination, and many undergraduate programs are taught in Spanish. Some English-taught options exist, especially at postgraduate level and in more international private institutions, but language remains one of the biggest deciding factors.',
      'For the right student, this can actually be an advantage. Studying in Spain can mean gaining both a degree and useful Spanish-language exposure, which can be valuable in international careers and cross-cultural work environments.',
    ],
    institutionGuide: [
      {
        name: 'University of Barcelona',
        summary:
          'The University of Barcelona is one of the most internationally visible public universities in Spain. It is especially known in medicine, life sciences, humanities and social sciences and benefits from being in one of Europe’s most dynamic and student-friendly cities.',
        bestFor: 'Students who want a respected Spanish public university in a vibrant and internationally attractive city.',
        costPosition: 'Public-university pricing can be relatively affordable compared to many Western destinations.',
      },
      {
        name: 'Autonomous University of Barcelona',
        summary:
          'This university is academically strong and often ranked among Spain’s better-known institutions. It performs well in economics, business and science and offers a more campus-focused environment outside the centre of Barcelona.',
        bestFor: 'Students who want strong academics with a more focused campus environment near a major city.',
        costPosition: 'Generally attractive for students seeking public-university value with strong academic standing.',
      },
      {
        name: 'Complutense University of Madrid',
        summary:
          'Complutense is one of Spain’s oldest and largest universities, with broad strength in arts, humanities and social sciences. Its Madrid location adds major cultural and professional exposure, especially for students who want capital-city access.',
        bestFor: 'Students who want a historic large-scale public university in the capital.',
        costPosition: 'Academic costs can be reasonable, though Madrid living costs are usually higher than smaller Spanish cities.',
      },
      {
        name: 'University of Navarra',
        summary:
          'Navarra is a prestigious private university with stronger international orientation and more English-friendly options than many public institutions. It is especially well regarded in business, law and communication.',
        bestFor: 'Students who want stronger international positioning and more English-accessible study options.',
        costPosition: 'Higher tuition than public universities because it is a private institution.',
      },
      {
        name: 'IE University',
        summary:
          'IE University is one of the strongest choices in Spain for students who want a modern, highly international and heavily English-based education. It is particularly well known in business, entrepreneurship and technology and is strongly associated with innovation and global career direction.',
        bestFor: 'Students who want Spain with a highly international, English-medium and career-focused academic model.',
        costPosition: 'Premium private-university pricing, usually above public Spanish universities.',
      },
    ],
    realityCheck: [
      'Spain is not primarily an English-study destination, especially at undergraduate level, so language planning matters much more here than in places like the UK, Canada or Australia.',
      'Public universities are usually the most affordable, but many of them rely more heavily on Spanish-taught delivery.',
      'Private institutions may offer more English-friendly programs, but costs can rise significantly.',
      'Part-time work is possible, but Spanish language skills usually improve access to jobs and daily life much more than many students first expect.',
      'Spain offers affordability, rich culture and EU-linked education, but it is not usually the strongest option for students whose top priority is immediate high-paying work after graduation.',
    ],
  },
  'new-zealand': {
    tuitionRange: 'NZD 20,000 - NZD 40,000 per year',
    annualLivingBudget: 'NZD 15,000 - NZD 24,000 per year',
    workWhileStudying:
      'Eligible students in New Zealand can often work up to 20 hours per week during study periods and full-time during scheduled breaks, depending on visa conditions. Common part-time jobs are often found in hospitality, retail, agriculture and customer service.',
    postStudyPathway:
      'New Zealand is popular for its safety, research quality and post-study opportunities for eligible graduates.',
    heroImage: '/images/destinations/newzealand-3.jpg',
    heroImageAlt: 'New Zealand city waterfront view',
    galleryImages: [
      {
        src: '/images/destinations/newzealand-3.jpg',
        alt: 'City skyline and waterfront in New Zealand',
      },
      {
        src: '/images/destinations/newzealand-2.jpg',
        alt: 'Harbour and city landscape in New Zealand',
      },
      {
        src: '/images/destinations/newzealand-1.jpg',
        alt: 'Historic university-style building in New Zealand',
      },
    ],
    exploreRegions: ['Auckland', 'Wellington', 'Canterbury', 'Otago', 'Waikato'],
    applicationSteps: [
      'Select your program and preferred institution.',
      'Meet entry and English-language requirements.',
      'Prepare academic records, finances and health-related documents.',
      'Accept your offer and organise accommodation planning.',
      'Apply for the student visa and complete pre-departure steps.',
    ],
    heroGradient: 'bg-[linear-gradient(135deg,#14532d_0%,#166534_45%,#0f172a_100%)]',
    softAccent: 'bg-[#eaf8ef]',
    accentText: 'text-[#166534]',
    accentBg: 'bg-[#166534]',
    facts: ['Safe student environment', 'Strong research reputation', 'Nature-forward lifestyle'],
    popularCourses: ['Agriculture', 'Environmental Science', 'Nursing', 'Engineering', 'Business'],
    overviewParagraphs: [
      'New Zealand is a small but highly developed South Pacific country known for safety, education quality and a strong lifestyle balance. Its higher education system is influenced by the British model, so degrees are internationally recognized and the universities maintain consistent academic standards.',
      'The country has only eight public universities, but that smaller system is often seen as a strength rather than a weakness because quality is tightly regulated. For many students, New Zealand feels like a balanced option: less intense than the most competitive destinations, but still globally respected.',
      'English is the main language of instruction, so students do not face the same language barrier that can exist in some other destinations. Combined with its calmer environment and strong academic quality, this makes New Zealand appealing to students who want both credibility and quality of life.',
    ],
    institutionGuide: [
      {
        name: 'University of Auckland',
        summary:
          'The University of Auckland is the highest-ranked university in the country and the strongest option for students who want top-tier recognition in New Zealand. It is especially respected in business, engineering, computer science and medicine and benefits from being in the country’s largest city and economic centre.',
        bestFor: 'Students who want the strongest New Zealand university brand and broad career access in the country’s biggest city.',
        costPosition: 'Usually one of the more expensive New Zealand routes once Auckland living costs are considered.',
      },
      {
        name: 'University of Otago',
        summary:
          'Otago is one of New Zealand’s oldest universities and has especially strong reputation in medicine and health sciences. It is also well known for student life and community feel, with Dunedin offering a more student-centred environment than larger commercial cities.',
        bestFor: 'Students interested in medicine, health sciences and a strong traditional university environment.',
        costPosition: 'Often attractive for students who want academic quality outside the highest-cost city market.',
      },
      {
        name: 'Victoria University of Wellington',
        summary:
          'Located in the capital, Victoria University of Wellington is particularly strong in law, humanities and political science. Its proximity to government institutions makes it especially appealing to students interested in policy, law and public-sector pathways.',
        bestFor: 'Students interested in law, public policy, humanities or government-linked careers.',
        costPosition: 'Strong value for students whose academic interests align with capital-city opportunities.',
      },
      {
        name: 'University of Canterbury',
        summary:
          'Canterbury is especially known for engineering and science and has a practical orientation that appeals to technical students. Its Christchurch location can also feel quieter and more manageable than Auckland for some students.',
        bestFor: 'Students looking for engineering or science strength in a calmer and often more affordable city setting.',
        costPosition: 'Can offer a solid balance between cost, technical quality and city affordability.',
      },
      {
        name: 'Massey University',
        summary:
          'Massey is well known for flexibility, innovation and strong programs in business, aviation, agriculture and creative arts. It is often attractive to students who value adaptable learning pathways and practical subject areas.',
        bestFor: 'Students who want flexibility, sector-specific strength and less rigid study pathways.',
        costPosition: 'Can be a practical option for students focused on applied and career-driven study areas.',
      },
      {
        name: 'Auckland University of Technology',
        summary:
          'AUT is more applied and career-oriented than some traditional universities and is especially known for technology, business and applied sciences. It appeals to students who want practical learning with a stronger employment focus.',
        bestFor: 'Students who prefer modern, applied education and a clear connection to employability.',
        costPosition: 'Often attractive for students prioritizing practical value in a major city environment.',
      },
    ],
    realityCheck: [
      'New Zealand is a strong destination, but it is geographically far from many students’ home countries, which can make travel costs noticeably higher.',
      'The job market is smaller than in countries like Canada or Australia, so opportunities exist but are not as broad in scale.',
      'The country has fewer universities, which means fewer choices overall, even though education quality remains consistently strong.',
      'Tuition is moderately expensive, often around NZD 22,000 to 35,000 for many bachelor’s programs and NZD 26,000 to 40,000 for many master’s programs.',
      'For students who value safety, lifestyle, strong education standards and a post-study work option, New Zealand can still be a very well-balanced choice.',
    ],
  },
};
