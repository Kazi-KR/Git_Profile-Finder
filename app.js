const github=new Github;
const ui=new UI;
const searchUser=document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=>{
    const userText=e.target.value;
    if(userText!==''){
        github.getUser(userText)
        .then(data=>{
            if(data.profileData.message==='Not Found'){
                console.log('Not Found')
                ui.showAlert('User not found','alert alert-danger')
            }else{
                ui.showprofile(data.profileData);
                ui.showRepos(data.repos);
            }
        })
    }
    else{
        //clear profile
        ui.clearProfile();
    }
});