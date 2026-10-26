import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

interface ContactCTAProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ className = '', variant = 'primary' }) => {
  return (
    <a
      href="mailto:hello@tebinnovations.in?subject=STEM%20Kerala%20Enquiry&body=Hello%20STEM%20Kerala%20Team%2C%0A%0AI%20would%20love%20to%20connect%20regarding%20STEM%20Kerala."
      className={`contact-cta-btn ${variant} ${className}`}
      id="contact-cta-button"
      aria-label="Stay Connected - Send email to hello@tebinnovations.in"
    >
      <span className="btn-icon-prefix" aria-hidden="true">
        <Mail className="icon-mail" size={18} />
      </span>
      <span className="btn-text">Stay Connected</span>
      <span className="btn-arrow" aria-hidden="true">
        <ArrowUpRight className="icon-arrow" size={20} />
      </span>
    </a>
  );
};
