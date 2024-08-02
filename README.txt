basics

    remember to open github desktop and pull any changes first
    open terminal at the top with new terminal or on the bottom right where there's a + if there are already terminals open.
    commit changes open github desktop and hit commit, then push.
    to run for testing enter "npm run dev" into the terminal at the bottom. 
    to deploy make sure you have committed and pushed your changes then run "npm run deploy" from the command line. you can view the 
    deployment from the github website

vue basics
    
    vue is primarily for functional things in the website. you shouldn't have to use it for displaying info. 
    vue structures everything in components. each component contains 3 sections. the javascript part is everything between <script setup> and </script>. the 
        html portion is everything inside of <template></template>, and the css portion is everything inside of <style>. note if you do <style scoped>
        the css will apply to just the component you are on, whereas <style> applys globally across the project. in this project, App.vue has all the global styles
        and all the other components have <style scoped>. everytime you use a component you will have to import it at the top of the script file with 
        "import YourComponent from ./components/YourComponent.vue" and then you can put it in your html like any object with "<YourComponent/>".
    i've linked the video i used to learn about vue down below. it's really long so you could skim to a few of the concepts i used such as:
        ref(), props and emits, v-if/v-show, v-for, lifecycle hooks, v-bind, and components.

command line basics

    go up to the top left and hit terminal -> new terminal if you don't see one across the bottom of your page. if there is one, you can add and delete
        from the bottom right of the screen. you'll see something like C:\Users\swerve\Documents\GitHub\swerve-water-sports>. this means that the command line is
        running from the swerve-water-sports folder on your computer. if you don't see that, it likely means that a command is running. this happens if you run
        "npm run dev" for testing. if you need to run another command, hit the '+' in the bottom right and use the new terminal while the other is hosting the website.
    ./ means the file path you're enter starts from the current directory. 
    ../ means to go up one directory (i.e. if you're in the components folder, ../ would take you to the src/ folder). 
    git status
        show you pretty much the same stuff that github desktop shows you.
    git commit -m "your commit message" will do the same thing that committing from github desktop does.
    git push pushes your current branch like github desktop
    git branch -a shows you the branch you are on. you should always be on main, the gh-pages branch is only touched with run and deploy.
    git checkout NameOfBranch will switch your branch to whatever is specified. 
    npm run dev hosts your website for you for testing.
    npm run build compiles your files into the dist/ folder, also copys the CNAME in there so it's ready for deployment
    npm run deploy first runs build, then runs the gh-pages script to deploy live to github.
    npm run optimize-images takes all the images in originalAssets, compresses them, and puts them into src/assets/. note they are all changed to .webp format

github basics

    before you do anything, always check to make sure there aren't changes you have to pull. there usually won't be unless me or someone else has gone in
        and made changes. 
    main is the branch with your source code, gh-pages is the compiled and condensed code that is live on the website.
    when you deploy to the website or run git push, you can view your changes going through if you check out the website switch to the branch you made changes to. 
        (main if you just did git push, gh-pages if you just made a deployment). to see if it's live on the website go to Settings -> Pages and check the most recent deployment.

tech stack summary (the list of programs/code libraries i used)

    visual studio code (vs code): the text editor. if the folder isn't there when you open it, go to file -> open folder -> Documents/GitHub/swerve-water-sports
        also i would highly recommend turning auto save on, as your previous changes are always accessible with CTRL + z, and you can redo with CTRL + SHFT + z.
        auto save is really nice when you're editing multiple files as it's easy to forget to save one of them and if any of them aren't saved the changes
        you just made won't display.
    github: file management/history.
    vue: higher level code language that simplifies certain tasks in js. it is also what compiles and condenses your code to the dist/ folder
    github pages (gh-pages): where the web hosting happens. go to github -> settings -> pages to view details


my css

    most of the css is in App.vue, all of the styles here apply globally. you'll notice i've used a few different units. vw and vh are
        view width and view height, respectively. generally, 100vw means 100% of the screen width, and 100vh means 100% of the screen height.
        I use these for pretty much everything except font and images size, as i want the website to scale depending on the size of the screen.
        for images use pixels for width and auto for height, or pixels for height and auto for width. for font-size use em, however most of the
        font size should already be specified in the 'p' and 'h2' css. 
    the css specifies objects such as 'p' or 'h2' that is applied to any 'p' or 'h2' object and classes such as .vert-container or .photos that
        are only applied to objects with the class specified. 
    key css
        p
            use this html object for all plain text. 
        h2
            use for all titles
        a
            to make links more readable
        table, th, and td
            makes all tables have borders, a background color, and basic padding. only use tables when you want this stuff to show, otherwise i would
            recommend using horizontal and vertical divs, or divs with the css "display: grid" as they are much more flexible.
        ul and li
            will automatically apply to all lists.
        img
            makes sure that no image is too wide and goes off the screen as images are the only thing in the website specified by pixels
            that have a chance of doing so. if you need an object like the banner at the top of the website that spans the entire width
            use "max-width: 100vw !important;" inline with the object or in a class to make sure it overrides this.
        .photos
            started as a way to organize photos, but i ended up using it in a div anytime i wanted to group items horizontally. it flips the layout
            direction from horizontal to vertical whenever the aspect ratio of the window gets past 3/2. you can also use .container if the margin 
            left and right are getting in the way.
        .photo
            use for photos for generally good margins and rounded corners. also use for all paypal objects.
        .submit-button
            use for buttons, puts a green background, good text, and switches the cursor when you hover.
        .vert-container 
            use for divs when you want to group items vertically. 
    css good practice
        in general, try to avoid css inline with the html object and use the above classes when possible, the main exception is that i used a lot of inline
            css when specifying margins as they are short and specific to the object. make sure when you specify this stuff to use 
            style="width: 40vw; height: auto;" as opposed to width="40vw" height="auto" as the second example will not recognize units and default to 
            pixels. 
        when debugging css there are a variety of things to check for. first, make sure the objects class isn't interfering with what you want the 
            object to do. check the class both in App.vue where it's applied globally and in your component. next check the css for the object type that
            you're using, again checking both App.vue and your component. you're also going to want to check any divs or other elements that enclose 
            the object and their classes. if you still can't figure out the problem, check the documentation of what the css property you're using 
            specifically does. many times it doesn't do exactly what you think based on the title.


project structure

swerve-water-sports
    - dist -- folder with all the code compiled and condensed for running. you shouldn't have to touch this, but it will update when 
        you run "npm run build" or "npm run deploy"
    - originalAssets -- folder with all the images. you will want to drop any new images in here.
    - src -- source code where you will be making changes
        - assets -- folder with all the images that are currently live in the project. these are different from originalAssets in that
            they've been slightly compressed and optimized for web. You'll notice all the files in here are .webp. make sure to use 
            the file path "./assets/yourimage.webp" when working in App.vue and "../assets/yourimage.webp" when working within any of
            the components. 
        - components -- folder with all the vue components. You'll notice all of these are imported at the top of App.vue. These components
            can be called anywhere, they will show up as green when properly instantiated.
            ContactUs.vue -- shows up at the bottom of the website, all the little icons are linked to swerve socials.
            DiscGolf.vue -- disc golf page, uses PayPalForm.vue
            HomePage.vue -- this is where most of the information is. Home, Schedule a Visit, Our Team, and Lake and Area are all displayed
                here. 
            ItemDetails.vue -- this is what shows up when you click on an item in the proshop. 
            KidsCamp.vue -- kids camp page, uses PayPalForm.vue
            PayPalForm.vue -- call this component anytime you want to use the paypal button. to instantiate, just copy paste an existing
                PayPalForm object and change the props to what you need. buttonId is the code for paypal, label is the title that displays on
                the website. type, type2, and type3 are the different styles. they don't display in the website but if you hit pay with paypal
                they'll show under 'details'. options, options2, and options3 are the items in the dropdowns. label shows on the website and
                value shows when you go to the paypal website.
            ProShop.vue -- proshop tab. there is a lot of js and vue stuff going on here. you shouldn't have to change any of it. if you 
                want to add an item add it to proShopItems.json 
            ProShopItem.vue -- this is how each of the items displaying in the proshop. when adding a new item, try to keep the aspect ratio
                generally square although it doesn't need to be exact. 
            ExampleTab.vue -- dummy tab i made to demonstrate basic vue features and how my project works. uncomment the button in App.vue to access.
                uncomment the example header code in the same place in App.vue as well as the code at the bottom of HomePage.vue to see how adding more
                scrollable tabs works.
        App.vue -- where all the other components are called from. Also where most of the css is. Any css you put here applies to the whole
            project. if you're running into css problems check here for the class and object type "p, h2, table, etc..." also check the divs
            you are in. CTRL + f to search. notice at the bottom of the css there is an @media section. this is where some this get switched around
            for the mobile view. don't put any css below this.
        main.js -- launches App.vue, shouldn't have to touch this.
        proShopItems.json -- this is where all the proshop item information is located include the PayPalForm specifications. ProShop.vue takes this and iterates
            through everything in allItems. note that the imgSrc is not the full file path but just the file name. put any items out of stock at the bottom
            of the file within the outOfStock object and the info will stay there but not be displayed. to make a new proshop item it's easiest to just
            copy over an existing one and edit the text. IMPORTANT: you may need to go in to the paypal shop and compare the prices and settings with the .json file.
            i copied over everything i could from the old website but i don't have access to the paypal account that you're running it on so some of it may
            not correspond to the paypal shop. the only problem i've noticed is that the swerve T-shirt buttonId is the same as the swerve boardshorts.  
            t-shirts just link to the boardshorts for some reason, so you'll probably have to get a new buttonId from the paypal shop and put it in.  
        oldApp.vue, oursite.html, schedule html. old website code i was using as a reference. 
    CNAME -- this file is what tells github that you're using the custom url swervewatersports.com don't change this unless you change the
        domain of the website. notice it gets copied into the dist/ folder when deployed.
    discgolf.html, index.html, proshop.html, old website stuff. 
    jsconfig.json, .gitignore, .eslintrc.cjs, .prettierrc.json, package-lock.json, vite.config.js, other packages and configurations. 
        shouldn't have to change these at all.
    README.md -- github generated README file
    proshop-updated.xlsx -- the spreadsheet i made with the most recent proshop stuff. is up to date with the .json file. i would make changes both here and to the .json
        file at the same time to avoid confusion. at some point i would've liked to make a script that takes this file and converts it into the .json file
        that is used. i still might do so if i have time before i leave or if i get bored sometime. 
    package.json -- contains the "scripts" that you run from the command line
    optimize-images.mjs -- short script that goes through each of the images in originalAssets and sends an optimized .webp file to
        assets. enter "npm run optimize-images" any time you import a new image into originalAssets and want to use it in your project.
        if the image is showing up weird, try changing the format (jpg to png or png to jpg, cloudConvert is good for this it's free online) and running the script again.
    
    
resources
    vue tutorial https://www.youtube.com/watch?v=pgWZLS75Nmo
    official vue docs https://vuejs.org/
    chatGPT -- it is a huge time saver in coding if used right. some tips for using it right: 1. be specific about your problem. if it's a css
        issue, sometimes that means copying in all your code from App.vue and the component you're working on to give it some context. 2. if it gives
        you a bunch of code, try to just copy over the few lines that you were missing from your code, and try to understand what they are doing.
        3. you can also use it for debugging. if you see a long error message you don't understand, copy it in and chatGPT will point you in the right
        direction. 4. it is also useful for dealing with issues outside of your source code. if the program cannot compile or deploy, chatGPT can suggest
        practical solutions such as reinstalling certain software or updating the right permissions.
    if any of the code that i wrote isn't working as intended, or if the website is having issues for any reason. lmk and i will fix it as soon as i can.
        if you have any questions pertaining to the code i wrote or are having trouble making changes, lmk and i can help.