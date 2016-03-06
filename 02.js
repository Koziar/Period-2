/*

 2. Explain pros & cons in using Node.js + Express to implement your backend compared
 	to a strategy using for example java/jax-rs/tomcat

 */
//------------------------------------------------------------------------------------------------------------------
/*

 Pros:
 As far as the user is concerned, and the user is important, Node.js is fast.
 Data is moved around very quickly and this provides a very fast user experience.
 Code can be written for both server side and front end (and in the same language) so
 Node.js encompasses all aspects of web programming.
 Through the use of npm we can usually find a package to use that will perform just about
 the exact function we are looking for. Of course there might be some glitches but luckily
 node.js is also really easy to test-using mocha and chai for example.
 Node.js removes a lot of the complexity of having to deal with threads, it’s not totally
 single threaded but for us it’s close enough!

 Cons:
 Safety. In terms of maturity node.js is very new and as a result can be slightly risky.
 Java has years of use behind it and has been very well maintained and tested by its owners.
 The JVM and compiler help to write code that we know will work as we expect, most of the time.
 If you do happen to write some blocking code in Node.js the problems can be huge.
 Java has ways to help but node.js will take a lot of testing to find the source of the problems.
 Code that is CPU intensive is also a risk with Node.js. We could find our code locking up and
 becoming very slow and unresponsive, exactly what we are trying to avoid.
 The lack of a compiler. Javas compiler is brilliant, it points out mistakes and
 pretty much shows us what we have done wrong. JavaScript doesn’t have this luxury!


 */