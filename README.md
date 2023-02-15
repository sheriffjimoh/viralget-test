#Set up the app

1. Clone the project repo to your local machine,
2. Run “composer install && npm install” inside the project directory, this install all the dependencies and packages for you.
3. Create .env file and replace your database credentials. 
4. Run “php artisan migrate refresh:seed “ this generate the database base on the schema and create a dummy datas.
5. Run “php artisan serve” and open another terminal to run “npm run dev”  now you can run the app.

#App flow 

The dummy products are what shows first on the welcome/home page to guest user, if you want to manage the products(create, edit, delete) you need to login/register. 


#App stacks

Enjoyed working around the newest version of Laravel which uses vite instead of web-pack, this is a full stack development built with:

1. Laravel 9 > 
2. React 
3. Inertiajs 
4. Vite
5. Tailwind css
6. MySQL 


#Time and improvements 

Started working on the test yesterday after I got a call from the hr, this is just a basic flow of how the book shop could be of, however, this ideal can then be polished especially by the UI. Also I would reduce the use of pages, some pages like “creat book and edit book” could be a modal. 
