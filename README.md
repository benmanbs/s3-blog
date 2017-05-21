# s3-blog
A blog hosted purely out of s3. Fork this to get yours started

# Architecture
There are two parts to this repo. There is `management`, and `static`. The premise is, the management site can be run entirely out of the user's local machine. It is entirely self-contained, and should run on any OS. The static site contains all the assets needed to generate the static site that will live in S3.

The management site is fronted by an SQLite database. This database lives in.....you guessed it......S3. This database contains all the information for the blog.

On publish, the management site fires off a call that generates the full contents of the static site, including styles, image assets, pages, and anything else needed for the site to function. This is then synced with the S3 repo that powers the site.

Read the README in the individual directories to learn more.
