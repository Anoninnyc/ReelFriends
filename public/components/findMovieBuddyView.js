var FindMovieBuddy = (props) => {

  return (

   <div>

   <h2>Your Potential Movie Buddies</h2>  <br/>
   <div style={{display:'none'}} id='AlreadyReq2'>Youve already sent a request to this user!</div><br/>

   {props.buddies.map(function(buddy){ if (buddy[1]===null){buddy[1]='Nothing to compare'} return (<BuddyEntry buddyfunc={props.buddyfunc} Buddy={buddy[0]} BuddyScore={buddy[1]} /> )})}

     </div>
   

)};

window.FindMovieBuddy = FindMovieBuddy;