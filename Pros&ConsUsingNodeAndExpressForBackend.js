/*

 2. Explain pros & cons in using Node.js + Express to implement your backend compared
 	to a strategy using for example java/jax-rs/tomcat

 */
//------------------------------------------------------------------------------------------------------------------
/*

 Java/JAX-RS/Tomcat

 + True object oriented language
 	* Increased readability and somewhat easier to maintain a large codebase.
 + Easier to debug
 	* The compiler will, by default, give back more useful information about the error.
 + Maturity
 	* Larger workforce, proven and stable server technology.
 - Lots of configuration up front
 	* Tomcat is big and heavy and comes with a lot of features (that you might not ever use).
 - Threads are memory intensive and can be difficult to work with.

 JavaScript/Node.js/Express

 + Can be used to create very simple but also very complex web apps.
 	* A lot of IO, chat- web rest- servers, streaming servers, games
 + One language
 	* The entire application can be done here.
 + Lightweight
 	* It supports only the very basic features of a web framework from the get go, but you can add functionality as
 	you go with npm.
 + Modern & Sexy
 	* Get a lot of functionality for "free" using npm to get the latest and greatest from an active community.
 + Non blocking API
 	* Node Node & Express only run on one thread, which makes the application run fast.
 - Chaotic code
 	* Harder to read code because of packages and imports.
 - Not a completely matured technology (from slides: Node.js Intro)
 - New packages pops up all the time (from slides: Node.js Intro)
 - Unhandled errors will shutdown the server (from slides: Node.js Intro)



 */