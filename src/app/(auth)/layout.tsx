import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masuk',
  description:
    'Halaman masuk internal Slate. Akses terbatas untuk siswa dan admin sekolah.',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
