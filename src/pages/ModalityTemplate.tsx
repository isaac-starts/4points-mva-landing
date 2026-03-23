import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { modalities } from '../data/modalities';
import treatmentRoomImg from '../assets/images/treatment_room.jpg';

export default function ModalityTemplate() {
  const { modalityId } = useParams();
  
  if (!modalityId || !modalities[modalityId]) {
    // Fallback if modality doesn't exist in data
    return <Navigate to="/" replace />;
  }

  const data = modalities[modalityId];

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] } }
  };

  return (
    <>
      {/* Generic Modality Hero Section */}
      <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-offwhite)' }}>
        <div className="container flex items-center justify-between gap-8" style={{ flexWrap: 'wrap' }}>
          
          <motion.div 
            className="flex-col"
            style={{ flex: '1 1 500px', maxWidth: '650px' }}
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div variants={fadeInUp} className="badge" style={{ textTransform: 'uppercase' }}>
              <ShieldCheck size={16} /> Direct Billing Available
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="heading-xl" style={{ marginBottom: '1.5rem' }}>
              {data.heroTitle}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '550px' }}>
              {data.heroDesc}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex items-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={data.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
                onClick={() => { (window as any).fbq && (window as any).fbq('track', 'Lead', { content_name: `Booking: ${data.heroTitle}` }) }}
              >
                CHECK SCHEDULE <CalendarCheck size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
             style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
          >
             <div style={{ width: '100%', height: '450px', backgroundColor: 'var(--bg-soft-blue)', borderRadius: '24px', boxShadow: 'var(--shadow-soft)', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={treatmentRoomImg} 
                  alt="4 Points Health Treatment Room" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
             </div>
          </motion.div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container grid grid-cols-1 md-grid-cols-2 gap-8 items-center">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Why Choose Us?</h2>
                <p className="text-body" style={{ marginBottom: '2rem' }}>Experience team-based, holistic care right here in Edmonton. We put your well-being first.</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {data.benefits.map((benefit: string, i: number) => (
                        <li key={i} className="flex" style={{ gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ backgroundColor: 'var(--bg-soft-blue)', borderRadius: '50%', padding: '4px' }}>
                                <CheckCircle2 color="var(--primary-sage)" size={20} />
                            </div>
                            <span style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600, marginTop: '2px' }}>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
      </section>
    </>
  );
}
