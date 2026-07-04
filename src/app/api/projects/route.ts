import { NextRequest, NextResponse } from 'next/server'
import { getAllProjects } from '@/lib/data'

export async function GET(request: NextRequest) {
  // Les données sont désormais en dur dans le code (src/lib/data.ts),
  // il n'y a plus d'appel à une base de données externe.
  const locale = request.nextUrl.searchParams.get('locale') === 'en' ? 'en' : 'fr'
  const data = getAllProjects(locale)
  return NextResponse.json(data)
}
