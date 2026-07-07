import { MessageCircle } from 'lucide-react';
import { openWhatsAppChat } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <button
      onClick={openWhatsAppChat}
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl animate-pulse-ring transition-transform duration-200 hover:scale-110"
    >
      <MessageCircle size={28} fill="white" className="text-[#233329]" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-sm bg-steel-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat with us
      </span>
    </button>
  );
}
