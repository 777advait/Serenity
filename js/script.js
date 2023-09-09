const dataset = [
    {
        "quote": "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        "author": "William Saroyan"
    },
    {
        "quote": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
    },
    {
        "quote": "The only way to find true happiness is to risk being completely cut open.",
        "author": "Chuck Palahniuk"
    },
    {
        "quote": "Happiness is not something ready made. It comes from your own actions.",
        "author": "Dalai Lama"
    },
    {
        "quote": "If you want to be happy, be.",
        "author": "Leo Tolstoy"
    },
    {
        "quote": "The happiness of your life depends upon the quality of your thoughts.",
        "author": "Marcus Aurelius"
    },
    {
        "quote": "The secret of happiness is freedom, the secret of freedom is courage.",
        "author": "Carrie Jones"
    },
    {
        "quote": "Happiness is a warm puppy.",
        "author": "Charles M. Schulz"
    },
    {
        "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "The only joy in the world is to begin.",
        "author": "Cesare Pavese"
    },
    {
        "quote": "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        "author": "William Saroyan"
    },
    {
        "quote": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
    },
    {
        "quote": "The only way to find true happiness is to risk being completely cut open.",
        "author": "Chuck Palahniuk"
    },
    {
        "quote": "Happiness is not something ready made. It comes from your own actions.",
        "author": "Dalai Lama"
    },
    {
        "quote": "If you want to be happy, be.",
        "author": "Leo Tolstoy"
    },
    {
        "quote": "The happiness of your life depends upon the quality of your thoughts.",
        "author": "Marcus Aurelius"
    },
    {
        "quote": "The secret of happiness is freedom, the secret of freedom is courage.",
        "author": "Carrie Jones"
    },
    {
        "quote": "Happiness is a warm puppy.",
        "author": "Charles M. Schulz"
    },
    {
        "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "The only joy in the world is to begin.",
        "author": "Cesare Pavese"
    },
    {
        "quote": "Happiness is not the absence of problems, it's the ability to deal with them.",
        "author": "Steve Maraboli"
    },
    {
        "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "Happiness is a state of mind. It's just according to the way you look at things.",
        "author": "Walt Disney"
    },
    {
        "quote": "True happiness is... to enjoy the present, without anxious dependence upon the future.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "quote": "Happiness is not a goal...it's a by-product of a life well lived.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Happiness is not a station you arrive at, but a manner of traveling.",
        "author": "Margaret Lee Runbeck"
    },
    {
        "quote": "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        "author": "William Saroyan"
    },
    {
        "quote": "Happiness is not something you postpone for the future; it is something you design for the present.",
        "author": "Jim Rohn"
    },
    {
        "quote": "The only thing that will make you happy is being happy with who you are.",
        "author": "Goldie Hawn"
    },
    {
        "quote": "The happiest people don't have the best of everything, they make the best of everything.",
        "author": "Unknown"
    },
    {
        "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Happiness is not a goal...it's a by-product of a life well lived.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "The secret of happiness is not in doing what one likes, but in liking what one does.",
        "author": "James M. Barrie"
    },
    {
        "quote": "The secret of happiness is to find a congenial monotony.",
        "author": "V.S. Pritchett"
    },
    {
        "quote": "The foolish man seeks happiness in the distance; the wise grows it under his feet.",
        "author": "James Oppenheim"
    },
    {
        "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "Happiness is a state of mind. It's just according to the way you look at things.",
        "author": "Walt Disney"
    },
    {
        "quote": "True happiness is... to enjoy the present, without anxious dependence upon the future.",
        "author": "Lucius Annaeus Seneca"
    },
    {
        "quote": "Happiness is not a goal...it's a by-product of a life well lived.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Happiness is not a station you arrive at, but a manner of traveling.",
        "author": "Margaret Lee Runbeck"
    },
    {
        "quote": "Happiness is not something you postpone for the future; it is something you design for the present.",
        "author": "Jim Rohn"
    },
    {
        "quote": "The only thing that will make you happy is being happy with who you are.",
        "author": "Goldie Hawn"
    },
    {
        "quote": "The happiest people don't have the best of everything, they make the best of everything.",
        "author": "Unknown"
    },
    {
        "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Happiness is not a goal...it's a by-product of a life well lived.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "The secret of happiness is not in doing what one likes, but in liking what one does.",
        "author": "James M. Barrie"
    },
    {
        "quote": "The secret of happiness is to find a congenial monotony.",
        "author": "V.S. Pritchett"
    },
    {
        "quote": "The foolish man seeks happiness in the distance; the wise grows it under his feet.",
        "author": "James Oppenheim"
    },
    {
        "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Happiness is not a goal...it's a by-product of a life well lived.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "The secret of happiness is not in doing what one likes, but in liking what one does.",
        "author": "James M. Barrie"
    },
]

const randQuote = dataset[Math.floor(Math.random() * 51)]

document.querySelector("#quote").textContent = randQuote.quote

// `<blockquote>&ldquo;${randQuote.quote}&rdquo; &mdash; <footer>${randQuote.author}</footer></blockquote>`