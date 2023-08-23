import Image from 'next/image'
import Hero from './components/LandingPage/Hero'
import ActivityTypeSection from './components/LandingPage/ActivityTypeSection'
import BenefitSection from './components/LandingPage/BenefitSection'
import RecommendationSection from './components/LandingPage/RecommendationSection'
import ReviewSection from './components/LandingPage/ReviewSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <ActivityTypeSection />
      <BenefitSection />
      <RecommendationSection />
      <ReviewSection />
    </main>
  )
}
