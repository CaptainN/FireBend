# FireBend

I've been using Arc on macos, and have gotten used to some of the aesthetics. At the same time, I've always preferred Firefox, since the day it was released (maybe before if you count Netscape Navigator, heh.)

The problem with Firefox is simple. It's ugly. The top tabs, which are clearly designed to optimize for touch - which no one actually needs or ever wanted on their desktop, are just the worst. Firefox is old - and it looks it.

So I went looking for a theme to fix it. Turns out, there aren't any - at least, no simple to install ones that fix it up just right. There are however, MANY attempts to make Firefox just a little bit less ugly through a set of features which require editing text files. (Why is this not easier to do with an extension or theme?)

One such effort, uses a mix of userChrome.css (the file which styles Firefox) and an extension is ArcFox, the inspiration for this effort. The stated goal of the project is to make Firefox a lot more like Arc. That's a laudible goal, but I have much smaller ambision. I just want Firefox to look a little less ugly.

I'm not quite aiming for Arc - so what's another way to say "an arc"? How about "a bend" - so this effort is called "FireBend". It also is the name of a fun activity involving Kung Fu and fire from one of my favorite animated shows, so that's a bonus.

Here is what I've acheived on macos:

![Screenshot of FireBent Firefox](https://github.com/CaptainN/FireBend/blob/main/assets/screenshot.webp?raw=true)

It does borrow heavily from Arc. Specifically, it adds rounded corners, and a 10 pixel gutter between elements, and prefers side bar vertical tabs. But that's really it as far as similarities. Everything else in that screenshot is just Firefox! There are even parts of that which I prefer over Arc. I don't actually like the side bar location field - and on Windows, Arc doesn't even do that.

Anyway, here's the rough outline of how to set it up:

1. Edit some settings in about:config.
  - set sidebar.revamp to true
  - set sidebar.verticalTabs to true
  - set toolkit.legacyUserProfileCustomizations.stylesheets to true
2. Add userChrome.css from this repo to your profile directory.
  - There is much more [robust instructions here](https://www.userchrome.org/how-create-userchrome-css.html).
  - Find the correct version from the folders in this repo, macos or windows.
  - Use about:support to find the "Profile Folder" and open that (there is a button on that page)
  - Add a folder called "chrome" to your active profile folder, then copy userChrome.css to that folder.
3. Manually re-arrange some things in "Customize Toolbar..."
  - I just moved things around in the toolbar, to get it to look nicer. Moved the spacer between reload and the location bar to the left of the back button. Move the "Show Sidebars" button to the left of that spacer. That's it!
3. (optional) Add userChrome.js and the scripts from this repo. This is only necessary to get the transparency effect behind the sidebar, but that comes with some other useful features, which I'll describe below.
  - Follow the instructions in [the userChrome.js repo](https://github.com/xiaoxiaoflood/firefox-scripts) (it's a little tricky).
  - After doing that, add the firebend.uc.js file from this repo to your profile's chrome directory.

Future:
- More specific instructions - for now, I just wanted to get something up on github.
- I'd like to get some options built in to the stylesheet for things like background color, and other variations.
- Support for Windows and Linux. I did this initial work on my macos workstation, and some of the styles are very specific to that operating system. But it shouldn't be a lot of work to make a Windows and GTK version.
