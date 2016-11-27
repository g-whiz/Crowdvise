import { AdviceSeeker, Experience, InvestmentAdvisor, RiskTolerance, User } from './user';

let Advisor1 = {
	id:1,
	firstName:'Trey',
	lastName:'Jasper',
	email : 'Trey@me.com',
	password: 'ilovecats',
	telNo : 12345,
	website : 'Treymoneybags.com',
	reputation:9001,
}
let Advisor2 = {
	id:2,
	firstName:'Gisbert',
	lastName:'Seward',
	email : 'Gisbert@me.com',
	password:'ilovemoney',
	telNo : 987321,
	website : 'Gisbertmoneybags.com',
	reputation:-200,
}
let Advisor3 = {
	id:3,
	firstName:'Troy',
	lastName:'Wooden',
	email : 'Troy@me.com',
	password:'suchpassword',
	telNo : 765-458-3502,
	website : 'Troymoneybags.com',
	reputation:234,
}
let Advisor4 = {
	id:4,
	firstName:'Brian',
	lastName:'Hunt',
	email : 'Brian@me.com',
	password:'muchwow',
	telNo : 704-810-1429,
	website : 'Brianmoneybags.com',
	reputation:234,
}
let Investor1 = {
	id:1,
	firstName:'Florence',
	lastName:'Yoo',
	email : 'Florence@me.com',
	password:'money4me',
	experience: Experience.professionalInvestor,
    numQuestions: 2,
    riskTolerance: RiskTolerance.med,
}
let Investor2 = {
	id:2,
	firstName:'Nathan',
	lastName:'Abbott',
	email : 'Nathan@me.com',
	password:'wowow',
	experience: Experience.noExperience,
    numQuestions: 1,
    riskTolerance: RiskTolerance.low,
}