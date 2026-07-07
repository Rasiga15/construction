import { ChangeEvent, MouseEvent, useState } from 'react';
import { MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import { EnquiryFormData } from '@/types';
import { sendEnquiryViaWhatsApp } from '@/utils/whatsapp';
import { sendEnquiryViaEmail } from '@/utils/email';

const SERVICES = [
  'Residential Construction',
  'Commercial Construction',
  'Interior Design & Fit-Out',
  'Renovation & Remodeling',
  'Structural Consultancy',
  'Other',
];

const EMPTY: EnquiryFormData = {
  fullName: '',
  phone: '',
  email: '',
  serviceRequired: SERVICES[0],
  message: '',
};

export default function EnquiryForm() {
  const [data, setData] = useState<EnquiryFormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof EnquiryFormData) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setData((d) => ({ ...d, [field]: e.target.value }));

  function validate(): boolean {
    const next: Partial<Record<keyof EnquiryFormData, string>> = {};
    if (!data.fullName.trim()) next.fullName = 'Please enter your name.';
    if (!/^[+\d][\d\s-]{7,}$/.test(data.phone.trim())) next.phone = 'Enter a valid phone number.';
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) next.email = 'Enter a valid email address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleWhatsApp(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!validate()) return;
    sendEnquiryViaWhatsApp(data);
    setSubmitted(true);
  }

  function handleEmail(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!validate()) return;
    sendEnquiryViaEmail(data);
    setSubmitted(true);
  }

  return (
    <form className="space-y-5" noValidate>
      {submitted && (
        <div className="flex items-center gap-2 rounded-sm border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 size={18} /> Your enquiry details are ready — complete sending it in the window that opened.
        </div>
      )}

      <div>
        <label className="mb-1.5 block font-display text-xs uppercase tracking-wider text-steel-700">
          Full Name
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={update('fullName')}
          placeholder="Your full name"
          className="w-full rounded-sm border border-concrete-300 px-4 py-3 font-body text-sm outline-none transition-colors focus:border-steel-700"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-display text-xs uppercase tracking-wider text-steel-700">
            Phone Number
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={update('phone')}
            placeholder="+91 98765 43210"
            className="w-full rounded-sm border border-concrete-300 px-4 py-3 font-body text-sm outline-none transition-colors focus:border-steel-700"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-1.5 block font-display text-xs uppercase tracking-wider text-steel-700">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={update('email')}
            placeholder="you@example.com"
            className="w-full rounded-sm border border-concrete-300 px-4 py-3 font-body text-sm outline-none transition-colors focus:border-steel-700"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block font-display text-xs uppercase tracking-wider text-steel-700">
          Service Required
        </label>
        <select
          value={data.serviceRequired}
          onChange={update('serviceRequired')}
          className="w-full rounded-sm border border-concrete-300 bg-white px-4 py-3 font-body text-sm outline-none transition-colors focus:border-steel-700"
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block font-display text-xs uppercase tracking-wider text-steel-700">
          Message
        </label>
        <textarea
          value={data.message}
          onChange={update('message')}
          rows={4}
          placeholder="Tell us about your plot size, budget or timeline…"
          className="w-full resize-none rounded-sm border border-concrete-300 px-4 py-3 font-body text-sm outline-none transition-colors focus:border-steel-700"
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row">
        <button type="button" onClick={handleWhatsApp} className="btn-primary flex-1">
          <MessageCircle size={17} /> Send Enquiry via WhatsApp
        </button>
        <button type="button" onClick={handleEmail} className="btn-outline-dark flex-1">
          <Mail size={17} /> Send via Email
        </button>
      </div>
    </form>
  );
}
