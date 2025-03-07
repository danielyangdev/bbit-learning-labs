import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function FeaturedNewsCard({ article }: NewsCardProps) {
    // PART 1: Display a Featured News article

    // Using the info about the article passed in as a prop, show:
    // 1. The featured article's title
    // 2. The featured article's image
    // 3. A portion of the selected article's body, truncated so that it fits nicely in the section

    // Once completing this part, you should be able to see the Featured News Article at the top of the page.

    // Hint: Some classes included in `globals.css` may help with styling.
    return (
        <div className="featured-news-card flex flex-col lg:flex-row gap-4 max-w-full">
            <div className="featured-news-img-div flex-shrink-0">
                <img
                    src={article.image_url}
                    alt={article.title}
                    className="featured-news-img object-cover w-full lg:w-[350px] max-h-[250px] rounded-lg"
                />
            </div>
            <div className="featured-news-info flex flex-col flex-grow min-w-0">
                <h2 className="featured-story-title text-xl font-bold break-words">{article.title}</h2>
                <p className="featured-story-summary text-gray-700 truncate overflow-hidden">
                    {article.body}
                </p>
                {article.author && <span className="featured-story-author text-gray-500">By {article.author}</span>}
                {article.url && (
                    <span className="featured-story-author text-blue-500">
                        Via <Link className="origin-link" href={article.url} target="_blank">{article.url}</Link>
                    </span>
                )}
            </div>
        </div>
    );

    // return (
    //     <>
    //         <span className='instruction'>Part 1: Show Featured News</span>
    //         <div className="featured-news-card">
    //             {/* TODO: Remove the span above and implement "FeaturedNewsCard" */}
    //         </div>
    //     </>
    // );
}

export default FeaturedNewsCard;