import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Microscope, 
  FileBadge, 
  BookOpen, 
  Award, 
  Users, 
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

// --- 模擬資料區 ---
const LAB_NAME = "智慧系統實驗室";
const LAB_NAME_EN = "Advanced Intelligent Systems Laboratory (AISL)";
const PROFESSOR_NAME = "陳昆皇 教授";

const NEWS = [
  //{ date: "2026-02-15", content: "恭喜張三同學獲得全國大專院校人工智慧競賽特優！" },
  //{ date: "2025-11-20", content: "實驗室兩篇論文獲頂級會議 IEEE ICC 2026 接受。" },
  //{ date: "2025-09-01", content: "歡迎四位碩士班新生及兩位專題生加入實驗室團隊。" }
];

const RESEARCH_PROJECTS = [
  {
    title: "邊緣運算與聯邦學習 (Edge Computing & Federated Learning)",
    desc: "研究在資源受限的邊緣設備上進行高效、保護隱私的分散式機器學習模型訓練與推論技術，應用於智慧物聯網(AIoT)場景。",
    tags: ["聯邦學習", "邊緣運算", "AIoT"]
  },
  {
    title: "智慧醫療影像分析 (Intelligent Medical Image Analysis)",
    desc: "利用深度學習技術分析X光與MRI影像，協助醫師進行早期病灶檢測與輔助診斷，提升醫療效率與準確率。",
    tags: ["深度學習", "電腦視覺", "智慧醫療"]
  },
  {
    title: "次世代通訊網路優化 (Next-Gen Communication Network Optimization)",
    desc: "針對 6G 與衛星通訊網路，研發基於強化學習的動態資源分配與路由演算法，以達到低延遲與高可靠性通訊。",
    tags: ["6G", "強化學習", "網路最佳化"]
  }
];

const PATENTS = [
  { year: "2025", title: "基於聯邦學習之動態資源分配系統與方法", number: "TW I1234567", status: "已獲證" },
  { year: "2024", title: "一種用於醫療影像增強之深度生成模型架構", number: "US 11,223,445 B2", status: "已獲證" },
  { year: "2024", title: "低延遲邊緣運算卸載之智慧決策裝置", number: "TW 112100001", status: "申請中" }
];

const PUBLICATIONS = [
  { year: "2026", text: "T. Chang, D. Wang*, \"Energy-Efficient Federated Learning over Wireless Networks,\" IEEE Transactions on Mobile Computing, vol. 25, no. 3, pp. 112-125, 2026." },
  { year: "2025", text: "L. Chen, D. Wang, \"Deep Reinforcement Learning for Dynamic Routing in 6G Networks,\" IEEE INFOCOM 2025, London, UK." },
  { year: "2024", text: "D. Wang*, M. Lin, \"Privacy-Preserving Medical Image Classification using Distributed AI,\" Journal of Biomedical Informatics, vol. 110, 2024." },
  { year: "2023", text: "H. Wu, D. Wang, \"Edge-Assisted Autonomous Driving Systems: A Survey,\" IEEE Communications Surveys & Tutorials, vol. 25, 2023." }
];

const HONORS = [
  { year: "2026", title: "全國人工智慧創新應用大賽 特優", student: "張三、李四" },
  { year: "2025", title: "中華民國資訊學會 最佳碩士論文獎", student: "王小明" },
  { year: "2024", title: "IEEE GLOBECOM Best Paper Award", student: "陳大文" },
  { year: "2023", title: "教育部大專校院資訊應用服務創新競賽 第一名", student: "林美玲、黃阿智" }
];

const MEMBERS = {
  //phd: [
  //  { name: "張三", role: "博士班三年級", research: "聯邦學習、隱私保護" },
  //  { name: "李四", role: "博士班一年級", research: "6G 網路資源分配" }
  //],
  master: [
    { name: "王五", role: "碩士班二年級", research: "醫療影像分割" },
    { name: "趙六", role: "碩士班二年級", research: "邊緣運算卸載" },
    { name: "孫七", role: "碩士班一年級", research: "無人機通訊軌跡優化" },
    { name: "周八", role: "碩士班一年級", research: "強化學習應用" }
  ],
  undergrad: [
    { name: "吳九", role: "大學部專題生", research: "物聯網感測資料分析" },
    { name: "鄭十", role: "大學部專題生", research: "網頁前端與視覺化系統" }
  ]
};

const ALUMNI = [
  { year: "2025", degree: "碩士", name: "陳大文", destination: "台積電 (TSMC) IT部門" },
  { year: "2025", degree: "碩士", name: "林美玲", destination: "聯發科 (MediaTek) 演算法工程師" },
  { year: "2024", degree: "博士", name: "王小明", destination: "國立大學 助理教授" },
  { year: "2023", degree: "碩士", name: "黃阿智", destination: "Google 台灣 軟體工程師" },
  { year: "2023", degree: "碩士", name: "劉一一", destination: "出國深造 (美國 CMU CS博士班)" }
];


// --- 元件區 ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '主頁', icon: Home },
    { id: 'advisor', label: '指導教授', icon: User },
    { id: 'research', label: '研究項目', icon: Microscope },
    { id: 'patents', label: '專利', icon: FileBadge },
    { id: 'publications', label: '期刊論文', icon: BookOpen },
    { id: 'honors', label: '學生榮譽', icon: Award },
    { id: 'members', label: '實驗室成員', icon: Users },
    { id: 'alumni', label: '畢業生', icon: GraduationCap },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeSection />;
      case 'advisor': return <AdvisorSection />;
      case 'research': return <ResearchSection />;
      case 'patents': return <PatentsSection />;
      case 'publications': return <PublicationsSection />;
      case 'honors': return <HonorsSection />;
      case 'members': return <MembersSection />;
      case 'alumni': return <AlumniSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* 導覽列 Navbar */}
      <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Title */}
            <div className="flex flex-col justify-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <h1 className="text-xl sm:text-2xl font-bold tracking-wider">{LAB_NAME}</h1>
              <span className="text-xs sm:text-sm text-slate-400 hidden sm:block">{LAB_NAME_EN}</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                      ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                  >
                    <Icon className="w-4 h-4 mr-1.5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center w-full px-3 py-3 rounded-md text-base font-medium
                      ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* 標題橫幅 Banner (動態根據當前標籤頁變化) */}
      <div className="bg-indigo-700 py-8 sm:py-12 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center">
          {(() => {
            const currentItem = navItems.find(i => i.id === activeTab);
            const Icon = currentItem?.icon || Home;
            return (
              <>
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Icon className="w-8 h-8 text-white opacity-90" />
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-wide">
                  {currentItem?.label}
                </h2>
              </>
            )
          })()}
        </div>
      </div>

      {/* 主要內容區 */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sm:p-10 min-h-[500px]">
          {renderContent()}
        </div>
      </main>

      {/* 頁尾 Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-1">{LAB_NAME}</h3>
            <p className="text-sm">Department of Computer Science & Information Engineering</p>
            <p className="text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center justify-center md:justify-end">
              <MapPin className="w-4 h-4 mr-2" />
              <span>106 台北市大安區羅斯福路四段1號 資訊系館 501室</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Phone className="w-4 h-4 mr-2" />
              <span>+886-2-3366-XXXX ext. 123</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- 各個分頁元件 ---

function HomeSection() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-indigo-600 pb-2 mb-6 inline-block">關於實驗室</h3>
        <p className="text-lg leading-relaxed text-slate-600 text-justify">
          歡迎來到{LAB_NAME} ({LAB_NAME_EN})。本實驗室致力於前瞻資訊科技之研究，主要專注於<strong>人工智慧、邊緣運算、次世代通訊網路以及智慧醫療</strong>等跨領域應用。
          我們期望透過紮實的理論基礎與實務系統開發，培育具備獨立思考、創新研發與團隊合作能力之優秀資訊人才。
          目前實驗室與國內外多所頂尖學術機構及科技企業均有緊密的產學合作計畫。
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-indigo-600 pb-2 mb-6 inline-block">最新消息</h3>
        <div className="space-y-4">
          {NEWS.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-baseline border-l-4 border-indigo-500 bg-slate-50 p-4 rounded-r-md">
              <span className="text-indigo-700 font-mono font-bold sm:w-32 flex-shrink-0 mb-1 sm:mb-0">{item.date}</span>
              <span className="text-slate-700">{item.content}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-indigo-600 pb-2 mb-6 inline-block">快速連結</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 flex flex-col items-center text-center hover:bg-indigo-100 transition-colors">
            <Microscope className="w-10 h-10 text-indigo-600 mb-3" />
            <h4 className="font-bold text-lg mb-1">研究領域</h4>
            <p className="text-sm text-slate-600">探索我們正在進行的前沿研究計畫。</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col items-center text-center hover:bg-blue-100 transition-colors">
            <BookOpen className="w-10 h-10 text-blue-600 mb-3" />
            <h4 className="font-bold text-lg mb-1">學術發表</h4>
            <p className="text-sm text-slate-600">閱讀實驗室成員在國際期刊與會議的成果。</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-lg border border-sky-100 flex flex-col items-center text-center hover:bg-sky-100 transition-colors">
            <Users className="w-10 h-10 text-sky-600 mb-3" />
            <h4 className="font-bold text-lg mb-1">招生資訊</h4>
            <p className="text-sm text-slate-600">歡迎對 AI 與通訊有熱忱的同學加入我們。</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function AdvisorSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Profile Image Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-48 h-64 bg-slate-200 rounded-lg shadow-md mb-6 flex items-center justify-center overflow-hidden border-4 border-white">
            <img 
              src="C:\Users\user\Desktop\lab-website\public\teacher.png" 
              alt="教授照片" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-1">{PROFESSOR_NAME}</h3>
          <p className="text-indigo-600 font-medium mb-6">教授 / 實驗室主持人</p>
          
          <div className="w-full bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3">
            <div className="flex items-center text-slate-600">
              <Mail className="w-5 h-5 mr-3 text-slate-400" />
              <a href="mailto:prof.wang@example.edu.tw" className="hover:text-indigo-600 text-sm">prof.wang@example.edu.tw</a>
            </div>
            <div className="flex items-center text-slate-600">
              <Phone className="w-5 h-5 mr-3 text-slate-400" />
              <span className="text-sm">+886-2-3366-XXXX ext. 123</span>
            </div>
            <div className="flex items-center text-slate-600">
              <MapPin className="w-5 h-5 mr-3 text-slate-400" />
              <span className="text-sm">資訊系館 501室</span>
            </div>
            <div className="flex items-center text-slate-600">
              <ExternalLink className="w-5 h-5 mr-3 text-slate-400" />
              <a href="#" className="hover:text-indigo-600 text-sm">個人網頁 (Personal Webpage)</a>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="w-full md:w-2/3 space-y-8">
          <section>
            <h4 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-indigo-600" /> 最高學歷
            </h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
              <li>美國史丹佛大學 (Stanford University) 電機工程學系 博士</li>
              <li>國立臺灣大學 電機工程學系 碩士</li>
              <li>國立臺灣大學 電機工程學系 學士</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-indigo-600" /> 經歷
            </h4>
            <ul className="space-y-3 text-slate-700 ml-2">
              <li className="flex flex-col sm:flex-row">
                <span className="font-medium sm:w-32 flex-shrink-0 text-slate-500">2020 - 至今</span>
                <span>國立大學 資訊工程學系 教授</span>
              </li>
              <li className="flex flex-col sm:flex-row">
                <span className="font-medium sm:w-32 flex-shrink-0 text-slate-500">2015 - 2020</span>
                <span>國立大學 資訊工程學系 副教授</span>
              </li>
              <li className="flex flex-col sm:flex-row">
                <span className="font-medium sm:w-32 flex-shrink-0 text-slate-500">2012 - 2015</span>
                <span>美國科技公司 (Tech Inc.) 資深研究員</span>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4 flex items-center">
              <Microscope className="w-6 h-6 mr-2 text-indigo-600" /> 研究專長
            </h4>
            <div className="flex flex-wrap gap-2">
              {["人工智慧與機器學習", "邊緣運算", "物聯網通訊協定", "深度學習影像處理", "強化學習"].map((skill, idx) => (
                <span key={idx} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-100">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ResearchSection() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <p className="text-lg text-slate-600 mb-8">
        本實驗室的研究主軸聚焦於解決實務上的系統挑戰，結合前瞻的演算法理論與扎實的系統實作。以下是目前實驗室主要的三大研究項目：
      </p>

      <div className="grid grid-cols-1 gap-8">
        {RESEARCH_PROJECTS.map((project, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
            {/* 示意圖 (Placeholder) */}
            <div className="w-full md:w-1/3 bg-slate-100 min-h-[200px] flex items-center justify-center border-r border-slate-100 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-50 opacity-50"></div>
               <Microscope className="w-16 h-16 text-indigo-300 z-10" />
            </div>
            
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded text-xs font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PatentsSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <p className="text-slate-600 mb-6">本實驗室積極將研究成果轉化為實際應用，並申請多項國內外專利以保護智慧財產權。</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="py-4 px-4 font-semibold border-b border-slate-200 w-24 rounded-tl-lg">年份</th>
              <th className="py-4 px-4 font-semibold border-b border-slate-200">專利名稱</th>
              <th className="py-4 px-4 font-semibold border-b border-slate-200 w-48">專利字號</th>
              <th className="py-4 px-4 font-semibold border-b border-slate-200 w-32 rounded-tr-lg">狀態</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {PATENTS.map((patent, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 text-slate-500 font-mono">{patent.year}</td>
                <td className="py-4 px-4 font-medium text-slate-800">{patent.title}</td>
                <td className="py-4 px-4 text-slate-600 font-mono text-sm">{patent.number}</td>
                <td className="py-4 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    patent.status === '已獲證' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {patent.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PublicationsSection() {
  // 可以按年份分組顯示，此處為簡單示範列表
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-slate-600">近五年代表性期刊與頂級會議論文：</p>
        <button className="text-indigo-600 text-sm font-medium hover:underline flex items-center">
          前往 Google Scholar <ExternalLink className="w-3 h-3 ml-1" />
        </button>
      </div>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-4 group">
            <div className="sm:w-20 flex-shrink-0 pt-1">
              <span className="bg-slate-800 text-white text-sm font-bold px-3 py-1 rounded shadow-sm">
                {pub.year}
              </span>
            </div>
            <div className="flex-grow">
              <p className="text-slate-700 leading-relaxed group-hover:text-indigo-900 transition-colors">
                {/* 簡單的高亮標記星號教授名字 */}
                {pub.text.split('D. Wang*').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i !== arr.length - 1 && <span className="font-bold border-b border-slate-400">D. Wang*</span>}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HonorsSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="relative border-l-2 border-indigo-200 ml-4 sm:ml-8 mt-4 space-y-10 py-4">
        {HONORS.map((honor, idx) => (
          <div key={idx} className="relative pl-8 sm:pl-12">
            {/* Timeline dot */}
            <div className="absolute w-6 h-6 bg-indigo-600 rounded-full left-[-13px] top-1 border-4 border-white shadow-sm flex items-center justify-center">
              <Award className="w-3 h-3 text-white hidden sm:block" />
            </div>
            
            <div className="bg-white border border-slate-100 shadow-sm rounded-lg p-5 hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-indigo-600 mb-1 block">{honor.year}</span>
              <h4 className="text-lg font-bold text-slate-800 mb-2">{honor.title}</h4>
              <p className="text-slate-600 flex items-center">
                <User className="w-4 h-4 mr-2 text-slate-400" />
                獲獎學生：<span className="font-medium ml-1">{honor.student}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembersSection() {
  const renderMemberGroup = (title, members) => {
    if (!members || members.length === 0) return null;
    return (
      <div className="mb-12">
        <h4 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2 mb-6 flex items-center">
          <Users className="w-6 h-6 mr-2 text-indigo-600" /> {title}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center p-6">
              <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-4 border-2 border-indigo-100">
                {/* 姓名首字母作為頭像替代 */}
                <span className="text-2xl font-bold text-indigo-400">{member.name.charAt(0)}</span>
              </div>
              <h5 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h5>
              <p className="text-sm text-indigo-600 font-medium mb-3">{member.role}</p>
              <p className="text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md w-full">
                研究：{member.research}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="animate-in fade-in duration-500">
      {renderMemberGroup("博士班 (Ph.D. Students)", MEMBERS.phd)}
      {renderMemberGroup("碩士班 (Master Students)", MEMBERS.master)}
      {renderMemberGroup("大學部專題生 (Undergraduate Students)", MEMBERS.undergrad)}
    </div>
  );
}

function AlumniSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <p className="text-slate-600 mb-8">
        本實驗室畢業生在業界與學術界皆有優秀的發展，就職領域涵蓋半導體、軟體網路、AI新創及各大專院校。
      </p>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-700">
                <th className="py-4 px-6 font-semibold border-b border-slate-200 w-24">畢業年</th>
                <th className="py-4 px-6 font-semibold border-b border-slate-200 w-24">學位</th>
                <th className="py-4 px-6 font-semibold border-b border-slate-200 w-32">姓名</th>
                <th className="py-4 px-6 font-semibold border-b border-slate-200">畢業去向 (Current Position)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ALUMNI.map((alumnus, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3 px-6 text-slate-600 font-mono">{alumnus.year}</td>
                  <td className="py-3 px-6 text-slate-600">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      alumnus.degree === '博士' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {alumnus.degree}
                    </span>
                  </td>
                  <td className="py-3 px-6 font-medium text-slate-800">{alumnus.name}</td>
                  <td className="py-3 px-6 text-slate-600 flex items-center">
                    {alumnus.destination}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}