# 3-space tabs - seriously

One of the goals of AiScript is to be easier for LLMs to learn, and to be distinct from JavaScript.

As part of accomplishing that goal, and in light of details we now know about how LLMs distinguish between language patterns (https://www.youtube.com/watch?v=o2s8I6yBrxE), AiScript will use 3-space indentation.

But it's not just for distinguishing the language for LLMs, 3-space tabs are very readable, and practical: 
- just 2 spaces is often too few to easily distinguish between changes in indentation - especially at high resoultions
- 4 spaces takes up a lot of horizontal space - and extending to 120 characters isn't the answer - humans read more easily from top to bottom than right to left
- all major code editors support 3-space tabs

I first used 3-space tabs in a project as a joke to troll a friend, but I liked it so much that I started doing in serious projects. The fact that it can help LLMs distinguish between similar languages is just the cherry on top.
