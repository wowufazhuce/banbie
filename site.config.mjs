const rawSiteUrl = (process.env.SITE_URL ?? '').trim();
const siteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/+$/, '') : '';
const hasSiteUrl = siteUrl.length > 0;
const fallbackSiteUrl = 'https://example.invalid';

if (!hasSiteUrl && process.env.NODE_ENV === 'production') {
  console.warn(
    '[astro-whono] SITE_URL is not set. RSS will use example.invalid; canonical/og will be omitted; sitemap will not be generated and robots will not include Sitemap.'
  );
}

export const site = {
  url: hasSiteUrl ? siteUrl : "https://www.banbie.com",
  title: '半别 · 生活随笔与内心思考 | Banbie.com',
  brandTitle: '半别 | Banbie.com',
  author: '梦想是混吃等死',
  authorAvatar: 'author/avatar.webp',
  description: '半别 BanBie.com，文艺治愈系个人博客，分享生活随笔、内心思考与文字感悟，秉持半别过往、半守本心的态度，安静记录人间日常。'
};

export const PAGE_SIZE_ARCHIVE = 12;
export const PAGE_SIZE_ESSAY = 12;
export const PAGE_SIZE_BITS = 20;

export { hasSiteUrl, siteUrl };
