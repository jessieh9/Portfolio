const projects = [
    {
        id: 1,
        image: "antalert.jpeg",
        title: "AntAlert",
        projType: "In progress",
        description: <p>AntAlert is a web application that was built with Firebase, Express, React, and Node. I built this web app with a friend during summer '23 to combat the difficulty of constantly checking the schedule of classes for an open spot in courses. We came up with this idea after I couldn't get a spot in a major course for missing the date when restrictions lifted :&#40;<br />I'm sure many UCI students would find this useful as the constant scrambling and reloading between the webreg portal and verifying your course on the schedule is not only tedious but also anxiety-inducing (at least for me). </p>,
        source: "",
        site: ""
    },
    {
        id: 20,
        image: "zotnfound.png",
        title: "ZotnFound",
        projType: "Web App",
        description: <p>Best Overall [Runner-Up] at VenusHacks 2023 🥇🏆. ZotnFound is a platform designed for UCI students, allowing them to effortlessly locate and recover lost or found items, ensuring their safe return.  The idea for this application came as my team and I were thinking about what we should create that could help the student community better, and we were reminded of an instance where one of our friends had lost a hydroflask (which are pretty expensive) and she couldn't find it again. This could be because of the lack of support and resources for lost items. <br /><br /> We are currently planning to make this into a mobile app and work on the frontend for a cleaner interface.</p>,
        source: "https://github.com/stevem-zhou/ZotnFound",
        site: "https://zotnfound.com/"
    },
    {
        id: 21,
        image: "zotpal.png",
        title: "ZotPals",
        projType: "Web App",
        description: <p>1st Place at UCI ICSSC WebJam 2022 🥇🏆. Zotpals is a website that allows students to borrow donated items and build long-lasting connections with one another. This application was built using the MERN stack and was our very first time working with databases and React. The idea behind this application was to help students have more resources and access to small things that they might need but are in a time crunch or special circumstances. <br /> We plan to restructure the UI of the application since it was all done in plain HTML/CSS because we weren't aware of UI frameworks like ChakraUI, MUI, and others. However, it was a good learning experience to create our own styles and componetns from scratch.</p>,
        source: "https://github.com/stevem-zhou/ZotPals",
        site: "https://zotpals.netlify.app/"
    },
    {
        id: 2,
        image: "meme-gen.png",
        title: "Simple Meme Generator",
        projType: "Web App",
        description: <p>Meme Generator is a study project I built while self-learning React online with Scrimba which allowed me to work with useEffect, hooks, and props. I think it was a pretty interesting project to work with as there are a bunch of similar sites online that were popular. Understanding how it functions showed me that I can do it myself within a couple days. <br />I'm super excited for my future projects and hoping to dive into React Native or Flutter to create mobile applications and hopefully look into creating and designing gaming apps. </p>,
        source: "https://github.com/jessieh9/Simple-Meme-Generator",
        site: "https://react-simple-meme-generator.netlify.app/"
    },
    {
        id: 3,
        image: "travel-journal.png",
        title: "Travel Journal",
        projType: "Web App",
        description: <p>Simple Travel Journal is a short React learning application that I made to study props, reusing components, and styling in React. It showcases the different countries that I have visited with a short description and location marker. The information is static so it was a lot easier than to connect with a database, but was overall a fun project to complete.</p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/travel-jounal",
        site: ""
    },
    {
        id: 4,
        image: "business-card.png",
        title: "React Business Card",
        projType: "Web App",
        description: <p>This project was a simple business card (associated with Scrimba) that I created with React that showcases my skills, interests, and contact information for easy access. In terms of difficulty, this project was pretty easy to complete since it was beginner level and the information was all static.  </p>,
        source: "https://github.com/jessieh9/React-BusinessCard",
        site: "https://jessie-react-businesscard.netlify.app/"
    },
    {
        id: 5,
        image: "keeper.png",
        title: "Keeper App",
        projType: "Web App",
        description: <p>Keeper App is an application that works with similar functionality to a notes app where the user is able to log personal notes and delete them. This application uses React, Express, and Node to render components and the functionality of the system. <br /> In the near future, I plan to integrate MongoDB or Firebase to store the data rather than holding it all locally with useState and an array. </p>,
        source: "https://github.com/jessieh9/Keeper-app",
        site: "https://keeper-j.netlify.app/"
    },
    {
        id: 6,
        image: "blog-db.png",
        title: "Blog Website",
        projType: "Web App",
        description: <p>This Blog Website is the first site I created with database functionality included, built with MongoDB, Express, and EJS. Before learning the React framework, I worked with Embedded JS since its functionality was quite similar, and the syntax helped me in grasping the concepts of React, especially with a jump from plain HTML/CSS. <br /> The styling for this site was a bit off so I would improve the overall looks and design of this site, but it was a good learning experience to work with connecting to a database. </p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/Blog-with-Database",
        site: ""
    },
    {
        id: 7,
        image: "wiki-api.png",
        title: "Wiki API",
        projType: "API",
        description: <p>Wiki API is a REST API Project of creating my very own RESTFul API with all the valid HTTP Requests (GET, POST, PUT, DELETE, PATCH). Wiki API returns article(s), adds to the database, or edits articles depending on the request. <br /> GET - returns all articles or a specific article<br /> POST - posts the article <br /> PUT - updates the specified article <br /> PATCH - updates the specified article <br /> DELETE - deletes a specific article or all articles</p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/Wiki-API",
        site: ""
    },
    {
        id: 8,
        image: "joke-generator.png",
        title: "Joke Generator",
        projType: "Web App",
        description: <p>Joke Generator is a project that works with the JOKE API to display jokes based on a search category. This project focused on API requests and parsing the responses returned. This was an entertaining project to complete.</p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/JokeGenerator",
        site: ""
    },
    {
        id: 19,
        image: "secrets.png",
        title: "Secrets Project",
        projType: "Web App",
        description: <p>Secrets Project had a similar concept to the Joke Generator where it would request a random secret from the API and display it to the screen. This project was also created using EJS. </p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/3.5%20Secrets%20Project",
        site: ""

    },
    {
        id: 9,
        image: "todolist.png",
        title: "Simple Todo List",
        projType: "Web App",
        description: <p>The Simple Todo List is a short application that mimicks a to-do list (like its name implies). The current date is displayed in the header and the application uses MongoDB to host all the todo items being stored. This Todo Application also has two separate lists to differentiate between personal and work lists. However, this application is built using Embedded JS, so I do hope to convert it into React framework for a more controllable frontend section.</p>,
        source: "https://github.com/jessieh9/JuicyTodoey",
        site: ""
    },
    {
        id: 10,
        image: "google-cal.png",
        title: "Google Calendar Redesign",
        projType: "Prototype",
        description: <p>This project is a Google Calendar Redesign Prototype that I completed for my Human Computer Interactions class, where I discuss high, medium, and low implications of the current design of Google Calendar for people who may have accessibility issues. This project was completed using <strong>Figma</strong> and is one of the most interesting projects I've completed. <br /> This class taught me a lot about web design and user interface for people who may have accessibility issues and just how much work and thought goes into producing applications that cater to accessibility.</p>,
        source: "https://www.figma.com/file/XBpi6aIn9tB3tyCh97UoLh/P3_Prototype?type=design&node-id=0%3A1&mode=design&t=GjYSekQZz4hFUIi1-1",
        site: "https://www.youtube.com/watch?v=jIRi_BY_uto&ab_channel=JessieHe"
    },
    {
        id: 11,
        image: "drums.png",
        title: "Drums",
        projType: "Web App",
        description: <p>The Drums Web App is one of the more entertaining ones that I've done. It is a simple website that practices JS sounds, audio, and various elements while tying it into HTML/CSS site. The functionality is completed using jQuery and JS, which was definitely a lot harder to grasp, but is interesting to learn about in manipulating the DOM.</p>,
        source: "https://github.com/jessieh9/Simple-Drums",
        site: "https://jessieh9.github.io/Simple-Drums/"
    },
    {
        id: 12,
        image: "qr-code-gen.png",
        title: "QR Code Generator",
        projType: "Web App",
        description: <p>The QR Code Generator is a simple generator using the inquirer and qr npm packages. Written in simple JS code, it helped me to practice using npm packages and js. It also showed me just how easy it is to create simple applications that are useful for daily instances, such as restaurant menus on QR Codes. To run the source code, npm install the two packages and <i>run node index.js</i></p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/2.4%20QR%20Code%20Project",
        site: ""
    },
    {
        id: 13,
        image: "dice-game.png",
        title: "Simple Dice Game",
        projType: "Web App",
        description: <p>The Simple Dice Game is a very simple dice game using HTML, CSS, and JS. This project was for practicing using JS for functionality in websites. The design is plain HTML/CSS and JS just renders the heading and the dice images. By completing this project, I was able to realize that what seems to be animations is really just multiple images stacked upon each other for a seamless flow (which is how I also implemented the dice images).</p>,
        source: "https://github.com/jessieh9/Simple-Dice-Game",
        site: "https://jessieh9.github.io/Simple-Dice-Game/"
    },
    {
        id: 14,
        image: "simon-game.png",
        title: "Simple Simon Game",
        projType: "Web App",
        description: <p>Another really fun project created is this Simple Simon Game. The goal of the game is to create the exact same pattern following the "leader". To create this game, I used HTML/CSS for the design and then JS and JQuery for the functionality and working part of the game. The main data structure is just an array that keeps track of the pattern and checks the user's pattern against the correct one. It was a really cool project to implement and see come to life, and I'm interested in creating similar projects in the future! </p>,
        source: "https://github.com/jessieh9/Simple-Simon-Game",
        site: "https://jessieh9.github.io/Simple-Simon-Game/"
    },
    {
        id: 15,
        image: "tindog.png",
        title: "TinDog Project",
        projType: "Web App",
        description: <p>TinDog is a website that mimics Tinder, but for Dogs, and is built with HTML/CSS and Bootstrap. The purpose of this project was to develop my skills in HTML, CSS, and bootstrap as well as arranging elements for a seamless design. This project was really fun to implement, and I basically just went crazy, taking elements from a bunch of websites (like the second section which is similar to some advertisement websites). <br />I was pretty shocked upon learning that most websites currently are from UI packages like Bootstrap, MUI, and ChakraUI which is intersting to think about. I still want to be able to create the same layout in pure HTML/CSS by myself though. </p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/11.3%20TinDog%20Project",
        site: ""
    },
    {
        id: 16,
        image: "mondrian.png",
        title: "Mondrian Project",
        projType: "Recreate",
        description: <p>The Mondrian Project was just a fun little project for me to practice my HTML and CSS layout skills using grid, flexbox, and more. This is from one of the best art pieces in the world, and I thought it would be interesting to recreate it with HTML and CSS designs. It was fun for me to experiment with it and overall was a good experience.</p>,
        source: "https://github.com/jessieh9/Web-Dev-Learning/tree/main/10.3%20Mondrian%20Project",
        site: ""
    },
    {
        id: 17,
        image: "v2.png",
        title: "Portfolio v2",
        projType: "Portfolio",
        description: <p>This is the second version of my portfolio with Bootstrap, and it definitely improved a lot in terms of design and readability. It's a lot more pleasing to look at, and has more interesting design choices and elements. </p>,
        source: "https://github.com/jessieh9/Personal-site-2",
        site: "https://jessieh9.github.io/Personal-site-2/"
    },
    {
        id: 18,
        image: "v1.png",
        title: "Portfolio v1",
        projType: "Portfolio",
        description: <p>My very first website with HTML/CSS showcasing my portfolio. I learned some of the basics including links, rerouting to different pages, and the syntax of the language. </p>,
        source: "https://github.com/jessieh9/Personal-website-1",
        site: "https://jessieh9.github.io/Personal-website-1/"
    }
]

export default projects;