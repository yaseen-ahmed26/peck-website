### 1. Notes
- We don't need to store UserData in localstorage like we did before.
    - All user endpoints return the entire user save, so we can just save it in an in memory variable.
    - Also protects from malicious attacks since the user's email is not just sitting in an easily accessible localstorage.
    - Everytime the user goes onto the website, it already automatically logs in so no issues with data.
- Turns out the refresh token cookies were set incorrectly on the server.
    - It had a datetime in max_age instead of being at expires. So the website discarded it.
- The Svelte website and the backend were on different domains (localhost vs 127.0.0.1)
    - Configured Vite to make all server fetch requests through 127.0.0.1 if the environemnt is dev. Otherwise it just uses the normal Render URL.