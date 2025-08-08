Prerequisites

-PHP (>=8.1)
-Composer
-Node.js (>=16)
-npm or yarn
-MySQL (or other DB supported by Laravel)

---------------------------------

Clone the repository
Install dependencies
---------------------------------

Copy .env.example to .env and update database credentials
---------------------------------

Generate the application key:
php artisan key:generate

---------------------------------
Run migrations
php artisan migrate
---------------------------------

php artisan serve