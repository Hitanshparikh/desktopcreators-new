import { Award, Trophy } from 'lucide-react';
import awardImage from '@/assets/award.jpg';

const AchievementSection = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, hsl(220, 15%, 6%), hsl(220, 15%, 8%))'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Recognition & Awards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating excellence and achievements in IT solutions and services
          </p>
        </div>

        {/* Achievement Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl hover:scale-[1.02] transition-all duration-500 group">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Award Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={awardImage} 
                    alt="NCN TOP SI Partner Awards 2025" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-3">
                    <Trophy className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Award Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 mt-1">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      NCN TOP SI Partner Awards 2025
                    </h3>
                    <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      4th NCN-SI Partners Summit & Excellence Awards 2025
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="text-primary font-semibold">Pranav Parikh, Desktop Creators (Anand)</span> has been recognized with the prestigious NCN TOP SI Partner Award 2025 at the 4th NCN-SI Partners Summit 2025!
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    We extend our heartfelt congratulations to Pranav Parikh, Desktop Creators (Anand) for being recognized as NCN TOP SI Partner Awards 2025 at the 4th NCN-SI Partners Summit & Excellence Awards 2025.
                  </p>

                  <div className="pt-4 border-t border-border/30">
                    <p className="text-sm text-muted-foreground italic">
                      This award recognizes our commitment to excellence, innovation, and outstanding service delivery in the IT solutions industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default AchievementSection;
