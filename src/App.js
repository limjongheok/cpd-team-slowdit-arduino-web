import{db,app} from "./config";
import React, {useState, useEffect} from "react";
import { getDatabase, ref, onValue ,set} from "firebase/database";
import styles from './App.module.css'
import music from './mp3/sound.mp3'
import music1 from './mp3/sound1.mp3'
import music2 from './mp3/sound2.mp3'
import music3 from './mp3/sound3.mp3'
import music4 from './mp3/sound4.mp3'


import {doc,getDocs,setDoc,collection} from "firebase/firestore"

function App() {
  const [count, setCount] = useState();
  let au = new Audio(music);
  let au1 = new Audio(music1);
  let au2 = new Audio(music2);
  let au3 = new Audio(music3);
  let au4 = new Audio(music4);
  
  
  const refs = collection(db,"users")
  function start(){
    var random = Math.floor(Math.random()*5)

    if(random == 0){
      au.play();
    }else if(random == 1){
      au1.play();
    }else if(random == 2){
      au2.play();
    }else if(random == 3){
      au3.play();
    }else if(random == 4){
      au4.play();
    }
  }
  const getUsers = async () =>{
    const data = await getDocs(refs);
    console.log(data);
  }
  

  useEffect(() => {
    
    
  
    const database = getDatabase(app)
    const starref = ref(database,'한남대 디자인팩토리/count') // 위치는 맞다 
  
    var data;
  
    onValue(starref,(snapshot)=>{
      data = snapshot.val();
      setCount(data)
      console.log(data)
    })
    console.log(count)

    
  

  },[count])

  useEffect(() => {

    if (navigator.geolocation) {
    
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
        

        var lat = position.coords.latitude; // 위도
        var lon = position.coords.longitude; // 경도
    
        const userref = doc(db,'users','한남대 디자인팩토리');
        setDoc(userref,{lat:lat,lon:lon});

          
          
          
              
        });
      
  } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      console.log("gps 사용 불가")
      
  }
  },[])

  
  return (
    <div className="App">
      <div className={styles.background}><p className={styles.font}>{count}</p></div>

    </div>
  );
}

export default App;
