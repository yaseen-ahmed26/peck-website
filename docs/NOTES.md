### 1. Notes
- We don't need to store UserData in localstorage like we did before.
    - All user endpoints return the entire user save, so we can just save it in an in memory variable.
    - Also protects from malicious attacks since the user's email is not just sitting in an easily accessible localstorage.
    - Everytime the user goes onto the website, it already automatically logs in so no issues with data.