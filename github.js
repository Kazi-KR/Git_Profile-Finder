class Github{
    constructor(){
        this.client_id='4f7b393b0d58221df875';
        this.client_secret='7b705541bc1552a4a602957fd190e7481e921b4c';
        this.repos_count=10;
        this.repos_sort='create: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const repos=await repoResponse.json();
        console.log(repos);
        return {
          profileData,
          repos
        }
    }
}