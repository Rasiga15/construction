import { EnquiryFormData } from '@/types';
import { SITE } from '@/data/site';

/** Opens the company's WhatsApp chat with no pre-filled text (floating button). */
export function openWhatsAppChat(): void {
  const url = `https://wa.me/${SITE.whatsappNumber}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** Builds a wa.me link pre-filled with enquiry form details and opens it. */
export function sendEnquiryViaWhatsApp(data: EnquiryFormData): void {
  const lines = [
    `*New Enquiry — ${SITE.name}*`,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || '—'}`,
    `Service required: ${data.serviceRequired}`,
    `Message: ${data.message || '—'}`,
  ];
  const text = encodeURIComponent(lines.join('\n'));
  const url = `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
