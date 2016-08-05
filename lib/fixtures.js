import { connect, disconnect } from './services/dbServices';
import { TeamModel } from './models';
import Q from 'q';


/// Connect DB
connect();

let promises = [];

promises.push(
	TeamModel.createTeam({ name: 'HTML5'}),
    TeamModel.createTeam({ name: 'IOS'}),
    TeamModel.createTeam({ name: 'BACKEND'}),
    TeamModel.createTeam({ name: 'ANDROID'}),
    TeamModel.createTeam({ name: 'PROJECT MANAGER'}),
    TeamModel.createTeam({ name: 'DISEÑO'}),
    TeamModel.createTeam({ name: 'INFRAESTRUCTURA'})
);

//////////
// DONE //
//////////
Q.all(promises)
    .then(function(){
	       console.log('All done');
})
.catch(function(err){
	console.log(err);
})
.finally(function(){
	disconnect();
})
.done();
