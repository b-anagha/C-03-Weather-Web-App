import { useState,useEffect } from "react";
import Header from "./components/Header";



function App() {

  const [title , setTitle] = useState("")
  const [container,setContainer] = useState([])
  const [finalKey, setFinalKey] = useState([])



 
    const onSubmit = (e) => {

        e.preventDefault()
        setFinalKey(container)
      

      

    }
        
  useEffect(() => {fetchMe()},[title])

  const fetchMe = () => {
    
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'ENTER KEY',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
  }


  fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/+${title}?exact=false`, options)
      .then(response => {return response.json()})
      .then(data => {setContainer(data.results)})
      .catch(err => console.error(err))
  }

  

  
  return (
    <div className="App">

    <Header />
    <form className="add-form" onSubmit= {onSubmit}>
    <div className="form-control">
            
            <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="Search" className="btn btn-block"/>
    </div>
    </form>
     
  
    {
      finalKey.map((item,index) =>{ 
           
      return(
        <>
        <div key = {index} className="task">
          {console.log(item.primaryImage!==null ? item.primaryImage.url : "#")}
          <p><img src= {item.primaryImage!==null ? item.primaryImage.url : "https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo="} alt = "Movie" style = {{height : 500}}/></p>
          < a href = {`https://www.imdb.com/title/${item.id}/`} style = {{textDecoration: "none"}}><p>{item.titleText.text}</p></a>
          <p>Year of release: {item.releaseYear!==null ? item.releaseYear.year : "Not Given"}</p>
          
        </div>
        
        </>
        )

      })
     }
     </div>
   
  );
}

export default App;
