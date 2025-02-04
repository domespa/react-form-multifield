import { useState } from "react";

function App() {
  const [articlesList, setArticlesList] = useState([]);

  const [formData, setFormData] = useState({
    author: "",
    content: "",
    category: "",
  });

  // const articleSubmit = (e) => {
  //   e.preventDefault();

  //   if (articlesList.includes(articleName)) {
  //     alert(`Articolo già presente`);
  //   } else {
  //     setArticlesList((currentState) => [...currentState, articleName]);
  //     setArticleName("");
  //   }
  // };

  // return (
  //   <>
  //     <div className="container">
  //       <h1>LISTA ARTICOLI</h1>
  //       <ul>
  //         {articlesList.map((article, id) => (
  //           <li key={id}>{article}</li>
  //         ))}
  //       </ul>
  //       <hr />
  //       <h1>Aggiungi Articolo</h1>
  //       <form onSubmit={articleSubmit}>
  //         <input
  //           type="text"
  //           value={articleName}
  //           onChange={(e) => setArticleName(e.target.value)}
  //         />
  //         <button type="submit">Invia</button>
  //       </form>
  //     </div>
  //   </>
  // );
}

export default App;
