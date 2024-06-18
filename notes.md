I think the trick here is that we need to build the extension and point
wdio to the built extension.

Let's try with a fresh project initialized using webpack then
    1. test that all things work for this prior to setting up wdio
    2. setup wdio, using the settings for tsconfig setup here
    3. point wdio src to the *build* version of the extension
