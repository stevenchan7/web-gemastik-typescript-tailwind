export async function getActivityTypeData(): Promise<{id: number, title: string, desc: string}[]>  {
  const { activities } = await import('@/data/LandingPage/activity.json')
  return activities
}

export async function getBenefitData(): Promise<{id: number, title: string, desc: string}[]>  {
  const { benefits } = await import('@/data/LandingPage/benefit.json')
  return benefits
}