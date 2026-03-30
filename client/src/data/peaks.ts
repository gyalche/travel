export interface Peak {
  slug: string;
  name: string;
  region: string;
  height: string;
  difficulty: string;
  duration: string;
  season: string;
  summary: string;
  heroImage: string;
  galleryImage: string;
  accent: string;
  overview: string;
  route: string[];
  highlights: string[];
  idealFor: string[];
}

export const peaks: Peak[] = [
  {
    slug: 'everest',
    name: 'Everest Base Camp + Island Peak',
    region: 'Khumbu',
    height: '6,189m',
    difficulty: 'Advanced',
    duration: '19 days',
    season: 'Apr-May / Oct-Nov',
    summary: 'A high-altitude expedition arc that combines the classic Everest approach with a real summit objective.',
    heroImage: 'https://images.pexels.com/photos/10753291/pexels-photo-10753291.jpeg?auto=compress&cs=tinysrgb&w=1800',
    galleryImage: 'https://images.pexels.com/photos/14335289/pexels-photo-14335289.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#b8860b',
    overview:
      'This itinerary is for trekkers who do not want a sightseeing version of Khumbu. It balances proper acclimatization, premium lodge support on the lower route, and a guided summit push on Island Peak once your body is ready for the altitude.',
    route: ['Kathmandu arrival and gear check', 'Lukla to Namche acclimatization block', 'Tengboche and Dingboche altitude progression', 'Everest Base Camp extension', 'Island Peak summit rotation'],
    highlights: ['Cinematic approach through Namche and Tengboche', 'Incremental altitude strategy', 'Summit-focused guide support', 'High-value blend of trek and climb'],
    idealFor: ['Strong trekkers moving into expedition terrain', 'Travelers who want Everest atmosphere plus a summit', 'Climbers who value pacing over rushed itineraries'],
  },
  {
    slug: 'mera-peak',
    name: 'Mera Peak Expedition',
    region: 'Hinku Valley',
    height: '6,476m',
    difficulty: 'Intermediate',
    duration: '17 days',
    season: 'Apr-May / Sep-Nov',
    summary: 'A cleaner, quieter path into a serious Himalayan summit with huge panoramic payoff.',
    heroImage: 'https://images.pexels.com/photos/29466873/pexels-photo-29466873.jpeg?auto=compress&cs=tinysrgb&w=1800',
    galleryImage: 'https://images.pexels.com/photos/10753291/pexels-photo-10753291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#356c86',
    overview:
      'Mera Peak is often described as approachable, but the altitude makes it significant. Our version avoids the packaged feel by tightening logistics, spacing acclimatization days well, and keeping the experience calm and deliberate from the first trail day.',
    route: ['Kathmandu preparation', 'Remote valley approach', 'Khare acclimatization and skills day', 'High camp setup', 'Mera summit and controlled descent'],
    highlights: ['Wide-open glacier landscapes', 'Less crowded route character', 'Good first 6,000m objective', 'Exceptional summit panorama'],
    idealFor: ['Fit trekkers aiming for their first major summit', 'Photographers wanting expansive glacier views', 'Travelers seeking quieter mountain days'],
  },
  {
    slug: 'lobuche-east',
    name: 'Lobuche East Climb',
    region: 'Khumbu',
    height: '6,119m',
    difficulty: 'Advanced',
    duration: '18 days',
    season: 'Apr-May / Oct-Nov',
    summary: 'A sharper, more technical Khumbu objective for climbers who want more movement and less ceremony.',
    heroImage: 'https://images.pexels.com/photos/30462129/pexels-photo-30462129.jpeg?auto=compress&cs=tinysrgb&w=1800',
    galleryImage: 'https://images.pexels.com/photos/29466873/pexels-photo-29466873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#6f7f8f',
    overview:
      'Lobuche East works well for climbers who already know they enjoy exposure and steeper terrain. The route is framed around skills refreshers, disciplined acclimatization, and summit timing chosen for cleaner conditions rather than convenience.',
    route: ['Khumbu approach and acclimatization', 'Progression through Dingboche and Lobuche', 'Technical prep session', 'High camp movement', 'Summit push with early descent'],
    highlights: ['More technical feel than standard trekking peaks', 'Strong Everest region ambiance', 'Lean, efficient summit structure', 'Excellent progression for returning climbers'],
    idealFor: ['Past trekkers stepping up in technicality', 'Climbers wanting a sharper Khumbu objective', 'Guests comfortable with fixed-line sections'],
  },
  {
    slug: 'pisang-peak',
    name: 'Pisang Peak Journey',
    region: 'Annapurna',
    height: '6,091m',
    difficulty: 'Intermediate',
    duration: '16 days',
    season: 'Mar-May / Oct-Nov',
    summary: 'A more sculpted Annapurna peak itinerary with dramatic ridgelines and a striking final summit profile.',
    heroImage: 'https://images.pexels.com/photos/14335289/pexels-photo-14335289.jpeg?auto=compress&cs=tinysrgb&w=1800',
    galleryImage: 'https://images.pexels.com/photos/30462129/pexels-photo-30462129.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#cb8d3d',
    overview:
      'Pisang Peak stands out because the journey feels visually rich from the start. We treat it as a designed route, not just a summit add-on, with careful transitions through the Annapurna trail network and a summit block that keeps the experience serious but smooth.',
    route: ['Kathmandu to Annapurna transfer', 'Trail progression through lower villages', 'Manang acclimatization rhythm', 'Pisang base camp and high camp', 'Summit day and circuit exit'],
    highlights: ['Strong ridgeline silhouette', 'Annapurna cultural depth', 'Balanced trek-to-climb transition', 'Very photogenic summit approach'],
    idealFor: ['Trekkers wanting one signature summit', 'Travelers who value scenery and route variety', 'Guests moving beyond standard lodge treks'],
  },
  {
    slug: 'chulu-east',
    name: 'Chulu East Traverse',
    region: 'Annapurna',
    height: '6,584m',
    difficulty: 'Advanced',
    duration: '20 days',
    season: 'Apr-May / Oct-Nov',
    summary: 'A remote-feeling Annapurna objective with bigger exposure, bigger days, and stronger expedition character.',
    heroImage: 'https://images.pexels.com/photos/10753291/pexels-photo-10753291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImage: 'https://images.pexels.com/photos/14335289/pexels-photo-14335289.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#4f6674',
    overview:
      'Chulu East is for guests who want a trekking peak that does not feel watered down. The reward is a bigger mountain atmosphere with a route that asks more from your legs, lungs, and consistency over multiple altitude days.',
    route: ['Annapurna access', 'Acclimatization through the upper valley', 'Base camp preparation', 'High camp carry and positioning', 'Summit bid and weather-buffer descent'],
    highlights: ['Less generic than classic intro peaks', 'Bigger expedition mood', 'Excellent altitude preparation', 'Strong visual drama'],
    idealFor: ['Repeat Nepal visitors', 'Climbers wanting stronger mountain character', 'Athletic guests comfortable with longer days'],
  },
  {
    slug: 'yala-peak',
    name: 'Yala Peak Escape',
    region: 'Langtang',
    height: '5,732m',
    difficulty: 'Moderate',
    duration: '12 days',
    season: 'Mar-May / Oct-Dec',
    summary: 'A shorter and more accessible summit journey with excellent value, clean views, and lower complexity.',
    heroImage: 'https://images.pexels.com/photos/29466873/pexels-photo-29466873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImage: 'https://images.pexels.com/photos/30462129/pexels-photo-30462129.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#739090',
    overview:
      'Yala Peak works well when time is tight but standards are still high. It gives you a proper summit arc inside a shorter format, with Langtang scenery, strong local culture, and simpler logistics than Khumbu or Annapurna.',
    route: ['Overland access to Langtang', 'Valley ascent and acclimatization', 'Kyanjin support base', 'Summit push', 'Comfortable return schedule'],
    highlights: ['Shorter departure window', 'Excellent first Himalayan summit', 'Lower logistical complexity', 'Strong cultural context'],
    idealFor: ['Time-limited travelers', 'First-time Himalayan climbers', 'Guests who want a cleaner logistics profile'],
  },
  {
    slug: 'tent-peak',
    name: 'Tent Peak Summit',
    region: 'Annapurna Sanctuary',
    height: '5,695m',
    difficulty: 'Intermediate',
    duration: '14 days',
    season: 'Mar-May / Oct-Nov',
    summary: 'A beautiful sanctuary approach with a compact summit objective and strong visual payoff.',
    heroImage: 'https://images.pexels.com/photos/14335289/pexels-photo-14335289.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImage: 'https://images.pexels.com/photos/10753291/pexels-photo-10753291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#be7c56',
    overview:
      'Tent Peak is appealing because the trek in already feels complete before the climb begins. We position it as a beautifully paced Annapurna Sanctuary experience with a legitimate summit finish rather than a standard circuit with an add-on.',
    route: ['Sanctuary trail build-up', 'Altitude progression in the basin', 'Base camp staging', 'Summit day', 'Relaxed exit through the sanctuary'],
    highlights: ['Beautiful amphitheater setting', 'Compact but rewarding summit', 'Excellent mixed trek-climb feel', 'Easy to pair with cultural travel'],
    idealFor: ['Travelers wanting a stylish shorter climb', 'Guests drawn to Annapurna Sanctuary', 'Strong hikers ready for a summit goal'],
  },
  {
    slug: 'kyajo-ri',
    name: 'Kyajo Ri Expedition',
    region: 'Khumbu',
    height: '6,186m',
    difficulty: 'Expert',
    duration: '21 days',
    season: 'Apr-May / Oct-Nov',
    summary: 'A serious technical objective for experienced climbers who want a quieter route and a more elite feel.',
    heroImage: 'https://images.pexels.com/photos/30462129/pexels-photo-30462129.jpeg?auto=compress&cs=tinysrgb&w=1600',
    galleryImage: 'https://images.pexels.com/photos/29466873/pexels-photo-29466873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#8f654a',
    overview:
      'Kyajo Ri is not a mass-market trekking peak. The climb rewards climbers who are already comfortable with mountain systems, steeper sections, and more demanding summit days. The upside is a more exclusive, more technical Khumbu line.',
    route: ['Khumbu approach with quiet side-valley transition', 'Base camp establishment', 'Technical review and rotation', 'Summit window execution', 'Weather contingency and descent'],
    highlights: ['More exclusive route feel', 'Higher technical demand', 'Excellent guide-led progression', 'Strong fit for experienced climbers'],
    idealFor: ['Returning alpine climbers', 'Guests seeking technical depth', 'Travelers avoiding crowded standard peaks'],
  },
];

export const featuredPeaksCount = 4;

export function getPeakBySlug(slug: string) {
  return peaks.find((peak) => peak.slug === slug);
}
