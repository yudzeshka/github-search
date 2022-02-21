import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ReposPage() {
  const [reposData, setReposData] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`https://api.github.com/repositories/${id}`).then(({ data }) => {
      setReposData(data);
    });
  }, [id]);

  return (
    <div>
      {reposData && (
        <div className=" w-screen h-screen flex  justify-center items-center">
          <div className="border truncate rounded-md flex flex-col items-start p-10">
            <div>{`Repository name : ${reposData.name}`}</div>
            <Link to={`/users/${reposData.owner.id}`}>
              <div className="hover:bg-violet-100">{`Owner login : ${reposData.owner.login}`}</div>
            </Link>
            <div>{`Description : ${reposData.description}`}</div>
            <div>{`Language : ${reposData.language}`}</div>
            <div>{`Size : ${reposData.size}`}</div>
            <div>{`Visibility : ${reposData.visibility}`}</div>
            <div>{`Created at : ${reposData.created_at}`}</div>
            <div>{`Updated at : ${reposData.updated_at}`}</div>
          </div>
        </div>
      )}
    </div>
  );
}
