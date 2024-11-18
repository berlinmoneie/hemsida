import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import { Calendar, Sparkles } from 'lucide-react';

const solnaTeam = [
  {
    name: "Rosangela Lima",
    title: "Frisör skönhet hudterapeut",
    specialties: [
      "Klippning",
      "Slingor",
      "Färgning",
      "Keratin",
      "Hudterapeut",
      "Ansiktsbehandling",
      "Braziliansk vaxning",
      "Laser hårborttagning",
      "Hårvård",
      "Hårbehandling",
      "Kroppsvård",
      "Reducering av fett",
      "Reducering massage",
      "Celluiliter"
    ],
    image: "https://static.wixstatic.com/media/8f7788_5151a69b73984f2997c10d2746c44d86~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eb3c684b-99d1-4490-9028-73719b3a6901_edi.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    slug: "rosangela-lima",
    schedule: {
      solna: [
        { day: "Måndag", hours: "16:30 - 20:00" },
        { day: "Onsdag", hours: "09:30 - 19:00" },
        { day: "Lördag", hours: "09:00 - 16:00" }
      ],
      sodermalm: [
        { day: "Måndag", hours: "10:00 - 15:00" },
        { day: "Tisdag", hours: "10:00 - 19:00" },
        { day: "Torsdag", hours: "10:00 - 19:00" }
      ]
    }
  },
  {
    name: "Tatiana H.",
    title: "Certifierad Hudterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Laserbehandling",
      "Massage"
    ],
    image: "https://static.wixstatic.com/media/8f7788_69aebb91fd98466a842e6e02e2c6d9c9~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/thumbnail_f8f820d1-11fb-42fe-9ffd-ae2737.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    slug: "tatiana-h"
  },
  {
    name: "Justina Polivoda",
    title: "Hudterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Ögonbryn",
      "Browlift",
      "Lashlift"
    ],
    image: "https://static.wixstatic.com/media/8f7788_cf871a14f08d416cb3218474e2377690~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/download.jpg",
    location: "Solna",
    phone: "072-913 70 04",
    bookingUrl: "https://www.bokadirekt.se/places/justina-polivoda-55860",
    slug: "justina-polivoda"
  },
  {
    name: "Nori",
    title: "Frisör",
    specialties: [
      "Klippning herr",
      "Klippning dam",
      "Klippning barn",
      "Styling fön",
      "Från afro till skandinaviskt hår"
    ],
    image: "https://static.wixstatic.com/media/8f7788_827e9905211647778aefccc98c9c4a86~mv2.jpeg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-09-27%20at%2022_01_13.jpeg",
    location: "Solna",
    phone: "070-465 65 13",
    slug: "noir-t"
  }
];

const sodermalmTeam = [
  {
    name: "Juliana",
    title: "Vaxningsspecialist",
    specialties: [
      "Vaxning",
      "Braziliansk vaxning",
      "Kroppsvaxning"
    ],
    image: "https://static.wixstatic.com/media/8f7788_787c9f7df92e4a07b6539ce497450b97~mv2.jpg/v1/fill/w_600,h_809,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AD8CC2E9-AB36-4E97-A69F-91B2004E8D50.jpg",
    location: "Södermalm",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    slug: "juliana"
  },
  {
    name: "Alyna",
    title: "Nagel- och vaxningsspecialist",
    specialties: [
      "Vaxning",
      "Nagelvård",
      "Pedikyr",
      "Manikyr"
    ],
    image: "https://static.wixstatic.com/media/8f7788_c4f94b0b253a4850af69e94ad723d34b~mv2.jpg/v1/fill/w_357,h_600,al_c,q_80,enc_auto/8f7788_c4f94b0b253a4850af69e94ad723d34b~mv2.jpg",
    location: "Södermalm",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    slug: "alyna"
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-neutral-50" id="team-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-center mb-6"
        >
          Styling By Brazil Solna
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto"
        >
          Välj din personliga expert för din behandling. Vårt team av erfarna specialister 
          är här för att hjälpa dig uppnå dina önskemål.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solnaTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>

        {/* Södermalm Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-lavender-500/10 rounded-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-neutral-100">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-light mb-6"
                >
                  Styling by Brazil Södermalm
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-neutral-600 mb-8"
                >
                  Upptäck vårt breda utbud av professionella behandlingar på vår Södermalm-salong. 
                  Från hårvård till skönhetsbehandlingar, vårt team är redo att ta hand om dig.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href="https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-rose-500 text-white rounded-full 
                      hover:bg-rose-600 transition-all duration-300 hover:scale-105"
                  >
                    <Calendar className="w-5 h-5" />
                    Boka tid
                  </a>
                  <a 
                    href="tel:0734411255"
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-rose-500 text-rose-500 
                      rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Ring oss
                  </a>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {sodermalmTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <TeamMember {...member} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}