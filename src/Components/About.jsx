import React from 'react'

const title='OUR TEAM';
const img='https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg';
const name='heba abualheja';
const id='212465456';
const gmail='hebaabualheja123@gmail.com';
const img1='https://st2.depositphotos.com/3557671/11465/v/950/depositphotos_114656902-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg';
const name1='Zainab hassoun';
const id1='212790745';
const gmail1='zainabhassoun123@gmail.com';

export default function About() {
  return (
    <div>
     
    
    <h1 class="color">{title}</h1>
   
    <div class="row">
      <div class="column">
        <div  class="card" >
          <img src={img} width={150}/>
          <div class="container"   >
            <h2>Name: {name}</h2>
            <p>Id: {id}</p>
            <p>Gmail: {gmail}</p>
          </div>
        </div>
    
      
      <div class="column">
        <div class="card"  >
          <img src={img1} width={150}/>
          <div class="container">
            <h2>name: {name1}</h2>
            <p>Id: {id1}</p>
            <p>Gmail:{gmail1}</p>
           
          </div>
          </div>
        </div>
</div>  </div>
  


    </div>
  );
}