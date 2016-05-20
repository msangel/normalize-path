# normalize-path
cross-platform command-line util for normalizing path, might be useful in command pipelining

# installing
    npm install -global https://github.com/msangel/normalize-path
    
    
# using

\\>**normalize-path** D:\\docs\\Google Диск\\docs\\foto/4 - after poland/16.03.21 минск/photo3105321940793798.jpg
"D:\\docs\\Google Диск\\docs\\foto\\4 - after poland\\16.03.21 минск\\photo3105321940793798.jpg"

\\>**normalize-path** D:\\docs\\Google Диск\\docs\\foto\\..\\foto/4 - after poland/16.03.21 минск/photo3105321940793798.jpg
"D:\\docs\\Google Диск\\docs\\foto\\4 - after poland\\16.03.21 минск\\photo3105321940793798.jpg"

\\>**normalize-path** "D:\\docs\\Google Диск\\docs\\foto\\..\\foto/4 - after poland/16.03.21 минск/photo3105321940793798.jpg"
"D:\\docs\\Google Диск\\docs\\foto\\4 - after poland\\16.03.21 минск\\photo3105321940793798.jpg"

in case of empty input it normilize current working directory path:

D:\\docs\\Google Диск\\docs\\foto>**normalize-path**
"D:\\docs\\Google Диск\\docs\\foto"
