const listRepos = async (user = 'roninJosue') => {
  const repos = await fetch(`https://api.github.com/users/${user}/repos?type=source`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'Authorization': 'token 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'
    }
  });

  return repos.json();
}

export { listRepos };