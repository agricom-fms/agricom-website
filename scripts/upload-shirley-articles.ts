import 'dotenv/config';
import { prisma } from '../lib/db';

const shirleyArticles = [
  {
    slug: "how-farmers-can-prepare-for-life-after-active-farming",
    title: "How Farmers Can Prepare for Life After Active Farming",
    desc: "For a farmer, retirement is not the end of the journey—it is the beginning of a new season. Discover 5 practical steps to prepare for security, dignity, and peace of mind after active farming.",
    date: new Date("2026-10-03T00:00:00.000Z"),
    readTime: "4 min read",
    author: "Shirley Yalley",
    image: "/images/farmers-life-after-active-farming.png",
    tag: "Pensions",
    cat: JSON.stringify(["agri"]),
    body: `For a farmer, retirement is not the end of the journey—it is the beginning of a new season. After years of planting, harvesting, raising livestock, and providing for others, farmers deserve a future filled with security, dignity, and peace of mind. Preparing early can make that transition much easier.

💰 Start by Building Your Retirement Savings
One of the most important steps is preparing financially. Set aside part of your income in a suitable savings, pension, or retirement plan. Even small, regular contributions can build a financial cushion for future needs such as food, housing, and healthcare.

🌱 Next, Plan for the Future of Your Farm
Financial preparation is only one part of the journey. It is equally important to decide what will happen to the farm when you are no longer actively managing it. Identify and prepare the next generation or another suitable successor, and make clear plans for land, livestock, equipment, and other assets.

💼 At the Same Time, Build Additional Sources of Income
Having more than one source of income can provide greater financial flexibility. Consider opportunities such as renting land or buildings, processing farm products, investing in a small business, or developing other income-generating activities.

❤️ Just as Important, Invest in Your Health
Your health is one of your greatest assets. Regular medical check-ups, healthy habits, adequate rest, and planning for future healthcare costs can help you remain active and enjoy your later years.

🌅 Finally, Prepare for Life Beyond Farming
Retirement is not simply about stopping work—it is about making room for a new chapter. Spend more time with family, mentor younger farmers, participate in community activities, or pursue hobbies and interests that bring you joy.

Start Preparing Today
A successful farmer knows that a good harvest begins with preparation. Retirement is no different. Save early, plan ahead, protect your health, and prepare for what comes next.

You have spent a lifetime growing the farm. Now, it is time to grow a future you can enjoy. 🌾

By: Shirley Yalley`
  },
  {
    slug: "from-farm-to-future-why-every-farmer-needs-a-retirement-plan",
    title: "From Farm to Future: Why Every Farmer Needs a Retirement Plan",
    desc: "A farmer never plants a seed without thinking about the harvest. Discover why every farmer needs a retirement plan to secure financial independence and protect their family's legacy.",
    date: new Date("2026-10-02T00:00:00.000Z"),
    readTime: "4 min read",
    author: "Shirley Yalley",
    image: "/images/farm-to-future-retirement-plan.png",
    tag: "FarmerCare",
    cat: JSON.stringify(["agri"]),
    body: `A farmer never plants a seed without thinking about the harvest. Every season requires planning, patience, hard work, and hope for a better tomorrow. Your retirement deserves the same preparation.

Farming is a rewarding but physically demanding way of life. As the years pass, planting, harvesting, caring for livestock, and managing the farm can become more challenging. That is why you need a retirement plan—to provide financial support when it is time to slow down, reduce your workload, or eventually stop farming.

🌱 First, You Need a Retirement Plan for Financial Security
Every farmer knows that not every season brings a good harvest. Droughts, floods, pests, diseases, poor yields, and changing market prices can affect income.

For this reason, you need a retirement plan to prepare for the unexpected. Regular savings can create a financial cushion and help you remain financially independent as you grow older, rather than relying entirely on your children or relatives.

🌾 You Also Need a Retirement Plan to Protect Your Legacy
Retirement planning is about more than saving money—it is also about protecting what you have built.

In addition, a retirement plan can help you prepare for the future of your farm. If you intend to pass your land, livestock, equipment, or other assets to the next generation, planning early can make the transition smoother and help preserve your family's legacy.

💰 You Need a Retirement Plan Because Small Savings Matter
You do not need a large amount of money to begin. Small, regular savings can be the first step toward a more secure future.

Therefore, start with what you can afford. Explore suitable pension or retirement options, save consistently, and increase your contributions when your income improves. The earlier you begin, the more time you have to prepare.

🌅 Your Future Is Worth Planting For
Farmers spend their lives planting seeds for tomorrow's harvest. Your financial future deserves the same care.

You need a retirement plan because the future should not be left to chance. Plant the seeds of financial security today, nurture them through consistent saving, and give yourself something valuable to harvest tomorrow: peace of mind. 🌱

By: Shirley Yalley`
  },
  {
    slug: "from-small-savings-to-a-secure-tomorrow",
    title: "From Small Savings to a Secure Tomorrow",
    desc: "A farmer knows that every great harvest begins with a small seed. Learn how small, consistent contributions build a reliable financial safety net for life after active farming.",
    date: new Date("2026-10-01T00:00:00.000Z"),
    readTime: "3 min read",
    author: "Shirley Yalley",
    image: "/images/small-savings-secure-tomorrow.png",
    tag: "FarmerCare",
    cat: JSON.stringify(["agri"]),
    body: `A farmer knows that every great harvest begins with a small seed.

Retirement planning works the same way. You do not need a large amount of money to start building a secure future. Sometimes, all it takes is the decision to save a little today.

For farmers, income can rise and fall with the seasons. A good harvest may bring higher earnings, while poor weather, pests, diseases, or changing market prices can create difficult times. This makes regular saving even more important. Setting aside a small amount whenever possible can gradually build a valuable financial cushion for the future.

🌾 Small Seeds, Big Results
Think of your savings as a seed. It may look small when planted, but with time, patience, and consistency, it can grow.

Starting early also gives your savings more time to benefit from suitable pension or investment arrangements. As your income improves, especially after a good harvest, you can increase the amount you save.

💡 Build the Habit Today
Saving is not only about money—it is about building a habit. Even during difficult seasons, maintaining a small contribution can keep you moving toward your goal.

The earlier you begin, the more time you have to adjust your plan, increase your savings, and prepare for life after farming.

🌅 Plant Today. Harvest Tomorrow.
Farmers spend their lives preparing for tomorrow’s harvest. Your financial future deserves the same attention.

You don't need to start big. Start with what you have. Save consistently. Increase when you can.

Because just like farming, a secure retirement begins with a seed—and the best time to plant it is today. 🌱

By: Shirley Yalley`
  }
];

async function main() {
  for (const article of shirleyArticles) {
    console.log(`Uploading: ${article.title}`);
    const res = await prisma.blogPost.upsert({
      where: { slug: article.slug },
      update: article,
      create: article,
    });
    console.log(`✓ Successfully uploaded: "${res.title}" (slug: ${res.slug})`);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error("Failed to upload articles:", err);
  process.exit(1);
});
