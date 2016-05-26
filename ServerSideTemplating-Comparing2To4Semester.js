/*

 7. Compare the express strategy toward (server side) templating with the one
 	you used with Java on 2nd semester (Java/JAX-RS/Tomcat

 */
//------------------------------------------------------------------------------------------------------------------
/*
 :: Express ::
 A template engine enables you to use static template files in your application.
 At runtime, the template engine replaces variables in a template file with actual values, and
 transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

 Some popular template engines that work with Express are Jade, Mustache, and EJS.

 To render template files, set the following application setting properties:

 -views, the directory where the template files are located. Eg: app.set('views', './views').
 This defaults to the views directory in the application root directory.

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
/*
 A web template system uses a template processor to combine web templates to form finished web pages, possibly using
 some data source to customize the pages or present a large amount of content on similar-looking pages. Server side
 templating can be characterized like this: The controller gets some data from the model and pass it on to the view.
 The view then sends some data back to the controller, and then back to the model.

 On second semester we only used JavaServer Pages (JSP) for presentation and Java to write the logical behavior.
 JSP encapsulates layout so it could be reused instead of replicated.

 2. sem: Model-->Controller --> Servlet – JSP

 Here on fourth semester we use the javaScript and express to render a html page, based on some logical expressions.
 Express ships out of the box, in an absolute minimum configuration. Therefore we must choose an template engine.
 Unlike on 2. sem in Express there are many to choose from, all with different syntax. The following 3 are though
 widely used:
    ·Jade
    ·EJS (Embedded JavaScript)
    ·Handlebars

 4. sem: Model --> Controller/Router --> Jade/EJS/Handlebars ex.

 Jade is a simple templating language, with a whitespace-significant syntax. It's very clean without the normal
 HTML tags ex.<> around the tag names.
        doctype html
        html
           head
              title Static Jade
              meta(name="description", content="Static Jade")
           body
              h1 Static Jade
              p You can think of Jade as shorthand for HTML. Tag names are "naked" and start most lines.
              Indentation dicates element nesting. Period (.) and hash (#) are short hand for CSS classes and IDs.
              For example <tt>ol#groceries.colorful</tt> produces an ordered list HTML tag with <tt>class="colorful"</tt>
              and <tt>id="groceries"</tt>.

              ol#groceries.colorful
                li Apples
                li Oranges
                li Bananas

              p These are the basics. See <a href="http://jade-lang.com">the Jade website</a> for many more details.

 EJS (Embedded JavaScript) combines data and a template to produce HTML.
            <h1> <%= title %> </h1>
            <ul>
            <% for(var i=0; i<supplies.length; i++) {%>
                <li><%= supplies[i] %></li>
            <% } %>
            </ul>

 Handlebars templates look like regular HTML, with embedded handlebars expressions.
            <div class="entry">
                <h1>{{title}}</h1>
                <div class="body">
                    {{body}}
                </div>
            </div>
 * A handlebars expression is a {{, some contents, followed by a }}

 */
