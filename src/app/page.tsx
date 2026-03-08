'use client';

import { HeroSlider } from '@/components/ui/HeroSlider';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { StaggeredVerticalGrid } from '@/components/ui/StaggeredVerticalGrid';
import { CTASection } from '@/components/ui/CTASection';
import Link from 'next/link';
import { Wrench, ShieldCheck, Layers, Globe } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const heroSlides = [
  {
    imageSrc: '/images/hero/hero-1.jpg',
    titleKOR: '강철 같은 신뢰, \n특수강 전문 파트너',
    titleENG: 'Steel-Grade Trust, \nYour Special Steel Partner',
    subtitleKOR: '국산 특수강 유통ㆍ가공의 선두주자\n2008년 창립 이래 세아베스틸의 공식 대리점으로서 특수강 유통부터 절단, 가공,\n제품개발 솔루션까지 고객의 산업 현장에 최적화된 토털 철강 솔루션을 제공합니다.',
    subtitleENG: 'Leading Korea\'s special steel distribution & processing since 2008 — Official SeAH Besteel dealer offering total solutions from distribution to cutting, processing and product development.',
  },
  {
    imageSrc: '/images/hero/hero-2.jpg',
    titleKOR: '단순 유통을 넘어, \n고객 맞춤형 토털 솔루션으로',
    titleENG: 'Beyond Distribution, \nTotal Solutions Tailored to You',
    subtitleKOR: '에이원특수강은 유통ㆍ절단ㆍ가공을 하나의 프로세스로 통합하여 고객이 필요로\n하는 최적의 소재를 정확한 규격으로 공급합니다.',
    subtitleENG: 'A1 Special Steel integrates distribution, cutting, and processing into a single\nseamless process, delivering the optimal materials in the precise specifications our customers require.',
    ctas: [
      { labelKOR: '유통', labelENG: 'Distribution', href: '/business/distribution' },
      { labelKOR: '절단', labelENG: 'Cutting', href: '/business/cutting' },
      { labelKOR: '설비', labelENG: 'Equipment', href: '/business/equipment' },
      { labelKOR: '제품개발 솔루션', labelENG: 'Solutions', href: '/business/solution' },
      { labelKOR: '수출', labelENG: 'Export', href: '/business/export' },
    ],
  },
  {
    imageSrc: '/images/hero/hero-3.jpg',
    titleKOR: '정밀 산업을 위한 \n프리미엄 소재 라인업',
    titleENG: 'Premium Material Lineup\nfor Precision Industries',
    subtitleKOR: '에이원특수강은 특수강, 이차가공재, 대형단조, 형단조까지 다양한 제품군을 통해\n고객 산업의 요구에 대응합니다.',
    subtitleENG: 'A1 Special Steel meets diverse industrial demands with a comprehensive product lineup including special steel, secondary processed materials, large forgings, and shape forgings.',
    ctas: [
      { labelKOR: '특수강', labelENG: 'Special Steel', href: '/products/special-steel' },
      { labelKOR: '이차가공재', labelENG: 'Secondary Steel', href: '/products/secondary' },
      { labelKOR: '대형단조', labelENG: 'Large Forging', href: '/products/large-forging' },
      { labelKOR: '형단조', labelENG: 'Die Forging', href: '/products/die-forging' },
    ],
  },
  {
    imageSrc: '/images/hero/hero-4.jpg',
    titleKOR: '산업의 심장부에 공급되는 \n에이원특수강의 소재',
    titleENG: 'Materials from\nA1 Special Steel\nSupplied to the Heart of Industry',
    subtitleKOR: '에이원특수강의 제품은 국가 핵심 산업 전반에 걸쳐 안전과 성능의 기반이 됩니다.',
    subtitleENG: 'A1 Special Steel\'s products form the foundation of safety and performance across Korea\'s key industries.',
    ctas: [
      { labelKOR: '중장비', labelENG: 'Heavy Equipment', href: '/industry/heavy-equipment' },
      { labelKOR: '자동차', labelENG: 'Automotive', href: '/industry/automotive' },
      { labelKOR: '방산', labelENG: 'Defense', href: '/industry/defense' },
      { labelKOR: '조선', labelENG: 'Shipbuilding', href: '/industry/shipbuilding' },
      { labelKOR: '에너지', labelENG: 'Energy', href: '/industry/energy' },
    ],
  },
];

export default function Home() {
  const { lang } = useLang();

  const coreProductsKOR = [
    {
      title: "유통",
      description: "세아베스틸 공식 대리점으로서 S45C, SCM, SNCM 등 국산 특수강 전 강종을 안정적으로 공급합니다.",
      imageUrl: "/images/services/distribution.jpg",
      href: "/business/distribution"
    },
    {
      title: "절단",
      description: "서큐레이터 11대 · 밴드쓰 6대를 보유한 자체 설비로 고객 맞춤 규격의 신속 정밀 절단 가공을 제공합니다.",
      imageUrl: "/images/services/cutting.jpg",
      href: "/business/cutting"
    },
    {
      title: "제품개발 솔루션",
      description: "강종 선택부터 열처리 방향 결정까지, 30년 노하우로 고객 제품 개발 단계에서 최적 소재를 함께 설계합니다.",
      imageUrl: "/images/services/solution.jpg",
      href: "/business/solution"
    },
    {
      title: "수출",
      description: "국내를 넘어 아시아 · 중동 등 제3국 수출 시장으로 특수강 공급망을 글로벌로 확장하고 있습니다.",
      imageUrl: "/images/services/export.jpg",
      href: "/business/export"
    }
  ];

  const coreProductsENG = [
    {
      title: "Distribution",
      description: "As an official SeAH Besteel dealer, we stably supply all grades of domestic special steel bars — S45C, SCM, SNCM and more.",
      imageUrl: "/images/services/distribution.jpg",
      href: "/business/distribution"
    },
    {
      title: "Cutting",
      description: "With 11 circulators and 6 band saws in-house, we deliver fast, precision custom cutting to your exact specifications.",
      imageUrl: "/images/services/cutting.jpg",
      href: "/business/cutting"
    },
    {
      title: "Solutions",
      description: "From steel grade selection to heat treatment direction, our 30+ years of know-how help co-design optimal materials at the product development stage.",
      imageUrl: "/images/services/solution.jpg",
      href: "/business/solution"
    },
    {
      title: "Export",
      description: "Beyond Korea, we are expanding our special steel supply chain globally into Asia, the Middle East, and other international markets.",
      imageUrl: "/images/services/export.jpg",
      href: "/business/export"
    }
  ];

  const keyStrengthsKOR = [
    {
      title: "세아베스틸 공식 대리점",
      description: "국내 최고 수준의 세아베스틸 특수강 보강을 공식 대리점으로서 안정적으로 공급합니다.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "자체 절단 설비",
      description: "서큐레이터 11대, 밴드쓰 6대를 통해 신속하고 정밀한 절단 가공 서비스를 제공합니다.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "토털 솔루션",
      description: "가공·유통·관리를 결합한 원스톱 특수강 봉강 서비스로 고객 만족도를 극대화합니다.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "수출 시장 진출",
      description: "국내 시장을 넘어 제3국으로의 특수강 봉강 수출 시장 개척에도 속도를 높이고 있습니다.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const keyStrengthsENG = [
    {
      title: "SeAH Besteel Official Dealer",
      description: "We are an official dealer of SeAH Besteel, supplying top-quality special steel bars with guaranteed reliability.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "In-house Cutting Equipment",
      description: "With 11 circulators and 6 band saws, we deliver fast and precise cutting services tailored to each client.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Total Solution",
      description: "We combine distribution, processing, and management into a one-stop special steel bar service.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Export Market Expansion",
      description: "Beyond domestic markets, we are actively pursuing export opportunities for special steel bars worldwide.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const productFeaturesKOR = [
    {
      title: '특수강',
      description: '합금강·탄소강·고합금강 봉강 등 자동차, 방산, 중장비에 최적화된 고품질 특수강 소재를 공급합니다.',
      imageUrl: '/images/products/special-steel.jpg',
      href: '/products/special-steel'
    },
    {
      title: '이차가공재',
      description: 'PM재·CD재 등 정밀 가공재를 통해 고객의 세밀한 가공 요구와 엄격한 품질 기준을 충족합니다.',
      imageUrl: '/images/products/secondary.jpg',
      href: '/products/secondary'
    },
    {
      title: '대형단조',
      description: '에너지, 해양 플랜트 및 대규모 산업 현장에서 필수적으로 요구되는 핵심 대형 단조품을 제공합니다.',
      imageUrl: '/images/products/large-forging.jpg',
      href: '/products/large-forging'
    },
    {
      title: '형단조',
      description: '복잡한 형상을 요구하는 정밀 단조품을 생산하여 각 산업 분야의 다양한 수요에 완벽히 대응합니다.',
      imageUrl: '/images/products/die-forging.jpg',
      href: '/products/die-forging'
    }
  ];

  const productFeaturesENG = [
    {
      title: 'Special Steel',
      description: 'We supply high-quality alloy, carbon, and high-alloy steel bars optimized for automotive, defense, and heavy equipment.',
      imageUrl: '/images/products/special-steel.jpg',
      href: '/products/special-steel'
    },
    {
      title: 'Secondary Processed Materials',
      description: 'We meet stringent quality standards and precision requirements with materials like PM and CD.',
      imageUrl: '/images/products/secondary.jpg',
      href: '/products/secondary'
    },
    {
      title: 'Large Forging',
      description: 'We provide essential large forgings required in energy, offshore plants, and large-scale industrial sites.',
      imageUrl: '/images/products/large-forging.jpg',
      href: '/products/large-forging'
    },
    {
      title: 'Die Forging',
      description: 'We flawlessly respond to diverse industrial demands by producing precision forgings for complex shapes.',
      imageUrl: '/images/products/die-forging.jpg',
      href: '/products/die-forging'
    }
  ];

  const industryFeaturesKOR = [
    {
      title: '중장비',
      description: '굴삭기, 로더 등 가혹한 환경을 견디는 중장비 핵심 부품용 고강도 특수강을 공급합니다.',
      imageUrl: '/images/industry/heavy-equipment.jpg',
      href: '/industry/heavy-equipment'
    },
    {
      title: '자동차',
      description: '엔진, 섀시 등 자동차의 성능과 직결되는 내구성 높은 경량화·고강도 소재를 제공합니다.',
      imageUrl: 'https://images.unsplash.com/photo-1518987048-93e29699e79a?w=800&auto=format&fit=crop',
      href: '/industry/automotive'
    },
    {
      title: '방산',
      description: '철저한 품질 관리가 요구되는 방산업체에 국방 규격을 통과한 최상급 고합금강을 납품합니다.',
      imageUrl: '/images/industry/defense.jpg',
      href: '/industry/defense'
    },
    {
      title: '조선',
      description: '선박 엔진 및 핵심 구조물에 사용되는 해수 부식에 강한 고품질 특수강을 공급합니다.',
      imageUrl: '/images/industry/shipbuilding.jpg',
      href: '/industry/shipbuilding'
    },
    {
      title: '에너지',
      description: '풍력, 원자력 등 에너지 발전 설비의 구조적 안정성을 책임지는 신뢰성 높은 소재를 제공합니다.',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop',
      href: '/industry/energy'
    }
  ];

  const industryFeaturesENG = [
    {
      title: 'Heavy Equipment',
      description: 'We supply high-strength special steel for core components of heavy equipment like excavators and loaders to endure harsh environments.',
      imageUrl: '/images/industry/heavy-equipment.jpg',
      href: '/industry/heavy-equipment'
    },
    {
      title: 'Automotive',
      description: 'We provide highly durable, lightweight, and high-strength materials directly related to automotive performance such as engines and chassis.',
      imageUrl: 'https://images.unsplash.com/photo-1518987048-93e29699e79a?w=800&auto=format&fit=crop',
      href: '/industry/automotive'
    },
    {
      title: 'Defense',
      description: 'We supply premium high-alloy steel that meets defense specifications for contractors requiring strict quality control.',
      imageUrl: '/images/industry/defense.jpg',
      href: '/industry/defense'
    },
    {
      title: 'Shipbuilding',
      description: 'We supply high-quality special steel highly resistant to seawater corrosion, used in ship engines and core structures.',
      imageUrl: '/images/industry/shipbuilding.jpg',
      href: '/industry/shipbuilding'
    },
    {
      title: 'Energy',
      description: 'We provide highly reliable materials responsible for the structural stability of power generation facilities like wind and nuclear power.',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop',
      href: '/industry/energy'
    }
  ];

  const keyStrengths = lang === 'ENG' ? keyStrengthsENG : keyStrengthsKOR;
  const coreProducts = lang === 'ENG' ? coreProductsENG : coreProductsKOR;
  const productFeatures = lang === 'ENG' ? productFeaturesENG : productFeaturesKOR;
  const industryFeatures = lang === 'ENG' ? industryFeaturesENG : industryFeaturesKOR;

  return (
    <div className="flex flex-col">
      {/* Main Hero Slider */}
      <HeroSlider slides={heroSlides} lang={lang}>
        <Link
          href="/products/special-steel"
          className="px-8 py-4 bg-blue-700 text-white font-bold rounded shadow-lg hover:bg-blue-800 transition-colors"
        >
          {lang === 'ENG' ? 'View Products' : '제품 보기'}
        </Link>
        <Link
          href="/about/intro"
          className="px-8 py-4 bg-white/10 text-white font-bold rounded backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
        >
          {lang === 'ENG' ? 'About Us' : '회사 소개'}
        </Link>
      </HeroSlider>

      {/* Core Products Grid (사업소개) */}
      <FeatureGrid
        title={lang === 'ENG' ? 'Products & Services' : '주요 취급 품목 및 서비스'}
        subtitle={lang === 'ENG'
          ? 'We distribute SeAH Besteel special steel bars and provide in-house cutting and processing services.'
          : '세아베스틸 특수강 봉강 전문 유통과 자체 절단 가공 서비스를 제공합니다.'
        }
        features={coreProducts}
        columns={4}
      />

      {/* 제품소개 */}
      <div className="bg-gray-50 border-y border-gray-100">
        <StaggeredVerticalGrid
          title={lang === 'ENG' ? 'Our Product Lineup' : '취급 제품 라인업'}
          subtitle={lang === 'ENG'
            ? 'We offer a variety of high-quality special steel materials and custom precision processed products.'
            : '합금강, 탄소강 등 다양한 고품질 특수강 소재와 고객 맞춤형 정밀 가공품을 제공합니다.'}
          features={productFeatures}
        />
      </div>

      {/* 적용산업 */}
      <div className="bg-white">
        <StaggeredVerticalGrid
          title={lang === 'ENG' ? 'Industries We Serve' : '에이원특수강이 함께하는 산업'}
          subtitle={lang === 'ENG'
            ? 'We supply top-tier special steel solutions that form the backbone of core national industries.'
            : '자동차, 방산, 조선 등 국가 핵심 산업의 근간이 되는 최상의 특수강 솔루션을 공급합니다.'}
          features={industryFeatures}
        />
      </div>

      {/* 에이원특수강의 강점 */}
      <div className="bg-gray-50 border-y border-gray-100">
        <FeatureGrid
          title={lang === 'ENG' ? 'Why A1 Special Steel' : '에이원특수강의 강점'}
          features={keyStrengths}
          columns={4}
        />
      </div>

      {/* CTA */}
      <CTASection
        title={lang === 'ENG' ? 'Get in Touch' : '제품 및 가공 문의'}
        description={lang === 'ENG'
          ? 'Contact us for special steel bar purchasing, cutting, heat treatment, and any other inquiries. We are ready to help.'
          : '특수강 봉강 구매, 절단 가공, 열처리 등 모든 문의를 환영합니다. 에이원특수강과 함께 성장하세요.'
        }
        buttonText={lang === 'ENG' ? 'Contact Us' : '문의하기'}
        buttonHref="/contact"
        secondaryButtonText={lang === 'ENG' ? 'View Catalog' : '카탈로그 보기'}
        secondaryButtonHref="/catalog"
      />
    </div>
  );
}
