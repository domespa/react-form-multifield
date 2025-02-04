import { useState } from "react";

function App() {
  const [articlesList, setArticlesList] = useState([]);

  const [formData, setFormData] = useState({
    author: "",
    content: "",
    category: "",
  });

  const formField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setArticlesList((currentList) => [...currentList, formData]);

    setFormData({
      author: "",
      content: "",
      category: "",
    });
  };

  // const articleSubmit = (e) => {
  //   e.preventDefault();

  //   if (articlesList.includes(articleName)) {
  //     alert(`Articolo già presente`);
  //   } else {
  //     setArticlesList((currentState) => [...currentState, articleName]);
  //     setArticleName("");
  //   }
  // };

  return (
    <>
      <div className="container">
        <h1>LISTA ARTICOLI</h1>
        <ul>
          {articlesList.map((article, id) => (
            <li key={id}>
              <strong>{article.author}</strong> -{" "}
              <em>
                {article.content} - {article.category}
              </em>
            </li>
          ))}
        </ul>
        <hr />
        <h1>Aggiungi Articolo</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Inserisci il titolo"
            value={formData.author}
            onChange={(e) => formField("author", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Inserisci il contenuto"
            value={formData.content}
            onChange={(e) => formField("content", e.target.value)}
          />
          <br />
          <select
            value={formData.category}
            onChange={(e) => formField("category", e.target.value)}
          >
            <option>Scegli un opzione</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="UI/UX">UI/UX</option>
          </select>
          <button type="submit">Invia</button>
        </form>
      </div>
    </>
  );
}

export default App;
