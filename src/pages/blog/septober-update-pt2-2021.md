---
title: "Septober Update part 2 - random shenanigans and giving a talk"
date: "2021-11-02"
blogpost: true
tags: [personal update]
---

Hiya once more!

This update has once again been long coming, and once again I have finally forced myself to write it to account for interesting recent circumstances!

If you don't want to read the whole blogpost, then just note this: As some of you may already know, I will be [giving a talk about cybersecurity](https://www.linkedin.com/posts/miguelpduarte_no-dia-3-de-novembro-pr%C3%B3xima-quarta-feira-activity-6859961745016946688-iFqj/) **tomorrow** (03/11/2021) **at 18:30 Portuguese time** at the request of GDSC UPorto!  
The talk will be streamed live on [their YouTube channel](https://www.youtube.com/channel/UCDhrjQiJUlolXiQ9C51fz4Q) and will probably remain there afterwards. There will also be the possibility of live interaction via chat and/or questions, so come hang out! :)

The focus will be on cybersecurity in general, with a special focus on how to get into the area, especially from a development background like mine.  
This is a topic I want to cover in further detail in this blog as well, so it will certainly be a good starting point to see what are common questions that people may have, as well as useful references that I may further detail in blog posts :)

---

And now, onto less pressing subjects :)

Some of the topics I wanted to cover in the second part of the personal update blogpost (which ended up being this post) have since kind of faded out of relevance (such as some CTFs I participated in or conferences I attended), so I'll simply focus on the most relevant aspects briefly in the following paragraphs.

[Taskwarrior](https://taskwarrior.org/) is awesome!  
I have started using it, and despite sometimes also resorting to good old checklists in other note-taking apps such as physical post-it notes or Google Keep due to laziness, it is an extremely flexible tool that I want to further integrate into my daily workflow.
I think my only gripe with it right now is simply that there is no good mobile interface. However, using the CLI via Termux is not as bad as I thought it would be. I'll need to keep experimenting and seeing what works best, and if I still find the workflow unsatisfactory I may just try and build something simple myself, who knows!  
I'm also considering donating to the project, which you should also do, as it has recently been picked back up and is in need of help, either financial or open-source-work-related! :)

I helped the folks of the [`0xOPOSEC` meetup](https://www.meetup.com/0xOPOSEC/) by organizing the monthly challenge for April 2021.  
The meetup usually features a monthly CTF-like challenge, and this time I stepped up to the plate. The challenge is a good mix of Web and Crypto (considering traditional CTF categories) and is based on some concepts I learned while on HackTheBox.  
The challenge [is still up on Heroku](https://github.com/miguelpduarte/Don-Joes-Blog-CTF-public) if you want to try it, and the [full source code is also available](https://github.com/miguelpduarte/Don-Joes-Blog-CTF-public).

I've set up my Twitch account once more and am occasionally [streaming CTF challenges or pentesting labs](https://www.twitch.tv/meiogordo/).  
I was trying to follow a weekly schedule for streams, but since I started working, my free time has been mostly spent on leisure and not necessarily on streaming or even doing CTFs or pentesting labs.
I want to go back to doing all of these again, but this will probably have to wait, precisely due to the following topic.

I am once again giving a helping hand to [NIAEFEUP](https://ni.fe.up.pt/), this time in the shape of a [pull request to refactor the branch's schedule scraper](https://github.com/NIAEFEUP/uporto-timetable-scrapper/pull/49).  
The objective is to refactor the scraper which has not had much maintenance since it was developed a while ago, and try to decouple it from the database. The old scraper inserted the data directly in a database, which made sense at the time, but has resulted in tight coupling between the scraper and the database schema (among other issues). In turn, this has made it so that any attempt at changing one of the project's components resulted in the change author eventually giving up because of the _"dependency hell"_ the tight coupling caused.  
As such, this PR aims to be a first step in solving that, by making the scraper work independently of the database, being agnostic of it and instead outputting the scraped data to CSV files. These files can then be consumed by an "importer" component (still to be developed - hopefully not by me), which will import the data from the CSVs into the database. I believe this will help with this project's longevity by making it easier to develop new code or fix old bugs in it.  
"Reimplementing" this scraper has certainly been interesting, given that I have never worked on a large web scraping project before. Despite this, this work is not without its share of problems: for one, debugging is a bit painful - I either feel like I am handling too little or too much data to be able to check for certain behaviours or bugs; also, the lack of documentation of the previous scraper sometimes leaves it to myself to decode the cryptic selectors it uses - I have taken it upon myself to try to document the new code better, as well as use more descriptive selectors, for example selecting based on the text of neighboring elements instead of html nodes.  
&nbsp;&nbsp; All in all, I believe this probably should have been a task best suited for several people instead of just one due to the large scope (several people would help since they would carry onwards a great amount of code ownership, instead of it being all focused on a single person), as well as to help face the burnout that some of the more tedious aspects cause.

In a more infosec-related topic once again, a while back I went on a HackTheBox hacking spree on a [few](https://twitter.com/miguelpduarte/status/1378319510814482434) [different](https://twitter.com/miguelpduarte/status/1378039412571901952) [machines](https://twitter.com/miguelpduarte/status/1377783882674810880) (I also [cross-posted](https://www.linkedin.com/posts/miguelpduarte_owned-thenotebook-from-hack-the-box-activity-6783716539867643904-AV3Z) [these](https://www.linkedin.com/posts/miguelpduarte_owned-armageddon-from-hack-the-box-activity-6783806669718605824-i47-) [posts](https://www.linkedin.com/posts/miguelpduarte_owned-scriptkiddie-from-hack-the-box-activity-6782722575580585985-oqiu) on [LinkedIn](https://www.linkedin.com/posts/miguelpduarte_owned-tenet-from-hack-the-box-activity-6784086410619052032-nGO-)).
I have since solved some more boxes occasionally. However, given the quick release schedule, I have not yet made much more progress towards ranking up once more, which is something I would like to do...
Nevertheless, even if I am unable to rank up I am certainly going to be enjoying the learning experience, soaking up all the cool tricks I can!

I have recently finally caved into my desire to learn more about [Rust](https://www.rust-lang.org/).  
I'm currently following ["The Book"](https://doc.rust-lang.org/stable/book/), as well as some random YouTube videos about specific concepts that pop up in my feed.  
Despite its "original" purpose (systems programming) not fitting my scripting needs, I have since found several resources showing how it can be used in other contexts (e.g. [this great talk by Rebecca Turner](https://www.youtube.com/watch?v=BBvcK_nXUEg)) and am having fun looking into it :)  
I believe it is needless to say that lack of time has been the main stopping factor in writing some cool Rust tools, but I hope to change that in the near future!  
I may also consider toying with a distributed systems or operating systems project once more, since I had a lot of fun with those subjects during my course, and Rust is a good fit for these areas. This would also be a good way to keep working on my coding skills, given that my current job is not focused on programming as a core activity.
As such, I'll welcome any project ideas or suggestions that may come my way ;)

Finally, I'll end the post with another cool tool suggestion: [`flameshot`](https://flameshot.org/)  
Flameshot is a "powerful yet simple to use screenshot software" that can be [easily ran with a keystroke](https://github.com/miguelpduarte/dotfiles/blob/44c55fb1e41f5b753167e336dc0ac155abd15550/.config/i3/config#L269).
It works well with my current issue of being unable to bind key combinations that include the "Print Screen" key, since it displays a simple UI that allows me to easily choose the option I desire at the time (just screenshot to clipboard, edit the screenshot, save to file, upload to imgur, etc). I highly recommend it :)

I hope this small update was somewhat interesting or helpful in some way, and that you join me in GDSC UP's live stream tomorrow, it will be a blast!  
As always: thanks for reading!
