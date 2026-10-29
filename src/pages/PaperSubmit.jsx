import React, { useState } from 'react';
import { SITE_CONFIG, SUBMISSION_CONFIG } from '../data';

export default function PaperSubmit({ onShowToast }) {
  const [formData, setFormData] = useState({
    titlePrefix: 'Dr.',
    authorName: '',
    coAuthors: '',
    email: '',
    phone: '',
    institution: '',
    designation: '',
    manuscriptType: SUBMISSION_CONFIG.manuscriptTypes[0],
    discipline: SUBMISSION_CONFIG.disciplines[0],
    paperTitle: '',
    abstract: '',
    keywords: '',
    driveLink: '',
    agreed: false
  });

  const [fileName, setFileName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.authorName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      onShowToast('⚠️ Please provide your full name, email, and phone number.');
      return;
    }

    if (!formData.paperTitle.trim() || !formData.abstract.trim()) {
      onShowToast('⚠️ Please enter the paper title and abstract.');
      return;
    }

    if (!formData.agreed) {
      onShowToast('⚠️ Please agree to the original research and ethics declaration.');
      return;
    }

    setSubmitting(true);

    // Generate unique reference tracking ID
    const refId = `NETRAVA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const submissionPayload = {
      referenceId: refId,
      submissionDate: new Date().toISOString(),
      ...formData,
      fileName: fileName || 'Uploaded via Google Drive / Link'
    };

    try {
      // If Google Sheet Webhook Endpoint is configured, send data via fetch
      if (SUBMISSION_CONFIG.googleSheetEndpoint && SUBMISSION_CONFIG.googleSheetEndpoint.trim() !== '') {
        await fetch(SUBMISSION_CONFIG.googleSheetEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(submissionPayload)
        });
      }

      // Success handling
      setSubmittedData({
        refId,
        author: `${formData.titlePrefix} ${formData.authorName}`,
        title: formData.paperTitle,
        email: formData.email,
        phone: formData.phone
      });

      onShowToast(`✓ Paper successfully submitted! Tracking ID: ${refId}`);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback display
      setSubmittedData({
        refId,
        author: `${formData.titlePrefix} ${formData.authorName}`,
        title: formData.paperTitle,
        email: formData.email,
        phone: formData.phone
      });
      onShowToast(`✓ Submission recorded locally! Reference: ${refId}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppNotify = () => {
    if (!submittedData) return;
    const msg = encodeURIComponent(
      `*New Paper Submission - Netrava Academic Publications*\n` +
      `*Tracking ID:* ${submittedData.refId}\n` +
      `*Author:* ${submittedData.author}\n` +
      `*Paper Title:* ${submittedData.title}\n` +
      `*Email:* ${submittedData.email}\n` +
      `*Phone:* ${submittedData.phone}`
    );
    window.open(`${SITE_CONFIG.whatsappBase}?text=${msg}`, '_blank');
  };

  return (
    <div>
      {/* Page Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-navy-dark) 0%, var(--primary-navy) 100%)', color: '#fff', padding: '75px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', background: 'rgba(197, 160, 89, 0.2)' }}>
            Author Portal
          </span>
          <h1 style={{ color: '#fff', fontSize: '2.8rem', marginBottom: '12px' }}>
            Chapter Submission
          </h1>
          <p style={{ color: '#cbd5e1', maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem', marginBottom: '24px' }}>
            Submit your chapter, original research, or manuscript directly via our official Google Form.
          </p>
          <div>
            <a 
              href="https://forms.gle/DpxQ3sdH5hRYnSzJA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg"
              style={{ fontSize: '1.05rem', padding: '14px 30px' }}
              title="Open Official Chapter Submission Form in New Tab"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://forms.gle/DpxQ3sdH5hRYnSzJA', '_blank', 'noopener,noreferrer');
              }}
            >
              📝 Open Official Chapter Submission Form ↗
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>

          {/* Direct Form Callout Banner */}
          <div style={{ background: 'linear-gradient(135deg, var(--primary-navy-dark) 0%, var(--primary-navy) 100%)', color: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px 32px', marginBottom: '40px', border: '1px solid var(--border-gold)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '6px' }}>Official Chapter Submission Form</h3>
              <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.95rem' }}>
                For quick peer-review processing, click below to fill the official Google Form.
              </p>
            </div>
            <a 
              href="https://forms.gle/DpxQ3sdH5hRYnSzJA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              title="Open Official Chapter Submission Form in New Tab"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://forms.gle/DpxQ3sdH5hRYnSzJA', '_blank', 'noopener,noreferrer');
              }}
            >
              Fill Chapter Submission Form ↗
            </a>
          </div>

          {/* Submission Guidelines Summary Card */}
          <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '30px', marginBottom: '45px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.6rem' }}>📋</span>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', margin: 0 }}>
                  Author Submission Guidelines & Formatting Criteria
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Please ensure your manuscript conforms to these standards prior to submission.
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '18px' }}>
              <div style={{ borderLeft: '3px solid var(--gold-primary)', paddingLeft: '14px' }}>
                <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-navy)', marginBottom: '4px' }}>Document Format</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Microsoft Word (.docx) or PDF format with 1.5 line spacing and standard 1-inch margins.</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--gold-primary)', paddingLeft: '14px' }}>
                <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-navy)', marginBottom: '4px' }}>Abstract & Keywords</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Include a 200–250 word structured abstract followed by 4 to 6 relevant academic keywords.</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--gold-primary)', paddingLeft: '14px' }}>
                <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-navy)', marginBottom: '4px' }}>Citation Standards</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Bluebook 20th/21st Edition for Law, or APA 7th Edition for Psychology, Education & Social Sciences.</p>
              </div>
            </div>
          </div>

          {/* Optional Google Form Direct Embed (if configured) */}
          {SUBMISSION_CONFIG.googleFormEmbedUrl && SUBMISSION_CONFIG.googleFormEmbedUrl.trim() !== '' && (
            <div style={{ marginBottom: '50px', background: '#fff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              <iframe 
                src={SUBMISSION_CONFIG.googleFormEmbedUrl} 
                width="100%" 
                height="800" 
                style={{ border: 0 }}
                title="Google Form Paper Submission"
              >
                Loading Google Form...
              </iframe>
            </div>
          )}

          {/* Success Confirmation Card (After Submission) */}
          {submittedData && (
            <div style={{ background: '#f0fdf4', border: '2px solid #22c55e', borderRadius: 'var(--radius-lg)', padding: '36px', marginBottom: '40px', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ width: '64px', height: '64px', background: '#22c55e', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 16px' }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#166534', marginBottom: '8px' }}>
                Paper Submission Received!
              </h3>
              <p style={{ color: '#15803d', fontSize: '1.05rem', marginBottom: '20px' }}>
                Your manuscript has been logged into the Netrava Academic Editorial System.
              </p>
              <div style={{ background: '#fff', padding: '16px 24px', borderRadius: 'var(--radius-md)', display: 'inline-block', border: '1px dashed #86efac', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'block' }}>Submission Tracking Reference:</span>
                <strong style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', letterSpacing: '0.05em' }}>
                  {submittedData.refId}
                </strong>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#475569', maxWidth: '600px', margin: '0 auto 24px' }}>
                Our editorial committee will complete the initial suitability check within <strong>48 hours</strong> and update you at <strong>{submittedData.email}</strong>.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-whatsapp" onClick={handleWhatsAppNotify}>
                  <span>💬 Notify Editorial Team on WhatsApp</span>
                </button>
                <button type="button" className="btn btn-outline" onClick={() => setSubmittedData(null)}>
                  Submit Another Manuscript
                </button>
              </div>
            </div>
          )}

          {/* Interactive Manuscript Submission Form */}
          <div className="contact-form-card" style={{ padding: '45px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.65rem', color: 'var(--primary-navy)', marginBottom: '6px' }}>
                  Manuscript Submission Form
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Fill in the author credentials and upload your abstract and manuscript document.
                </p>
              </div>

              {/* Developer/User Note regarding Google Sheet */}
              <div style={{ background: 'rgba(197, 160, 89, 0.12)', border: '1px solid rgba(197, 160, 89, 0.35)', padding: '8px 14px', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>📊</span>
                <span><strong>Google Sheet Integration:</strong> Active & Ready for Webhook Hookup</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Row 1: Author Details */}
              <div className="form-group-row">
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px' }}>
                  <div>
                    <label className="form-label">Title *</label>
                    <select 
                      name="titlePrefix" 
                      value={formData.titlePrefix} 
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Dr.">Dr.</option>
                      <option value="Prof.">Prof.</option>
                      <option value="Adv.">Adv.</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Corresponding Author Name *</label>
                    <input 
                      type="text" 
                      name="authorName" 
                      value={formData.authorName} 
                      onChange={handleChange} 
                      className="form-control" 
                      placeholder="e.g. Ramesh Chandra Verma" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Co-Author(s) (if any)</label>
                  <input 
                    type="text" 
                    name="coAuthors" 
                    value={formData.coAuthors} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="e.g. Dr. Priya Sharma, Adv. Kunal Roy" 
                  />
                </div>
              </div>

              {/* Row 2: Contact Info */}
              <div className="form-group-row">
                <div>
                  <label className="form-label">Official / Academic Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="author@university.edu.in" 
                    required 
                  />
                </div>
                <div>
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="+91 98765 43210" 
                    required 
                  />
                </div>
              </div>

              {/* Row 3: Institutional Affiliation */}
              <div className="form-group-row">
                <div>
                  <label className="form-label">University / College / Bar Association *</label>
                  <input 
                    type="text" 
                    name="institution" 
                    value={formData.institution} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="e.g. Faculty of Law, University of Delhi" 
                    required 
                  />
                </div>
                <div>
                  <label className="form-label">Department & Current Designation</label>
                  <input 
                    type="text" 
                    name="designation" 
                    value={formData.designation} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="e.g. Associate Professor, Department of Psychology" 
                  />
                </div>
              </div>

              {/* Row 4: Manuscript Classification */}
              <div className="form-group-row">
                <div>
                  <label className="form-label">Manuscript Type *</label>
                  <select 
                    name="manuscriptType" 
                    value={formData.manuscriptType} 
                    onChange={handleChange} 
                    className="form-control"
                  >
                    {SUBMISSION_CONFIG.manuscriptTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Discipline / Subject Area *</label>
                  <select 
                    name="discipline" 
                    value={formData.discipline} 
                    onChange={handleChange} 
                    className="form-control"
                  >
                    {SUBMISSION_CONFIG.disciplines.map((d, idx) => (
                      <option key={idx} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Paper Title */}
              <div className="form-group">
                <label className="form-label">Full Title of the Manuscript / Paper *</label>
                <input 
                  type="text" 
                  name="paperTitle" 
                  value={formData.paperTitle} 
                  onChange={handleChange} 
                  className="form-control" 
                  placeholder="Enter the complete title of your research paper or book proposal..." 
                  required 
                />
              </div>

              {/* Abstract */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="form-label">Structured Abstract (Max 300 words) *</label>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {formData.abstract.trim() ? formData.abstract.trim().split(/\s+/).length : 0} words
                  </span>
                </div>
                <textarea 
                  name="abstract" 
                  value={formData.abstract} 
                  onChange={handleChange} 
                  className="form-control" 
                  rows="5"
                  placeholder="Summarize the background, research objectives, methodology, core findings, and scholarly significance..." 
                  required 
                />
              </div>

              {/* Keywords */}
              <div className="form-group">
                <label className="form-label">Academic Keywords (4 to 6 terms, comma-separated) *</label>
                <input 
                  type="text" 
                  name="keywords" 
                  value={formData.keywords} 
                  onChange={handleChange} 
                  className="form-control" 
                  placeholder="e.g. Constitutional Law, Judicial Review, Fundamental Rights, Federalism" 
                  required 
                />
              </div>

              {/* Upload or Google Drive Link */}
              <div className="form-group-row" style={{ alignItems: 'flex-start' }}>
                <div>
                  <label className="form-label">Attach Manuscript File (.doc, .docx, .pdf)</label>
                  <input 
                    type="file" 
                    accept=".doc,.docx,.pdf"
                    onChange={handleFileChange}
                    className="form-control" 
                    style={{ padding: '8px' }}
                  />
                  {fileName && (
                    <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 600, marginTop: '4px', display: 'block' }}>
                      Selected: {fileName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="form-label">Or Provide Google Drive / Cloud Link</label>
                  <input 
                    type="url" 
                    name="driveLink" 
                    value={formData.driveLink} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="https://drive.google.com/file/d/..." 
                  />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Ensure sharing permissions are set to "Anyone with the link can view".
                  </span>
                </div>
              </div>

              {/* Declaration Checkbox */}
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <input 
                    type="checkbox" 
                    name="agreed" 
                    checked={formData.agreed} 
                    onChange={handleChange} 
                    style={{ marginTop: '4px' }}
                    required 
                  />
                  <span>
                    I hereby declare that this manuscript is original, has not been published elsewhere, is not currently under consideration by another journal/publisher, and adheres to strict academic anti-plagiarism standards.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary btn-lg" 
                style={{ width: '100%', marginTop: '16px' }}
                disabled={submitting}
              >
                {submitting ? (
                  <span>Processing Submission...</span>
                ) : (
                  <>
                    <span>Submit Academic Paper for Editorial Review</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Workflow Timeline */}
          <div style={{ marginTop: '60px' }}>
            <div className="section-header" style={{ marginBottom: '35px' }}>
              <span className="section-eyebrow">Publication Trajectory</span>
              <h2 className="section-title">What Happens After You Submit?</h2>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Desk Evaluation</h3>
                <p>Initial screening for scope, formatting, and plagiarism check within 48 hours.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Peer Review</h3>
                <p>Blind assessment by two independent domain referees (typically 2 to 3 weeks).</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Author Revisions</h3>
                <p>Refinement based on reviewer critiques and final editorial approval.</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <h3>ISBN & Release</h3>
                <p>Typesetting, ISBN cataloging, printing, and institutional distribution.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
