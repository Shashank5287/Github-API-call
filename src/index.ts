
import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';
let svc = new GithubApiService();
if(process.argv.length <3){
console.log("Please enter correct username")
}
else
{
    let username = process.argv[2];
svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
        let filterRepos = _.take(sortedRepos, 5);
        user.repos = filterRepos;
        console.log(user);
    })
});
}

// svc.getUserInfo('koushikkothagal', (user : User) =>{
//     console.log(user);
// } );
// svc.getRepos('koushikkothagal', (repos : Repo[]) =>{
//     console.log(repos);
// } );