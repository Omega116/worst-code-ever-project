const errors = [
    {
        code: `<span class="keyword">while</span> (true) {
    <span class="keyword">break</span>;
}`,
        comment: "This is the shortest infinite loop in history."
    },
    {
        code: `<span class="keyword">global</span> x;
x = <span class="number">10</span>;

<span class="keyword">function</span> printX() {
    console.log(x);
}`,
        comment: "Global variables: the silent chaos makers of programming."
    },
    {
        code: `<span class="keyword">if</span> (x == x) {
    console.log(<span class="string">'Always true'</span>);
}`,
        comment: "This condition is as useful as a chocolate teapot."
    },
    {
        code: `<span class="function-name">eval</span>(<span class="string">"2 + 3"</span>);`,
        comment: "Why use simple math when you can summon the eval demon?"
    },
    {
        code: `<span class="keyword">import</span> math;

<span class="keyword">def</span> square(x):
    <span class="keyword">return</span> math.pow(x, <span class="number">2</span>)`,
        comment: "When basic multiplication felt too boring."
    },
    {
        code: `<span class="keyword">def</span> useless1():
    useless2()

<span class="keyword">def</span> useless2():
    useless1()`,
        comment: "The ultimate tag-team of uselessness."
    },
    {
        code: `<span class="keyword">def</span> add(a, b):
    print(<span class="string">'Adding'</span>, a, b)
    <span class="keyword">return</span> a + b`,
        comment: "Every addition is now a breaking news story."
    },
    {
        code: `result = <span class="string">""</span>;

<span class="keyword">for</span> (let i = <span class="number">0</span>; i < <span class="number">1000</span>; i++) {
    result += i.toString();
}`,
        comment: "String concatenation: the scenic route to performance hell."
    },
    {
        code: `<span class="keyword">def</span> dead_function():
    <span class="keyword">return</span> <span class="number">42</span>

print(<span class="string">'Dead line!'</span>)`,
        comment: "Dead code: always there but never alive."
    },
    {
        code: `<span class="keyword">return</span> x * <span class="number">4.567</span> - <span class="number">12.34</span> + <span class="number">7.89</span> / <span class="number">0.123</span>;`,
        comment: "Magic numbers: when your code doubles as a lottery ticket."
    },
    {
        code: `<span class="keyword">def</span> my_len(lst):
    count = <span class="number">0</span>
    <span class="keyword">for</span> _ <span class="keyword">in</span> lst:
        count += <span class="number">1</span>
    <span class="keyword">return</span> count`,
        comment: "Reinventing len() because, you know, why not?"
    }
];

// Keep track of the last shown error
let lastErrorIndex = -1;

document.getElementById("generate-btn").addEventListener("click", function(event) {
    const errorDisplay = document.getElementById("error-display");
    const errorCommentContainer = document.getElementById("error-comment-container");
    
    // Select a random error that is not the same as the last one
    let randomErrorIndex;
    do {
        randomErrorIndex = Math.floor(Math.random() * errors.length);
    } while (randomErrorIndex === lastErrorIndex && errors.length > 1);
    
    // Update the last shown error index
    lastErrorIndex = randomErrorIndex;
    
    const randomError = errors[randomErrorIndex];
    
    // Update the error box with properly highlighted code and comments
    errorDisplay.querySelector(".error-code").innerHTML = randomError.code;
    errorCommentContainer.querySelector(".error-comment").textContent = randomError.comment;

    const container = document.body;
    const laughEmojis = ['😂', '🤣', '😹', '🤪', '😆', '🤭', '🤩', '😅'];

    // Create multiple emoji reactions
    const emojiCount = 15 + Math.floor(Math.random() * 10);

    // Use click event coordinates as the starting point
    const startX = event.clientX;
    const startY = event.clientY;

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('story-emoji');
        
        // Randomly select an emoji
        emoji.textContent = laughEmojis[Math.floor(Math.random() * laughEmojis.length)];

        // Randomize emoji properties
        const size = 30 + Math.random() * 40;
        emoji.style.fontSize = `${size}px`;

        // Position emoji near click point with some spread
        const spreadX = (Math.random() * 200 - 100) + startX;
        const spreadY = (Math.random() * 200 - 100) + startY;

        emoji.style.position = 'fixed';
        emoji.style.left = `${spreadX}px`;
        emoji.style.top = `${spreadY}px`;

        // Add to container
        container.appendChild(emoji);

        // Animate emoji
        const animationDuration = 2 + Math.random();
        
        emoji.animate([
            {
                transform: 'translate(0, 0) scale(0.3) rotate(0deg)',
                opacity: 0.7
            },
            {
                transform: `translate(${(Math.random() * 300 - 150)}px, ${-Math.random() * 500}px) scale(1.5) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: animationDuration * 1000,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            fill: 'forwards'
        });

        // Remove emoji after animation
        setTimeout(() => {
            container.removeChild(emoji);
        }, animationDuration * 1000);
    }
});