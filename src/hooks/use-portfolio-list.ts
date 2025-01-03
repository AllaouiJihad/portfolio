import { ASX_URL, MAVEN_URL, TUTTIFY_URL } from '../constants'
import {
  asx,
  asxPageFirst,
  asxPageSecond,
  maven,
  mavenPageRirst,
  mavenPageSecond,
  tutiffy,
  tutiffyPageRirst,
  tutiffyPageSecond,
} from '../assets'
import { useTranslation } from 'react-i18next'
import { PortfolioListType } from '../types'

export const usePortfolioList = () => {
  const { t } = useTranslation()
  const portfolioList: PortfolioListType[] = [
    {
      id: 1,
      link: TUTTIFY_URL,
      srcPageSecond: tutiffyPageSecond,
      src: tutiffy,
      project: t('portfolio.projects.tutiffy.NAME'),
      title: t('portfolio.projects.tutiffy.DESCR'),
      description: t('portfolio.projects.tutiffy.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.tutiffy.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.tutiffy.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.tutiffy.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.tutiffy.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.tutiffy.about.p_2.TEXT_2'),
            textThree: t('portfolio.projects.tutiffy.about.p_2.TEXT_3'),
          },
          stack: '#Java #Spring Boot #PostgreSQL #Lombok #MapStruct #REST API #JUnit #Liquibase #Builder Pattern'  

        },
      ],
    },
    {
      id: 2,
      link: ASX_URL,
      srcPageSecond: asxPageSecond,
      src: asx,
      project: t('portfolio.projects.ASX.NAME'),
      title: t('portfolio.projects.ASX.DESCR'),
      description: t('portfolio.projects.ASX.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.ASX.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.ASX.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.ASX.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.ASX.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.ASX.about.p_2.TEXT_2'),
            textThree: t('portfolio.projects.ASX.about.p_2.TEXT_3'),
          },
          stack: '#Spring Boot #Java #PostgreSQL #Spring Security #MapStruct  #JUnit #REST API #Liquibase'  

        },
      ],
    },
    {
      id: 3,
      link: MAVEN_URL,
      srcPageSecond: mavenPageSecond,
      src: maven,
      project: t('portfolio.projects.maven.NAME'),
      title: t('portfolio.projects.maven.DESCR'),
      description: t('portfolio.projects.maven.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.maven.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.maven.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.maven.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.maven.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.maven.about.p_2.TEXT_2'),
            textThree: t('portfolio.projects.maven.about.p_2.TEXT_3'),
          },
          stack: '#Laravel #PHP #MySQL #Blade Templates #REST API #JavaScript #Bootstrap #OAuth2 #Eloquent ORM'  
        },
      ],
    },
  ]

  return { portfolioList }
}
