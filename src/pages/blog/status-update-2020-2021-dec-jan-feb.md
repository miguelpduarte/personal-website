---
title: "Status Update: December, January and February"
date: "2021-02-15"
blogpost: true
tags: [personal update]
---
The past few months have gone by quickly and sadly without blog posts. As such, I'm writing this to fix that :)

The end of a semester is always a time with a lot of running around hammering projects together and submitting reports, studying for tests and exams and, this year, submitting an initial draft of my dissertation for "Dissertation Preparation" course unit. I'll probably blame that for the slowdown, which hopefully will improve in the following months due to now only focusing on my dissertation.

So, let's get started with an update to stuff I've been up to in the last few months.

This year I attempted once again to participate in [Advent of Code](https://adventofcode.com/), knowing that I would eventually fall behind "schedule". Despite this, I decided to pick up this programming challenge to brush up on my coding skills since I hadn't developed "typical algorithms" for a while now. You can laugh at my code in [this repository](https://github.com/miguelpduarte/Advent-of-Code-2020). Although having since dropped the challenges, I believe they served the intended purpose of putting my brain on an algorithmical treadmill :) (that and I probably beat my record for AoC participation despite not trying as much this year lol)

Still in December, I participated in [X-MAS CTF 2020](https://ctftime.org/event/1209) along with [CaptureTheFrancesinha](https://ctftime.org/team/111459). We placed 224 out of 1064 teams and I managed to solve 4 challenges: `Complaint` (Misc), `doiknowyou` (Pwn), `naughty` (Pwn) and `ready for xmas` (Pwn). `ready for xmas` had a cool trick: There was a buffer overflow but there were no `win` functions and we were unable to send the `/bin/sh` string due to some checks that were made using `strstr`. The solution involved noticing that `mprotect` was called when neither `cat` nor `sh` were detected in the input buffer, and it made a certain memory segment `RW`. While this is not `RWX`, ROPing to `gets` with that address as argument and then to `system` with the same address as argument again effectively allowed us to execute arbitrary commands! Just sending a `/bin/sh` over the netcat connection got the job done once the ROP exploit was ready!<br/>
Once again, I focused a lot on binary exploitation challenges for this CTF to further improve my skills in this area I only more recently dived into :)

In early January, I managed to get a little bit of time after submitting all the deliveries for my elective subjects and managed to hack [Delivery](https://www.hackthebox.eu/home/machines/profile/308) - an Easy HTB box created by [ippsec](https://twitter.com/ippsec) - on release day! Sadly, did not even nearly qualify for first blood (as was to expect, since teams with a lot more practice and expertise usually go for it). Still, it was nice for a break from my other uni stuff and overall a really nice box that requires a little bit of lateral thinking (rather than "metasploit go brrr"), which is always refreshing!<br/>
Since then, I got root on 2 other easy boxes and one medium box. One has even been retired so maybe a writeup may be coming? Stay tuned!

I had been thinking of starting some hacking streams for a while, and finally ended up trying one. It was plenty fun, but I am unable to work on HackTheBox due to its policy on streaming active boxes.
Instead, I gave TryHackMe a chance which, sadly, didn't feel as fun as HTB to me. I may try TryHackMe again or finally invest on a VIP HTB membership and stream some retired boxes. The latter may be more interesting if I go in blind all the same to keep the challenge high. [Follow me on twitch](https://www.twitch.tv/meiogordo) to know when I go live and say hi in chat! I will probably be able to stream a bit more now due to, as mentioned, only having to work on my dissertation now and being able to manage my time better, due to having more flexibility.

January was mostly occupied with working on an initial version of my thesis that included investigating the State of the Art, which took up a considerable amount of time and effort. As such, I mostly missed CaptureTheFrancesinha's participation on [justCTF 2020](https://ctftime.org/event/1050), only being able to try a couple of challenges. The CTF looked really fun, but besides being a bit more advanced than we are able to take on at the moment, I was also only able to dedicate about a couple of hours to it, unfortunately.

For now, my February has been a synonym of working a bit more work on my thesis, running a final sprint in organizing [Talk a Bit 2021](https://talkabit.org/) (which was streamed live on [YouTube](https://www.youtube.com/channel/UCozp1TXwZcWVdHtgcn3mh8A) - the streaming experience came in handy here, in handling OBS for example), and hopefully getting back to writing stuff on this blog and hacking stuff on CTFs and HackTheBox.
I've slowed down my job search for a bit but will probably get back to actively looking for stuff in a couple of months to try and find good opportunities (preferably outside my country to try living abroad for a bit).

Well, that's about it for now! Thanks for catching up with me once again!<br/>
As always: thanks for reading!
