import React, { useState } from 'react';
import { 
  Code, 
  Mail, 
  Phone, 
  Database, 
  Layers, 
  Terminal,
  Server,
  Layout,
  Building2,
  Check,
  Copy,
  ChevronRight,
  CheckCircle2,
  Globe2,
  X
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);

  const t = {
    ar: {
      name: "باسم المسلماني",
      role: "Full-Stack & Backend Developer",
      badge: "مهندس مدني سابقاً 🏗️ ← مطور ويب 💻",
      heroTitle: "أبني حلول ويب قوية، مرنة، ومصممة بأعلى معايير الجودة.",
      heroDesc: "خريج هندسة مدنية (2014) انتقلت بشغف إلى عالم البرمجة وتطوير المواقع (يونيو 2025). أجمع بين التفكير الهندسي التخطيطي ودقة بناء الأنظمة البرمجية باستخدام Laravel و React و WordPress.",
      contactBtn: "تواصل معي",
      githubBtn: "حساب GitHub",
      aboutTitle: "عني والتحول الوظيفي",
      aboutSub: "من التخطيط الإنشائي إلى بناء المعمارية البرمجية",
      aboutP1: "تخرجت من كلية الهندسة المدنية عام 2014 واكتسبت سنوات من الخبرة في إدارة المشاريع والتفكير الهيكلي. في يونيو 2025، اتخذت خطوة استراتيجية نحو شغفي الحقيقي في البرمجة وتطوير الويب.",
      aboutP2: "أنظر إلى كتابة الكود بنفس المنظور الهندسي: تصميم بنية تحتية قوية (Backend Architecture)، توفير أمان عالٍ، وبناء واجهات سلسة ومتجاوبة تخدم احتياجات العمل بكفاءة.",
      skillsTitle: "المهارات التقنية والخبرات",
      projectsTitle: "المشاريع البارزة",
      contactTitle: "لنعمل معاً",
      contactSub: "هل لديك مشروع، استشارة، أو فرصة عمل مناسبة؟ يسعدني التواصل بك.",
      all: "الكل",
      backend: "Backend & APIs",
      fullstack: "Full-Stack & CMS",
      close: "إغلاق",
      viewProject: "تفاصيل المشروع",
      techUsed: "التقنيات المستخدمة:",
      highlights: "أبرز الإنجازات البرمجية والحلول:",
      copiedText: "تم نسخ الرقم!",
      copyText: "نسخ رقم الهاتف",
      mindsetTitle: "المنظور الهندسي في كتابة الكود",
      mindset1: "التحليل الإنشائي ← معمارية قواعد البيانات والـ APIs",
      mindset2: "معايير السلامة ← أمان الكود والاختبارات الأوتوماتيكية",
      mindset3: "تنفيذ المشاريع ← كود نظيف وحلول قابلة للتوسع"
    },
    en: {
      name: "Bassem Elmoslmany",
      role: "Full-Stack & Backend Developer",
      badge: "Ex-Civil Engineer 🏗️ → Web Developer 💻",
      heroTitle: "Building robust, scalable, and high-performance web applications.",
      heroDesc: "Civil Engineering graduate (2014) transitioned into full-stack web development (June 2025). Combining structural analytical thinking with modern software craftsmanship using Laravel, React, and WordPress.",
      contactBtn: "Contact Me",
      githubBtn: "GitHub Profile",
      aboutTitle: "About & Career Transition",
      aboutSub: "From Structural Engineering to Software Architecture",
      aboutP1: "Graduated with a degree in Civil Engineering in 2014, honing strong analytical and project management skills. In June 2025, I made a committed career transition into full-stack web development.",
      aboutP2: "I approach software engineering with a structural mindset: designing sturdy backend infrastructures, ensuring tight security, and delivering responsive user interfaces.",
      skillsTitle: "Technical Skills & Capabilities",
      projectsTitle: "Featured Projects",
      contactTitle: "Let's Connect",
      contactSub: "Looking for a dedicated developer for your team or project?",
      all: "All",
      backend: "Backend & APIs",
      fullstack: "Full-Stack & CMS",
      close: "Close",
      viewProject: "View Project Details",
      techUsed: "Technologies Used:",
      highlights: "Key Technical Highlights:",
      copiedText: "Copied to clipboard!",
      copyText: "Copy Phone Number",
      mindsetTitle: "Engineering Mindset in Code",
      mindset1: "Structural Analysis → Database Schema & API Architecture",
      mindset2: "Building Safety Standards → Code Security & Automated Testing",
      mindset3: "Project Execution → Clean Code & Scalable Solutions"
    }
  };

  const current = t[lang];

  const skills = [
    { 
      name: "Backend Architecture", 
      icon: Server,
      items: ["PHP 8+", "Laravel Framework", "RESTful APIs", "Sanctum Authentication", "MVC Pattern"] 
    },
    { 
      name: "Database & Storage", 
      icon: Database,
      items: ["MySQL", "Database Schema Design", "Eloquent ORM", "Migrations & Seeding"] 
    },
    { 
      name: "Frontend Development", 
      icon: Layout,
      items: ["JavaScript (ES6+)", "React.js", "Tailwind CSS", "HTML5 / CSS3", "Vite"] 
    },
    { 
      name: "CMS & Custom Solutions", 
      icon: Layers,
      items: ["WordPress Development", "Timber Library", "Twig Templates", "ACF Pro", "Custom Post Types"] 
    },
    { 
      name: "Tools & Workflows", 
      icon: Terminal,
      items: ["Git & GitHub", "Postman API Testing", "Git Bash / Terminal", "OBS & Media Tools"] 
    }
  ];

  const projects = [
    {
      id: 1,
      category: "backend",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      title: lang === 'ar' ? "نظام إدارة الحضور والشيفتات (Laravel)" : "Laravel Attendance System",
      desc: lang === 'ar' ? "نظام خلفي متكامل ومؤمن لإدارة جدول عمل الموظفين وتسجيل الانصراف والحضور أوتوماتيكياً." : "Automated backend engine for employee shift tracking, attendance logs, and hours calculation.",
      tech: ["Laravel", "PHP", "RESTful APIs", "MySQL", "Sanctum"],
      github: "https://github.com/bassem1sttest/laravel-attendance-system",
      highlights: [
        lang === 'ar' ? "بناء نقاط اتصال RESTful APIs مؤمنة بالكامل." : "Designed fully authenticated REST APIs.",
        lang === 'ar' ? "كتابة اختبارات أوتوماتيكية لضمان صحة المعاملات وساعات العمل." : "Wrote automated feature tests for accurate calculations."
      ]
    },
    {
      id: 2,
      category: "fullstack",
      image: "src/assets/dokan-zaman.jfif",
      title: lang === 'ar' ? "تصميم وتحديث منصة دكان (Dokan Design Updated)" : "Dokan Design Updated",
      desc: lang === 'ar' ? "تطوير وتحديث واجهات وتصميم منصة دكان الإلكترونية لتقديم تجربة تسوق سلسة وعصرية." : "Updated UI/UX design and frontend structure for the Dokan e-commerce platform.",
      tech: ["HTML/CSS", "JavaScript", "Tailwind CSS", "UI/UX"],
      github: "https://github.com/bassem1sttest/dokan-design-updated",
      highlights: [
        lang === 'ar' ? "تحسين واجهات المستخدم وتجربة التصفح بشكل متكامل." : "Enhanced user interface and overall browsing experience.",
        lang === 'ar' ? "تنظيم وتنسيق العناصر البرمجية بأعلى كفاءة." : "Clean and structured frontend implementation."
      ]
    },
    {
      id: 3,
      category: "fullstack",
      image: "src/assets/advault-ai.jpg",
      title: lang === 'ar' ? "منصة AdVaultAI" : "AdvaultAI",
      desc: lang === 'ar' ? "تطوير وتحديث واجهة مستخدم متجاوبة ومنظمة لمنصة إعلانية تعتمد على الذكاء الاصطناعي وتوزيع العناقيد." : "Advanced frontend and clustering structure created for an AI-driven advertising platform.",
      tech: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
      github: "https://github.com/bassem1sttest/AdvaultAI-16clusters",
      highlights: [
        lang === 'ar' ? "تصميم واجهات مستخدم حديثة ومتجاوبة بأعلى أداء." : "Implemented a modern and responsive user interface.",
        lang === 'ar' ? "ربط المكونات البرمجية وإدارة البيانات بفعالية." : "Integrated dynamic data structures and frontend components."
      ]
    },
    {
      id: 4,
      category: "fullstack",
      image: "src/assets/mnj-property-care.jfif",
      title: lang === 'ar' ? "خدمات العناية بالعقارات الخارجية" : "Exterior Property Care",
      desc: lang === 'ar' ? "منصة ويب متكاملة مخصصة لعرض وتقديم خدمات الصيانة والعناية بالعقارات والمنشآت من الخارج." : "Comprehensive web platform designed for exterior property maintenance and care services.",
      tech: ["HTML/CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/bassem1sttest/Exterior-property-care",
      highlights: [
        lang === 'ar' ? "تصميم واجهة مستخدم جذابة وسهلة التصفح للعملاء." : "Created an engaging, user-friendly customer interface.",
        lang === 'ar' ? "توافق تام مع مختلف الأجهزة والشاشات." : "Fully responsive layout across all device screens."
      ]
    },
    {
      id: 5,
      category: "fullstack",
      image: "src/assets/garage-door-asap.jfif",
      title: lang === 'ar' ? "عروض خدمات أبواب الجراجات" : "Garage Door ASAP Service Demos",
      desc: lang === 'ar' ? "تطوير صفحة عروض وتفاعلات سريعة لخدمات طوارئ وصيانة أبواب الجراجات باحترافية عالية." : "Fast service demo platform tailored for emergency garage door repair and maintenance services.",
      tech: ["JavaScript", "Tailwind CSS", "UI/UX", "Frontend"],
      github: "https://github.com/bassem1sttest/garage-door-asap-service-demos",
      highlights: [
        lang === 'ar' ? "سرعة استجابة عالية وتصميم يركز على خدمة العملاء الفورية." : "High performance and conversion-focused design.",
        lang === 'ar' ? "تنظيم محتوى الخدمات بشكل سلس وواضح." : "Clean and accessible service layout presentation."
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+201000000000"); // ضع رقم هاتفك الحقيقي هنا
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 p-2 rounded-xl text-white font-black tracking-wider shadow-lg shadow-indigo-500/20">BE</div>
            <div>
              <span className="font-bold text-slate-100 block text-base leading-none">{current.name}</span>
              <span className="text-xs text-indigo-400 font-medium">{current.role}</span>
            </div>
          </div>
          
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="bg-slate-800/90 hover:bg-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-700/80 flex items-center gap-2 transition shadow-sm hover:border-indigo-500/50 cursor-pointer"
          >
            <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <Building2 className="w-4 h-4 text-indigo-400" />
          <span>{current.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight tracking-tight max-w-4xl">
          {current.heroTitle}
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mb-10 leading-relaxed font-normal">
          {current.heroDesc}
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#contact" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-indigo-600/30 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>{current.contactBtn}</span>
          </a>
          <a 
            href="https://github.com/bassem1sttest" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 px-7 py-3.5 rounded-xl font-semibold transition flex items-center gap-2 hover:border-slate-600 transform hover:-translate-y-0.5"
          >
            <Code className="w-4 h-4 text-indigo-400" />
            <span>{current.githubBtn}</span>
          </a>
        </div>
      </section>

      {/* About Section (Mindset) */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-800/60 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{current.aboutTitle}</h2>
            <p className="text-indigo-400 font-medium text-sm sm:text-base">{current.aboutSub}</p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{current.aboutP1}</p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{current.aboutP2}</p>
          </div>
          
          <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Terminal className="w-5 h-5 text-indigo-400" />
              <span>{current.mindsetTitle}</span>
            </h3>
            <ul className="space-y-4 text-slate-300 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{current.mindset1}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{current.mindset2}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{current.mindset3}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">{current.skillsTitle}</h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => {
            const IconComp = s.icon;
            return (
              <div key={i} className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-200 text-base">{s.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item, j) => (
                    <span key={j} className="text-xs font-medium bg-slate-800/80 text-slate-300 px-3 py-1 rounded-lg border border-slate-700/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-900/20 border-t border-slate-800/80 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{current.projectsTitle}</h2>
              <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
            </div>
            
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${activeTab === 'all' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                {current.all}
              </button>
              <button 
                onClick={() => setActiveTab('backend')} 
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${activeTab === 'backend' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                {current.backend}
              </button>
              <button 
                onClick={() => setActiveTab('fullstack')} 
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${activeTab === 'fullstack' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                {current.fullstack}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl">
                
                {/* Project Image */}
                {project.image && (
                  <div className="h-48 overflow-hidden bg-slate-800 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs bg-indigo-950/60 text-indigo-300 font-medium px-2.5 py-1 rounded-md border border-indigo-800/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 pt-4 border-t border-slate-800/80 transition cursor-pointer"
                  >
                    <span>{current.viewProject}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 transform transition-all duration-300 scale-100">
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-4 left-4 sm:top-6 sm:left-6 text-slate-400 hover:text-white p-2 bg-slate-800 rounded-full cursor-pointer transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">{selectedProject.category}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.desc}</p>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{current.techUsed}</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-indigo-950 text-indigo-300 px-3 py-1 rounded-lg border border-indigo-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{current.highlights}</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition shadow-lg shadow-indigo-600/30"
              >
                <Code className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center border-t border-slate-800/80">
        <h2 className="text-3xl font-bold text-white mb-3">{current.contactTitle}</h2>
        <p className="text-slate-400 text-sm sm:text-base mb-10 max-w-md mx-auto">{current.contactSub}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-center gap-3 hover:border-slate-700 transition">
            <Mail className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium text-slate-200">bassem@example.com</span>
          </div>

          <div 
            onClick={copyPhoneNumber} 
            className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-center gap-3 cursor-pointer hover:border-indigo-500/50 transition group"
          >
            <Phone className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium text-slate-200">{copied ? current.copiedText : current.copyText}</span>
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-900 text-slate-500 text-xs">
        <p>© 2026 {current.name}. All rights reserved.</p>
      </footer>

    </div>
  );
}