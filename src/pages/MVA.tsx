import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, UserCheck, Activity, CalendarCheck, CheckCircle2 } from 'lucide-react';
import hallwayImg from '../assets/images/hallway.jpg';

export default function MVA() {
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-offwhite)' }}>
        <div className="container flex items-center justify-between gap-8" style={{ flexWrap: 'wrap' }}>
          
          <motion.div 
            className="flex-col"
            style={{ flex: '1 1 500px', maxWidth: '650px' }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="badge">
              <ShieldCheck size={16} /> Direct MVA Insurance Billing
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="heading-xl" style={{ marginBottom: '1.5rem' }}>
              Edmonton's Experts in <span className="text-sage">Car Accident Recovery</span>.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '550px' }}>
              When pain stops you, we help you move forward. Experience our clean, welcoming clinic and our multi-disciplinary approach to whiplash and MVA injuries. <strong>Zero out-of-pocket costs.</strong>
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex items-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://4pointshealth.janeapp.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
                onClick={() => { (window as any).fbq && (window as any).fbq('track', 'Lead', { content_name: 'MVA Assessment Booking' }) }}
              >
                BOOK MVA ASSESSMENT <CalendarCheck size={20} />
              </a>
              <span className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600 }}>No referral required.</span>
            </motion.div>
          </motion.div>

          {/* Authentic Clinic Layout Image */}
          <motion.div 
             style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
          >
             <div style={{ width: '100%', height: '450px', backgroundColor: 'var(--bg-soft-blue)', borderRadius: '24px', boxShadow: 'var(--shadow-soft)', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={hallwayImg} 
                  alt="4 Points Health Clinic Interior" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
             </div>
          </motion.div>

        </div>
      </section>

      {/* The 4 Points Difference / Services */}
      <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Team-Based Care for Total Recovery</h2>
            <p className="text-body" style={{ maxWidth: '650px', margin: '0 auto' }}>We don't just treat the symptoms. Our customized MVA treatment plans combine multiple disciplines at 4 Points Health and Wellness to heal your body faster.</p>
          </motion.div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8">
            {[
              { title: 'Physiotherapy', desc: 'Restore mobility and strengthen damaged motor pathways after collision trauma.', icon: Activity },
              { title: 'Chiropractic', desc: 'Realign the spine and reduce nervous system pressure to alleviate whiplash pain.', icon: HeartPulse },
              { title: 'Massage Therapy', desc: 'Release deep tissue tension and reduce inflammation around injury sites.', icon: UserCheck },
              { title: 'Acupuncture', desc: 'Stimulate the body\'s natural healing processes for chronic pain management.', icon: ShieldCheck }
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                className="card flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ backgroundColor: 'var(--bg-soft-blue)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <service.icon color="var(--primary-navy)" size={28} />
                </div>
                <h3 className="heading-md" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p className="text-body" style={{ fontSize: '0.95rem' }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Direct Billing */}
      <section className="section soft-bg">
        <div className="container grid grid-cols-1 md-grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Zero Out-of-Pocket Stress.</h2>
            <p className="text-body" style={{ marginBottom: '2rem' }}>Navigating insurance after an accident is overwhelming. We handle the paperwork directly with your auto insurer under Alberta's MAB guidelines so you can focus entirely on getting better.</p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Direct billing to MVA auto insurers',
                'Coordination with extended health benefits',
                'Comprehensive injury assessment reports',
                'Customized 12-week rehabilitation plans'
              ].map((item, i) => (
                <li key={i} className="flex" style={{ gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--bg-white)', borderRadius: '50%', padding: '4px', boxShadow: 'var(--shadow-soft)' }}>
                    <CheckCircle2 color="var(--primary-sage)" size={20} />
                  </div>
                  <span style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600, marginTop: '2px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            style={{ padding: '3.5rem 3rem', backgroundColor: 'var(--bg-white)', borderRadius: '24px', boxShadow: 'var(--shadow-hover)', textAlign: 'center' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--bg-soft-blue)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <CalendarCheck color="var(--primary-navy)" size={32} />
             </div>
             <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Ready to Start?</h3>
             <p className="text-body" style={{ marginBottom: '2.5rem', fontSize: '0.95rem' }}>Book your initial MVA Assessment online instantly. Our team will verify your claim details prior to your arrival.</p>
             <a 
               href="https://4pointshealth.janeapp.com/" 
               target="_blank" 
               rel="noreferrer" 
               className="btn-primary" 
               style={{ width: '100%', justifyContent: 'center' }}
               onClick={() => { (window as any).fbq && (window as any).fbq('track', 'Lead', { content_name: 'MVA Assessment Bottom CTA' }) }}
             >
               BOOK ASSESSMENT NOW
             </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
