/*

 7. Compare the express strategy toward (server side) templating with the one
 	you used with Java on 2nd semester

 */
//------------------------------------------------------------------------------------------------------------------
/*
 :: Express ::
 A template engine enables you to use static template files in your application.
 At runtime, the template engine replaces variables in a template file with actual values, and
 transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

 Some popular template engines that work with Express are Jade, Mustache, and EJS.

 To render template files, set the following application setting properties:

 -views, the directory where the template files are located. Eg: app.set('views',
 './views'). This defaults to the views directory in the application root directory.

 -view engine, the template engine to use. For example, to use the Jade template engine:
 app.set('view engine', 'jade').

 -Then install the corresponding template engine npm package

=============================================================

	:: JSP ::
 JavaServer Pages is a technology for developing web pages that support dynamic content
 which helps developers insert java code in HTML pages by making use of special JSP tags,
 most of which start with <% and end with %>.
 A JavaServer Pages component is a type of Java servlet that is designed to fulfill
 the role of a user interface for a Java web application. Web developers write JSPs as text files
 that combine HTML or XHTML code, XML elements, and embedded JSP actions and commands.
 Using JSP, you can collect input from users through web page forms,
 present records from a database or another source, and create web pages dynamically.


 */