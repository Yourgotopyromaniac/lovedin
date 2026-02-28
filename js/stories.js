// Story data
const stories = [
  {
    names: "Sarah & Michael",
    location: "Lagos, Nigeria",
    image: "https://placehold.co/600x400/F0D1D7/E22B3B/png?text=Sarah+%26+Michael",
    alt: "Sarah and Michael placeholder image with Sarah and Michael written out in text",
    quote:
      "I wanted something special and personal. LovedIn let me create a proposal she could experience at her own pace. When she said yes, it was the best moment of my life!",
    date: "December 2025",
    datetime: "2025-12",
  },
  {
    names: "James & Alex",
    location: "Abuja, Nigeria",
    image: "https://placehold.co/600x400/F0D1D7/E22B3B/png?text=James+%26+Alex",
    alt: "James and Alex placeholder image with James and Alex written out in text",
    quote:
      "Being long-distance made it hard to plan the perfect proposal. LovedIn helped me send my heartfelt question across the miles. The personalization made it feel like I was right there.",
    date: "January 2026",
    datetime: "2026-01",
  },
  {
    names: "Temi & Temi",
    location: "London, UK",
    image: "https://placehold.co/600x400/F0D1D7/E22B3B/png?text=Temi+%26+Temi",
    alt: "Temi and Temi placeholder image with Temi and Temi written out in text",
    quote:
      "I'm not great with words in person, but LovedIn helped me express everything I wanted to say. The interactive experience made it magical and totally us.",
    date: "November 2023",
    datetime: "2023-11",
  },
];

// Render stories
const storiesGrid = document.querySelector(".stories-grid");

if (storiesGrid) {
  stories.forEach((story) => {
    const storyCard = document.createElement("article");
    storyCard.className = "story-card";
    storyCard.innerHTML = `
      <img
        src="${story.image}"
        alt="${story.alt}"
        class="story-image"
      />
      <div class="story-content">
        <h3>${story.names}</h3>
        <p class="story-location">${story.location}</p>
        <blockquote>"${story.quote}"</blockquote>
        <p class="story-date">
          <time datetime="${story.datetime}">${story.date}</time>
        </p>
      </div>
    `;
    storiesGrid.appendChild(storyCard);
  });
}
