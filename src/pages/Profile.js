import React, { Fragment, useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContext';
import { Link, useParams } from 'react-router-dom';

export const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const { name: urlName } = useParams();

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, [urlName]);

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: '150px' }} />
              <h1>{name}</h1>
              {Boolean(location) && <p>Местоположение: {location}</p>}
            </div>

            <div className="col">
              {Boolean(bio) && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                target="_blank"
                className="btn btn-dark"
                rel="noreferrer"
              >
                Открыть профиль
              </a>
              <ul>
                {Boolean(login) && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}

                {Boolean(company) && (
                  <li>
                    <strong>Компания: </strong> {company}
                  </li>
                )}

                {Boolean(blog) && (
                  <li>
                    <strong>Website: </strong> {blog}
                  </li>
                )}
              </ul>

              <div className="badge bg-primary">Подписчики: {followers}</div>
              <div className="badge bg-success">Подписан: {following}</div>
              <div className="badge bg-info">Репозитории: {public_repos}</div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      {/*{repos.join()}*/}
    </Fragment>
  );
};
