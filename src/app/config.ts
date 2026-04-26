/**
 * WhatsApp Business number: country code + local number, digits only (no + or spaces).
 * Replace with your live number; must match the number you use for WhatsApp Business.
 */
export const WHATSAPP_BUSINESS_NUMBER = "94743488687";

export function whatsappSendUrl(message: string): string {
  const q = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${q}`;
}
