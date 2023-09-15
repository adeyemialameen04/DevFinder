import "./user.css";

const User = ({ user }) => {
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toDateString("en-US");
  };
  return (
    <section>
      <div className="container user__container">
        <div className="top">
          <div className="profile-img-container">
            <img src={user?.avatar_url} alt={`${user?.name} Image`} />
          </div>
          <div className="name">
            <h1>{user?.name}</h1>
            <p>Created at: {formatDate(user?.created_at)}</p>
            <a target="_blank" href={user?.html_url}>
              {user?.login}
            </a>
          </div>
        </div>
        <div className="bio">
          {user?.bio ?? "This user does not have a bio"}
        </div>
        <div className="stats">
          <h3>
            Repos <span>{user?.public_repos}</span>
          </h3>
          <h3>
            Followers <span>{user?.followers}</span>
          </h3>
          <h3>
            Following <span>{user?.following}</span>
          </h3>
        </div>
        <div className="socials"></div>
        {/* <div className="profile-img-container">
          <img src={user?.avatar_url} alt={`${user?.name} Image`} />
        </div>
        <div className="user-details">
          <div className="name">
            <h1>{user?.name}</h1>
            <p>{formatDate(user?.created_at)}</p>
            <a target="_blank" href={user?.html_url}>
              {user?.login}
            </a>
          </div>
          <p className="bio">{user?.bio ?? "This user does not have a bio"}</p>
          <div className="stats">
            <h3>
              Repos <span>{user.public_repos}</span>
            </h3>
            <h3>
              Followers <span>{user?.followers}</span>
            </h3>
            <h3>
              Following <span>{user?.following}</span>
            </h3>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default User;
