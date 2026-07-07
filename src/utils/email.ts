import { EnquiryFormData } from '@/types';
import { SITE } from '@/data/site';

/** Opens the user's default mail client with the enquiry pre-filled. */
export function sendEnquiryViaEmail(data: EnquiryFormData): void {
  const subject = encodeURIComponent(`Enquiry from ${data.fullName} — ${data.serviceRequired}`);
  const body = encodeURIComponent(
    [
      `Name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service required: ${data.serviceRequired}`,
      '',
      'Message:',
      data.message || '—',
    ].join('\n')
  );
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}
