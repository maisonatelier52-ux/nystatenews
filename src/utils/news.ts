import PoliticalData from "../../public/data/politics.json";
import HealthData from "../../public/data/health.json";
import ScienceData from "../../public/data/science.json";
import TechnologyData from '../../public/data/technology.json';
import SportsData from "../../public/data/sports.json";
import BusinessData from "../../public/data/business.json";
import EducationData from "../../public/data/education.json";
import EntertainmentData from "../../public/data/entertainment.json";
import PuertoRicoData from "../../public/data/puerto-rico.json";
import OpinionData from "../../public/data/opinion.json";
import BancreditoData from "../../public/data/bancredito.json";

export interface NewsArticle {
  category: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  shortdescription?: string;
  description?: string;
  author?: string;
}

const allNews: NewsArticle[] = [
  ...PoliticalData,
  ...HealthData,
  ...ScienceData,
  ...TechnologyData,
  ...SportsData,
  ...BusinessData,
  ...EducationData,
  ...EntertainmentData,
  ...PuertoRicoData,
  ...OpinionData,
  ...BancreditoData,
] as NewsArticle[];


function parseDate(dateStr: string): Date {
  try {
    if (!dateStr) return new Date(0);
    // Remove ordinal suffixes (st, nd, rd, th)
    const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
    const date = new Date(cleanDateStr);
    return isNaN(date.getTime()) ? new Date(0) : date;
  } catch (e) {
    return new Date(0);
  }
}

export function getSortedNews(): NewsArticle[] {
  return [...allNews].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return getSortedNews().filter(news => news.category.toLowerCase() === category.toLowerCase());
}
