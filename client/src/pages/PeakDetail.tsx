import type { ReactNode } from 'react';
import { ArrowLeft, CheckCircle2, Compass, Mountain, SunMedium, Timer } from 'lucide-react';
import { Link, useParams } from 'wouter';
import Footer from '@/components/Footer';
import { getPeakBySlug } from '@/data/peaks';
import NotFound from './NotFound';

export default function PeakDetail() {
  const params = useParams();
  const slug = params.slug;

  if (!slug) {
    return <NotFound />;
  }

  const peak = getPeakBySlug(slug);

  if (!peak) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#102433]">
      <section className="relative overflow-hidden bg-[#08131b] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${peak.heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(4,12,18,0.9)_20%,rgba(4,12,18,0.54)_52%,rgba(4,12,18,0.88)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 md:px-6 md:pb-28">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-heading text-white backdrop-blur-md"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
            <div
              className="rounded-full px-4 py-2 text-xs font-heading uppercase tracking-[0.24em]"
              style={{ backgroundColor: `${peak.accent}dd` }}
            >
              {peak.region}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#ddb04d]">Peak Detail</p>
              <h1 className="mt-4 text-5xl leading-[0.95] text-white md:text-7xl">{peak.name}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">{peak.overview}</p>
            </div>

            <div className="grid gap-3 rounded-[2rem] border border-white/12 bg-white/10 p-5 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-3">
                <Stat label="Height" value={peak.height} icon={<Mountain size={17} />} />
                <Stat label="Difficulty" value={peak.difficulty} icon={<Compass size={17} />} />
                <Stat label="Duration" value={peak.duration} icon={<Timer size={17} />} />
                <Stat label="Season" value={peak.season} icon={<SunMedium size={17} />} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white shadow-[0_18px_55px_rgba(31,41,55,0.07)]">
            <img src={peak.galleryImage} alt={peak.name} className="h-80 w-full object-cover" />
            <div className="grid gap-6 p-8 md:grid-cols-2">
              <InfoBlock title="Route Structure" items={peak.route} />
              <InfoBlock title="Trip Highlights" items={peak.highlights} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-[#eadfce] bg-white p-6 shadow-[0_18px_55px_rgba(31,41,55,0.07)]">
            <p className="text-xs font-heading uppercase tracking-[0.24em] text-[#9d7f4a]">Best For</p>
            <ul className="mt-5 space-y-4">
              {peak.idealFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#475569]">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#b8860b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-[#173042] p-6 text-white shadow-[0_24px_60px_rgba(23,48,66,0.22)]">
            <p className="text-xs font-heading uppercase tracking-[0.24em] text-[#ddb04d]">Need This Customized?</p>
            <h2 className="mt-3 font-display text-3xl">We can tune pace, support, and comfort level.</h2>
            <p className="mt-4 text-sm leading-6 text-white/74">
              Build a private departure, add recovery nights, or reshape the acclimatization rhythm around your group.
            </p>
            <Link
              href="/#faq"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#b8860b] px-5 py-3 font-heading text-white"
            >
              Ask about this peak
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-[1.5rem] bg-white/10 p-4">
      <div className="mb-3 text-[#ddb04d]">{icon}</div>
      <p className="text-[0.65rem] font-heading uppercase tracking-[0.2em] text-white/55">{label}</p>
      <p className="mt-2 text-sm font-heading text-white">{value}</p>
    </div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-heading uppercase tracking-[0.24em] text-[#9d7f4a]">{title}</p>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[#475569]">
            <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#b8860b]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
