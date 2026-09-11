import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://slate-absensi.vercel.app'),
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  title: {
    default: 'Slate — Absensi Harian Siswa',
    template: '%s | Slate',
  },
  description:
    'Sistem absensi harian siswa dengan validasi waktu server (05:00–07:00 WIB), geofencing 100 meter, dan selfie verifikasi. Panel internal sekolah.',
  applicationName: 'Slate',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Slate — Absensi Harian Siswa',
    description: 'Sistem absensi harian siswa: time-lock 05:00–07:00 WIB, geofencing 100 meter, selfie verifikasi.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Slate absensi harian siswa' }],
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="h-full scroll-smooth bg-[#FFFFFF] text-[#000000]">
      <body className="min-h-screen flex flex-col antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
