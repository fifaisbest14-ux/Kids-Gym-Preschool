// Type-safe DataLayer event helper

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function pushToDataLayer(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackWhatsAppClick(location: string) {
  pushToDataLayer("whatsapp_click", { location });
}

export function trackPhoneClick(phoneNumber: string) {
  pushToDataLayer("phone_click", { phone_number: phoneNumber });
}

export function trackMapClick() {
  pushToDataLayer("map_click", { destination: "Google Maps Model Town" });
}

export function trackViewProgram(programName: string) {
  pushToDataLayer("view_program", { program_name: programName });
}

export function trackGalleryOpen(imageId: string) {
  pushToDataLayer("gallery_open", { image_id: imageId });
}
