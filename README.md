# realestate-lising-app
Note: This project in its current state is nominally functional. It meets base requirements but is not a finished product.


Data Base table:

CREATE TABLE "listings" (
 "id" serial primary key,
 "cost" integer,
 "sqft" integer,
 "type" varchar(120) not null,
 "city" varchar(120) not null,
 "image_path"  varchar(120) not null
 );