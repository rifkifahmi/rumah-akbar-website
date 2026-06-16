export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

export const generateWhatsAppUrl = (message?: string): string => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6287784786101'
  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 
    'Halo%20Rumah%20Akbar%2C%20saya%20ingin%20booking%20menginap%20di%20guest%20house%20Anda.'
  
  const msg = message || defaultMessage
  return `https://wa.me/${phoneNumber}?text=${msg}`
}

export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
}

export const generateMetadata = (title: string, description: string) => {
  return {
    title: `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description,
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      type: 'website',
    },
  }
}
