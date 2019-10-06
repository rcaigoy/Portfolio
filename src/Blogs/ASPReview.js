import React from 'react';

function ASPReview() {
    return (
        <div className="Blog-Text">
			Visual studio C# Asp.net mvc

Introduction
C# seems to be a very easy language to pick up.  It’s object oriented and strongly typed so those who know Java, C, C++, or other strongly typed object oriented languages should be able to pick it up quickly.  There are a lot of similarities between C# and other object oriented languages, which is why I wanted to go through how easy it is to transition into C#, what the differences are, what the advantages are, and what disadvantages there are.
	C# uses all of the syntax that we see from other languages.  That includes public and private variables, classes, and methods.  We still use integers, strings, floats, doubles and even custom objects.  For loops, while loops, recursive functions, parameters.  Pretty much all of the basics of other languages are transferred over.  Writing to the console is pretty easy too.  Hello world is created with Console.WriteLine(“Hello World”).  Not all object oriented languages use typecasting, but it’s easy to convert datatypes into other datatypes as long as the values are compatible.  C# also allows usage of the datatype “var” which many developers might know from javascript.
	Some of the things that are different from C# as other object oriented languages are that C# herits classes by using the colon character ‘:’.  When morphing an abstract method, we just need to use the term “override” before stating the name of the method.  I also really like that C# care much more about what the user sees and less about what the computer sees.  Pointers are still a thing in C# but RAM Addresses almost become irrelevant as every variable returns the value that the reference holds and not some weird looking address value.
	In the C# world, data structures are known as collections.  That’s because the base class of data structures are what’s called IEnumerables.  This abstract class is the base of the data structures that can access each inside value (called an ienumerator) with a foreach loop.  There’s also a built in LINQ language that incorporates lambdas for queries.  As an example, if we have a list of person objects and each person object has 2 values, the name and age, then we could return filter of that list by using a lambda.  Below is an example of getting a query of all people in the list over 18.
	Var query = persons.Where(x => x.age > 18)

	Libraries are pretty easy to use because of Visual Studio’s autocorrect feature.  After using a library class, just use the ‘.’ character after and you can see what methods are available to use.  
	C# with visual studio is great!  Visual studio provides a very easy to use interface and you are set up very quickly with a working template of code.  Visual studio also has a GUI for git for those who don’t like having to open up a command prompt to use git.  Each application uses a config file.  For console apps and client apps it’s app.config and for websites, it’s web.config.  The code can reference config file information just by using the system.configuration library.  We use this for changing connections to different databases, URL’s, changing the admin list of sites, and even stating if the website is in test mode or production mode.  
	Overall C# is great.  I needed to learn C# this past year because it’s the language used along the internal servers at my work place.  Larger corporations seem to love using Microsoft servers because microsoft makes it pretty easy for hundreds, thousands, or even hundreds of thousands of employees to communicate with each other within a domain.  The only problem I have with C# is that because it’s only used on MIcrosoft servers, it might not be very appealing for smaller companies to want to use when they can’t afford multiple servers and an esx system (which makes windows hosting cheaper internally).  Web hosting with Windows servers is also generally more expensive than linux hosting because windows servers require licensing from Microsoft, while linux is a free operating system.  For those wanting to build upon C#, it’s much easier to get a job in medium to large size corporations than smaller companies or startups.  


Syntax differences
Inherit with : 
Get; set;
No more returning weird RAM addresses
Anonymous objects
White spaces are irrelevant.
Libraries
Easy to search on the internet for nuget packages
Can check out the package manager console for nugets
Easy to import another project into references
Visual studio
A few key functions that are useful, but aren’t used in other places
Git
Easy to import sql code
My favorite feature is the autocorrect and the variable/method checker
Using the webconfig
Data structures (collections)
Asp.net fluent members around the globe refer to the data structures as collections
IEnumerables
The highest level of collections
LINQ language and lambdas



        </div>
    );
}

export default ASPReview;