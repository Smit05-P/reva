import { newConditions, facilities as facilitiesData } from "./new-conditions";

export const siteConfig = {
  name: "Reva Surgical Hospital",
  tagline: "Expert Anorectal Care — Right Here in Palanpur",
  description:
    "Specialist anorectal surgical care for Piles, Fissure, Fistula & Pilonidal Sinus by Dr. Parth Prajapati in Palanpur, Gujarat.",
  url: "https://revasurgicalhospital.com",
  phone: "+91 94269 07608",
  phoneRaw: "919426907608",
  email: "parthr120@gmail.com",
  address:
    "2nd Floor, Dhyan Complex, Koptak Bank Rd, Shahbaaug Palace, Doctor House Area, Ambika Society, Palanpur, Gujarat — 385001",
  whatsappMessage:
    "Hello, I am from the website. I want to book an appointment.",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.123!2d72.432!3d24.171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPalanpur%2C+Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapQuery: "Reva+Surgical+Hospital+Palanpur+Gujarat",
};

export const doctor = {
  name: "Dr. Parth Prajapati",
  designation: "Consultant Anorectal Surgeon",
  qualifications: "B.A.M.S, M.S (Ayu)",
  location: "Palanpur, Gujarat",
  bio: "Dr. Parth Prajapati is a highly skilled Consultant Proctologist & Anorectal Surgeon specializing in minimally invasive and laser-based treatments for anorectal conditions. With years of dedicated practice, he brings expert care right to Palanpur — so patients don't need to travel to big cities for specialist treatment.",
  specialties: [
    "Complex Fistula Management",
    "Minimally Invasive Procedures",
    "Advanced Laser Proctology",
    "Piles & Hemorrhoid Surgery",
  ],
};

export const conditions = [
  {
    slug: "piles",
    title: "Piles",
    altTitle: "Hemorrhoids",
    shortDesc:
      "Swollen veins in the rectum or anus — treatable with minimally invasive surgery.",
    icon: "Droplets",
    seoTitle: "Piles Treatment in Palanpur | Dr. Parth Prajapati",
    seoDesc:
      "Expert piles & hemorrhoid treatment in Palanpur by Dr. Parth Prajapati. Minimally invasive laser surgery with fast recovery.",
    heroHeadline: "Piles Treatment in Palanpur",
    definition:
      "Piles (hemorrhoids) are swollen and inflamed veins in the rectum and anus that cause discomfort, bleeding, and pain. They can be internal (inside the rectum) or external (under the skin around the anus). While common, they often go untreated due to embarrassment — but effective, minimally invasive treatments are available.",
    causes: [
      { label: "Chronic Constipation", desc: "Straining during bowel movements increases pressure on rectal veins" },
      { label: "Sedentary Lifestyle", desc: "Prolonged sitting reduces blood flow and increases venous pressure" },
      { label: "Obesity", desc: "Excess body weight puts additional pressure on pelvic veins" },
      { label: "Pregnancy", desc: "Increased abdominal pressure during pregnancy can cause hemorrhoids" },
      { label: "Low-Fiber Diet", desc: "Leads to harder stools and more straining" },
      { label: "Heavy Lifting", desc: "Repeated heavy lifting increases intra-abdominal pressure" },
      { label: "Aging", desc: "Tissues supporting rectal veins weaken with age" },
    ],
    symptoms: [
      { label: "Rectal Bleeding", desc: "Bright red blood on toilet paper or in the bowl after bowel movements" },
      { label: "Pain & Discomfort", desc: "Aching or sharp pain around the anus, especially during sitting" },
      { label: "Swelling", desc: "Noticeable lump or swelling near the anus" },
      { label: "Itching & Irritation", desc: "Persistent itching around the anal region" },
      { label: "Mucus Discharge", desc: "Mucus leakage from the anus after bowel movements" },
    ],
    conservative: [
      "High-fiber diet (fruits, vegetables, whole grains)",
      "Adequate hydration (8–10 glasses of water daily)",
      "Over-the-counter stool softeners",
      "Sitz baths (warm water soaks for 10–15 minutes)",
      "Topical creams and ointments for pain relief",
      "Avoiding prolonged sitting and straining",
    ],
    surgical: [
      { procedure: "Laser Hemorrhoidectomy", desc: "Minimally invasive laser removal of hemorrhoid tissue", advantages: "Less pain, faster recovery, minimal bleeding", disadvantages: "Higher cost, limited availability" },
      { procedure: "Stapled Hemorrhoidopexy", desc: "Circular stapler repositions prolapsed hemorrhoid tissue", advantages: "Less post-operative pain, quicker return to work", disadvantages: "Higher recurrence rate for some grades" },
      { procedure: "Rubber Band Ligation", desc: "Elastic band cuts off blood supply to the hemorrhoid", advantages: "Office-based, no anesthesia needed", disadvantages: "Only for internal hemorrhoids, may need repeat" },
    ],
    aftercare: [
      "Keep the surgical area clean and dry",
      "Take prescribed pain medications as directed",
      "Follow a high-fiber diet to ensure soft stools",
      "Use sitz baths after each bowel movement",
      "Avoid heavy lifting for 2–4 weeks",
      "Attend all follow-up appointments",
    ],
    faqs: [
      { q: "What are piles?", a: "Piles (hemorrhoids) are swollen veins in the rectal and anal area. They can cause pain, bleeding, and itching. They are very common and treatable." },
      { q: "What causes piles?", a: "Common causes include chronic constipation, straining during bowel movements, a low-fiber diet, obesity, pregnancy, and prolonged sitting." },
      { q: "What are the symptoms of piles?", a: "Symptoms include rectal bleeding, pain, swelling around the anus, itching, and mucus discharge." },
      { q: "How are piles diagnosed?", a: "A doctor can diagnose piles through a physical examination. In some cases, a digital rectal exam or proctoscopy may be needed." },
      { q: "Is surgery always necessary for piles?", a: "No. Mild cases respond well to dietary changes, medications, and lifestyle modifications. Surgery is recommended for severe or recurring cases." },
      { q: "What is the recovery time after piles surgery?", a: "Most patients experience relief within 1–2 weeks. Full recovery typically takes 3–4 weeks depending on the procedure." },
      { q: "Can piles come back after treatment?", a: "Recurrence is possible if the underlying causes (constipation, poor diet) are not addressed. Lifestyle changes significantly reduce recurrence risk." },
      { q: "How can I prevent piles?", a: "Eat a high-fiber diet, drink plenty of water, exercise regularly, avoid prolonged sitting, and don't strain during bowel movements." },
      { q: "Are piles dangerous?", a: "Piles are rarely dangerous but can significantly affect quality of life. In rare cases, chronic bleeding may lead to anemia." },
      { q: "Is the laser treatment for piles painful?", a: "Laser treatment is minimally invasive with significantly less pain compared to traditional surgery. Most patients report only mild discomfort." },
    ],
  },
  {
    slug: "fissure",
    title: "Fissure",
    altTitle: "Anal Fissure",
    shortDesc:
      "Small tear in the anal lining causing pain and bleeding during bowel movements.",
    icon: "Zap",
    seoTitle: "Fissure Treatment in Palanpur | Dr. Parth Prajapati",
    seoDesc:
      "Painless fissure treatment in Palanpur. Expert care by Dr. Parth Prajapati — laser fissurectomy with fast recovery.",
    heroHeadline: "Fissure Treatment in Palanpur",
    definition:
      "An anal fissure is a small tear or crack in the lining of the anus. It typically causes sharp pain and bleeding during and after bowel movements. While often caused by passing hard stools, fissures can affect anyone at any age and are highly treatable with proper care.",
    causes: [
      { label: "Constipation & Straining", desc: "Hard stools and excessive straining tear the delicate anal lining" },
      { label: "Diarrhea", desc: "Frequent loose stools can irritate and damage the anal tissue" },
      { label: "Childbirth", desc: "Vaginal delivery can cause strain and trauma to the anal area" },
      { label: "Trauma", desc: "Direct injury or rough wiping can tear the anal lining" },
      { label: "Tight Anal Sphincter", desc: "Hypertonic sphincter muscles reduce blood flow and impair healing" },
      { label: "Underlying Conditions", desc: "Crohn's disease, IBD, and other inflammatory conditions increase risk" },
      { label: "Anal Infections", desc: "Infections in the anal region can weaken tissue and cause tears" },
    ],
    symptoms: [
      { label: "Sharp Pain", desc: "Stinging or burning pain during and after bowel movements, lasting minutes to hours" },
      { label: "Bright Red Bleeding", desc: "Blood on toilet paper or stool surface" },
      { label: "Visible Tear", desc: "A small crack or tear visible in the skin around the anus" },
      { label: "Sphincter Spasms", desc: "Involuntary muscle spasms of the anal sphincter" },
      { label: "Itching", desc: "Persistent itching or irritation around the anal area" },
    ],
    conservative: [
      "High-fiber diet to soften stools",
      "Increased fluid intake (8–10 glasses daily)",
      "Stool softeners (over-the-counter)",
      "Sitz baths (warm water for 10–15 minutes after bowel movements)",
      "Topical medications (nitroglycerin ointment, calcium channel blockers)",
      "Proper hygiene after bowel movements",
    ],
    surgical: [
      { procedure: "Laser Fissurectomy", desc: "Minimally invasive laser removal of damaged tissue", advantages: "Less pain, faster recovery, low infection risk", disadvantages: "Higher cost, potential recurrence" },
      { procedure: "Lateral Internal Sphincterotomy (LIS)", desc: "Small cut in the internal sphincter to reduce spasm", advantages: "High success rate, quick relief, low recurrence", disadvantages: "Slight risk of incontinence" },
      { procedure: "Fissurectomy", desc: "Surgical removal of the damaged tissue", advantages: "Effective for persistent fissures", disadvantages: "Longer healing time, scar tissue risk" },
      { procedure: "Botox Injections", desc: "Temporary relaxation of the sphincter muscle", advantages: "Non-invasive, minimal downtime", disadvantages: "Temporary results, may need repeat injections" },
    ],
    aftercare: [
      "Keep the wound area clean and dry",
      "Take pain medications as prescribed",
      "Maintain a high-fiber, well-hydrated diet",
      "Use sitz baths after each bowel movement",
      "Avoid heavy lifting and prolonged sitting",
      "Attend regular follow-up appointments",
    ],
    faqs: [
      { q: "What is a fissure?", a: "A fissure is a small tear or crack in the lining of the anus that causes pain and bleeding during bowel movements." },
      { q: "What causes a fissure?", a: "Common causes include hard stools, constipation, diarrhea, straining during bowel movements, and trauma to the anal area." },
      { q: "What are the symptoms of a fissure?", a: "Symptoms include sharp pain during bowel movements, bright red bleeding, visible tear, sphincter spasms, and itching." },
      { q: "How is a fissure diagnosed?", a: "A doctor can diagnose a fissure through a simple physical examination of the anal area." },
      { q: "What are the treatment options?", a: "Treatment ranges from dietary changes, sitz baths, and topical medications to surgical options like laser fissurectomy or LIS for chronic cases." },
      { q: "Is surgery necessary for fissures?", a: "Surgery is only recommended for chronic fissures that don't respond to conservative treatment. LIS is the most common surgical procedure." },
      { q: "What is the recovery time after surgery?", a: "Symptom relief typically occurs within 1–2 weeks. Full recovery takes approximately 1–1.5 months." },
      { q: "Can fissures recur?", a: "Yes, fissures can recur if the underlying causes like constipation and poor diet are not addressed." },
      { q: "How can I prevent fissures?", a: "Eat a high-fiber diet, stay hydrated, exercise regularly, and avoid straining during bowel movements." },
      { q: "Are fissures contagious?", a: "No, anal fissures are not contagious. They are a mechanical injury to the anal tissue." },
    ],
  },
  {
    slug: "fistula",
    title: "Fistula",
    altTitle: "Anorectal Fistula",
    shortDesc:
      "Abnormal tunnel between the rectum and skin — requires surgical correction.",
    icon: "Microscope",
    seoTitle: "Fistula Treatment in Palanpur | Dr. Parth Prajapati",
    seoDesc:
      "Expert fistula treatment in Palanpur Gujarat. Dr. Parth Prajapati offers advanced laser fistula surgery with minimal pain.",
    heroHeadline: "Fistula Treatment in Palanpur",
    definition:
      "An anorectal fistula is an abnormal tunnel-like tract that forms between the inside of the anal canal and the skin near the anus. It usually develops as a result of an anal abscess that doesn't heal properly. Fistulas require surgical treatment as they rarely heal on their own.",
    causes: [
      { label: "Anal Abscess", desc: "Most fistulas develop from a previous anal abscess that drains incompletely" },
      { label: "Crohn's Disease", desc: "Inflammatory bowel disease significantly increases fistula risk" },
      { label: "Infection", desc: "Bacterial infection of the anal glands can lead to abscess and fistula formation" },
      { label: "Tuberculosis", desc: "TB can cause chronic anal infections leading to fistula" },
      { label: "Trauma", desc: "Surgical or accidental trauma to the anal area" },
      { label: "Radiation Therapy", desc: "Previous radiation treatment to the pelvic area" },
    ],
    symptoms: [
      { label: "Persistent Drainage", desc: "Pus or bloody discharge from an opening near the anus" },
      { label: "Pain & Swelling", desc: "Throbbing pain around the anus, especially when sitting" },
      { label: "Fever", desc: "Recurring low-grade fever indicating ongoing infection" },
      { label: "Skin Irritation", desc: "Redness and soreness of the skin around the external opening" },
    ],
    conservative: [
      "Antibiotics for active infection",
      "Warm compresses and sitz baths for symptom relief",
      "Proper wound hygiene and drainage management",
      "Pain management with prescribed medications",
    ],
    surgical: [
      { procedure: "Fistulotomy", desc: "Laying open the entire fistula tract for healing", advantages: "High success rate (90%+), definitive treatment", disadvantages: "Risk of sphincter damage in complex fistulas" },
      { procedure: "LIFT Procedure", desc: "Ligation of the intersphincteric fistula tract", advantages: "Sphincter-preserving, low recurrence", disadvantages: "Technically demanding, not for all types" },
      { procedure: "Seton Technique", desc: "Thread placed through fistula to promote gradual healing", advantages: "Preserves sphincter, staged approach", disadvantages: "Multiple procedures needed, longer treatment" },
      { procedure: "Laser Fistula Treatment", desc: "Laser energy destroys the fistula tract from inside", advantages: "Minimally invasive, sphincter-preserving, fast recovery", disadvantages: "Higher cost, may not suit complex fistulas" },
    ],
    aftercare: [
      "Keep the wound clean with regular sitz baths",
      "Change dressings as directed by your surgeon",
      "Take prescribed antibiotics and pain medication",
      "Follow a high-fiber diet for soft bowel movements",
      "Avoid strenuous activity for 2–4 weeks",
      "Attend all follow-up appointments for wound monitoring",
    ],
    faqs: [
      { q: "What is a fistula?", a: "A fistula is an abnormal tunnel connecting the inside of the anal canal to the skin near the anus, usually caused by an anal abscess." },
      { q: "What causes a fistula?", a: "Most fistulas develop from anal abscesses. Other causes include Crohn's disease, infections, tuberculosis, and trauma." },
      { q: "Can a fistula heal on its own?", a: "No. Fistulas rarely heal without surgical intervention. They tend to persist or worsen without treatment." },
      { q: "What are the symptoms?", a: "Symptoms include persistent drainage of pus near the anus, pain, swelling, fever, and skin irritation." },
      { q: "How is a fistula diagnosed?", a: "Diagnosis involves physical examination, and may include MRI or endoanal ultrasound to map the fistula tract." },
      { q: "What surgical options are available?", a: "Options include fistulotomy, LIFT procedure, seton technique, and laser fistula treatment depending on complexity." },
      { q: "What is the recovery time?", a: "Recovery varies by procedure — simple fistulotomy heals in 4–6 weeks, while complex cases may take longer." },
      { q: "Can fistulas recur after surgery?", a: "Recurrence is possible (5–15% depending on procedure). Proper surgical technique and follow-up care minimize this risk." },
      { q: "Is fistula surgery painful?", a: "Modern techniques like laser treatment are minimally invasive with significantly less pain than traditional surgery." },
      { q: "How can I prevent fistulas?", a: "Prompt treatment of anal abscesses, maintaining good hygiene, and managing underlying conditions like Crohn's disease help prevent fistulas." },
    ],
  },
  {
    slug: "pilonidal-sinus",
    title: "Pilonidal Sinus",
    altTitle: "Pilonidal Cyst",
    shortDesc:
      "Infected tract near the tailbone — treated with laser/minimally invasive surgery.",
    icon: "Hospital",
    seoTitle: "Pilonidal Sinus Treatment in Palanpur | Dr. Parth Prajapati",
    seoDesc:
      "Pilonidal sinus treatment in Palanpur by Dr. Parth Prajapati. Advanced laser surgery with same-day discharge and fast recovery.",
    heroHeadline: "Pilonidal Sinus Treatment in Palanpur",
    definition:
      "A pilonidal sinus is a small cyst or tunnel in the skin at the top of the cleft between the buttocks (near the tailbone). It often contains hair, dirt, and debris, and can become infected, causing pain and swelling. It is more common in young adults, especially males, and those with sedentary lifestyles.",
    causes: [
      { label: "Ingrown Hair", desc: "Hair penetrates the skin and causes an inflammatory reaction" },
      { label: "Prolonged Sitting", desc: "Pressure and friction from sitting aggravate the condition" },
      { label: "Excess Body Hair", desc: "People with thick or coarse body hair are at higher risk" },
      { label: "Friction & Sweating", desc: "Tight clothing and sweating create a favorable environment" },
      { label: "Obesity", desc: "Excess weight increases pressure and friction in the area" },
      { label: "Family History", desc: "Genetic predisposition plays a role in susceptibility" },
    ],
    symptoms: [
      { label: "Pain & Tenderness", desc: "Pain at the base of the spine/tailbone, worsening when sitting" },
      { label: "Swelling & Redness", desc: "Noticeable swelling and redness over the affected area" },
      { label: "Pus/Blood Drainage", desc: "Foul-smelling pus or blood draining from an opening" },
      { label: "Fever", desc: "Low-grade fever when the sinus is actively infected" },
    ],
    conservative: [
      "Antibiotics for mild infections",
      "Warm compresses to promote drainage",
      "Proper hygiene — keep the area clean and hair-free",
      "Avoid prolonged sitting",
      "Pain management with over-the-counter medications",
    ],
    surgical: [
      { procedure: "Laser Sinusectomy", desc: "Laser energy destroys the sinus tract with minimal tissue damage", advantages: "Minimally invasive, fast recovery, same-day discharge", disadvantages: "Higher cost, not suitable for very large sinuses" },
      { procedure: "Excision with Primary Closure", desc: "Complete surgical removal of the sinus with wound closure", advantages: "Definitive treatment, lower recurrence with proper technique", disadvantages: "Longer healing, wound dehiscence risk" },
      { procedure: "Pit Picking", desc: "Minimally invasive removal of the sinus pits only", advantages: "Quick procedure, minimal scarring, fast recovery", disadvantages: "Higher recurrence for complex cases" },
    ],
    aftercare: [
      "Keep the wound area clean and dry",
      "Change dressings regularly as instructed",
      "Avoid sitting for extended periods",
      "Keep the area free of hair (shaving or laser hair removal)",
      "Follow a healthy diet to support healing",
      "Attend all follow-up appointments",
    ],
    faqs: [
      { q: "What is pilonidal sinus?", a: "A pilonidal sinus is an infected tract or cyst near the tailbone that contains hair and debris. It can cause pain, swelling, and drainage." },
      { q: "What causes pilonidal sinus?", a: "It is primarily caused by ingrown hair, prolonged sitting, excess body hair, friction, obesity, and genetic factors." },
      { q: "Is pilonidal sinus serious?", a: "While not life-threatening, untreated pilonidal sinus can cause recurring infections, abscesses, and significant discomfort." },
      { q: "Can pilonidal sinus heal without surgery?", a: "Mild cases may respond to antibiotics and hygiene measures, but recurring or complex cases require surgical treatment." },
      { q: "What is laser pilonidal sinus surgery?", a: "Laser surgery uses focused laser energy to destroy the sinus tract with minimal tissue damage, allowing same-day discharge and faster recovery." },
      { q: "What is the recovery time?", a: "Laser surgery patients typically recover within 1–2 weeks. Traditional excision may take 4–6 weeks for complete healing." },
      { q: "Can pilonidal sinus recur?", a: "Yes, recurrence rates range from 5–30% depending on the procedure and post-operative care. Keeping the area hair-free reduces risk." },
      { q: "How can I prevent pilonidal sinus?", a: "Maintain good hygiene, keep the area clean and hair-free, avoid prolonged sitting, maintain healthy weight, and wear loose-fitting clothing." },
      { q: "Is the surgery painful?", a: "Modern laser surgery is minimally invasive with significantly less pain. Local anesthesia is often sufficient." },
      { q: "Who is at higher risk?", a: "Young males (15–35 years), people with sedentary jobs, those with thick body hair, and individuals with a family history are at higher risk." },
    ],
  },
  ...newConditions,
];

export const testimonials = [
  { name: "Rajesh Patel", condition: "Piles", gender: "male", quote: "I was suffering from piles for over 5 years. Dr. Parth Prajapati performed the laser surgery and I was back to normal within a week. Highly recommended!" },
  { name: "Meena Shah", condition: "Fissure", gender: "female", quote: "The pain during bowel movements was unbearable. After treatment at Reva Surgical Hospital, I am completely pain-free. The doctor and staff were very caring." },
  { name: "Amit Chaudhary", condition: "Fistula", gender: "male", quote: "I had a complex fistula that other doctors couldn't treat properly. Dr. Prajapati's expertise resolved my issue completely. Grateful for the excellent care." },
  { name: "Priya Desai", condition: "Pilonidal Sinus", gender: "female", quote: "Got my pilonidal sinus treated with laser surgery. Same-day discharge and minimal pain. The hospital facilities are excellent and very clean." },
  { name: "Suresh Modi", condition: "Piles", gender: "male", quote: "Was very anxious about the surgery but Dr. Prajapati explained everything patiently. The procedure was painless and recovery was quick. Thank you!" },
  { name: "Bhavna Trivedi", condition: "Fissure", gender: "female", quote: "Suffered from chronic fissure for 2 years. Conservative treatment at Reva worked perfectly. No surgery was needed. Very professional and caring team." },
];

export const stats = [
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Happy Patients", value: 5000, suffix: "+" },
  { label: "Surgeries Performed", value: 3000, suffix: "+" },
  { label: "Conditions Treated", value: 9, suffix: "" },
];

export const whyChooseUs = [
  { title: "Specialist Anorectal Surgeon", desc: "Dedicated expertise in proctology — not a general surgeon", icon: "Target" },
  { title: "Minimally Invasive Techniques", desc: "Advanced laser surgery with less pain and faster recovery", icon: "Sparkles" },
  { title: "Experienced & Qualified", desc: "B.A.M.S, M.S (Ayu) with years of specialized practice", icon: "Award" },
  { title: "Local Expert Care", desc: "No need to travel to Ahmedabad or Surat for specialist treatment", icon: "MapPin" },
  { title: "Compassionate Care", desc: "Patient-focused approach with personal attention and follow-up", icon: "Heart" },
  { title: "Transparent Process", desc: "Clear consultation, honest advice, and no unnecessary procedures", icon: "Handshake" },
];

export { facilitiesData as facilities };

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Specialities",
    href: "#",
    children: [
      { label: "Pilonidal Sinus", href: "/pilonidal-sinus" },
      { label: "Fissure", href: "/fissure" },
      { label: "Fistula", href: "/fistula" },
      { label: "Piles", href: "/piles" },
      { label: "Rectal Prolapse", href: "/rectal-prolapse" },
      { label: "Anal Papilla", href: "/anal-papilla" },
      { label: "Perianal Abscess", href: "/perianal-abscess" },
      { label: "ODS", href: "/ods" },
      { label: "Constipation", href: "/constipation" },
    ],
  },
  {
    label: "Facilities",
    href: "#",
    children: [
      { label: "Radiology", href: "/facilities#radiology" },
      { label: "Anal Manometry", href: "/facilities#anal-manometry" },
      { label: "Biofeedback Therapy", href: "/facilities#biofeedback-therapy" },
      { label: "Colonoscopy", href: "/facilities#colonoscopy" },
      { label: "Endoscopy", href: "/facilities#endoscopy" },
      { label: "Pharmacy", href: "/facilities#pharmacy" },
      { label: "Laboratory", href: "/facilities#laboratory" },
      { label: "Health Insurance", href: "/facilities#health-insurance" },
      { label: "Medical Tourism", href: "/facilities#medical-tourism" },
      { label: "Nutrition & Ayurveda", href: "/facilities#nutrition-ayurveda" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const galleryCategories = [
  {
    title: "Reception & Waiting Area",
    images: [
      { src: "/images/gallery/reception-1.jpg", alt: "Reception area with modern seating" },
      { src: "/images/gallery/reception-2.jpg", alt: "Spacious waiting area" },
      { src: "/images/gallery/reception-3.jpg", alt: "Front desk reception" },
    ],
  },
  {
    title: "Operation Theatre",
    images: [
      { src: "/images/gallery/ot-1.jpg", alt: "Modern operation theatre with advanced equipment" },
      { src: "/images/gallery/ot-2.jpg", alt: "Surgical equipment setup" },
    ],
  },
  {
    title: "OPD (Consultation Room)",
    images: [
      { src: "/images/gallery/opd-1.jpg", alt: "Doctor consultation room" },
      { src: "/images/gallery/opd-2.jpg", alt: "OPD examination area" },
    ],
  },
  {
    title: "Patient Rooms",
    images: [
      { src: "/images/gallery/room-1.jpg", alt: "Comfortable patient room" },
      { src: "/images/gallery/room-2.jpg", alt: "Deluxe patient room with amenities" },
      { src: "/images/gallery/room-3.jpg", alt: "Patient room with attached washroom" },
    ],
  },
  {
    title: "Nursing Station",
    images: [
      { src: "/images/gallery/nursing-1.jpg", alt: "Nursing station and lobby" },
      { src: "/images/gallery/nursing-2.jpg", alt: "24/7 nursing care station" },
    ],
  },
];
