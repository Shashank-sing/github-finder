import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Repos from './Repos'
import GithubContext from '../../context/github/GithubContext'

const User = ({match}) => {

    const githubContext = useContext(GithubContext);

    const {user, loading, getUser, repos, getUserRepos} = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        
        // eslint-disable-next-line
    }, [])

        const { name,
            avatar_url,
            company,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hirable } = user;

        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Go Back</Link>
                Hirable:  {'   '}
                {hirable ? <i classname="fas fa-check text-sucess"></i> : <i className="fas fa-times-circle text-danger"></i>}
                <div className="card grid-2">
                    <div className="all-center">
                        <img className="round-img" alt="user" src={avatar_url} style={{ width: "200px" }}></img>
                        <h1>{name}</h1>
                        {location && <p>
                            Location: {location}
                        </p>}
                    </div>
                    <div>
                        {bio &&
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        }

                        <a href={html_url} className="btn btn-dark my-1"><h4>Visit Github Profile</h4></a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <p>Username: {login}</p>
                                </Fragment>
                                }
                            </li>
                            <li>
                                {company && <Fragment>
                                    <p>Company: {company}</p>
                                </Fragment>
                                }
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <p>Website: {blog}</p>
                                </Fragment>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-light">Following: {following}</div>
                    <div className="badge badge-success">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public gists: {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        )
}

export default User