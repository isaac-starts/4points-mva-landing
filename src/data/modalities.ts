import { Activity, HeartPulse, UserCheck, ShieldCheck } from 'lucide-react';

export const modalities: any = {
  chiropractic: {
    heroTitle: "Expert Chiropractic Care",
    heroDesc: "Realign your body and restore your health with our customized chiropractic treatments. Discover the 4 Points Health and Wellness difference.",
    icon: HeartPulse,
    benefits: ["Targeted spinal adjustments", "Posture correction", "Nerve pressure relief", "Long-term wellness strategies"],
    link: "https://4pointshealth.janeapp.com/"
  },
  massage: {
    heroTitle: "Therapeutic Massage Therapy",
    heroDesc: "Release deep muscle tension and accelerate your recovery. Experience deep-tissue and relaxation massage in our calming environment.",
    icon: UserCheck,
    benefits: ["Deep tissue release", "Sports injury recovery", "Myofascial release", "Stress and anxiety reduction"],
    link: "https://4pointshealth.janeapp.com/"
  },
  physiotherapy: {
    heroTitle: "Dedicated Physiotherapy",
    heroDesc: "Rebuild your strength and mobility with tailored physical therapy protocols at 4 Points Health and Wellness.",
    icon: Activity,
    benefits: ["Mobility restoration", "Post-surgical rehabilitation", "Strengthening exercises", "Pain management"],
    link: "https://4pointshealth.janeapp.com/"
  },
  acupuncture: {
    heroTitle: "Clinical Acupuncture",
    heroDesc: "Stimulate your body's natural healing mechanisms for chronic pain management and holistic wellness.",
    icon: ShieldCheck,
    benefits: ["Chronic pain reduction", "Nervous system regulation", "Headache and TMJ relief", "Enhanced energy flow"],
    link: "https://4pointshealth.janeapp.com/"
  }
};
