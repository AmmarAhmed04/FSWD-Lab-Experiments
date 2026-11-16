// open index.html?demo to see the error handling with a username that does not exist
const params = new URLSearchParams(location.search);
const username = params.has("demo") ? "no-such-user-xyz-12345" : "AmmarAhmed04";

async function fetchGitHubUser(user) {
    const status = document.querySelector("#githubStatus");
    const avatar = document.querySelector("#githubAvatar");
    const followers = document.querySelector("#followers");
    const repos = document.querySelector("#repos");

    status.textContent = "Loading...";

    try {
        const response = await fetch(`https://api.github.com/users/${user}`);

        if (!response.ok)
            throw new Error("User not found");

        const data = await response.json();

        avatar.src = data.avatar_url;
        status.textContent = `GitHub: ${data.login}`;
        followers.textContent = `Followers: ${data.followers}`;
        repos.textContent = `Public Repositories: ${data.public_repos}`;

    } catch (error) {
        console.error(error);
        status.textContent = "Failed to load GitHub data.";
    }
}

// small delay so the "Loading..." state can be captured in a screenshot
setTimeout(() => fetchGitHubUser(username), 1500);
