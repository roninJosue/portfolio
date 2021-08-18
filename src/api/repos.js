const listRepos = async (user = 'roninJosue') => {
  const repos = await fetch(`https://api.github.com/users/${user}/repos?type=source`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    }
  });

  return repos.json();
}

export { listRepos };