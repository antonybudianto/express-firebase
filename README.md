# express-firebase

Simple Firebase Admin Server using NodeJS.

You used Firebase for auth, realtime DB, and all. Finally you need your own server
to integrate with 3rd party services, or maybe custom token, or you need server-side operations.

## How to use
1. Clone this repo and change directory to the cloned folder
2. Install the packages

   ```sh
   npm install
   ```

3. You need to download your Firebase Service Account json file, please follow the official [instruction](https://firebase.google.com/docs/admin/setup).

    Put the file at project root.

    > :warning: Always make sure the JSON file is git-ignored!

4. Copy `.env.example` file and rename it to `.env` at project root.

    Change the dummy FIREBASE_DATABASE_URL value with your Firebase project databaseURL, you can find it on your Firebase Console

5. Then start the server
    ```sh
    npm start
    ```
6. It should log successfully, and you can start using Firebase Admin SDK

## License
MIT
