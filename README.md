# Blog-front-end

![image](https://github.com/DreamingLi/Blog-front-end/blob/main/img/blog.gif)
Project name: Blog system (demo)
Techniques: Django+React+webpack+Mobx+MySQL+NGINX+Antd
Description: This is a demo blog system for the demonstration of skills of web development. It has register, login, view blogs and publish blogs.
The user's information is saved into a MySQL database after the password is encrypted by Bcrypt. For maintaining the login status, The token
containing the user's ID and a timestamp generated by PyJWT at the server-side would be sent back and saved locally for authorization .
Front-end:
1. All components are built with React + Antd components except login, and register pages which are built by React + Less
2. Using Mobx for state management control
3. Using store to save the token passed from the back-end
4. RESTful APIs
Back-end:
1. Using bcrypt to encrypt the user's passwords in the MySQL database
2. Using JWT instead of Session ID to identify users


