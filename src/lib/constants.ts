export const CLINIC_INFO = {
  name: "Geetai Dental Hospital",
  address: "Malegaon Road, Taroda Naka, Nanded, India, Maharashtra",
  phone: "070209 11752",
  email: "GeetaiDentalHospital@Gmail.com",
  whatsappUrl: "https://wa.me/917020911752",
  workingHours: "Mon-Fri: 8AM - 6PM",
};

export type SubService = {
  name: string;
  price: string;
  description: string;
  procedure: string[];
};

export type ServiceCategory = {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  color: string;
  subServices: SubService[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "General Dentistry & Diagnostics",
    slug: "general-dentistry",
    tagline: "Your First Step to a Healthy Smile",
    description:
      "Every great dental journey starts with a thorough consultation and accurate diagnostics. Our general dentistry services form the foundation of your oral health.",
    image: "/assets/service_consultation.png",
    iconName: "Stethoscope",
    color: "blue",
    subServices: [
      {
        name: "Dentist Consultation",
        price: "₹200",
        description:
          "A comprehensive one-on-one consultation with our expert dentist who will evaluate your oral health, identify any issues, and create a personalized treatment plan tailored to your needs.",
        procedure: [
          "Patient registration and medical history review",
          "Visual examination of teeth, gums, and oral tissues",
          "Assessment of bite alignment and jaw function",
          "Identification of cavities, gum disease, or other concerns",
          "Discussion of findings and personalized treatment recommendation",
          "Guidance on home oral hygiene practices",
        ],
      },
      {
        name: "Dental X-Ray",
        price: "₹200",
        description:
          "Digital dental X-rays provide a detailed view of your teeth, roots, jawbone, and surrounding structures that are invisible to the naked eye. Essential for accurate diagnosis.",
        procedure: [
          "Patient is positioned comfortably with a protective lead apron",
          "A small digital sensor is placed inside the mouth",
          "Quick, low-radiation X-ray images are captured (takes seconds)",
          "High-resolution images appear instantly on the monitor",
          "Dentist analyzes images for cavities, bone loss, and infections",
          "X-rays are saved to your patient record for future reference",
        ],
      },
    ],
  },
  {
    title: "Orthodontics (Teeth Braces)",
    slug: "orthodontics",
    tagline: "Straighten Your Smile with Confidence",
    description:
      "Achieve perfectly aligned teeth with our modern orthodontic solutions. We offer both traditional metal braces and aesthetic ceramic braces to suit your lifestyle and budget.",
    image: "/assets/service_braces.png",
    iconName: "Smile",
    color: "purple",
    subServices: [
      {
        name: "Metal Teeth Braces",
        price: "₹15,000",
        description:
          "The most time-tested and cost-effective orthodontic solution. High-grade stainless steel brackets and wires gently guide your teeth into perfect alignment over time.",
        procedure: [
          "Initial consultation and dental X-rays to map tooth position",
          "Creation of a custom orthodontic treatment plan",
          "Teeth are cleaned and dried before bracket bonding",
          "Metal brackets are securely bonded to each tooth with dental adhesive",
          "Arch wire is threaded through brackets and secured with elastic bands",
          "Monthly adjustment appointments to tighten and track progress",
          "Braces are removed once alignment goals are achieved (typically 12-24 months)",
          "Retainer provided to maintain the new tooth positions",
        ],
      },
      {
        name: "Ceramic Teeth Braces",
        price: "₹30,000",
        description:
          "Ceramic braces work just as effectively as metal braces but use tooth-coloured or clear brackets that blend seamlessly with your teeth, making them far less noticeable.",
        procedure: [
          "Initial consultation and dental X-rays to assess alignment needs",
          "Custom orthodontic treatment plan is formulated",
          "Teeth are cleaned, polished, and prepared for bonding",
          "Tooth-coloured ceramic brackets are precisely bonded to each tooth",
          "A clear or tooth-coloured arch wire is fitted through the brackets",
          "Elastic ties secure the wire; tooth-coloured ties are used for aesthetics",
          "Monthly progress checks and wire adjustments",
          "Brackets are gently removed at treatment completion",
          "A retainer is fitted to lock in your perfect new smile",
        ],
      },
    ],
  },
  {
    title: "Teeth Replacement",
    slug: "teeth-replacement",
    tagline: "Restore Your Complete, Natural-Looking Smile",
    description:
      "Missing teeth affect your confidence, speech, and ability to eat. We offer a full range of modern tooth replacement solutions, from permanent implants to affordable removable options.",
    image: "/assets/service_implant.png",
    iconName: "Layers",
    color: "teal",
    subServices: [
      {
        name: "Dental Implant",
        price: "₹20,000",
        description:
          "The gold standard in tooth replacement. A titanium post is surgically placed into the jawbone to act as an artificial root, topped with a natural-looking porcelain crown for a permanent, beautiful result.",
        procedure: [
          "Comprehensive examination including X-rays and 3D bone scan",
          "Treatment planning and implant placement design",
          "Local anesthesia administered for complete comfort",
          "A small incision is made in the gum to expose the jawbone",
          "A precision titanium post is surgically inserted into the bone",
          "Gum is sutured closed; osseointegration (bone healing) takes 3-6 months",
          "Abutment (connector piece) is attached to the implant post",
          "A custom-made porcelain crown is permanently fixed to the abutment",
          "Final bite check and adjustments for a perfect, natural fit",
        ],
      },
      {
        name: "Removable Partial Denture",
        price: "₹1,000",
        description:
          "An affordable and practical solution for replacing one or a few missing teeth. These custom-made removable appliances clip onto existing teeth and restore your smile and chewing ability.",
        procedure: [
          "Dental examination and impressions (moulds) of your teeth are taken",
          "The moulds are sent to the dental lab for custom fabrication",
          "Metal framework or plastic base is created to fit precisely",
          "Artificial teeth are set into the base to match your natural smile",
          "Fitting appointment: denture is placed and adjusted for comfort",
          "Instructions on how to insert, remove, and clean the denture",
          "Follow-up appointments for any necessary adjustments",
        ],
      },
      {
        name: "Removable Complete Denture",
        price: "₹30,000",
        description:
          "For patients who have lost all their teeth, a complete denture restores full chewing function and a natural smile. Crafted with precision for maximum comfort and aesthetics.",
        procedure: [
          "Initial examination and assessment of jaw ridge and gum health",
          "Multiple impression stages to capture the exact shape of your jaw",
          "Jaw relationship records taken to ensure correct bite alignment",
          "Teeth arrangement trial (wax try-in) done for shape and colour approval",
          "Final high-quality acrylic denture is fabricated in the dental lab",
          "Denture is fitted, bite is checked, and adjustments are made",
          "Patient is educated on proper wearing, removal, and cleaning",
          "Follow-up visits scheduled for comfort adjustments",
        ],
      },
      {
        name: "Dental Bridge (FPD)",
        price: "₹6,000",
        description:
          "A Fixed Partial Denture (Bridge) is a permanent tooth replacement anchored to the adjacent healthy teeth. It bridges the gap with a lifelike artificial tooth, restoring function and aesthetics.",
        procedure: [
          "Examination and X-rays to assess the health of anchor teeth",
          "Local anesthesia applied for a pain-free experience",
          "The two adjacent teeth (abutment teeth) are shaped to receive crowns",
          "Precise impressions are taken of the prepared teeth and the gap",
          "A temporary bridge is placed while the permanent one is fabricated",
          "The custom bridge (two crowns with a false tooth in between) is crafted",
          "Permanent bridge is cemented firmly onto the abutment teeth",
          "Bite is checked and polished for a perfect, seamless finish",
        ],
      },
    ],
  },
  {
    title: "Root Canal Treatment",
    slug: "root-canal-treatment",
    tagline: "Save Your Natural Tooth, Eliminate Pain",
    description:
      "A root canal is not something to fear — it is a tooth-saving procedure that relieves severe pain caused by infection. With modern techniques, the treatment is comfortable and highly effective.",
    image: "/assets/service_rootcanal.png",
    iconName: "HeartPulse",
    color: "red",
    subServices: [
      {
        name: "Root Canal Treatment",
        price: "₹3,000",
        description:
          "When the soft inner pulp of a tooth becomes infected or inflamed, a root canal removes the infected tissue, cleans the canals, and seals the tooth to prevent further infection — saving the natural tooth.",
        procedure: [
          "Dental X-ray taken to assess the extent of infection in the roots",
          "Local anesthesia is administered to ensure complete numbness",
          "A rubber dam is placed to keep the area clean and dry",
          "A small opening is drilled through the top (crown) of the tooth",
          "Infected pulp tissue is carefully removed using specialized files",
          "Each root canal is precisely shaped, cleaned, and disinfected",
          "The canals are filled with a biocompatible material (gutta-percha)",
          "The tooth is sealed with a temporary or permanent filling",
          "A dental crown is typically recommended to protect the treated tooth",
          "Follow-up X-ray to confirm successful treatment",
        ],
      },
    ],
  },
  {
    title: "Tooth Extraction",
    slug: "tooth-extraction",
    tagline: "Safe, Painless, and Expert Extractions",
    description:
      "When a tooth is too damaged to save, extraction is the safest option. Our expert team ensures every extraction is as quick and comfortable as possible, with clear aftercare instructions.",
    image: "/assets/service_extraction.png",
    iconName: "Scissors",
    color: "orange",
    subServices: [
      {
        name: "Tooth Extraction",
        price: "₹500",
        description:
          "A simple extraction is performed on a tooth that is visible in the mouth. Using specialized instruments, our dentist gently and painlessly removes the damaged or decayed tooth.",
        procedure: [
          "Dental X-ray taken to view the tooth root and surrounding bone",
          "Local anesthesia injected to completely numb the area",
          "The gum tissue around the tooth is loosened with an elevator instrument",
          "The tooth is gently rocked back and forth to widen the socket",
          "The tooth is lifted and removed cleanly from the socket",
          "The socket is cleaned and may be packed with gauze to control bleeding",
          "Aftercare instructions provided (avoid hard food, smoking, rinsing for 24 hrs)",
        ],
      },
      {
        name: "Third Molar (Wisdom Tooth) Extraction",
        price: "₹1,000",
        description:
          "Wisdom teeth often grow at awkward angles or become trapped (impacted) in the jaw, causing pain and infection. Expert surgical removal provides permanent relief and prevents future complications.",
        procedure: [
          "Panoramic X-ray to assess position and angulation of the wisdom tooth",
          "Treatment plan discussed including sedation options for anxious patients",
          "Local anesthesia administered for a completely pain-free procedure",
          "An incision is made in the gum tissue to expose the tooth and bone",
          "Bone blocking access to the tooth root is carefully removed",
          "The tooth may be divided into sections for easier removal",
          "The tooth (and all sections) are fully extracted from the socket",
          "The wound is irrigated, cleaned, and closed with dissolvable sutures",
          "Post-operative care kit and detailed recovery instructions provided",
          "Follow-up appointment scheduled to monitor healing",
        ],
      },
    ],
  },
  {
    title: "Teeth Whitening & Cleaning",
    slug: "teeth-whitening",
    tagline: "Bright, Clean, Radiant Smiles",
    description:
      "A clean, white smile is a healthy smile. Our professional whitening and cleaning treatments remove stains, tartar, and discolouration, revealing the natural brilliance of your teeth.",
    image: "/assets/service_whitening.png",
    iconName: "Sparkles",
    color: "yellow",
    subServices: [
      {
        name: "Teeth Cleaning (Scaling)",
        price: "₹1,000",
        description:
          "Professional scaling removes stubborn tartar (hardened plaque) and bacteria buildup that regular brushing simply cannot reach. It is the single most effective preventive dental treatment available.",
        procedure: [
          "Dental examination to assess gum health and tartar buildup levels",
          "An ultrasonic scaler is used to break up and remove tartar above the gum line",
          "Hand scalers are used to clean tartar from below the gum line",
          "Teeth are polished with a special gritty paste to remove surface stains",
          "Flossing is performed between all teeth",
          "Fluoride treatment may be applied to strengthen enamel",
          "Oral hygiene tips and personalized brushing/flossing advice given",
        ],
      },
      {
        name: "Teeth Bleaching",
        price: "₹2,000",
        description:
          "Our professional in-clinic bleaching treatment uses a high-concentration whitening gel activated by a specialized light to safely lighten your teeth by several shades in a single sitting.",
        procedure: [
          "Pre-treatment shade assessment to document your current tooth colour",
          "Teeth are cleaned and dried to maximize bleaching effectiveness",
          "Gum and soft tissue are carefully protected with a rubber shield",
          "Professional-grade whitening gel is applied evenly to all visible teeth",
          "An activating light or laser is directed onto the gel to accelerate the process",
          "Gel is left on for 15 minutes, then removed and reapplied (2-3 cycles)",
          "Final shade measurement is taken to show the dramatic improvement",
          "Sensitivity care advice given; custom take-home trays may be provided",
        ],
      },
    ],
  },
  {
    title: "Tooth Reshaping",
    slug: "tooth-reshaping",
    tagline: "Perfect Your Smile with Subtle Precision",
    description:
      "Minor imperfections can make a big difference. Tooth reshaping is a fast, painless, single-visit procedure that corrects chips, uneven edges, and small size discrepancies for a beautifully balanced smile.",
    image: "/assets/service_cosmetic.png",
    iconName: "Wand2",
    color: "pink",
    subServices: [
      {
        name: "Tooth Reshaping / Contouring",
        price: "Contact for Pricing",
        description:
          "Dental contouring involves making subtle changes to the shape, length, or surface of a tooth to improve its appearance. It is ideal for correcting minor cosmetic issues quickly and without anaesthesia.",
        procedure: [
          "Consultation and photograph of the smile to plan the contouring",
          "X-rays may be taken to ensure adequate enamel thickness",
          "The target areas are marked with a pencil on the teeth",
          "A fine diamond bur or sanding disc is used to carefully remove tiny amounts of enamel",
          "Triangular ridges and uneven edges are smoothed and shaped",
          "Teeth are polished to a high shine",
          "Before and after comparison to confirm satisfaction",
        ],
      },
    ],
  },
  {
    title: "Laser Dentistry",
    slug: "laser-dentistry",
    tagline: "Advanced, Minimally Invasive Dental Care",
    description:
      "Experience the future of dental care. Laser dentistry uses focused light energy to perform a wide range of procedures with extreme precision, minimal discomfort, and faster healing times.",
    image: "/assets/gallery_treatment.png",
    iconName: "Zap",
    color: "green",
    subServices: [
      {
        name: "Laser Dental Treatment",
        price: "Contact for Pricing",
        description:
          "Lasers can be used for gum contouring, treating gum disease, removing lesions, cavity preparation, and teeth whitening enhancement — all with less bleeding, less swelling, and often no needles.",
        procedure: [
          "Comprehensive examination to determine if laser treatment is the right option",
          "The specific type of dental laser is selected based on the procedure",
          "Protective eyewear is provided for both patient and dental team",
          "Minimal or no anesthesia is required for many laser procedures",
          "The laser is precisely directed at the target tissue (gum or tooth)",
          "The laser simultaneously treats, sterilizes, and promotes clotting",
          "Treated area is examined and any minor dressing is applied",
          "Recovery is significantly faster with less post-procedure discomfort",
        ],
      },
    ],
  },
];
