import Link from 'next/link';
import type { Metadata } from 'next';

function SearchXIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F7] text-black p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white border border-[#E5E5EA] text-[#86868B] text-xs font-semibold uppercase tracking-widest">
          <SearchXIcon />
          404 — Halaman Tidak Ditemukan
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
          Halaman Ini Tidak Ada
        </h1>

        <p className="text-sm text-[#86868B] leading-relaxed">
          Rute yang kamu tuju tidak terdaftar di sistem absensi Slate.
          Kembali ke halaman masuk untuk melanjutkan.
        </p>

        <Link
          href="/login"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-[#1D1D1F] text-white font-semibold text-sm rounded-2xl transition-colors active:scale-[0.98]"
        >
          Kembali ke Halaman Masuk
        </Link>
      </div>
    </div>
  );
}
