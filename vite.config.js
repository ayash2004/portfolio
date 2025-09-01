import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})

{/* <section id="about" class="section-padding bg-background">
  <div class="container mx-auto">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-5xl font-bold text-center mb-20 text-white scroll-animate animate">
        <span class="text-secondary">01.</span> About Me</h2>
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8 scroll-animate scroll-delay-1 animate">
            <p class="text-xl text-text-primary leading-relaxed font-medium">I'm a passionate Flutter developer with 1.3 years of hands-on experience in fintech and mobile app development. My expertise lies in creating robust, scalable applications using clean architecture principles and the BLoC pattern for efficient state management.</p>
            <p class="text-xl text-text-primary leading-relaxed font-medium">I specialize in building high-performance mobile applications with seamless API integrations using Retrofit and Dio, implementing secure Firebase Authentication, and successfully deploying apps to both Google Play Store and Apple App Store.</p>
            <p class="text-xl text-text-primary leading-relaxed font-medium">As an MSc. Computer Science graduate, I bring both theoretical knowledge and practical expertise to every project, ensuring code quality, maintainability, and optimal user experience.</p>
            <div class="grid grid-cols-2 gap-6 mt-12">
              <div class="text-center p-6 rounded-xl bg-gradient-primary/10 backdrop-blur">
                <div class="text-3xl font-bold text-white mb-2">1.3+</div>
                <div class="text-sm text-white font-semibold">Years Experience</div>
              </div>
              <div class="text-center p-6 rounded-xl bg-gradient-primary/10 backdrop-blur">
                <div class="text-3xl font-bold text-white mb-2">10+</div>
                <div class="text-sm text-white font-semibold">Projects Completed</div>
              </div>
            </div>
          </div>
          <div class="scroll-animate scroll-delay-2 animate">
            <div class="text-card-foreground bg-surface border border-secondary/30 shadow-lg rounded-2xl overflow-hidden">
              <div class="p-10"><div class="w-full h-96 bg-gradient-primary rounded-xl flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-dark opacity-40"></div>
                <div class="text-center relative z-10">
                  <div class="w-40 h-40 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur">
                    <span class="text-5xl font-bold text-white">PM</span>
                  </div>
                  <p class="text-text-primary font-bold text-2xl mb-2">Prathamesh Mali</p>
                  <p class="text-text-secondary text-lg">Flutter Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}