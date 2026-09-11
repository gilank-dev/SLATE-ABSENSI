import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Slate — Absensi Harian Siswa',
    template: '%s | Slate',
  },
  description:
    'Sistem absensi harian siswa dengan validasi waktu server (05:00–07:00 WIB), geofencing 100 meter, dan selfie verifikasi. Panel internal sekolah.',
  applicationName: 'Slate',
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
