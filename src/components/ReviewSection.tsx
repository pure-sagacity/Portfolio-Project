import { Plus } from "lucide-react";
import type { FC, JSX } from "react";
import { type Review } from "../reviewsApi";
import { useTheme } from "../contexts/ThemeContext";

interface Props {
  setShowModal: (show: boolean) => void;
  reviews: Review[];
  renderStars: (rating: number) => JSX.Element[];
}

const ReviewSection: FC<Props> = ({ setShowModal, renderStars, reviews }) => {
  const { theme } = useTheme();

  return (
    <section id="reviews" className="scroll-mt-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
          >
            Social proof
          </p>
          <h2
            className={`mt-2 text-3xl font-bold transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Reviews
          </h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
          Add Review
        </button>
      </div>
      <div
        className={`border-t ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
      >
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className={`grid gap-4 border-b py-8 md:grid-cols-[0.9fr_1.1fr] ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
            >
              <div>
                <h3
                  className={`text-2xl font-semibold transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-slate-950"
                  }`}
                >
                  {review.name}
                </h3>
                <p
                  className={`mt-2 text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {review.position}
                </p>
                <div className="mt-4 flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p
                className={`max-w-3xl text-base leading-8 transition-colors duration-300 ${
                  theme === "dark" ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {review.text}
              </p>
            </div>
          ))
        ) : (
          <div
            className={`py-8 text-center transition-colors duration-300 ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            No reviews yet. Be the first to add one!
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
