import React from 'react';
import { SITE_CONFIG, EDITORIAL_MEMBERS } from '../data';

export default function About({ setActivePage }) {
  const director = EDITORIAL_MEMBERS[0];
  const teamMembers = EDITORIAL_MEMBERS.slice(1);

  return (
    <div>
      {/* Page Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-navy-dark) 0%, var(--primary-navy) 100%)', color: '#fff', padding: '75px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', background: 'rgba(197, 160, 89, 0.2)' }}>
            Institutional Profile
          </span>
          <h1 style={{ color: '#fff', fontSize: '2.8rem', marginBottom: '12px' }}>
            About {SITE_CONFIG.name}
          </h1>
          <p style={{ color: '#cbd5e1', maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem' }}>
            Dedicated to intellectual rigour, academic merit, and the nationwide dissemination of foundational knowledge in law, psychology, and education.
          </p>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section style={{ padding: '90px 0', background: '#ffffff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-eyebrow">Our Heritage</span>
            <h2 className="section-title">Nurturing Research, Inspiring Intellectual Progress</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1.05rem' }}>
              Established with the conviction that academic progress relies on rigorous, peer-reviewed scholarship, <strong>{SITE_CONFIG.name}</strong> serves as a trusted intellectual conduit between esteemed researchers, university professors, legal scholars, and university students.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.05rem' }}>
              Headquartered in Koramangala, Bengaluru with distribution partners across all major educational hubs in India, we have published authoritative works spanning constitutional law, judicial digests, positive psychology, research methodologies, and higher education governance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div style={{ borderLeft: '3px solid var(--gold-primary)', paddingLeft: '14px' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '4px' }}>100% Peer-Reviewed</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Double-blind evaluation ensures highest editorial standards.</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--gold-primary)', paddingLeft: '14px' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '4px' }}>Registered ISBN</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Official Ministry of Education ISBN accreditation for each work.</p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ background: 'var(--bg-dark)', padding: '30px', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.3)', boxShadow: 'var(--shadow-xl)' }}>
              <img src="/assets/images/logo.png" alt="Netrava Logo" style={{ background: '#fff', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '24px', maxHeight: '140px', margin: '0 auto 24px', display: 'block' }} />
              <h3 style={{ color: 'var(--gold-light)', fontSize: '1.3rem', marginBottom: '12px', textAlign: 'center' }}>
                Our Founding Creed
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', textAlign: 'center', lineHeight: 1.8 }}>
                "To uphold Knowledge as an enduring light, empower Research with uncompromising truth, and champion Innovation that elevates academic excellence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Netrava */}
      <section style={{ padding: '85px 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Three Pillars</span>
            <h2 className="section-title">Knowledge • Research • Innovation</h2>
            <p className="section-desc">The guiding philosophies embedded in every treatise published under the Netrava imprint.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div className="pillar-card" style={{ padding: '35px 28px' }}>
              <div className="pillar-icon-wrap" style={{ width: '60px', height: '60px', fontSize: '1.6rem' }}>📚</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Knowledge</h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We believe that true knowledge must be accessible, lucid, and rooted in factual accuracy. We prioritize comprehensive doctrinal treatises and textbook clarity that enlighten readers across undergraduate, postgraduate, and professional levels.
              </p>
            </div>

            <div className="pillar-card" style={{ padding: '35px 28px' }}>
              <div className="pillar-icon-wrap" style={{ width: '60px', height: '60px', fontSize: '1.6rem' }}>🔬</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Research</h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We champion empirical rigor, rigorous citation standards, and critical methodology. From doctoral adaptations to judicial compendiums, our books serve as enduring citations in scholarly papers, dissertations, and courtroom arguments.
              </p>
            </div>

            <div className="pillar-card" style={{ padding: '35px 28px' }}>
              <div className="pillar-icon-wrap" style={{ width: '60px', height: '60px', fontSize: '1.6rem' }}>💡</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Innovation</h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We adapt to contemporary educational shifts — aligning with the National Education Policy (NEP 2020), integrating digital cataloging, e-repositories, and providing authors with agile publishing workflows without sacrificing depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Advisory Board & Leadership */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Governance & Leadership</span>
            <h2 className="section-title">Leadership & Technical Team</h2>
            <p className="section-desc">Eminent academic leadership and dedicated technical team driving publication innovation.</p>
          </div>

          {/* Director Card - 1 Photo on Top */}
          {director && (
            <div className="director-container">
              <div className="team-card director-card">
                <span className="director-badge">Director</span>
                <div className="team-img-wrap director-img-wrap">
                  <img src={director.image} alt={director.name} />
                </div>
                <div className="team-content">
                  <h3>{director.name}</h3>
                  <div className="team-role">{director.role}</div>
                  {director.specialization && (
                    <div className="team-spec">{director.specialization}</div>
                  )}
                  {director.bio && <p className="team-bio">{director.bio}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Below: 3 Team Members in a Row */}
          <div className="team-subgrid-3">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  {member.specialization && (
                    <div className="team-spec">{member.specialization}</div>
                  )}
                  {member.bio && <p className="team-bio">{member.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Publishing Ethics */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <span className="section-eyebrow">Commitment to Ethics</span>
          <h2 className="section-title">Author Integrity & Peer-Review Ethics</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '30px' }}>
            Netrava adheres to COPE (Committee on Publication Ethics) principles. We enforce strict plagiarism checks (Turnitin/Urkund), protect author intellectual property rights through formalized publishing agreements, and maintain transparent accounting of author royalties.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              title="Open Chapter Submission Form in New Tab"
              onClick={(e) => {
                e.preventDefault();
                window.open(SITE_CONFIG.chapterSubmissionForm || 'https://forms.gle/DpxQ3sdH5hRYnSzJA', '_blank', 'noopener,noreferrer');
              }}
            >
              Chapter Submission ↗
            </a>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setActivePage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Explore Published Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
