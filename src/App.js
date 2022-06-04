import firebase from "./config";
import React, {useState, useEffect} from "react";
import { getDatabase, ref, onValue ,set} from "firebase/database";
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState();
  

  useEffect(() => {
    

    const database = getDatabase(firebase)
    const starref = ref(database,'한남대 디자인팩토리/count') // 위치는 맞다 
    
    var data;
    onValue(starref,(snapshot)=>{
      data = snapshot.val();
      setCount(data)
      console.log(data)
    })
    console.log(count)

    
  

  },[count])

  
  return (
    <div className="App">
      <div className={styles.background}><p className={styles.font}>{count}</p></div>
      
    
    </div>
  );
}

export default App;
