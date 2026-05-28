import { serve } from "bun";
import index from "../index.html";

type Review = {
  name: string;
  rating: number;
  position: string;
  text: string;
};

const reviews: Review[] = [];

const json = (body: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init.headers ?? {}),
    },
  });

const server = serve({
  port: 3001,
  routes: {
    "/api/review": {
      async GET() {
        return json(reviews);
      },
      async PUT(_request) {
        try {
          const body = (await _request.json()) as Partial<Review>;
          const name = typeof body.name === "string" ? body.name.trim() : "";
          const position = typeof body.position === "string" ? body.position.trim() : "";
          const text = typeof body.text === "string" ? body.text.trim() : "";
          const rating = typeof body.rating === "number" ? body.rating : Number.NaN;

          if (!name || !position || !text || !Number.isInteger(rating) || rating < 1 || rating > 5) {
            return json(
              { error: "Invalid review payload. Expect name, position, text, and rating from 1 to 5." },
              { status: 400 }
            );
          }

          const review = { name, rating, position, text };

          reviews.unshift(review);

          return json(review, { status: 201 });
        } catch {
          return json({ error: "Invalid JSON body." }, { status: 400 });
        }
      },
    },

    // Serve index.html for all unmatched routes.
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
