import { brand } from "@/mocks/home";

export default function WhatsAppButton() {
  return (
    <a
      href={brand.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-105 transition-transform cursor-pointer"
    >
      <i className="ri-whatsapp-line text-2xl"></i>
    </a>
  );
}