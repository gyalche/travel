import { motion } from 'framer-motion';
import { Backpack, BedDouble, MountainSnow, RadioTower } from 'lucide-react';

const steps = [
  {
    title: 'Choose the right peak',
    description: 'Compare region, altitude, duration, and technical level to find the route that matches your experience and goals.',
    icon: <Backpack size={20} />,
  },
  {
    title: 'Plan the departure',
    description: 'We help you choose the best season, trip format, and acclimatization rhythm for your group or private team.',
    icon: <BedDouble size={20} />,
  },
  {
    title: 'Arrive prepared',
    description: 'Before departure you receive guidance on equipment, fitness expectations, permits, and what daily life on the route looks like.',
    icon: <MountainSnow size={20} />,
  },
  {
    title: 'Climb with confidence',
    description: 'On the mountain, the trip runs through local logistics, guide coordination, and day-by-day decisions shaped by conditions.',
    icon: <RadioTower size={20} />,
  },
];

export default function JourneyFlow() {
  return (
    <section className="bg-[linear-gradient(180deg,#fffaf4_0%,#f7f3ed_100%)] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#9d7f4a]">How It Works</p>
          <h2 className="mt-5 font-display text-4xl text-[#102433] md:text-6xl">
            From first enquiry to summit day, the process should feel clear, personal, and well organized.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#64748b]">
            The right trip starts with honest route selection and continues with practical preparation, responsive planning, and strong support on the ground in Nepal.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="rounded-[2rem] border border-[#eadfce] bg-white p-6 shadow-[0_18px_55px_rgba(31,41,55,0.06)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 inline-flex rounded-full bg-[#173042]/6 p-3 text-[#173042]">
                {step.icon}
              </div>
              <p className="font-heading text-xs uppercase tracking-[0.24em] text-[#9d7f4a]">
                Step {index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl text-[#102433]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#64748b]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
