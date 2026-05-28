export interface Review {
  name: string;
  rating: number;
  position: string;
  text: string;
}

const REVIEWS_API_URL = "/api/review";

const readJsonResponse = async <T>(response: Response): Promise<T> => {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await response.json()) as T;
  }

  throw new Error(await response.text());
};

export async function fetchReviews(): Promise<Review[]> {
  const response = await fetch(REVIEWS_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to load reviews (${response.status})`);
  }

  return readJsonResponse<Review[]>(response);
}

export async function addReview(review: Review): Promise<void> {
  const response = await fetch(REVIEWS_API_URL, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(review),
  });

  if (!response.ok) {
    const errorBody = await readJsonResponse<{ error?: string }>(
      response,
    ).catch(() => null);
    throw new Error(
      errorBody?.error ?? `Failed to add review (${response.status})`,
    );
  }
}
