import ReviewCard from '@/components/LandingPage/ReviewCard';

export async function getActivityTypeData(): Promise<{ id: number; title: string; desc: string }[]> {
	const { activities } = await import('@/data/LandingPage/activity.json');
	return activities;
}

export async function getBenefitData(): Promise<{ id: number; title: string; desc: string }[]> {
	const { benefits } = await import('@/data/LandingPage/benefit.json');
	return benefits;
}

export async function getReviewsData(): Promise<{ id: number; name: string; status: string; rev: string }[]> {
	const { reviews } = await import('@/data/LandingPage/review.json');
	return reviews;
}
