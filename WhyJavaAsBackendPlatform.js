/*

    1. Why would you consider a scripting language as JavaScript as your backend platform?

 */
//------------------------------------------------------------------------------------------------------------------
/*

 I would consider JavaScript as my backend platform depending on a project I would be currently working on.
 If it would be something heavy, complex, with a complicated structure. I would not go with JS.
 My choice would be Java instead. Because that's what this programming-language is good at.
 Java is a much larger and more complicated language that creates "standalone" applications.
 It's structured and delivers solid engineering and architecture.

 Scripting languages, like JavaScript, are super fast, it doesn't have to be compiled
 (because it runs on the browser only) and sometimes measured up to 20x faster than code
 written in Java or any other alternative. It’s simple and flexible.

 */

/*
 For a long time, JavaScript was a front-end only language. Then Google came around with the V8 engine,
 which allowed JavaScript to run much faster, due to the fact that V8 compiles JavaScript into native
 machine code. This spawned the creation of things like Node JS, which allows the server side JavaScript.

 Node.js is an open-source, cross-platform runtime invironment fore developing ser-side Web applications.
 Although Node.js is not a Javascript framework, many of its basic modules are written in JavaScript,
 and developers van write new modules in JavaScript.

 Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect
 for data-intensive real-time applications that run across distributed devices.

 The real magic behind Node.js is the event loop. The event loop is a single thread that performs all
 I/O operations asynchronously. Traditionally, I/O operations either run synchronously (blocking) or
 asynchronously by spawning off parallel threads to perform the work. This old approach consumes a lot
 of memory and is notoriously difficult to program. In contrast, when a Node application needs to perform
 an I/O operation, it sends an asynchronous task to the event loop, along with a callback function, and
 then continues to execute the rest of its program. When the async operation completes, the event loop
 returns to the task to execute its callback.

 In other words, reading and writing to network connections, filesystem or the database executes very,
 very fast in Node. Node allows you to build fast, scalable network applications capable of handling a
 huge number of simultaneous connections with high throughput.
 */