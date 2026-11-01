export type Company = {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  url: string;
  logo: string;
  accent: string;
};

export const companies: Company[] = [
  {
    id: "corporation",
    index: "01",
    name: "EZWIN Corporation",
    category: "Çatı markası",
    description: "Stüdyo, ticaret ve topluluk markalarını tek çatı altında toplayan kurum.",
    url: "https://ezwin-corporation.wasmer.app",
    logo: "/logos/companies/ezwin-corporation.png",
    accent: "#e5484d",
  },
  {
    id: "fivem",
    index: "02",
    name: "EzWin FiveM",
    category: "FiveM stüdyosu",
    description: "QBCore tabanlı FiveM kaynak paketleri, yönetim paneli ve test sunucusu.",
    url: "https://ezwin-fivem.wasmer.app",
    logo: "/logos/companies/ezwin-fivem.png",
    accent: "#5ee7f5",
  },
  {
    id: "hesap",
    index: "03",
    name: "EzWin Hesap Hizmetleri",
    category: "Hesap hizmetleri",
    description: "Hesap kurulumu, erişim ayarları ve dijital teslim süreçleri tek protokolde.",
    url: "https://ezwin-hesap.wasmer.app",
    logo: "/logos/companies/ezwin-hesap-hizmetleri.png",
    accent: "#5b8cff",
  },
  {
    id: "site-sys",
    index: "04",
    name: "EzWin Site Sys",
    category: "Web stüdyosu",
    description: "Tanıtım siteleri, panel arayüzleri ve ortak tasarım sistemi.",
    url: "https://ezwin-site-sys.wasmer.app",
    logo: "/logos/companies/ezwin-site-sys.png",
    accent: "#c8ff3d",
  },
  {
    id: "template",
    index: "05",
    name: "EzWin Template",
    category: "Şablon platformu",
    description: "Roblox Studio için menü, HUD ve oyun döngüsü şablonları.",
    url: "https://ezwin-template.wasmer.app",
    logo: "/logos/companies/ezwin-template.png",
    accent: "#ff8a2b",
  },
  {
    id: "uncopylocked",
    index: "06",
    name: "EzWin Uncopylocked",
    category: "Varlık platformu",
    description: "Uncopylocked tabanlar, 3D prop setleri ve düzenlenebilir sahne yapıları.",
    url: "https://ezwin-uncopylocked.wasmer.app",
    logo: "/logos/companies/ezwin-uncopylocked.png",
    accent: "#ff4d5e",
  },
  {
    id: "cheat",
    index: "07",
    name: "EzWinCheat",
    category: "Test laboratuvarı",
    description: "Kendi test ortamınızda Luau davranışını izleyen, ölçen ve raporlayan çalışma alanı.",
    url: "https://ezwin-cheat.wasmer.app",
    logo: "/logos/companies/ezwin-cheat.png",
    accent: "#ff5c8a",
  },
];
