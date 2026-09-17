/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  BadgeCheck, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Brain, 
  Briefcase, 
  BookOpen, 
  FileText, 
  Globe, 
  FlaskConical, 
  School, 
  Fingerprint, 
  FileSearch, 
  BarChart3, 
  Share2,
  ExternalLink,
  Download,
  Facebook,
  Instagram,
  Youtube,
  Trophy,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const SectionTitle = ({ icon: Icon, title, colorClass }: { icon: any, title: string, colorClass?: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colorClass || "bg-primary text-white")}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-3xl font-black font-headline">{title}</h3>
  </div>
);

const BookCard = ({ title, year, description, image, borderClass }: { title: string, year: string, description: string, image: string, borderClass: string }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group cursor-pointer sm:col-span-2"
    >
      <div className={cn("bg-white p-6 rounded-2xl shadow-sm border-r-4 flex flex-col md:flex-row gap-6 items-center", borderClass)}>
        <div className="w-32 h-44 flex-shrink-0 bg-surface-container-high rounded-lg shadow-md overflow-hidden flex items-center justify-center">
          {!imgError ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover rounded-lg" 
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-primary/5 text-primary">
              <BookOpen className="w-8 h-8 mb-2 opacity-60" />
              <span className="text-[11px] font-bold leading-tight">{title}</span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-primary font-bold text-sm">{year}</p>
          <p className="text-on-surface-variant/80 text-sm font-normal mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const PublicationCard = ({ title, journal, link, borderClass, hoverClass }: { title: string, journal: string, link?: string, borderClass: string, hoverClass: string }) => (
  <motion.div 
    whileHover={{ x: -4 }}
    className={cn("p-6 bg-surface-container-low rounded-2xl border-l-4 hover:bg-white transition-all group", borderClass)}
  >
    <h4 className={cn("font-bold text-on-surface leading-snug mb-2 transition-colors", hoverClass)}>{title}</h4>
    <p className="text-sm text-on-surface-variant">{journal}</p>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs font-bold text-primary mt-2 flex items-center gap-1 hover:underline"
      >
        <ExternalLink className="w-3 h-3" /> {link.replace('https://', '')}
      </a>
    )}
  </motion.div>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileImgError, setProfileImgError] = useState(false);

  const profileImageUrl = "https://raw.githubusercontent.com/musiclover2020/portfolio-images/2b170114823ef7bc3fe166c9925d9e8dd4204d43/Profile%20Image.jpg";

  const navLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "المؤهلات", href: "#qualifications" },
    { label: "المسيرة المهنية", href: "#career" },
    { label: "المؤلفات", href: "#books" },
    { label: "الأبحاث والمنشورات", href: "#publications" },
    { label: "الروابط الأكاديمية", href: "#academic-links" },
  ];

  const cvUrl = "/cv.pdf";

  return (
    <div className="min-h-screen bg-background text-on-surface scroll-smooth" dir="rtl">
      {/* Top Navigation */}
      <nav id="navbar" className="bg-slate-950/85 backdrop-blur-xl sticky top-0 z-50 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3 group text-white">
            <div className="bg-gradient-to-r from-primary to-purple-600 group-hover:from-primary/90 group-hover:to-purple-500 text-white px-3.5 py-1.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/30 flex items-center justify-center">
              <span className="font-sans font-bold whitespace-nowrap">
                M. H. Ismail
              </span>
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-wide font-headline block text-white group-hover:text-purple-300 transition-colors">
                الموقع الأكاديمي الرسمي
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-slate-300 hover:text-white hover:text-primary-container text-sm font-semibold transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a 
              id="cv-download-btn"
              href={cvUrl}
              download="Mohamed_Hossam_Ismail_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 text-white px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
              title="تحميل السيرة الذاتية (CV)"
            >
              <Download className="w-4 h-4" />
              <span>تحميل السيرة الذاتية</span>
            </a>

            {/* Mobile menu toggle */}
            <button 
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="قائمة التصفح"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 border-t border-white/10 px-6 py-4 flex flex-col gap-3 backdrop-blur-2xl">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-primary-container hover:bg-white/5 px-3 py-2 rounded-xl text-base font-semibold transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500 font-mono">0{idx + 1}</span>
              </a>
            ))}
            <a
              href={cvUrl}
              download="Mohamed_Hossam_Ismail_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>تحميل السيرة الذاتية (PDF)</span>
            </a>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10 lg:py-16 relative">
        {/* Hero Section */}
        <section id="hero" className="grid lg:grid-cols-12 gap-12 items-center mb-20 scroll-mt-28">
          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-4 bg-primary/15 rounded-[2.5rem] blur-2xl group-hover:bg-primary/25 transition-all duration-700" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl aspect-[4/5] border-4 sm:border-8 border-white flex items-center justify-center">
              {!profileImgError ? (
                <img 
                  id="profile-image"
                  src={profileImageUrl} 
                  alt="أ.د. محمد حسام الدين إسماعيل" 
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={() => setProfileImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-primary/10 p-6 text-center text-primary">
                  <GraduationCap className="w-16 h-16 mb-4 opacity-70" />
                  <span className="font-bold text-lg">أ.د. محمد حسام الدين إسماعيل</span>
                  <span className="text-xs text-on-surface-variant mt-1">كلية الإعلام - جامعة القاهرة</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-xl border border-surface-container-low max-w-[210px]">
              <div className="text-primary font-black text-3xl font-headline">25+</div>
              <div className="text-on-surface-variant text-xs sm:text-sm font-bold">عاماً من العطاء الأكاديمي والبحثي</div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full w-fit border border-primary/20">
              <BadgeCheck className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase font-headline">Senior Academic Professor</span>
            </div>
            <h1 className="font-black text-on-surface leading-[1.15] tracking-tight font-headline text-3xl sm:text-4xl lg:text-5xl">
              أ.د. محمد حسام الدين إسماعيل
            </h1>
            <h2 className="text-xl sm:text-2xl text-primary font-bold">رئيس قسم الصحافة بكلية الإعلام جامعة القاهرة</h2>
            
            <div className="bg-surface-container-low/70 p-6 sm:p-8 rounded-3xl border border-white/60 shadow-sm mt-2">
              <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant">
                متخصص في الإعلام الدولي، وأخلاقيات الإعلام الرقمي، وعلاقة السيميولوجيا بالميديا المعاصرة. حاصل على الدكتوراه بنظام الإشراف المشترك بين جامعتي إنديانا بولاية بنسلفانيا الأمريكية والقاهرة، مكرساً مسيرته المهنية لتطوير الفكر الإعلامي العربي وبناء جيل جديد من الباحثين والصحفيين.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm sm:text-base"><a href="mailto:hosamedn@cu.edu.eg" className="hover:text-primary transition-colors">hosamedn@cu.edu.eg</a></span>
              </div>
              <a 
                href="http://masscomm.cu.edu.eg/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="موقع كلية الإعلام جامعة القاهرة"
                className="flex items-center gap-3 bg-white hover:bg-slate-50 px-5 py-3 rounded-2xl shadow-sm border border-slate-100 transition-all group cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">كلية الإعلام جامعة القاهرة</span>
              </a>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs font-bold text-on-surface-variant ml-2">حسابات التواصل:</span>
              {[
                { icon: Facebook, href: "https://www.facebook.com/mohamed.hossam.5648137", title: "فيسبوك" },
                { icon: Instagram, href: "https://www.instagram.com/mohamed.hossam.5648137/?hl=en", title: "انستغرام" },
                { icon: Youtube, href: "https://www.youtube.com/@hopahope", title: "يوتيوب" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={social.title}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200 text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a 
                href="https://www.tiktok.com/@mohamedhossam366" 
                target="_blank" 
                rel="noopener noreferrer"
                title="تيك توك"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200 text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.90 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.63-.14.71-.07 1.48.24 2.13.43.92 1.47 1.57 2.5 1.61 1.17.03 2.37-.58 2.89-1.63.15-.3.21-.63.21-.97-.02-3.41 0-6.81-.01-10.22z"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Bento Grid Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Academic Qualifications */}
          <section id="qualifications" className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-surface-container/20 scroll-mt-28">
            <SectionTitle icon={GraduationCap} title="المؤهلات الأكاديمية" />
            <div className="space-y-10 relative before:absolute before:right-6 before:top-0 before:bottom-0 before:w-px before:bg-surface-container-high">
              {[
                {
                  title: "دكتوراه الفلسفة في الإعلام",
                  institution: "جامعة إنديانا بولاية بنسلفانيا (الولايات المتحدة) بالاشتراك مع جامعة القاهرة",
                  specialization: "تخصص دقيق في الاقتصاد السياسي للإعلام العولمي، وصورة العرب والمسلمين في الصحافة الدولية",
                  grade: "تقدير مرتبة الشرف الأولى",
                  active: true
                },
                {
                  title: "ماجستير الصحافة والإعلام",
                  institution: "جامعة القاهرة، كلية الإعلام",
                  specialization: "تخصص دقيق أخلاقيات الإعلام",
                  grade: "تقدير ممتاز"
                },
                {
                  title: "بكالوريوس الإعلام - قسم الصحافة",
                  institution: "كلية الإعلام، جامعة القاهرة",
                  grade: "بتقدير جيد جدا مع مرتبة الشرف"
                }
              ].map((item, i) => (
                <div key={i} className="relative pr-16">
                  <div className={cn("absolute right-4 top-1 w-4 h-4 rounded-full ring-4", item.active ? "bg-primary ring-primary/20" : "bg-surface-container-high ring-surface-container/10")} />
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-primary font-bold mb-1">{item.institution}</p>
                  {item.specialization && <p className="text-on-surface font-bold mb-1">{item.specialization}</p>}
                  <p className="text-on-surface-variant italic">{item.grade}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research Interests */}
          <section id="research-interests" className="bg-primary text-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl flex flex-col justify-between scroll-mt-28">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-10">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black font-headline mb-8">الاهتمامات البحثية</h3>
              <ul className="space-y-6">
                {[
                  { icon: Share2, text: "أخلاقيات الإعلام في العصر الرقمي" },
                  { icon: Globe, text: "خطاب الكراهية في المنصات الاجتماعية" },
                  { icon: Briefcase, text: "نظريات ما بعد الحداثة في الاتصال" },
                  { icon: FlaskConical, text: "تطبيقات الذكاء الاصطناعي في الصحافة" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-white/60" />
                    <span className="text-lg font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/80 text-sm italic">"نسعى لتقديم رؤية نقدية توازن بين حرية التعبير والمسؤولية الأخلاقية."</p>
            </div>
          </section>

          {/* Career Journey */}
          <section id="career" className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-surface-container/20 scroll-mt-28">
            <SectionTitle icon={Briefcase} title="المسيرة المهنية" colorClass="bg-secondary-container/20 text-secondary" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="p-6 bg-surface-container-low rounded-3xl border-b-4 border-primary">
                <span className="text-xs font-bold text-primary block mb-2">حالياً</span>
                <h4 className="font-bold text-lg mb-2 text-on-surface">رئيس قسم الصحافة</h4>
                <p className="text-sm text-on-surface-variant">كلية الإعلام، جامعة القاهرة</p>
                <div className="mt-6 flex justify-center perspective-1000">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100067534163373"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="صفحة قسم الصحافة - كلية الإعلام جامعة القاهرة على فيسبوك"
                    className="w-28 h-28 rounded-full overflow-hidden border-4 border-white bg-white shadow-xl transform transition-transform duration-500 hover:rotate-y-12 hover:scale-110 rotate-x-6 rotate-y--6 group cursor-pointer flex items-center justify-center p-1 hover:ring-4 hover:ring-primary/30"
                  >
                    <img 
                      src="https://raw.githubusercontent.com/musiclover2020/portfolio-images/2b170114823ef7bc3fe166c9925d9e8dd4204d43/logo2.jpg" 
                      alt="شعار قسم الصحافة - كلية الإعلام جامعة القاهرة" 
                      className="w-full h-full object-contain rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
              </div>
              {[
                { 
                  label: "سابقاً", 
                  title: "منسق برنامج اللغة الإنجليزية لقسم الصحافة", 
                  desc: (
                    <>
                      الإشراف الأكاديمي والإداري على البرامج البحثية.{" "}
                      <span className="font-bold text-purple-950 bg-purple-100/90 px-2 py-0.5 rounded-lg border border-purple-200/60 shadow-[0_0_8px_rgba(168,85,247,0.2)] inline-block my-0.5 transition-all duration-300 hover:bg-purple-200 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.7)] hover:scale-[1.02] cursor-default">
                        أستاذ الإعلام بجامعة MIU
                      </span>
                    </>
                  )
                },
                { 
                  label: "إقليمي", 
                  title: "الحضور العربي", 
                  desc: (
                    <>
                      عمل أستاذا بكلية الإعلام جامعة عجمان بدولة الإمارات، وأستاذا بكلية العلوم التطبيقية بسلطنة عمان{" "}
                      <span className="font-bold text-purple-950 bg-purple-100/90 px-2 py-0.5 rounded-lg border border-purple-200/60 shadow-[0_0_8px_rgba(168,85,247,0.2)] inline-block my-0.5 transition-all duration-300 hover:bg-purple-200 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.7)] hover:scale-[1.02] cursor-default">
                        منسقا لمنهج جامعة أوكلاند في نيوزيلندا
                      </span>
                    </>
                  )
                },
                { 
                  label: "دولي", 
                  title: "باحث زائر", 
                  desc: (
                    <>
                      جامعة إنديانا، الولايات المتحدة الأمريكية. عضو{" "}
                      <span className="font-bold text-purple-950 bg-purple-100/90 px-2 py-0.5 rounded-lg border border-purple-200/60 shadow-[0_0_8px_rgba(168,85,247,0.2)] inline-block my-0.5 transition-all duration-300 hover:bg-purple-200 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.7)] hover:scale-[1.02] cursor-default">
                        الجمعية الدولية لأبحاث الإعلام والاتصال (IAMCR)
                      </span>
                      . عضو{" "}
                      <span className="font-bold text-purple-950 bg-purple-100/90 px-2 py-0.5 rounded-lg border border-purple-200/60 shadow-[0_0_8px_rgba(168,85,247,0.2)] inline-block my-0.5 transition-all duration-300 hover:bg-purple-200 hover:border-purple-400 hover:shadow-[0_0_22px_rgba(168,85,247,0.7)] hover:scale-[1.02] cursor-default">
                        الجمعية الدولية للاتصال (ICA)
                      </span>
                    </>
                  )
                },
                { label: "استشاري", title: "خبير إعلامي", desc: "عضو لجان تحكيم الجوائز الصحفية العربية" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-surface-container-low rounded-3xl">
                  <span className="text-xs font-bold text-on-surface-variant block mb-2">{item.label}</span>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Books and Studies */}
          <section id="books" className="lg:col-span-2 bg-surface-container-low p-8 sm:p-10 rounded-[2.5rem] scroll-mt-28">
            <SectionTitle icon={BookOpen} title="المؤلفات والدراسات" colorClass="bg-tertiary-container text-tertiary" />
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "الصحفي في أدب نجيب محفوظ", year: "2021", description: "دراسة في تداخل الخطابين الأدبي والصحفي", image: "https://raw.githubusercontent.com/musiclover2020/portfolio-images/main/book-2021.jpeg", borderClass: "border-primary" },
                { title: "الإعلام الروسي من جورباتشوف إلى بوتين", year: "2017", description: "تحليل للتحولات الهيكلية في الأنظمة الإعلامية الدولية", image: "https://raw.githubusercontent.com/musiclover2020/portfolio-images/main/book-2017.jpg", borderClass: "border-tertiary" },
                { title: "النجومية الإعلامية في مصر", year: "2016", description: "صناعة الشهرة في التلفزيون والمنصات الرقمية", image: "https://raw.githubusercontent.com/musiclover2020/portfolio-images/main/book-2016.jpg", borderClass: "border-primary" },
                { title: "العولمة وصورة الإسلام في الإعلام الدولي", year: "2015", description: "بنية الاقتصاد السياسي للإعلام الدولي وتأثيره على التمثلات والصور الإعلامية", image: "https://raw.githubusercontent.com/musiclover2020/portfolio-images/main/book-2015.jpg", borderClass: "border-secondary" },
                { title: "ساخرون وثوار: دراسات علاماتية وثقافية في الإعلام العربي", year: "2014", description: "رصد لتمثلات الثورة والاحتجاج في الخطاب الساخر", image: "https://raw.githubusercontent.com/musiclover2020/portfolio-images/main/book-2014.jpg", borderClass: "border-tertiary" },
                { title: "الصورة والجسد: دراسات نقدية في الإعلام المعاصر", year: "2010", description: "تفكيك الأنساق الثقافية في الممارسات الإعلامية البصرية", image: "https://raw.githubusercontent.com/musiclover2020/portfolio-images/main/book-2010.jpg", borderClass: "border-primary" },
                { title: "المسؤولية الاجتماعية للصحافة", year: "2003/2015", description: "العوامل المؤثرة على مدى تمتع وسائل الإعلام بالصدق والدقة والتوازن والشمول", image: "https://raw.githubusercontent.com/musiclover2020/portfolio-images/main/book-2003-2015.jpg", borderClass: "border-tertiary" }
              ].map((book, i) => (
                <BookCard key={i} {...book} />
              ))}
            </div>
          </section>

          {/* Supervised Theses & English Publications */}
          <div className="flex flex-col gap-8">
            <section id="theses" className="bg-surface-dim p-8 sm:p-10 rounded-[2.5rem] border border-surface-container-highest scroll-mt-28">
              <SectionTitle icon={FileText} title="الرسائل العلمية" colorClass="bg-on-surface text-white" />
              <div className="space-y-6">
                {[
                  "الإشراف على أكثر من 50 رسالة ماجستير ودكتوراه في مجالات الإعلام المختلفة.",
                  "مناقشة عشرات الأطروحات في الجامعات المصرية والعربية.",
                  "محكم للعديد من المجلات الأكاديمية الدولية والعربية والمصرية"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 hover:bg-white rounded-2xl transition-colors">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0 text-xs font-bold">0{i+1}</div>
                    <p className="text-sm font-medium">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">التميز الأكاديمي</span>
                </div>
                <p className="text-xs text-on-surface-variant">تم تكريمه في العديد من المحافل الأكاديمية لمساهماته في تأصيل أخلاقيات المهنة.</p>
              </div>
            </section>

            <section id="publications" className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-surface-container/20 shadow-sm scroll-mt-28">
              <SectionTitle icon={Globe} title="المنشورات باللغة الإنجليزية" colorClass="bg-primary/10 text-primary" />
              <div className="space-y-6" dir="ltr">
                <PublicationCard 
                  title="The representations of journalists in Naguib Mahfouz’s novellas: How are they reflected in today’s journalism in Egypt?"
                  journal="Journal of Arab and Muslim Media Research (2023). 16(2)"
                  link="https://doi.org/10.1386/jammr"
                  borderClass="border-primary"
                  hoverClass="group-hover:text-primary"
                />
                <PublicationCard 
                  title="Experiences of listening to the Qur'an in Egypt: A qualitative phenomenological study of therapeutic and recreational listening"
                  journal="Contemporary Islam (2023)"
                  link="https://doi.org/10.1007/s11562-023-00513-0"
                  borderClass="border-secondary"
                  hoverClass="group-hover:text-secondary"
                />
                <PublicationCard 
                  title="Postmodern Analysis of New Preachers of Islam in Egypt: A Cultural Study of Mustafa Hosni’s Digital Media Platforms"
                  journal="Media Watch 11 (1) 145-163, 2020"
                  link="https://doi.org/10.15655/mw/2020/v11i1/49759"
                  borderClass="border-tertiary"
                  hoverClass="group-hover:text-tertiary"
                />
                <PublicationCard 
                  title="New Media and Women’s Empowerment: Cyber-Feminist Resistance on the Egyptian Blogosphere"
                  journal="in Kiran Prasad (ed.), Transforming International Communication: Media, Culture and Society in the Middle East (New Delhi: BR Publications Inc., 2014)"
                  borderClass="border-primary"
                  hoverClass="group-hover:text-primary"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-surface-container-highest/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xl font-headline">أحدث الدراسات العربية</h4>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-primary/10">
                  <h5 className="text-lg font-black text-on-surface mb-3">
                    <a href="#" className="hover:text-primary transition-colors duration-300">
                      المسؤولية الاجتماعية للمؤثرين الرقميين: دراسة حالة منصة (تيك توك) في مصر (2026)
                    </a>
                  </h5>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    ترصد الدراسة أنواع الانتهاكات الأخلاقية للإعلامية للمؤثرين المصريين، وتُفسّر أسباب إخلالهم بقواعد المسؤولية الاجتماعية على منصة "تيك توك".
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Academic Links */}
        <section id="academic-links" className="mt-20 bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 sm:p-10 scroll-mt-28 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-purple-500 border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-purple-500/30">
                <School className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">الروابط الأكاديمية والمعرفات العلمية</h3>
                <p className="text-slate-400 text-sm mt-1">الصفحات الرسمية على قواعد البيانات والمنصات البحثية المرموقة</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full">
              {[
                { icon: Fingerprint, label: "ORCID", href: "https://orcid.org/0000-0001-9492-9301" },
                { icon: FileSearch, label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=57213191605" },
                { icon: School, label: "ResearchGate", href: "https://www.researchgate.net/profile/Mohamed-Ismail-50" },
                { icon: BarChart3, label: "Google Scholar", href: "https://scholar.google.com/citations?user=vL0ebZQAAAAJ&hl=ar", highlight: true },
                { icon: School, label: "Academia", href: "https://cairo.academia.edu/httpscholarcueduegqmohamedhossam" },
                { icon: Share2, label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-hossam-ismail-97570758/" }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all border group text-center",
                    link.highlight ? "bg-purple-500/20 border-purple-500/20 hover:bg-purple-500/30 shadow-md" : "bg-white/5 border-white/5 hover:bg-white/10"
                  )}
                >
                  <link.icon className={cn("w-6 h-6 group-hover:scale-110 transition-transform", link.highlight ? "text-purple-300" : "text-cyan-300")} />
                  <span className={cn("text-xs sm:text-sm font-semibold", link.highlight ? "text-purple-200" : "text-slate-300")}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 w-full mt-20 border-t border-white/10 text-slate-400">
        <div className="max-w-7xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 text-white px-3.5 py-1.5 rounded-full font-bold text-xs tracking-wide shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center cursor-default">
              <span className="font-sans font-bold whitespace-nowrap">
                M. H. Ismail
              </span>
            </div>
            <span className="text-sm font-semibold text-white">الموقع الأكاديمي الرسمي</span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} جميع الحقوق محفوظة — رئيس قسم الصحافة بكلية الإعلام جامعة القاهرة
          </p>
          <a 
            href="#hero" 
            className="text-xs text-primary hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
          >
            العودة للأعلى ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
