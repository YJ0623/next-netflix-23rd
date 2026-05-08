import { NextRequest, NextResponse } from "next/server";
import { movieApi } from "@/feature/movies/services/movieApi";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ movieId: string}> }
) {
    const { movieId } = await params;

    const data = await movieApi.getMovieDetail(Number(movieId));

    return NextResponse.json(data);
}