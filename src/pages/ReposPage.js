import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function ReposPage() {
  const [reposData, setReposData] = React.useState(null);
  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    axios.get(`https://api.github.com/repositories/${id}`).then(({ data }) => {
      console.log(data);
      setReposData(data);
    });
  }, [id]);

  // const userId = reposData.owner.id;
  return (
    <div>
      {reposData && (
        <div>
          {" "}
          <div>{`Repository name : ${reposData.name}`}</div>
          <Link to={`/users/${reposData.owner.id}`}>
            <div>{`Owner login : ${reposData.owner.login}`}</div>
          </Link>
          <div>{`Description : ${reposData.description}`}</div>
          <div>{`Language : ${reposData.language}`}</div>
          <div>{`Size : ${reposData.size}`}</div>
          <div>{`Visibility : ${reposData.visibility}`}</div>
          <div>{`Created at : ${reposData.created_at}`}</div>
          <div>{`Updated at : ${reposData.updated_at}`}</div>
        </div>
      )}
    </div>
  );
}
